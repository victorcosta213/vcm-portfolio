import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Space, Typography, Segmented, theme, Grid } from "antd";
import { useTheme } from "../../app/providers/ThemeProvider";
import { BulbOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

const { Header } = Layout;

const items = [
  { key: "/", label: "Home" },
  { key: "/projects", label: "Projetos" },
  { key: "/about", label: "Sobre" },
  { key: "/contact", label: "Contato" },
];

export default function Navbar() {
  const { token } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme: t, setTheme } = useTheme();
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const segKey =
    location.pathname === "/"
      ? "/"
      : `/${location.pathname.split("/")[1]}`;

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: token.colorBgElevated,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          height: isMobile ? 56 : 64,
          gap: isMobile ? 8 : 16,
        }}
      >
        <Link to="/" style={{ marginRight: 8, whiteSpace: "nowrap", textDecoration: "none" }}>
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              fontSize: isMobile ? 18 : undefined,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: token.colorPrimary }}>Victor</span> Portfólio
          </Typography.Title>
        </Link>

        <Menu
          mode="horizontal"
          selectedKeys={[segKey]}
          onClick={(e) => navigate(e.key)}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            borderBottom: "none",
            background: "transparent",
          }}
          overflowedIndicator={<span style={{ fontSize: 18, lineHeight: 1 }}>⋯</span>}
        />

        <Space>
          <Segmented
            size={isMobile ? "small" : "middle"}
            options={
              isMobile
                ? [
                    { value: "light", icon: <SunOutlined /> },
                    { value: "dark", icon: <MoonOutlined /> },
                    { value: "system", icon: <BulbOutlined /> },
                  ]
                : [
                    { label: "Claro", value: "light", icon: <SunOutlined /> },
                    { label: "Escuro", value: "dark", icon: <MoonOutlined /> },
                    { label: "Sistema", value: "system", icon: <BulbOutlined /> },
                  ]
            }
            value={t}
            onChange={(v) => setTheme(v as any)}
            style={{ whiteSpace: "nowrap" }}
          />
        </Space>
      </div>
    </Header>
  );
}
