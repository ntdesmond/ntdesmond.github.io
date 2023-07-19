import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import projects from './pages/cv/data/projects';

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
            content: {
              iu_electronics: {
                company: 'Innopolis University',
                position: 'Developer at Electronics Design Center',
                period: '04/2021 — 10/2021',
                responsibilities: {
                  automation:
                    'Worked on automation scripts and improvement of open-source instruments <0>qflow</0> and <1>OpenLane</1>',
                },
              },
            },
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
            content: {
              specialty: 'Computer science, Bachelor',
              organization: 'Innopolis University',
            },
          },

          languages: {
            title: 'Languages',
            content: [
              {
                name: 'English',
                level: 'Advanced',
              },
              {
                name: 'Russian',
                level: 'Native',
              },
            ],
          },

          soft_skills: {
            title: 'Soft skills',
            content: [
              'Desire to learn',
              'Responsibility',
              'Adaptability',
              'Cooperation',
              'Confidence',
            ],
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
            content: {
              iu_electronics: {
                company: 'Университет Иннополис',
                position: 'Разработчик Дизайн-центра электроники',
                period: 'Апрель 2021 — Октябрь 2021',
                responsibilities: {
                  automation:
                    'Работал над скриптами автоматизации и улучшением открытых инструментов <0>qflow</0> и <1>OpenLane</1>',
                },
              },
            },
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
            content: {
              specialty: 'Компьютерные науки, Бакалавр',
              organization: 'Университет Иннополис',
            },
          },

          languages: {
            title: 'Языки',
            content: [
              {
                name: 'Английский',
                level: 'Продвинутый',
              },
              {
                name: 'Русский',
                level: 'Родной',
              },
            ],
          },

          soft_skills: {
            title: 'Качества',
            content: [
              'Стремление учиться',
              'Ответственность',
              'Приспособляемость',
              'Сотрудничество',
              'Уверенность',
            ],
          },
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;
