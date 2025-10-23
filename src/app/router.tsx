import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../components/layout/Navbar";

const { Content, Footer } = Layout;

export default function Router() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content>
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Victor – Portfólio
      </Footer>
    </Layout>
  );
}
