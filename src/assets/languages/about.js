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
    description: [
      "I´m a web developer who loves to think solutions, to program and to design good experiences for users.\n",
      "I got a life´s objetive: I wanna wake up every day of may life knowing that I´m doing my best to be a better person, to improve my skills and be better programmer in the industry; and to help people to get theirs own objetives in IT industry",
    ],
    resume: "My CV",
  },
  es: {
    title: "Hola!",
    subtitle1: "Me llamo Alexis...",
    subtitle2: "...y soy desarrollador web",
    description: [
      "Hace un año que estudio y realizo proyectos con tecnologias, frameworks y metodos que podras ver abajo.",
      "He estudiado en un bootcamp de programacion llamado henry donde tuve mas de 800 hs de contenido y prácticas.",
      "Luego de haber trabajado en otros rubros, descubrí que la industria IT es mi lugar en el mundo.",
      "Me encanta pensar soluciones, programar y diseñar buenas experiencias para los usuarios.",
      "A diario continuo con mi aprendizaje para darte las soluciones que necesitas.",
      "Mi objetivo es ..."
    ],
    resume: "Mi CV",
  },
  pt: {
    title: "Oi!",
    subtitle: "Me chamo Alexis",
    description: [
      "Sou un desenvolvedor web que adora pensar em soluções, programar e disenhar boas experiências para os usuários.\n",
      "Tenho um objetivo na vida: despertar todos os dias sabendo que faço meu melhor para ser uma boa pessoa, que vou evoluindo para ser um melhor programador na industria, e que ajudo aos outros na obtencão do que eles procuram",
    ],
    resume: "Meu CV",
  },
};

const languageSkills = {
  en: {
    titleSkills: "Technologies and Methods",
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

    alert: "Perfect! I´ll contact you soon!",
  },
  es: {
    question: "Te ofrezco mis servicios",
    answer: "Contactame",

    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Escribime",
    send: "Enviar",

    alert: "Perfecto, Te contactaré muy pronto",
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
  Countries: { en: [], es: ["sd"], pt: [] },
  DietLife: { en: [], es: ["sd"], pt: [] },
  Videogames: { en: [], es: ["sd"], pt: [] },
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
