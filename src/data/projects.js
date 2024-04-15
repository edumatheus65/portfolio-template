import kenzieHubImg from "../assets/Kbimage.png";
import FashionStoreImg from "../assets/FsImage.png";
import signContactImg from "../assets/signContactImage.png";

export const projects = [
  {
    id: 1,
    name: "Fashin Store",
    description: "E commerce",
    applicationLink: "https://fashion-store-navy.vercel.app/",
    repositoryLink: "https://github.com/edumatheus65/fashion-store",
    image: FashionStoreImg,
    techs: ["React Js", "React-Router-DOM", "Zod", "React-Hook-Form"],
  },
  {
    id: 2,
    name: "Sign Contact",
    description: "Cadastro de clientes/contatos",
    applicationLink:
      "https://sign-contact-front-cq58zg1is.vercel.app/",
    repositoryLink: "https://github.com/edumatheus65/sign-contact-front-end",
    image: signContactImg,
    techs: [
      "React Js",
      "Node Js",
      "TypeScript",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    name: "Kenzie Hub",
    description: "Cadastro de desenvolvedores/tecnologias",
    applicationLink: "https://developers-hub-seven.vercel.app/",
    repositoryLink: "https://github.com/edumatheus65/developers_hub",
    image: kenzieHubImg,
    techs: [
      "React Js",
      "React-Router-DOM",
      "React-Hook-Form",
      "Axios",
      "Zod",
      "React-Toastify",
    ],
  },   
];
