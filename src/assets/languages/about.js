const languageNavbar = {
  en: {
    about: "About Me",
    projects: "Projects",
    skills: "Tech & Skills",
    contact: "Contact Me",
  },
  es: {
    about: "Sobre Mi",
    projects: "Proyectos",
    skills: "Tech & Skills",
    contact: "Contactame",
  },
  pt: {
    about: "Sobre Mim",
    projects: "Projetos",
    skills: "Tech & Skills",
    contact: "Me Fala",
  },
};

const languagePage = {
  en: {
    title: "Hi!",
    subtitle1: "My name is Alexis",
    subtitle2: "...and I´m a web developer",
    description: [
      "Since a year I started to study and make projects with technologies like Javascript, frameworks and methods that you can check below.",
      "I've been studied in Henry bootcamp, where a made longer than 800 hs of content and practices.",
      "After I worked in other industries, I discovered the IT world and I found my place.",
      "I'm glad to think solutions, to code and design good users experiences.",
      "I'm continuing my learning process to give better solutions",
      "My life goal is to live traveling around the world, working on what I love to do.",
    ],
    resume: "My CV",
  },
  es: {
    title: "Hola!",
    subtitle1: "Me llamo Alexis...",
    subtitle2: "...y soy desarrollador web",
    description: [
      "Hace un año que estudio y realizo proyectos con tecnologias como Javascript, frameworks como React y métodos que podras ver mas abajo.",
      "He estudiado en un bootcamp de programacion llamado Henry donde tuve mas de 800 hs de contenido y prácticas",
      "Luego de haber trabajado en otros rubros, descubrí que la industria IT es mi lugar",
      "Me encanta pensar soluciones, programar y diseñar buenas experiencias para los usuarios",
      "A diario continuo con mi aprendizaje para darte las soluciones que necesitas",
      "Mi objetivo de vida es conocer mas de este maravilloso mundo trabajando de lo que me gusta",
    ],
    resume: "Mi CV",
  },
  pt: {
    title: "Oi!",
    subtitle1: "Me chamo Alexis",
    subtitle2: "...e sou desenvolvedor web",
    description: [
      "Faz um ano que estudo y faço projetos com tecnologias, frameworks e metodos que pode achar em baixo",
      "Estudei em um bootcamp chamado Henry, que deu me deu mais de 800 hs de conteúdo e práticas",
      "Despois de trabalhar em outras industrias achei que o mundo IT é meu lugar",
      "E inacreditável pensar soluções, codear e disenhar boas experiências pelos usuários",
      "Diariamente sigo meu apredizado para te dar isso que precisa.",
      "Meu objetivo de vida e viajar pelo mundo, trabalhando no que eu amo façer",
    ],
    resume: "Meu CV",
  },
};

const languageSkills = {
  en: {
    titleSkills: "Technologies & Methods",
  },
  es: {
    titleSkills: "Tecnologías y Métodos",
  },
  pt: {
    titleSkills: "Tecnologias e Métodos",
  },
};

const languageContact = {
  en: {
    question: "Are you interested on my work?",
    answer: "Let me know",

    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Text your message",
    send: "Submit",

    alert: "Perfect! I'll contact you soon!",
  },
  es: {
    question: "¿Te interesa mi trabajo?",
    answer: "Contactame",

    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Escribime",
    send: "Enviar",

    alert: "Perfecto, hablamos pronto",
  },
  pt: {
    question: "Você esta interessado no meu trabalho?",
    answer: "Fale pra mim",

    name: "Nome",
    email: "Email",
    subject: "Assunto",
    message: "Coloque a sua mensagem",
    send: "Enviar",

    alert: "Perfeito, em breve entrarei em contato com você",
  },
};
//cargar proyectos
const languageProjects = {
  Countries: {
    en: ["This a project about countries and activities to make in there"],
    es: [
      "Este es un proyecto sobre paises y actividades que se pueden hacer allí"
    ],
    pt: ["Este é um projeto sobre paises e atividades que pode fazer lá"],
  },
  DietLife: {
    en: ["This a project about food and type of diets to prepare"],
    es: ["Este es un proyecto sobre comida y tipos de dietas para cocinar"],
    pt: ["Este é um projeto sobre comida y tipos de dietas para fazer"],
  },
  Videogames: {
    en: ["This a project about games "],
    es: [
      "Este es un proyecto sobre paises y actividades que se pueden hacer allí"
    ],
    pt: ["Este é um projeto sobre paises e atividades que pode fazer lá"],
  },
  Dogs: {
    en: ["This a project about dogs "],
    es: ["Este es un proyecto sobre "],
    pt: ["Este é um projeto sobre "],
  },
};

const languageErrors = {
  en: {
    Email: "The email is necessary",
    Name: "The name is necessary",
    Message: "The message is necessary",
  },
  es: {
    Email: "El email es necesario",
    Name: "El nombre es necesario",
    Message: "El mensaje es necesario",
  },
  pt: {
    Email: "O email é necessário",
    Name: "O nome é necessário",
    Message: "A mensagem e necessária",
  },
};
export default {
  languagePage,
  languageProjects,
  languageContact,
  languageErrors,
  languageSkills,
  languageNavbar,
};
