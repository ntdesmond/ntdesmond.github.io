import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FixedMargin, { NoMargin } from '../../../components/layout/alignment/FixedMargin';
import { FlexColumn, FlexRow } from '../../../components/layout/alignment/Flex';
import { PageHeading, SectionHeading } from '../../../components/typography/Headings';
import OnlyPrint from '../../../components/layout/utils/OnlyPrint';
import NoWrap from '../../../components/layout/utils/NoWrap';
import LanguageContext from '../contexts/LanguageContext';
import TagsContext from '../contexts/TagsContext';
import LanguageFragment from '../types/LanguageFragment';
import LanguageType from '../types/Language';
import EmailLink from './contacts/EmailLink';
import GithubLink from './contacts/GithubLink';
import Location from './contacts/Location';
import TelegramLink from './contacts/TelegramLink';
import EducationEntry from './education/EducationEntry';
import Language from './languages/Language';
import Project from './projects/Project';
import Section from './Section';
import BulletPoint from './skills/BulletPoint';
import SoftSkillsList from './skills/SoftSkillsList';
import TechSkill from './skills/TechSkill';
import Tag from './tags/Tag';
import TagsSection from './tags/TagsSection';
import Responsibility from './workExperience/Responsibility';
import WorkExperienceEntry from './workExperience/WorkExperienceEntry';
import SkillCategoryHeading from './skills/SkillCategoryHeading';
import QR from './images/QR.svg?inline';

const StyledCV = styled.div`
  display: grid;
  grid-template:
    'info info info'
    'sections1 sections2 sections3' /
    1fr 1fr fit-content(20em);
  gap: 1em 3em;
  margin: 2em;

  @media screen and (max-width: 920px) {
    grid-template-areas:
      'info info'
      'sections1 sections1'
      'sections2 sections2'
      'sections3 sections3';
  }

  @media screen and (max-width: 710px) {
    display: flex;
    flex-direction: column;
  }

  @media print {
    margin: 0;
    column-gap: 1em;
    grid-template-columns: 1fr 1fr 0.8fr;
  }
`;

const InfoSection = styled(FlexRow)`
  grid-area: info;

  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

const CVColumn = styled(FlexColumn)<{ index: number }>`
  grid-area: ${(p) => `sections${p.index}`};
`;

const Name = styled(PageHeading)`
  font-family: 'Oswald', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  @media screen and (max-width: 710px) {
    text-align: center;
  }
`;

const Position = styled(SectionHeading)`
  font-weight: normal;
  color: #035;

  @media screen and (max-width: 710px) {
    text-align: center;
  }
`;

const QRCodeWrapper = styled(FlexColumn)`
  margin-left: auto;

  align-self: stretch;
  align-items: stretch;
  text-align: center;

  gap: 0.2em;

  > * {
    flex-basis: 0;
  }
`;

const QRCode = styled.div`
  background: url(${QR}) center no-repeat;
  background-size: contain;
  flex-grow: 1;

  @media print {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
`;

const CV = () => {
  const [tags, setTags] = useState<Set<string>>(new Set(['Frontend', 'Backend']));
  const { search } = useLocation();
  const pushTag = (tag: string) => setTags((oldTags) => new Set(oldTags.add(tag)));
  const tagsContextValue = React.useMemo(() => ({ tags, pushTag }), [tags]);

  const language = (new URLSearchParams(search).get('language') as LanguageType) || 'en';

  const name = new LanguageFragment({ en: 'Vladislav Safonov', ru: 'Владислав Сафонов' });
  const position = new LanguageFragment({
    en: 'Software Developer',
    ru: 'Разработчик ПО (Программист)',
  });
  const geolocation = new LanguageFragment({
    en: 'Innopolis, Russia',
    ru: 'Иннополис, Россия',
  });

  return (
    <StyledCV>
      <LanguageContext.Provider value={language}>
        <TagsContext.Provider value={tagsContextValue}>
          <InfoSection gap="2em" align="center">
            <NoMargin>
              <Name>{name.get(language)}</Name>
              <Position>{position.get(language)}</Position>
            </NoMargin>
            <NoWrap>
              <FixedMargin margin="0.5em">
                <GithubLink path="ntdesmond" />
                <EmailLink address="ntdesmond@gmail.com" />
                <TelegramLink path="ntdesmond" />
                <Location location={geolocation} />
              </FixedMargin>
            </NoWrap>
            <OnlyPrint>
              <QRCodeWrapper>
                <div>
                  {new LanguageFragment({
                    en: 'Interactive CV is available here:',
                    ru: 'Интерактивное резюме доступно здесь:',
                  }).get(language)}
                </div>
                <a href="https://ntdesmond.github.io/#/cv">ntdesmond.github.io/#/cv</a>
                <QRCode />
              </QRCodeWrapper>
            </OnlyPrint>
          </InfoSection>

          <CVColumn index={1}>
            <Section title={new LanguageFragment({ en: 'Work Experience', ru: 'Опыт работы' })}>
              <WorkExperienceEntry
                company={
                  new LanguageFragment({ en: 'Innopolis University', ru: 'Университет Иннополис' })
                }
                position={
                  new LanguageFragment({
                    en: 'Electronics Design Center Specialist',
                    ru: 'Специалист Дизайн-центра электроники',
                  })
                }
                period={
                  new LanguageFragment({
                    en: 'April 2021 — October 2021',
                    ru: 'Апрель 2021 — Октябрь 2021',
                  })
                }
              >
                <Responsibility tags={['Linux', 'Bash', 'Python', 'Git']}>
                  {new LanguageFragment({
                    en: (
                      <>
                        Worked on automation scripts and improvement of open-source instruments{' '}
                        <a href="http://opencircuitdesign.com/qflow/">qflow</a> and{' '}
                        <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                      </>
                    ),
                    ru: (
                      <>
                        Работал над скриптами автоматизации и улучшением открытых инструментов{' '}
                        <a href="http://opencircuitdesign.com/qflow/">qflow</a> и{' '}
                        <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                      </>
                    ),
                  }).get(language)}
                </Responsibility>
              </WorkExperienceEntry>
            </Section>
            <Section title={new LanguageFragment({ en: 'Projects', ru: 'Проекты' })}>
              <Project
                title="Paste and Search"
                href="https://github.com/ntdesmond/paste-and-search"
                description={
                  new LanguageFragment({
                    en: 'Website for easier reverse image searching',
                    ru: 'Сайт для упрощения поиска по изображению',
                  })
                }
                period={
                  new LanguageFragment({
                    en: 2022,
                  })
                }
                tags={['TypeScript', 'React', 'GitHub Actions', 'GitHub Pages']}
              />
              <Project
                title="ntdesmond.github.io"
                href="https://github.com/ntdesmond/ntdesmond.github.io"
                description={
                  new LanguageFragment({
                    en: 'Personal website with interactive CV',
                    ru: 'Личный веб-сайт с интерактивным резюме',
                  })
                }
                period={
                  new LanguageFragment({
                    en: 2022,
                  })
                }
                tags={['TypeScript', 'React', 'GitHub Actions']}
              />
              <Project
                title="PPFS"
                href="https://github.com/ntdesmond/PPFS"
                description={
                  new LanguageFragment({
                    en: 'File server made with FastAPI and GridFS',
                    ru: 'Файл-сервер, сделанный с помощью FastAPI и GridFS',
                  })
                }
                period={
                  new LanguageFragment({
                    en: 2022,
                  })
                }
                tags={['Python', 'FastAPI', 'asyncio', 'MongoDB', 'Docker', 'GridFS']}
              />
              <Project
                title="@goodscalcbot"
                href="https://t.me/goodscalcbot"
                description={
                  new LanguageFragment({
                    en: 'Telegram bot to share expenses',
                    ru: 'Телеграм-бот для разделения расходов',
                  })
                }
                period={
                  new LanguageFragment({
                    en: 2020,
                  })
                }
                tags={['Telegram API', 'Firestore', 'Python']}
              />
            </Section>
          </CVColumn>
          <CVColumn index={2}>
            <Section title={new LanguageFragment({ en: 'Technical skills', ru: 'Навыки' })}>
              <SkillCategoryHeading>
                {new LanguageFragment({
                  en: 'Programming languages',
                  ru: 'Языки программирования',
                }).get(language)}
              </SkillCategoryHeading>
              <TechSkill name="Python">
                <BulletPoint>
                  {new LanguageFragment({
                    en: (
                      <>
                        Experienced in <Tag slug="FastAPI" /> framework
                      </>
                    ),
                    ru: (
                      <>
                        Опыт работы с фреймворком <Tag slug="FastAPI" />
                      </>
                    ),
                  }).get(language)}
                </BulletPoint>
                <BulletPoint>
                  {new LanguageFragment({
                    en: (
                      <>
                        Basic knowledge of <Tag slug="pandas" />, <Tag slug="numpy" /> libraries
                      </>
                    ),
                    ru: (
                      <>
                        Знание библиотек <Tag slug="pandas" />, <Tag slug="numpy" /> на базовом
                        уровне
                      </>
                    ),
                  }).get(language)}
                </BulletPoint>
              </TechSkill>
              <TechSkill name="JS/TS" tagSlug="JS">
                <BulletPoint>
                  {new LanguageFragment({
                    en: (
                      <>
                        Used <Tag slug="React" /> and <Tag slug="Webpack" /> both in{' '}
                        <Tag name="JavaScript" slug="JS" /> and <Tag slug="TypeScript" />
                      </>
                    ),
                    ru: (
                      <>
                        Использовал <Tag slug="React" /> и <Tag slug="Webpack" /> как на{' '}
                        <Tag name="JavaScript" slug="JS" />, так и на <Tag slug="TypeScript" />
                      </>
                    ),
                  }).get(language)}
                </BulletPoint>
              </TechSkill>
              <TechSkill name="C#">
                <BulletPoint>
                  {new LanguageFragment({
                    en: (
                      <>
                        Experienced in <Tag slug="WPF" /> and <Tag slug="WinForms" />
                      </>
                    ),
                    ru: (
                      <>
                        Опыт работы с <Tag slug="WPF" /> и <Tag slug="WinForms" />
                      </>
                    ),
                  }).get(language)}
                </BulletPoint>
              </TechSkill>
              <SkillCategoryHeading>
                {new LanguageFragment({
                  en: 'Other',
                  ru: 'Прочее',
                }).get(language)}
              </SkillCategoryHeading>
              <BulletPoint>
                {new LanguageFragment({
                  en: (
                    <>
                      Experienced in <Tag slug="Git" />
                    </>
                  ),
                  ru: (
                    <>
                      Опыт работы с <Tag slug="Git" />
                    </>
                  ),
                }).get(language)}
                <BulletPoint>
                  {new LanguageFragment({
                    en: (
                      <>
                        Using <Tag slug="GitHub" /> mostly, worked with{' '}
                        <Tag slug="GitHub Actions" />
                      </>
                    ),
                    ru: (
                      <>
                        Использую в основном <Tag slug="GitHub" />, работал с{' '}
                        <Tag slug="GitHub Actions" />
                      </>
                    ),
                  }).get(language)}
                </BulletPoint>
              </BulletPoint>
              <BulletPoint>
                {new LanguageFragment({
                  en: (
                    <>
                      Experienced in <Tag slug="Docker" /> and <Tag slug="Docker Compose" />
                    </>
                  ),
                  ru: (
                    <>
                      Опыт работы с <Tag slug="Docker" /> и <Tag slug="Docker Compose" />
                    </>
                  ),
                }).get(language)}
              </BulletPoint>
              <BulletPoint>
                {new LanguageFragment({
                  en: (
                    <>
                      Worked with SQL and NoSQL databases (<Tag slug="Firestore" />,{' '}
                      <Tag slug="Redis" />, <Tag slug="MongoDB" />, <Tag slug="SQLite" />,{' '}
                      <Tag slug="MySQL" />, <Tag slug="PostgreSQL" />)
                    </>
                  ),
                  ru: (
                    <>
                      Работал с SQL и NoSQL базами данных (<Tag slug="Firestore" />,{' '}
                      <Tag slug="Redis" />, <Tag slug="MongoDB" />, <Tag slug="SQLite" />,{' '}
                      <Tag slug="MySQL" />, <Tag slug="PostgreSQL" />)
                    </>
                  ),
                }).get(language)}
              </BulletPoint>
              <BulletPoint>
                {new LanguageFragment({
                  en: (
                    <>
                      Basic knowledge of <Tag slug="Bash" /> scripting
                    </>
                  ),
                  ru: (
                    <>
                      Знание скриптов <Tag slug="Bash" /> на базовом уровне
                    </>
                  ),
                }).get(language)}
              </BulletPoint>
            </Section>
          </CVColumn>
          <CVColumn index={3}>
            <Section title={new LanguageFragment({ en: 'Education', ru: 'Образование' })}>
              <EducationEntry
                speciality={
                  new LanguageFragment({
                    en: 'Computer science, Bachelor',
                    ru: 'Компьютерные науки, Бакалавр',
                  })
                }
                organization={
                  new LanguageFragment({
                    en: 'Innopolis University',
                    ru: 'Университет Иннополис',
                  })
                }
                period={
                  new LanguageFragment({
                    en: '2019 — Present',
                    ru: '2019 — н.в.',
                  })
                }
              />
            </Section>
            <Section title={new LanguageFragment({ en: 'Languages', ru: 'Языки' })}>
              <Language
                name={
                  new LanguageFragment({
                    en: 'English',
                    ru: 'Английский',
                  })
                }
                level={
                  new LanguageFragment({
                    en: 'Upper-Intermediate',
                    ru: 'Выше среднего',
                  })
                }
              />
              <Language
                name={
                  new LanguageFragment({
                    en: 'Russian',
                    ru: 'Русский',
                  })
                }
                level={
                  new LanguageFragment({
                    en: 'Native',
                    ru: 'Родной',
                  })
                }
              />
            </Section>
            <Section title={new LanguageFragment({ en: 'Soft skills', ru: 'Качества' })}>
              <SoftSkillsList
                skills={[
                  new LanguageFragment({ en: 'Desire to learn', ru: 'Стремление учиться' }),
                  new LanguageFragment({ en: 'Responsibility', ru: 'Ответственность' }),
                  new LanguageFragment({ en: 'Writing skills', ru: 'Навыки письма' }),
                  new LanguageFragment({ en: 'Adaptability', ru: 'Приспособляемость' }),
                  new LanguageFragment({ en: 'Friendliness', ru: 'Дружелюбие' }),
                  new LanguageFragment({ en: 'Cooperation', ru: 'Сотрудничество' }),
                  new LanguageFragment({ en: 'Confidence', ru: 'Уверенность' }),
                  new LanguageFragment({ en: 'Dedication', ru: 'Преданность' }),
                  new LanguageFragment({ en: 'Honesty', ru: 'Честность' }),
                ]}
              />
            </Section>
            <Section title={new LanguageFragment({ en: 'Tags', ru: 'Теги' })}>
              <TagsSection />
            </Section>
          </CVColumn>
        </TagsContext.Provider>
      </LanguageContext.Provider>
    </StyledCV>
  );
};

export default CV;
