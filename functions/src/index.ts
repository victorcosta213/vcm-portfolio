import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

admin.initializeApp();

const SENDGRID_KEY = defineSecret("SENDGRID_KEY");
const MAIL_TO = defineSecret("MAIL_TO");
const MAIL_FROM = defineSecret("MAIL_FROM");

export const onContactCreated = onDocumentCreated(
  {
    document: "contacts/{id}",
    region: "us-central1",
    secrets: [SENDGRID_KEY, MAIL_TO, MAIL_FROM],
    retry: false, 
  },
  async (event) => {
  
    if (!event.data) {
      console.error("Sem event.data no trigger");
      return;
    }

    const data = event.data.data() as {
      name: string;
      email: string;
      subject?: string;
      message: string;
    };

   
    if (!data?.name || !data?.email || !data?.message) {
      console.error("Payload inválido:", data);
      return;
    }

  
    const key = SENDGRID_KEY.value();
    const to = MAIL_TO.value();
    const from = MAIL_FROM.value();

    if (!key || !to || !from) {
      console.error("Faltando secret(s):", {
        hasKey: !!key,
        hasTo: !!to,
        hasFrom: !!from,
      });
      return;
    }

    sgMail.setApiKey(key);

    const subject =
      (data.subject && data.subject.trim()) || "Novo contato do portfólio";

    const html = `
      <h2>Novo contato recebido</h2>
      <p><b>Nome:</b> ${data.name}</p>
      <p><b>E-mail:</b> ${data.email}</p>
      <p><b>Assunto:</b> ${subject}</p>
      <p><b>Mensagem:</b></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${data.message}</pre>
    `;

    try {
      const [resp] = await sgMail.send({
        to,
        from, 
        subject,
        html,
        text: `Nome: ${data.name}\nE-mail: ${data.email}\nAssunto: ${subject}\n\n${data.message}`,
        mailSettings: {
          sandboxMode: { enable: false },
        },
      });

      console.log("E-mail enviado", {
        status: resp?.statusCode,
        headersSubset: {
          "x-message-id": resp?.headers?.["x-message-id"],
        },
      });
    } catch (err: any) {
    
      console.error("Falha ao enviar e-mail", {
        message: err?.message,
        code: err?.code,
        responseStatus: err?.response?.statusCode,
        responseBody: err?.response?.body,
      });
      
    }
  }
);
