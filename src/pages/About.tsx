import {
  Typography,
  Row,
  Col,
  Card,
  Tag,
  Space,
  Rate,
  Button,
  Divider,
  Timeline,
  List,
  Avatar,
  theme,
  App,
  Statistic,
  Image,
} from "antd";
import {
  VideoCameraOutlined,
  CoffeeOutlined,
  EnvironmentOutlined,
  CompassOutlined,
  SmileOutlined,
  FireOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PlayCircleOutlined,
  AimOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

import HeroTrip from "../assets/hero-dev.jpg";
import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Portrait from "../assets/minha_foto.jpg";

const { Title, Paragraph, Text } = Typography;

function GalleryImage({
  src,
  alt,
  height = 340,
  radius = 12,
}: {
  src: string;
  alt: string;
  height?: number;
  radius?: number;
}) {
  const [fit, setFit] = useState<"cover" | "contain">("cover");
  return (
    <div
      style={{
        width: "100%",
        height,
        borderRadius: radius,
        overflow: "hidden",
        background: "rgba(0,0,0,0.05)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => {
          const img = e.currentTarget;
          const ratio = img.naturalWidth / img.naturalHeight;
          if (ratio < 0.9 || ratio > 1.8) setFit("contain");
          else setFit("cover");
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: fit,
          objectPosition: "center",
          display: "block",
          background: fit === "contain" ? "rgba(0,0,0,0.06)" : "transparent",
        }}
      />
    </div>
  );
}

export default function About() {
  const { token } = theme.useToken();
  const { message } = App.useApp();

  const galleryHeight = "clamp(150px, 22vw, 220px)";

  const filmesESeries = useMemo(
    () => [
      "Blade Runner 2049",
      "Mr. Robot",
      "The Social Network",
      "Dark",
      "O Gambito da Rainha",
      "Black Mirror",
      "Severance",
      "Poderoso Chefão",
      "Os Vingadores",
      "Batman: O Cavaleiro das Trevas",
      "Lúcifer",
    ],
    []
  );
  const restaurantes = useMemo(
    () => [
      "Entre Amigos O Bode",
      "JK Steak",
      "Leitão",
      "Kanpai",
      "Udon",
      "Yugo",
      "Passira",
      "Entre Amigos Praia",
    ],
    []
  );
  const destinos = useMemo(
    () => [
      "Cuiabá",
      "João Pessoa - PB",
      "Serrambi - PE",
      "Porto de Galinhas - PE",
      "Gravatá - PE",
      "Praias de Alagoas",
    ],
    []
  );

  const sortear = (lista: string[]) => lista[Math.floor(Math.random() * lista.length)];
  const onDice = (tipo: "filme" | "restaurante" | "destino") => {
    const mapa = { filme: filmesESeries, restaurante: restaurantes, destino: destinos } as const;
    message.success({
      content: `Sugestão de ${tipo}: ${sortear(mapa[tipo])}`,
      icon: <SmileOutlined />,
      duration: 2.5,
    });
  };

  const statCardStyle: React.CSSProperties = { borderRadius: 14, height: "100%" };

  return (
    <>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={14}>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <Title style={{ marginBottom: 8, fontSize: "clamp(28px, 6vw, 44px)" }}>Sobre mim</Title>
            <Space align="center" size="large" style={{ marginBottom: 12, flexWrap: "wrap" }}>
              <Avatar src={Portrait} size={64} />
              <div>
                <Text strong>Victor Costa</Text>
                <Paragraph type="secondary" style={{ margin: 0 }}>
                  Dev Full-Stack • Recife, PE
                </Paragraph>
              </div>
            </Space>
            <Paragraph type="secondary" style={{ marginBottom: 16, maxWidth: 760 }}>
              Sou formado em <strong>Sistemas para Internet (UNICAP-PE)</strong> e movido por tecnologia, cinema &
              séries, viagens e boas experiências gastronômicas. Gosto de construir software com personalidade:
              interfaces cuidadosas, performance, acessibilidade e um backend sólido para aguentar crescimento.
            </Paragraph>
            <Space size={[8, 8]} wrap>
              <Tag icon={<VideoCameraOutlined />} color="blue">
                Cinema & Séries
              </Tag>
              <Tag icon={<EnvironmentOutlined />} color="cyan">
                Viajar
              </Tag>
              <Tag icon={<CoffeeOutlined />} color="geekblue">
                Bons restaurantes
              </Tag>
              <Tag icon={<CompassOutlined />} color="purple">
                Aventura
              </Tag>
              <Tag icon={<FireOutlined />} color="volcano">
                Projetos com propósito
              </Tag>
            </Space>
            <Space style={{ marginTop: 16 }} size="middle" wrap>
              <Button icon={<GithubOutlined />} href="https://github.com/victorcosta213" target="_blank">
                GitHub
              </Button>
              <Button
                icon={<LinkedinOutlined />}
                href="https://www.linkedin.com/in/victor-medeiros-14295a1b1"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button type="primary" icon={<RocketOutlined />} href="/projects">
                Ver projetos
              </Button>
            </Space>
          </motion.div>
        </Col>

        <Col xs={24} md={10}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "transparent",
              boxShadow: "none",
            }}
            styles={{ body: { padding: 0 } }}
            cover={
              <div
                style={{
                  width: "100%",
                  height: 300,
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "transparent",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={HeroTrip}
                  alt="Viagens, trabalho e criação"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            }
          />
        </Col>
      </Row>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col xs={12} md={6}>
          <Card style={statCardStyle}>
            <Statistic title="Experiência em projetos" value={6} suffix="+ projetos" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card style={statCardStyle}>
            <Statistic title="Stacks dominantes" value={4} suffix="+ stacks" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card style={statCardStyle}>
            <Statistic title="Café por sprint" value={12} suffix="/semana ☕" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card style={statCardStyle}>
            <Statistic title="Commits com propósito" value={100} suffix="%" />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title="Meu estilo" bordered={false} style={{ borderRadius: 14, height: "100%" }}>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  title: "Cinema & Séries",
                  desc: "Eu curto boas histórias, fotografia bonita e trilha marcante.",
                  rate: 5,
                  icon: <PlayCircleOutlined />,
                },
                {
                  title: "Viagens",
                  desc: "Aventura com planejamento: explorar, aprender e registrar.",
                  rate: 5,
                  icon: <EnvironmentOutlined />,
                },
                {
                  title: "Gastronomia",
                  desc: "Cozinha autoral, ingredientes locais e cafés especiais.",
                  rate: 4.5,
                  icon: <CoffeeOutlined />,
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size="large" style={{ background: token.colorPrimary }} icon={item.icon} />}
                    title={<Text strong>{item.title}</Text>}
                    description={
                      <>
                        <Paragraph style={{ marginBottom: 4 }}>{item.desc}</Paragraph>
                        <Rate allowHalf defaultValue={item.rate} disabled />
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title="Jornada"
            bordered={false}
            style={{ borderRadius: 14, height: "100%" }}
            extra={<Tag color="processing">sempre aprendendo</Tag>}
          >
            <Timeline
              items={[
                {
                  color: "blue",
                  children: (
                    <>
                      <Text strong>Formação — Sistemas para Internet (UNICAP-PE)</Text>
                      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                        Fundamentos sólidos, projetos e base para o full-stack.
                      </Paragraph>
                    </>
                  ),
                },
                {
                  color: "green",
                  children: (
                    <>
                      <Text strong>Primeiros projetos reais</Text>
                      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                        Do front ao back, entregando valor e aprendendo com usuários.
                      </Paragraph>
                    </>
                  ),
                },
                {
                  color: "purple",
                  children: (
                    <>
                      <Text strong>Produtos com personalidade</Text>
                      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                        UX acessível, performance e backend robusto.
                      </Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card
        title="Alguns momentos"
        bordered={false}
        style={{ borderRadius: 14 }}
        extra={<Tag icon={<SmileOutlined />} color="success">vida em movimento</Tag>}
      >
        <Image.PreviewGroup>
          <Row gutter={[12, 12]}>
            {[Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6].map((img, idx) => (
              <Col xs={12} sm={8} key={idx}>
                <div
                  style={{
                    width: "100%",
                    height: galleryHeight,
                    borderRadius: 12,
                    overflow: "hidden",
                    background: token.colorFillTertiary,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Image
                    src={img}
                    alt={`Galeria ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>
      </Card>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: 14 }} title="Sorteio de filme/série" extra={<Tag>descubra</Tag>}>
            <Paragraph type="secondary">Sem ideia? Deixa o destino escolher.</Paragraph>
            <Button block onClick={() => onDice("filme")} icon={<PlayCircleOutlined />}>
              Sortear agora
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: 14 }} title="Sorteio de restaurante" extra={<Tag>fome?</Tag>}>
            <Paragraph type="secondary">Pra onde vamos hoje?</Paragraph>
            <Button block onClick={() => onDice("restaurante")} icon={<CoffeeOutlined />}>
              Sortear agora
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: 14 }} title="Sorteio de destino" extra={<Tag>aventura</Tag>}>
            <Paragraph type="secondary">Próxima viagem em mente?</Paragraph>
            <Button block onClick={() => onDice("destino")} icon={<EnvironmentOutlined />}>
              Sortear agora
            </Button>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card style={{ borderRadius: 14, textAlign: "center", background: token.colorBgElevated }} bordered={false}>
        <Title level={3} style={{ marginBottom: 8 }}>
          Bora construir algo com personalidade?
        </Title>
        <Paragraph type="secondary" style={{ marginBottom: 16 }}>
          Se a ideia é tirar um projeto do papel — e fazer direito —, podemos construir isso juntos.
        </Paragraph>
        <Space size="middle" wrap>
          <Button type="primary" size="large" href="/projects">
            Ver projetos
          </Button>
          <Button size="large" href="/contact" icon={<AimOutlined />}>
            Fale comigo
          </Button>
        </Space>
      </Card>
    </>
  );
}
