import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    myName: "Daniil",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    hireMe: "Hire me",
    heyIm: "Hey I'm",
    software: "Software",
    enginner: "Enginner",
    aboutMe: "About Me",
    im: "I'm a",
    frontEndDeveloper: "Frontend Developer",
    webDevMyPassion: "Web-Development Is My Passion",
    textAboutMe: "A talented front-end developer with more than 2 years of experience in web development. I was born and raised in Tashkent, Uzbekistan, where I was fond of technology and design from an early age. After graduating from a web development course from 'Proweb', I started my professional career in the IT field.",
    mySkills: "My Skills",
    skillsTitle: "Skills Reflects Our Knowledge",
    skillsDescription: "Web developer, with extensive knowledge and years of experience, working in web technologies.",
    skillsExp1: "Years Of",
    skillsExp2: "Experience",
    myPortfolio: "My Portfolio",
    contactMe: "Contact Me",
    contactTitle: "Have Any Project?",
    downloadCV: "Download CV",
    letsChat: "Let's Chat",
    allRightsReserved: "All Rights Reserved",
    createdBy: "Created By",
    viewMore: "View More",
    my: "My",
    skills2: "Skills"
  },
  ru: {
    myName: "Даниил",
    about: "Обо мне",
    skills: "Опыт",
    portfolio: "Портфолио",
    contact: "Контакты",
    hireMe: "Найми меня",
    heyIm: "Привет Я",
    software: "Инженер",
    enginner: "Программист",
    aboutMe: "Обо мне",
    im: "Я",
    frontEndDeveloper: "Фронтенд разработчик",
    webDevMyPassion: "Веб-разработка - моя страсть",
    textAboutMe: "Талантливый front-end разработчик с опытом работы в веб-разработке более 2 лет. Я родился и вырос в Ташкенте, Узбекистан, где с ранних лет увлекался технологиями и дизайном. После окончания курса веб-разработки от «Proweb» я начал свою профессиональную карьеру в IT-сфере.",
    mySkills: "Мои Навыки",
    skillsTitle: "Навыки отражают наши знания",
    skillsDescription: "Веб-разработчик, с обширными знаниями и многолетним опытом, работающий в сфере веб-технологий.",
    skillsExp1: "Года",
    skillsExp2: "опыта работы",
    myPortfolio: "Мое Портфолио",
    contactMe: "Связаться  со мной",
    contactTitle: "У вас есть какой-нибудь проект?",
    downloadCV: "Скачать Резюме",
    letsChat: "Написать мне",
    allRightsReserved: "Все Права Защищены",
    createdBy: "Создано",
    viewMore: "Подробнее",
    my: "Мои",
    skills2: "Навыки"
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
