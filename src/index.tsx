import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

admin.initializeApp();
const db = admin.firestore();

const SENDGRID_KEY = functions.config().sendgrid.key as string;
const MAIL_TO = (functions.config().mail.to as string) || "seu-email@exemplo.com";
const MAIL_FROM = (functions.config().mail.from as string) || "contato@seu-dominio.com";

sgMail.setApiKey(SENDGRID_KEY);

export const onContactCreated = functions
  .region("us-central1")
  .firestore.document("contacts/{id}")
  .onCreate(async (snap) => {
    const data = snap.data() as {
      name: string;
      email: string;
      subject?: string;
      message: string;
      createdAt?: admin.firestore.FieldValue;
    };

    const subject = data.subject && data.subject.trim() ? data.subject : "Novo contato do portfólio";
    const html = `
      <h2>Novo contato recebido</h2>
      <p><b>Nome:</b> ${data.name}</p>
      <p><b>E-mail:</b> ${data.email}</p>
      <p><b>Assunto:</b> ${subject}</p>
      <p><b>Mensagem:</b></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${data.message}</pre>
    `;

    try {
      await sgMail.send({
        to: MAIL_TO,
        from: MAIL_FROM,
        subject,
        html,
      });
      return;
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      await snap.ref.update({ mailError: true });
      return;
    }
  });
