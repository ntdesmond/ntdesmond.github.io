import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import projects from './pages/cv/data/projects';
import languages from './pages/cv/data/languages';
import work from './pages/cv/data/work';
import education from './pages/cv/data/education';
import soft_skills from './pages/cv/data/soft_skills';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        print: 'Print',
        openPDF: 'Open PDF version',

        cv_name: 'Vladislav Safonov',
        position: 'Software Developer',
        location: 'Innopolis, Russia',
        full_cv: 'Interactive CV is available here:',

        sections: {
          summary: {
            title: 'Summary',
            content:
              'Highly motivated software developer with a strong passion for developing user-friendly applications. ' +
              'Experienced in creating full-stack applications and systems, utilizing <FastAPI/> ' +
              'for the backend and <React/> for the frontend. Able to set up a <CI_CD/> ' +
              'system for automatic deployment. Aiming to deliver smooth and efficient user experience. ' +
              'With a systematic view on projects, I ensure proper system design and quality.',
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

          tech_skills: {
            title: 'Technical skills',
            content: {
              languages: 'Programming languages',
              other: 'Other',
              prefer_github: 'GitHub is preferred',
              scripts: '<Bash/> and <PowerShell/> scripts',
            },
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

        cv_name: 'Владислав Сафонов',
        position: 'Разработчик ПО (программист)',
        location: 'Иннополис, Россия',
        full_cv: 'Интерактивное резюме доступно здесь:',

        sections: {
          summary: {
            title: 'О себе',
            content:
              'Высокомотивированный разработчик программного обеспечения, ' +
              'увлеченный разработкой user-friendly приложений. Есть опыт создания full-stack ' +
              'приложений и систем с использованием <FastAPI/> для бэкенда и <React/> для фронтенда. ' +
              'Способен настроить <CI_CD/> для автоматического развертывания приложения. ' +
              'Благодаря систематическому взгляду на проект, могу обеспечить качество работы ' +
              'и правильную архитектуру приложения.',
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
            content: {
              languages: 'Языки программирования',
              other: 'Прочее',
              prefer_github: 'предпочитаю GitHub',
              scripts: '<Bash/> и <PowerShell/> скрипты',
            },
          },

          education: {
            title: 'Образование',
            content: education.ru,
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
