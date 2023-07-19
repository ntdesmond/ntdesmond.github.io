import merge from './merge';

export interface Project {
  name: string;
  url: string;
  description: string;
  year: number;
  tags: string[];
}

const project_ids = ['kiosk', 'innonymous', 'paste_and_search', 'ppfs'] as const;
export type ProjectId = (typeof project_ids)[number];

const projects = merge({
  en: {
    kiosk: {
      name: 'uni-feedback-kiosk',
      url: 'https://github.com/uni-feedback-kiosk',
      description: 'Developed a full-stack kiosk system and setup scripts',
      year: 2023,
      tags: ['Vite', 'React', 'Chakra UI', 'Electron', 'FastAPI', 'MongoDB'],
    },
    innonymous: {
      name: 'innonymous',
      url: 'https://github.com/innonymous/app',
      description: 'Developed a frontend for an instant web messenger',
      year: 2023,
      tags: ['Vite', 'React', 'Chakra UI'],
    },
    paste_and_search: {
      name: 'Paste and Search',
      url: 'https://github.com/ntdesmond/paste-and-search',
      description: 'Developed a website for easier reverse image search',
      year: 2022,
      tags: ['Vite', 'React', 'GitHub Pages'],
    },
    ppfs: {
      name: 'PPFS',
      url: 'https://github.com/ntdesmond/PPFS',
      description: 'Developed a file server with simple authentication',
      year: 2022,
      tags: ['FastAPI', 'MongoDB'],
    },
  },
  ru: {
    kiosk: {
      description: 'Разработал full-stack систему для инфокиоска и скрипты для установки',
    },
    innonymous: {
      description: 'Разработал фронтенд для веб-мессенджера',
    },
    paste_and_search: {
      description: 'Разработал веб-сайт для упрощения поиска по изображению',
    },
    ppfs: {
      description: 'Разработал файл-сервер с простой авторизацией',
    },
  },
});

export default projects;
