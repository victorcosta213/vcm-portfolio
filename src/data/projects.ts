import DFDImg from "../assets/DFD.png";
import EstoqueImg from "../assets/almoxarifado.png";  
//import LicinautaImg from "../assets/licinauta.png";  

export type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  stack: string[];
  cover: string;          
  demo?: string;
  repo?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "DFD",
    title: "DFD – Gerador de Documentos",
    description:
      "Plataforma com o objetivo de automatizar o preenchimento de documentos.",
    year: "2025",
    stack: ["React", "Ant Design", "Firebase", "API - Python"],
    cover: DFDImg, 
    demo: "https://dfd-frontend.vercel.app/",
    repo: "https://github.com/victorcosta213/dfd-frontend",
    highlights: ["Api de Input", "Edição Rápida"],
  },
  {
    id: "licinauta",
    title: "Licinauta — Dashboard de Licitações",
    description:
      "Monitoramento de processos licitatórios (CRT-03): filtros, status, relatórios e exportação.",
    year: "2025",
    stack: ["React", "Firebase", "Ant Design"],
    cover: EstoqueImg, 
    highlights: ["Gráficos e Gantt", "Filtros avançados", "Exportação PDF/Excel"],
  },
  {
    id: "estoque",
    title: "Almoxarifado",
    description:
      "Web app para controle de entradas/saídas, alerta de estoque baixo e importação de planilhas para ajudar na gestão do Almoxarifado.",
    year: "2025",
    stack: ["React", "Firebase", "Bootstrap"],
    demo: "https://almoxarifado-flame.vercel.app/",
    repo: "https://github.com/victorcosta213/Almoxarifado",
    cover: EstoqueImg, 
    highlights: ["Importar .xlsx", "Alertas", "Relatórios rápidos"],
  },
];
