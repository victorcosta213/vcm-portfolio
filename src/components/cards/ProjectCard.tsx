import { Card, Tag, Space, Button, Typography } from "antd";
import type { Project } from "../../data/projects";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Card
        hoverable
        cover={
          <img
            alt={project.title}
            src={project.cover}
            style={{ objectFit: "cover", aspectRatio: "16/9" as any }}
          />
        }
      >
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {project.title}
            </Typography.Title>
            <Tag>{project.year}</Tag>
          </Space>

          <Typography.Paragraph type="secondary" style={{ marginBottom: 8 }}>
            {project.description}
          </Typography.Paragraph>

          <Space wrap>
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </Space>

          {project.highlights && project.highlights.length > 0 && (
            <ul style={{ marginTop: 8, paddingInlineStart: 16 }}>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <Typography.Text>{h}</Typography.Text>
                </li>
              ))}
            </ul>
          )}

          <Space style={{ marginTop: 8 }}>
            {project.demo && (
              <Button href={project.demo} target="_blank" icon={<LinkOutlined />}>
                Demo
              </Button>
            )}
            {project.repo && (
              <Button href={project.repo} target="_blank" icon={<GithubOutlined />}>
                Código
              </Button>
            )}
          </Space>
        </Space>
      </Card>
    </motion.div>
  );
}
