import { Row, Col, Typography } from "antd";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Typography.Title>Projetos</Typography.Title>
      <Typography.Paragraph type="secondary">
        Uma seleção de trabalhos que representam minhas habilidades e processo.
      </Typography.Paragraph>

      <Row gutter={[16, 16]}>
        {projects.map((p) => (
          <Col key={p.id} xs={24} sm={12} lg={8}>
            <ProjectCard project={p} />
          </Col>
        ))}
      </Row>
    </>
  );
}
