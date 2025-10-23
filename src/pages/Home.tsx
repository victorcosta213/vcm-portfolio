import { Button, Space, Typography, theme, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero-dev.jpg"; // <- sua imagem aqui

export default function Home() {
  const { token } = theme.useToken();


  const isDark = token.colorBgLayout === token.colorBgContainer;
  const lightGradient = `radial-gradient(1200px 600px at 10% 0%, rgba(47,111,235,0.10), transparent 50%),
                         radial-gradient(800px 400px at 90% 10%, rgba(124,108,240,0.08), transparent 45%)`;

  return (
    <div
      style={{
        paddingTop: 32,
        paddingBottom: 48,
        background: isDark ? "transparent" : lightGradient,
      }}
    >
      <div className="container">
        <Row gutter={[24, 24]} align="middle">
  
          <Col xs={24} md={14}>
            <Card bordered={false} style={{ background: "transparent" }}>
              <Typography.Text type="secondary">Olá, eu sou Victor</Typography.Text>

              <Typography.Title
                style={{
                  marginTop: 8,
                  fontSize: "clamp(28px, 6vw, 48px)",
                  lineHeight: 1.15,
                }}
              >
                Desenvolvedor Full-Stack focado em soluções limpas e eficientes.
              </Typography.Title>

              <Typography.Paragraph type="secondary" style={{ marginTop: 12, maxWidth: 740 }}>
                Sou desenvolvedor e formado em <strong>Sistemas para Internet (UNICAP-PE)</strong>.
                Sempre gostei de desmontar as coisas, entender como funcionam e reconstruir melhor.
                Hoje transformo isso em produtos digitais: do protótipo ao deploy, com foco em
                clareza, velocidade e manutenibilidade.
              </Typography.Paragraph>

              <Typography.Paragraph type="secondary" style={{ marginTop: 8, maxWidth: 740 }}>
                Trabalho do <em>front</em> ao <em>back</em>: interfaco com <strong>React</strong> e{" "}
                <strong>Ant Design</strong>, APIs REST com <strong>Node.js/Express</strong> ou{" "}
                <strong>Spring Boot</strong>, dados em <strong>PostgreSQL</strong> ou{" "}
                <strong>Firebase/Firestore</strong> e deploy em cloud. Meus pilares são experiência
                do usuário, performance e código limpo — com testes, versionamento organizado e
                documentação objetiva.
              </Typography.Paragraph>

              <div style={{ marginTop: 12 }}>
                <Typography.Text strong>Stack & práticas:</Typography.Text>
                <ul style={{ margin: "8px 0 0 18px" }}>
                  <li>
                    <Typography.Text>
                      <strong>Frontend:</strong> React, Ant Design, Vite, acessibilidade e UX
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text>
                      <strong>Backend:</strong> Node.js/Express e/ou Spring Boot, REST, Auth/JWT
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text>
                      <strong>Dados & Cloud:</strong> PostgreSQL, Firebase/Firestore, integrações e automações
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text>
                      <strong>Qualidade:</strong> testes, versionamento organizado, CI/CD e docs
                    </Typography.Text>
                  </li>
                </ul>
              </div>

              <Space size="middle" style={{ marginTop: 20 }}>
                <Link to="/projects">
                  <Button type="primary" size="large">Ver projetos</Button>
                </Link>
                <Link to="/contact">
                  <Button size="large">Fale comigo</Button>
                </Link>
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={10}>
            <Card
              bordered={false}
              style={{
                height: "100%",
                minHeight: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isDark ? token.colorBgElevated : "#ffffffaa",
                backdropFilter: "blur(2px)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 560,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                }}
              >
                <img
                  src={HeroImg}
                  alt="Ilustração de desenvolvimento de software e projetos do portfólio"
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
