import merge from './merge';

const info = merge({
  en: {
    cv_name: 'Vladislav Safonov',
    position: 'Software Developer',
    github: '<a href="https://github.com/ntdesmond">github.com/ntdesmond</a>',
    mail: '<a href="mailto:ntdesmond@gmail.com">ntdesmond@gmail.com</a>',
    telegram: '<a href="https://t.me/ntdesmond">t.me/ntdesmond</a>',
    linkedin: '<a href="https://www.linkedin.com/in/ntdesmond/">linkedin.com/in/ntdesmond</a>',
    location: 'Innopolis, Russia',
  },
  ru: {
    cv_name: 'Владислав Сафонов',
    position: 'Разработчик ПО (программист)',
    location: 'Иннополис, Россия',
  },
});

export default info;
