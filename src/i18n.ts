import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import projects from './pages/cv/data/projects';
import languages from './pages/cv/data/languages';
import work from './pages/cv/data/work';
import education from './pages/cv/data/education';
import soft_skills from './pages/cv/data/soft_skills';
import summary from './pages/cv/data/summary';
import info from './pages/cv/data/info';
import tech_skills from './pages/cv/data/tech_skills';
import publications from './pages/cv/data/publications';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        print: 'Print',
        openPDF: 'Open PDF version',
        full_cv: 'Interactive CV is available here:',

        info: info.en,

        sections: {
          summary: {
            title: 'Summary',
            content: summary.en,
          },

          work: {
            title: 'Work Experience',
            responsibilities: 'Responsibilities:',
            content: work.en,
          },

          projects: {
            title: 'Projects',
            content: projects.en,
          },

          publications: {
            title: 'Publications',
            content: publications.en,
          },

          tech_skills: {
            title: 'Technical skills',
            languages: 'Programming languages',
            other: 'Other',
            content: tech_skills.en,
          },

          education: {
            title: 'Education',
            content: education.en,
          },

          languages: {
            title: 'Languages',
            content: languages.en,
          },

          soft_skills: {
            title: 'Soft skills',
            content: soft_skills.en,
          },
        },
      },
    },

    ru: {
      translation: {
        print: 'Печать',
        openPDF: 'Открыть PDF-версию',
        full_cv: 'Интерактивное резюме доступно здесь:',

        info: info.ru,

        sections: {
          summary: {
            title: 'О себе',
            content: summary.ru,
          },

          work: {
            title: 'Опыт работы',
            responsibilities: 'Обязанности:',
            content: work.ru,
          },

          projects: {
            title: 'Projects',
            content: projects.ru,
          },

          tech_skills: {
            title: 'Навыки',
            languages: 'Языки программирования',
            other: 'Прочее',
            content: tech_skills.ru,
          },

          education: {
            title: 'Образование',
            content: education.ru,
          },

          publications: {
            title: 'Публикации',
            content: publications.ru,
          },

          languages: {
            title: 'Языки',
            content: languages.ru,
          },

          soft_skills: {
            title: 'Качества',
            content: soft_skills.ru,
          },
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;
