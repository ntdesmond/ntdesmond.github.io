import merge from './merge';

export interface Publication {
  name: string;
  type: string;
  date: string;
  url: string;
}

const publication_ids = ['kiosk'] as const;
export type PublicationId = (typeof publication_ids)[number];

const publications = merge({
  en: {
    kiosk: {
      name: 'Development of software for an interactive information kiosk',
      url: 'https://dx.doi.org/10.13140/RG.2.2.24800.25609',
      type: "Bachelor's Thesis",
      date: 'July 2023',
    },
  },
  ru: {
    kiosk: {
      name: 'Разработка программного обеспечения для информационного киоска',
      type: 'Бакалаврская работа',
      date: 'Июль 2023',
    },
  },
});

export default publications;
