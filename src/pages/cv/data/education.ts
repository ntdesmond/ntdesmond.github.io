import merge from './merge';

export interface Education {
  specialty: string;
  organization: string;
  period: string;
}

const education_ids = ['iu'] as const;
export type EducationId = (typeof education_ids)[number];

const education = merge({
  en: {
    iu: {
      specialty: 'Computer science, Bachelor',
      organization: 'Innopolis University',
      period: '2021 — 2023',
    },
  },
  ru: {
    iu: {
      specialty: 'Компьютерные науки, Бакалавр',
      organization: 'Университет Иннополис',
    },
  },
});

export default education;
