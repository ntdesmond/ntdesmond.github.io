import merge from './merge';

const language_ids = ['python', 'js', 'csharp'] as const;
export type ProgrammingLanguageId = (typeof language_ids)[number];

const tech_skill_ids = ['git', 'ci_cd', 'docker', 'databases', 'shell_scripts'] as const;
export type TechSkillId = (typeof tech_skill_ids)[number];

const tech_skills = merge({
  en: {
    languages: {
      python: '<Tag name="Python"/>: <Tag name="FastAPI" />, pandas, numpy',
      js: '<Tag name="JS"/>: <Tag name="TypeScript" />, <Tag name="React" />, <Tag name="Vite" />, <Tag name="Electron" />',
      csharp: '<Tag name="C#"/>: WPF, WinForms',
    },
    other: {
      git: '<Tag name="Git" /> (prefer GitHub)',
      ci_cd: '<Tag name="CI/CD" />: GitHub Actions, GitLab CI',
      docker: 'Docker, Docker Compose',
      databases: 'Redis, MongoDB, SQLite, MySQL, PostgreSQL',
      shell_scripts: '<Tag name="Bash" /> and <Tag name="PowerShell" /> scripts',
    },
  },
  ru: {
    other: {
      git: '<Tag name="Git" /> (предпочитаю GitHub)',
      shell_scripts: '<Tag name="Bash" /> и <Tag name="PowerShell" /> скрипты',
    },
  },
});

export default tech_skills;
