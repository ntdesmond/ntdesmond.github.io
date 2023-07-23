import merge from './merge';

export interface Responsibility {
  content: string;
  tags: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: Responsibility[];
}

const work_entry_ids = ['iu_electronics'] as const;
export type WorkEntryId = (typeof work_entry_ids)[number];

const work = merge({
  en: {
    iu_electronics: {
      company: 'Innopolis University',
      position: 'Developer at Electronics Design Center',
      period: '04/2021 — 10/2021',
      responsibilities: {
        automation: {
          content: `Worked on automation scripts and improvement of open-source instruments
            <a href="http://opencircuitdesign.com/qflow/">qflow</a> and
            <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>`,
          tags: ['Linux', 'Bash', 'Python', 'Git'],
        },
      },
    },
  },
  ru: {
    iu_electronics: {
      company: 'Университет Иннополис',
      position: 'Разработчик Дизайн-центра электроники',
      period: 'Апрель 2021 — Октябрь 2021',
      responsibilities: {
        automation: {
          content: `Работал над скриптами автоматизации и улучшением открытых инструментов 
            <a href="http://opencircuitdesign.com/qflow/">qflow</a> и
            <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>`,
        },
      },
    },
  },
});

export default work;
