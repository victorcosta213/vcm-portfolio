import { useState } from "react";
import { Card, Form, Input, Button, Row, Col, Typography, message, theme } from "antd";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../app/firebase";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { token } = theme.useToken();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      await addDoc(collection(db, "contacts"), {
        name: values.name,
        email: values.email,
        subject: values.subject || "",
        message: values.message,
        createdAt: serverTimestamp(),
      });
      message.success("Mensagem enviada! Vou te responder em breve.");
      (document.getElementById("contact-form") as HTMLFormElement)?.reset();
    } catch (e) {
      console.error(e);
      message.error("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 32, paddingBottom: 48 }}>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card bordered={false} style={{ background: "transparent" }}>
              <Title style={{ fontSize: "clamp(28px, 6vw, 40px)", marginBottom: 8 }}>
                Fale comigo
              </Title>
              <Paragraph type="secondary" style={{ marginBottom: 16, maxWidth: 600 }}>
                Curtiu o que viu? Me manda uma mensagem — ideias, projetos ou só um oi.
              </Paragraph>

              <Form
                id="contact-form"
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                style={{ maxWidth: 620 }}
              >
                <Form.Item
                  label="Seu nome"
                  name="name"
                  rules={[{ required: true, message: "Informe seu nome" }]}
                >
                  <Input placeholder="Seu nome" />
                </Form.Item>

                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    { required: true, message: "Informe seu e-mail" },
                    { type: "email", message: "E-mail inválido" },
                  ]}
                >
                  <Input placeholder="voce@email.com" />
                </Form.Item>

                <Button
                  type="primary"
                  size="large"
                  href="https://wa.me/5581995139021?text=Quero%20falar%20sobre%20o%20portf%C3%B3lio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale comigo
                </Button>
              </Form>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{
                background: token.colorFillTertiary,
                borderRadius: 16,
                overflow: "hidden",
                height: "100%",
                minHeight: 320,
              }}
            >
              <div style={{ padding: 16 }}>
                <Title level={4} style={{ marginTop: 0 }}>
                  Como funciona
                </Title>
                <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                  Seu contato é salvo com segurança e eu recebo um e-mail automático.
                </Paragraph>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>Validação de campos e feedback instantâneo</li>
                  <li>Armazenamento no Firestore</li>
                  <li>Clique no Botão para Falar comigo</li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
