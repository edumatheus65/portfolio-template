import kenzieHubImg from "../assets/Kbimage.png";
import FashionStoreImg from "../assets/FsImage.png";
import restaurantApiImg from "../assets/restaurantApi.jpg";
import signContactImg from "../assets/signContactImage.png";

export const projects = [
  {
    id: 1,
    name: "Fashion Store",
    description: "Controle de estoque",
    applicationLink: "https://grupo7-fashion-store-two.vercel.app/",
    repositoryLink: "https://github.com/bervalim/fashion-store",
    image: FashionStoreImg,
    techs: ["React Js", "React-Router-DOM", "Zod", "React-Hook-Form"],
  },
  {
    id: 2,
    name: "Sign Contact",
    description: "Cadastro de clientes/contatos",
    applicationLink:
      "https://desafio-fullstack-front-end-ber-valim.vercel.app/",
    repositoryLink: "https://github.com/bervalim/sign-contact-front-end",
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
    applicationLink: "https://m3-s4-entrega-kenzie-hub-bervalim.vercel.app/",
    repositoryLink: "https://github.com/bervalim/developers_hub",
    image: kenzieHubImg,
    techs: ["React Js", "Javascript", "React-Router-DOM", "React-Hook-Form"],
  },
  {
    id: 4,
    name: "Restaurant API",
    description: "Api para reservas em restaurantes",
    applicationLink: "https://github.com/bervalim/RestaurantAPI",
    repositoryLink: "https://github.com/bervalim/RestaurantAPI",
    image: restaurantApiImg,
    techs: ["Node Js", "TypeScript", "Express.js", "TypeORM", "PostgreSQL"],
  },
];
