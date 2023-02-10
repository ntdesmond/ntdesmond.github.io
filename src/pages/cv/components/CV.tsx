import React, { useState } from 'react';
import styled from 'styled-components';
import FixedMargin, { NoMargin } from '../../../components/layout/alignment/FixedMargin';
import { FlexColumn, FlexRow } from '../../../components/layout/alignment/Flex';
import { PageHeading, SectionHeading } from '../../../components/typography/Headings';
import OnlyPrint from '../../../components/layout/utils/OnlyPrint';
import NoWrap from '../../../components/layout/utils/NoWrap';
import TagsContext from '../contexts/TagsContext';
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
import LanguageFragment from './LanguageFragment';

const StyledCV = styled.div`
  display: grid;
  grid-template:
    'info info info'
    'summary summary sections3'
    'sections1 sections2 sections3' /
    1fr 1fr fit-content(20em);
  gap: 1em 3em;
  margin: 2em;

  @media screen and (max-width: 1024px) {
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

const SummarySection = styled(Section)`
  grid-area: summary;
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
  const pushTag = (tag: string) => setTags((oldTags) => new Set(oldTags.add(tag)));
  const tagsContextValue = React.useMemo(() => ({ tags, pushTag }), [tags]);

  return (
    <StyledCV>
      <TagsContext.Provider value={tagsContextValue}>
        <InfoSection gap="2em" align="center">
          <NoMargin>
            <Name><LanguageFragment en="Vladislav Safonov" ru="Владислав Сафонов" /></Name>
            <Position><LanguageFragment en="Software Developer" ru="Разработчик ПО (Программист)" /></Position>
          </NoMargin>
          <NoWrap>
            <FixedMargin margin="0.5em">
              <GithubLink path="ntdesmond" />
              <EmailLink address="ntdesmond@gmail.com" />
              <TelegramLink path="ntdesmond" />
              <Location location={<LanguageFragment en="Innopolis, Russia" ru="Иннополис, Россия" />} />
            </FixedMargin>
          </NoWrap>
          <OnlyPrint>
            <QRCodeWrapper>
              <div>
                <LanguageFragment en="Interactive CV is available here:" ru="Интерактивное резюме доступно здесь:" />
              </div>
              <a href="https://ntdesmond.github.io/#/cv">ntdesmond.github.io/#/cv</a>
              <QRCode />
            </QRCodeWrapper>
          </OnlyPrint>
        </InfoSection>
        <SummarySection title={<LanguageFragment en="Summary" ru="О себе" />}>
          <LanguageFragment
            en={(
              <>
                Highly motivated computer science student at Innopolis University with a strong
                passion for developing user-friendly applications.
                Experienced in creating complete systems, utilizing both <Tag slug="FastAPI" /> for the backend
                and <Tag slug="React" /> for the frontend to deliver seamless user experiences.
                Possesses the ability to not only develop a system, but also set up a <Tag slug="CI/CD" /> system
                for automatic deployment, ensuring smooth and efficient operations.
                Seeking opportunities to challenge and expand skillset while delivering
                impactful solutions to real-world problems.
              </>
              )}
            ru={(
              <>
                Высокомотивированный студент факультета компьютерных наук Университета Иннополис,
                увлеченный разработкой user-friendly приложений.
                Есть опыт создания сложных систем, используя <Tag slug="FastAPI" /> для бэкенда
                и <Tag slug="React" /> для фронтенда.
                Способен не только разработать приложение, но и настроить <Tag slug="CI/CD" /> для
                автоматического развертывания приложения, обеспечивая бесперебойную работу
                сервисов.
                Ищу возможности расширить свои навыки и предложить эффективные решения для
                реальных задач.
              </>
              )}
          />

        </SummarySection>
        <CVColumn index={1}>
          <Section title={<LanguageFragment en="Work Experience" ru="Опыт работы" />}>
            <WorkExperienceEntry
              company={
                <LanguageFragment en="Innopolis University" ru="Университет Иннополис" />
                }
              position={
                <LanguageFragment en="Electronics Design Center Specialist" ru="Специалист Дизайн-центра электроники" />
                }
              period={2021}
            >
              <Responsibility tags={['Linux', 'Bash', 'Python', 'Git']}>
                <LanguageFragment
                  en={(
                    <>
                      Worked on automation scripts and improvement of open-source instruments{' '}
                      <a href="http://opencircuitdesign.com/qflow/">qflow</a> and{' '}
                      <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                    </>
                      )}
                  ru={(
                    <>
                      Работал над скриптами автоматизации и улучшением открытых инструментов{' '}
                      <a href="http://opencircuitdesign.com/qflow/">qflow</a> и{' '}
                      <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                    </>
                      )}
                />
              </Responsibility>
            </WorkExperienceEntry>
          </Section>
          <Section title={<LanguageFragment en="Projects" ru="Проекты" />}>
            <Project
              title="Paste and Search"
              href="https://github.com/ntdesmond/paste-and-search"
              description={<LanguageFragment en="Website for easier reverse image searching" ru="Сайт для упрощения поиска по изображению" />}
              period={2022}
              tags={['TypeScript', 'React', 'GitHub Actions', 'GitHub Pages']}
            />
            <Project
              title="ntdesmond.github.io"
              href="https://github.com/ntdesmond/ntdesmond.github.io"
              description={<LanguageFragment en="Personal website with interactive CV" ru="Личный веб-сайт с интерактивным резюме" />}
              period={2022}
              tags={['TypeScript', 'React', 'GitHub Actions']}
            />
            <Project
              title="PPFS"
              href="https://github.com/ntdesmond/PPFS"
              description={<LanguageFragment en="File server made with FastAPI and GridFS" ru="Файл-сервер, сделанный с помощью FastAPI и GridFS" />}
              period={2022}
              tags={['Python', 'FastAPI', 'asyncio', 'MongoDB', 'Docker', 'GridFS']}
            />
            <Project
              title="@goodscalcbot"
              href="https://t.me/goodscalcbot"
              description={<LanguageFragment en="Telegram bot to share expenses" ru="Телеграм-бот для разделения расходов" />}
              period={2020}
              tags={['Telegram API', 'Firestore', 'Python']}
            />
          </Section>
        </CVColumn>
        <CVColumn index={2}>
          <Section title={<LanguageFragment en="Technical skills" ru="Навыки" />}>
            <SkillCategoryHeading>
              <LanguageFragment en="Programming languages" ru="Языки программирования" />
            </SkillCategoryHeading>
            <TechSkill name="Python">
              <BulletPoint>
                <LanguageFragment
                  en={<>Experienced in <Tag slug="FastAPI" /> framework</>}
                  ru={<>Опыт работы с фреймворком <Tag slug="FastAPI" /></>}
                />
              </BulletPoint>
              <BulletPoint>
                <LanguageFragment
                  en={<>Basic knowledge of <Tag slug="pandas" />, <Tag slug="numpy" /> libraries</>}
                  ru={<>Знание библиотек <Tag slug="pandas" />, <Tag slug="numpy" /> на базовом уровне</>}
                />
              </BulletPoint>
            </TechSkill>
            <TechSkill name="JS/TS" tagSlug="JS">
              <BulletPoint>
                <LanguageFragment
                  en={(
                    <>Used <Tag slug="React" /> and <Tag slug="Webpack" /> both in{' '}
                      <Tag name="JavaScript" slug="JS" /> and <Tag slug="TypeScript" />
                    </>
                  )}
                  ru={(
                    <>
                      Использовал <Tag slug="React" /> и <Tag slug="Webpack" /> как на{' '}
                      <Tag name="JavaScript" slug="JS" />, так и на <Tag slug="TypeScript" />
                    </>
                  )}
                />
              </BulletPoint>
            </TechSkill>
            <TechSkill name="C#">
              <BulletPoint>
                <LanguageFragment
                  en={<>Experienced in <Tag slug="WPF" /> and <Tag slug="WinForms" /></>}
                  ru={<>Опыт работы с <Tag slug="WPF" /> и <Tag slug="WinForms" /></>}
                />
              </BulletPoint>
            </TechSkill>
            <SkillCategoryHeading>
              <LanguageFragment en="Other" ru="Прочее" />
            </SkillCategoryHeading>
            <BulletPoint>
              <LanguageFragment
                en={<>Experienced in <Tag slug="Git" /></>}
                ru={<>Опыт работы с <Tag slug="Git" /></>}
              />
              <BulletPoint>

                <LanguageFragment
                  en={(
                    <>
                      Using <Tag slug="GitHub" /> mostly, worked with{' '}
                      <Tag slug="GitHub Actions" />
                    </>
                      )}
                  ru={(
                    <>
                      Использую в основном <Tag slug="GitHub" />, работал с{' '}
                      <Tag slug="GitHub Actions" />
                    </>
                      )}
                />
              </BulletPoint>
            </BulletPoint>
            <BulletPoint>
              <LanguageFragment
                en={<>Experienced in <Tag slug="Docker" /> and <Tag slug="Docker Compose" /></>}
                ru={<>Опыт работы с <Tag slug="Docker" /> и <Tag slug="Docker Compose" /></>}
              />
            </BulletPoint>
            <BulletPoint>
              <LanguageFragment
                en={(
                  <>
                    Worked with SQL and NoSQL databases (<Tag slug="Firestore" />,{' '}
                    <Tag slug="Redis" />, <Tag slug="MongoDB" />, <Tag slug="SQLite" />,{' '}
                    <Tag slug="MySQL" />, <Tag slug="PostgreSQL" />)
                  </>
                    )}
                ru={(
                  <>
                    Работал с SQL и NoSQL базами данных (<Tag slug="Firestore" />,{' '}
                    <Tag slug="Redis" />, <Tag slug="MongoDB" />, <Tag slug="SQLite" />,{' '}
                    <Tag slug="MySQL" />, <Tag slug="PostgreSQL" />)
                  </>
                    )}
              />
            </BulletPoint>
            <BulletPoint>
              <LanguageFragment
                en={<>Basic knowledge of <Tag slug="Bash" /> scripting</>}
                ru={<>Знание скриптов <Tag slug="Bash" /> на базовом уровне</>}
              />
            </BulletPoint>
          </Section>
        </CVColumn>
        <CVColumn index={3}>
          <Section title={<LanguageFragment en="Education" ru="Образование" />}>
            <EducationEntry
              speciality={<LanguageFragment en="Computer science, Bachelor" ru="Компьютерные науки, Бакалавр" />}
              organization={<LanguageFragment en="Innopolis University" ru="Университет Иннополис" />}
              period="2019 — 2023"
            />
          </Section>
          <Section title={<LanguageFragment en="Languages" ru="Языки" />}>
            <Language
              name={<LanguageFragment en="English" ru="Английский" />}
              level={<LanguageFragment en="Advanced" ru="Продвинутый" />}
            />
            <Language
              name={<LanguageFragment en="Russian" ru="Русский" />}
              level={<LanguageFragment en="Native" ru="Родной" />}
            />
          </Section>
          <Section title={<LanguageFragment en="Soft skills" ru="Качества" />}>
            <SoftSkillsList
              skills={[
                <LanguageFragment en="Desire to learn" ru="Стремление учиться" />,
                <LanguageFragment en="Responsibility" ru="Ответственность" />,
                <LanguageFragment en="Writing skills" ru="Навыки письма" />,
                <LanguageFragment en="Adaptability" ru="Приспособляемость" />,
                <LanguageFragment en="Friendliness" ru="Дружелюбие" />,
                <LanguageFragment en="Cooperation" ru="Сотрудничество" />,
                <LanguageFragment en="Confidence" ru="Уверенность" />,
                <LanguageFragment en="Dedication" ru="Преданность" />,
                <LanguageFragment en="Honesty" ru="Честность" />,
              ]}
            />
          </Section>
          <Section title={<LanguageFragment en="Tags" ru="Теги" />}>
            <TagsSection />
          </Section>
        </CVColumn>
      </TagsContext.Provider>
    </StyledCV>
  );
};

export default CV;
