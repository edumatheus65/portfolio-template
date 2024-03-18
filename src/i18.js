import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      BemVindo: "Bem-vindo ao meu portfólio",
      Sobre: "Sobre",
      Tecnologias: "Tecnologias",
      Projetos: "Projetos",
      Contato: "Contato",
      Apresentacao:
        "Um desenvolvedor full stack e entusiasta por tecnologia...Conheça os meus projetos abaixo:",
      SobreMim: "Sobre mim",
      SaibaMais: "Saiba Mais",
      QuemSou:
        "Interessado por tecnologia desde pequeno, atualmente estou em transição de carreira para o desenvolvimento de software . Acredito que a tecnologia tem o poder de transformar o mundo, trazendo acessibilidade, disrupção e evolução para todos, dessa forma fico entusiasmado em fazer parte dessa transformação. Possuo experiência na construção de projetos full stack e familiaridade com conceitos de reatividade, autenticação, autorização, construção de documentação de APIs com swagger, e desenvolvimento de aplicações em linguagem single-thread, Vivências em utilização de Metodologias ágeis, como dailies ,1:1 e sprints.",
      controleEstoque: "Controle de estoque de e-commerce",
      cadastroClient: "Cadastro de clientes/contatos",
      cadastroDevs: "Cadastro de desenvolvedores/tecnologia",
      restaurantApi: "Api para reservas em restaurantes",
      direitos: "Todos os direitos reservados",
      project1Description:
        "Neste projeto, criei um sistema de controle de estoque para e-commerce de roupas, com funcionalidades para administradores e usuários, desenvolvi  telas de cadastro, login, cadastros de produtos e telas de produtos específicos",
      project2Description:
        "Nesta aplicação de cadastro de clientes e contatos, consumi uma API, de minha autoria. No front-end, desenvolvi uma tela de cadastro de cliente, tela de login e uma dashboard onde o cliente é capaz de gerenciar os seus contatos (CRUD)",
      project3Description:
        "Com esta aplicação, tive por objetivo desenvolver uma dashboard para desenvolvedores com as features de cadastro e login. Nesta dashboard, era possível que o desenvolvedor cadastrasse,editasse e deletasse as suas tecnologias.",
      project4Description:
        "Esta API REST é responsável por gerenciar os serviços do restaurante. Através do aplicativo é possível cadastrar restaurantes e clientes interessados ​​em fazer reservas em restaurantes. Além disso, você pode fazer uma reserva e consultar os respectivos horários disponíveis na base de dados do restaurante.",
      project5Description:
        "Esta aplicação tem a funcionalidade de gerenciar gastos e cadastrar entradas e saídas.Nesta implementação, aperfeiçoei os conceitos de componentização,estados e renderização dinâmica.Com o formulário, criei um estado para abrigar as transações e, em seguida, criei um estado para abrigar as transações e funções para fazer a adição / ou subtração de valores",
      project6Description:
        "Esta aplicação tem a funcionalidade de acessar uma lista de produtos, provenientes de uma API e simular um carrinho de compras com React. Neste projeto, assimilei os conceitos de axios,Ciclos de vida dos componentes,persistências dos dados do carrinho com localStorage,Estados e UseEffect",
      project7Description:
        "Esta API REST é responsável por cadastrar clientes que podem ter muitos contatos associados.Cada cliente pode ter apenas um e-mail e telefone, enquanto cada contato pode ter vários e-mails e telefones",
      project8Description:
        "Esta API REST é responsável por fazer o gerenciamento de usuários e os respectivos cursos em que estão matriculados.Nesta apicação, aperfeiçoei os concentos de autenticação e autorização,bem como de serialização de dados.",
      project9Description:
        "Neste projeto,tive por objetivo desenvolver uma rede social para pets. Contruí 3 telas: login,cadastro e dashboard.Dentro da dashboard, o usuário é capaz de publicar,editar e excluir um post.Com esta aplicação, enriqueci os meus conhecimentos a respeito de consumo de APIs,autenticação e autorização.",
      project10Description:
        "Neste projeto,tive por objetivo desenvolver uma rede social simplificada.Os posts foram renderizados dinamicamento com DOM.Neste projeto pude aprofundar os conceitos de renderização dinâmica e responsividade.",
      project11Description:
        "Nesta aplicação,desenvolvi uma loja virtual de discos chamada Open Music. Nela, o usuário poderá filtrar por categoria musical e preço máximo dos produtos que ele quer visualizar, além disso, poderá selecionar o tema de interface visual que mais lhe agrada.Com este projeto,enriqueci os meus conhecimentos a respeito de CSS, métodos de array e persistência de dados no localstorage. ",
      project12Description:
        "Nesta aplicação,desenvolvi uma funcionalidade que é capaz de fazer consultas ao banco de dados da API do GitHub,buscando por um usuário específico e exibindo em tela os repositórios públicos deste usuário.Caso o usuário não seja encontrado, uma tela de usuário não encontrado deve ser exibida. ",
      project13Description:
        "Esta API Rest foi desenvolvida com intuito de gerenciar cursos e aulas de uma escola de modalidade EAD.",
      Aplicacao: "Aplicação",
      Repositorio: "Repositório",
      Local: "Onde moro?",
      Download: "Baixar Currículo",
      Contato: "Entrar em Contato",
      VerDetalhes: "Ver detalhes",
      Detalhes: "Detalhes do Projeto",
    },
  },
  en: {
    translation: {
      BemVindo: "Welcome to my portfolio",
      Sobre: "About Me",
      Tecnologias: "Stacks",
      Projetos: "Projects",
      SaibaMais: "Know more",
      Contato: "Contact",
      Apresentacao:
        "A full stack developer and technology enthusiast... Discover my projects below",
      SobreMim: "About me",
      QuemSou:
        "Interested in technology since I was a kid, I'm currently transitioning my career into software development. I believe that technology has the power to transform the world, bringing accessibility, disruption and evolution to everyone, so I am excited to be part of this transformation. I have experience in building full stack projects and familiarity with concepts of reactivity, authentication, authorization, building API documentation with swagger, and developing applications in single-thread language, Experience in using agile methodologies, such as dailies, 1:1 and sprints.",
      controleEstoque: "Inventory control",
      cadastroClient: "Customer/contact registration",
      cadastroDevs: "Developer/technology registration",
      restaurantApi: "API for restaurant reservations",
      direitos: "All rights reserved",
      project1Description:
        "In this project, I created an inventory control system for clothing e-commerce, with features for administrators and users, I developed registration screens, login screens, product registrations and specific product screens",
      project2Description:
        "In this application for registering customers and contacts, I used an API of my own creation. On the front-end, I developed a customer registration screen, login screen and a dashboard where the customer is able to manage their contacts (CRUD)",
      project3Description:
        "With this application, I aimed to develop a dashboard for developers with registration and login features. In this dashboard, it was possible for the developer to register, edit and delete their technologies.",
      project4Description:
        "This REST API is responsible for managing restaurant services. Through the application, it is possible to register restaurants and customers interested in making reservations at restaurants. In addition, you can make a reservation and check the respective available times in the restaurant's database.",
      project5Description:
        "This application has the functionality to manage expenses and register inputs and outputs. In this implementation, I perfected the concepts of componentization, states and dynamic rendering. With the form, I created a state to house the transactions and, then, I created a state to house the transactions and functions to add/or subtract values",
      project6Description:
        "This application has the functionality to access a list of products from an API and simulate a shopping cart with React. In this project, I assimilated the concepts of axios, component life cycles, cart data persistence with localStorage, States and UseEffect",
      project7Description:
        "This REST API is responsible for registering customers who may have many associated contacts. Each customer can only have one email and telephone number, while each contact can have several emails and telephone numbers",
      project8Description:
        "This REST API is responsible for managing users and the respective courses in which they are enrolled. In this application, I improved the authentication and authorization concepts, as well as data serialization.",
      project9Description:
        "In this project, I aimed to develop a social network for pets. I built 3 screens: login, registration and dashboard. Within the dashboard, the user is able to publish, edit and delete a post. With this application, I enriched my knowledge regarding API consumption, authentication and authorization.",
      project10Description:
        "In this project, I aimed to develop a simplified social network. The posts were rendered dynamically with DOM. In this project I was able to delve deeper into the concepts of dynamic rendering and responsiveness.",
      project11Description:
        "In this application, I developed a virtual record store called Open Music. In it, the user will be able to filter by musical category and maximum price of the products they want to view, in addition, they will be able to select the visual interface theme that they like most. With this project, I enriched my knowledge about CSS, array methods and data persistence in localstorage. ",
      project12Description:
        "In this application, I developed a feature that is capable of querying the GitHub API database, searching for a specific user and displaying this user's public repositories on the screen. If the user is not found, a user not found screen should be displayed. ",
      project13Description:
        "This Rest API was developed with the aim of managing courses and classes at a distance learning school.",
      Aplicacao: "Application",
      Repositorio: "Repository",
      Local: "Where do I live ?",
      Download: "Download curriculum",
      Contato: "Get in Touch",
      VerDetalhes: "See details",
      Detalhes: "Project details",
    },
  },
};

i18n
  .use(initReactI18next) // inicializa react-i18next
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // idioma de fallback
    interpolation: {
      escapeValue: false, // não escapar strings traduzidas para HTML
    },
  });

export default i18n;
