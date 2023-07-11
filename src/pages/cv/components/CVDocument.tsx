import { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { MdMail, MdLocationPin } from 'react-icons/md';
import TelegramIcon from './TelegramIcon';
import TagsContext from '../contexts/TagsContext';
import EducationEntry from './education/EducationEntry';
import Language from './languages/Language';
import Project from './projects/Project';
import Section from './Section';
import TechSkill from './skills/TechSkill';
import Tag from './tags/Tag';
import Responsibility from './workExperience/Responsibility';
import WorkExperienceEntry from './workExperience/WorkExperienceEntry';
import LanguageFragment from './LanguageFragment';
import QrCode from './QrCode';
import { OnlyPrint } from '../../../components/utils/Print';

// const StyledCV = styled.div`
//   display: grid;
//   grid-template:
//     'info info'
//     'sections1 sections2' /
//     1fr fit-content(20em);
//   gap: 1em 3em;
//   margin: 2em;

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     flex-direction: column;
//   }

//   @media print {
//     margin: 0;
//     grid-template-columns: 1fr 0.6fr;
//   }
// `;

// const InfoSection = styled(FlexRow)`
//   grid-area: info;

//   @media screen and (max-width: 710px) {
//     flex-direction: column;
//   }
// `;

// const CVColumn = styled(FlexColumn)<{ index: number }>`
//   grid-area: ${(p) => `sections${p.index}`};
// `;

// const Name = styled(PageHeading)`
//   font-family: 'Oswald', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

//   @media screen and (max-width: 710px) {
//     text-align: center;
//   }
// `;

// const Position = styled(SectionHeading)`
//   font-weight: normal;
//   color: #035;

//   @media screen and (max-width: 710px) {
//     text-align: center;
//   }
// `;

// const QRCodeWrapper = styled(FlexColumn)`
//   margin-left: auto;

//   align-self: stretch;
//   align-items: stretch;
//   text-align: center;

//   gap: 0.2em;

//   > * {
//     flex-basis: 0;
//   }
// `;

// const StyledQrCode = styled(QrCode)`
//   flex-grow: 1;

//   @media print {
//     print-color-adjust: exact;
//     -webkit-print-color-adjust: exact;
//   }
// `;

const CVDocument = () => {
  const [tags, setTags] = useState<Set<string>>(new Set(['Frontend', 'Backend']));
  const [isPrintMode] = useMediaQuery('print');

  const pushTag = useCallback((tag: string) => setTags((oldTags) => new Set(oldTags.add(tag))), []);

  const tagsContextValue = useMemo(() => ({ tags, pushTag }), [pushTag, tags]);

  return (
    <Grid
      templateColumns="auto fit-content(20em)"
      rowGap="1em"
      columnGap="3em"
      margin={isPrintMode ? '0' : '2em'}
    >
      <TagsContext.Provider value={tagsContextValue}>
        <GridItem colSpan={2}>
          <HStack align="center" spacing="2em">
            <Box margin="0">
              <Heading size="2xl" fontFamily="Oswald">
                <LanguageFragment en="Vladislav Safonov" ru="Владислав Сафонов" />
              </Heading>
              <Heading color="#035" fontWeight="normal">
                <LanguageFragment en="Software Developer" ru="Разработчик ПО (Программист)" />
              </Heading>
            </Box>
            <Box whiteSpace="nowrap">
              <Box margin="0.5em">
                <HStack>
                  <Icon as={AiFillGithub} boxSize="1.5em" />
                  <Link href="https://github.com/ntdesmond" isExternal>
                    github.com/ntdesmond
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={MdMail} boxSize="1.5em" />
                  <Link href="mailto:ntdesmond@gmail.com" isExternal>
                    ntdesmond@gmail.com
                  </Link>
                </HStack>
                <HStack>
                  <TelegramIcon boxSize="1.5em" />
                  <Link href="https://t.me/ntdesmond" isExternal>
                    t.me/ntdesmond
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={MdLocationPin} boxSize="1.5em" />
                  <LanguageFragment en="Innopolis, Russia" ru="Иннополис, Россия" />
                </HStack>
              </Box>
            </Box>
            <OnlyPrint>
              <Spacer />
              <VStack spacing="0" alignSelf="stretch">
                <div>
                  <LanguageFragment
                    en="Interactive CV is available here:"
                    ru="Интерактивное резюме доступно здесь:"
                  />
                </div>
                <a href="https://ntdesmond.github.io/#/cv">ntdesmond.github.io/#/cv</a>
                <QrCode width="100%" flexGrow="1" />
              </VStack>
            </OnlyPrint>
          </HStack>
        </GridItem>
        <Box>
          <Section title={<LanguageFragment en="Summary" ru="О себе" />}>
            <LanguageFragment
              en={
                <>
                  Highly motivated computer science student at Innopolis University with a strong
                  passion for developing user-friendly applications. Experienced in creating
                  full-stack applications and systems, utilizing <Tag slug="FastAPI" /> for the
                  backend and <Tag slug="React" /> for the frontend. Able to set up a{' '}
                  <Tag slug="CI/CD" /> system for automatic deployment. Aiming to deliver smooth and
                  efficient user experience. With a systematic view on projects, I ensure proper
                  system design and quality.
                </>
              }
              ru={
                <>
                  Высокомотивированный студент факультета компьютерных наук Университета Иннополис,
                  увлеченный разработкой user-friendly приложений. Есть опыт создания full-stack
                  приложений и систем с использованием <Tag slug="FastAPI" /> для бэкенда и{' '}
                  <Tag slug="React" /> для фронтенда. Способен настроить <Tag slug="CI/CD" /> для
                  автоматического развертывания приложения. Благодаря систематическому взгляду на
                  проект, могу обеспечить качество работы и правильную архитектуру приложения.
                </>
              }
            />
          </Section>
          <Section title={<LanguageFragment en="Work Experience" ru="Опыт работы" />}>
            <WorkExperienceEntry
              company={<LanguageFragment en="Innopolis University" ru="Университет Иннополис" />}
              position={
                <LanguageFragment
                  en="Developer at Electronics Design Center"
                  ru="Разработчик  Дизайн-центра электроники"
                />
              }
              period={2021}
            >
              <Responsibility tags={['Linux', 'Bash', 'Python', 'Git']}>
                <LanguageFragment
                  en={
                    <>
                      Worked on automation scripts and improvement of open-source instruments{' '}
                      <a href="http://opencircuitdesign.com/qflow/">qflow</a> and{' '}
                      <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                    </>
                  }
                  ru={
                    <>
                      Работал над скриптами автоматизации и улучшением открытых инструментов{' '}
                      <a href="http://opencircuitdesign.com/qflow/">qflow</a> и{' '}
                      <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                    </>
                  }
                />
              </Responsibility>
            </WorkExperienceEntry>
          </Section>
          <Section title={<LanguageFragment en="Projects" ru="Проекты" />}>
            <VStack align="stretch" spacing="1em">
              <Project
                title="uni-feedback-kiosk"
                href="https://github.com/uni-feedback-kiosk"
                description={
                  <LanguageFragment
                    en="Developed a full-stack kiosk system and setup scripts"
                    ru="Разработал full-stack систему для инфокиоска и скрипты для установки"
                  />
                }
                period={2023}
                tags={['Vite', 'React', 'Chakra UI', 'Electron', 'FastAPI', 'MongoDB']}
              />
              <Project
                title="innonymous"
                href="https://github.com/innonymous/app"
                description={
                  <LanguageFragment
                    en="Developed a frontend for an instant web messenger"
                    ru="Разработал фронтенд для веб-мессенджера"
                  />
                }
                period={2023}
                tags={['Vite', 'React', 'Chakra UI']}
              />
              <Project
                title="Paste and Search"
                href="https://github.com/ntdesmond/paste-and-search"
                description={
                  <LanguageFragment
                    en="Developed a website for easier reverse image searching"
                    ru="Разработал веб-сайт для упрощения поиска по изображению"
                  />
                }
                period={2022}
                tags={['Vite', 'React', 'GitHub Pages']}
              />
              <Project
                title="PPFS"
                href="https://github.com/ntdesmond/PPFS"
                description={
                  <LanguageFragment
                    en="Developed a file server with simple authentication"
                    ru="Разработал файл-сервер с простой авторизацией"
                  />
                }
                period={2022}
                tags={['FastAPI', 'MongoDB']}
              />
            </VStack>
          </Section>
        </Box>
        <Box lineHeight="2em">
          <Section title={<LanguageFragment en="Technical skills" ru="Навыки" />}>
            <Heading size="md" marginY="0.5em">
              <LanguageFragment en="Programming languages" ru="Языки программирования" />
            </Heading>
            <TechSkill name="Python">
              <Tag slug="FastAPI" />, pandas, numpy
            </TechSkill>
            <TechSkill name="JS/TS" tagSlug="JS">
              <Tag slug="TypeScript" />, <Tag slug="React" />, <Tag slug="Vite" />,{' '}
              <Tag slug="Electron" />
            </TechSkill>
            <TechSkill name="C#">WPF, WinForms</TechSkill>
            <Heading size="md" marginY="0.5em">
              <LanguageFragment en="Other" ru="Прочее" />
            </Heading>
            <Text>
              <Tag slug="Git" /> (
              <LanguageFragment en="GitHub is preferred" ru="предпочитаю GitHub" />)
            </Text>
            <Text>
              <Tag slug="CI/CD" />: GitHub Actions, GitLab CI
            </Text>
            <Text>Docker, Docker Compose</Text>
            <Text>
              <LanguageFragment en="SQL and NoSQL databases" ru="SQL и NoSQL базы данных" />:{' '}
              Firestore, Redis, MongoDB, SQLite, MySQL, PostgreSQL
            </Text>
            <LanguageFragment
              en={
                <>
                  Basic <Tag slug="Bash" /> and <Tag slug="PowerShell" /> scripting
                </>
              }
              ru={
                <>
                  Простые скрипты на <Tag slug="Bash" /> и <Tag slug="PowerShell" />
                </>
              }
            />
          </Section>
          <Section title={<LanguageFragment en="Education" ru="Образование" />}>
            <EducationEntry
              specialty={
                <LanguageFragment
                  en="Computer science, Bachelor"
                  ru="Компьютерные науки, Бакалавр"
                />
              }
              organization={
                <LanguageFragment en="Innopolis University" ru="Университет Иннополис" />
              }
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
            <UnorderedList>
              <ListItem>
                <LanguageFragment en="Desire to learn" ru="Стремление учиться" />
              </ListItem>
              <ListItem>
                <LanguageFragment en="Responsibility" ru="Ответственность" />
              </ListItem>
              <ListItem>
                <LanguageFragment en="Adaptability" ru="Приспособляемость" />
              </ListItem>
              <ListItem>
                <LanguageFragment en="Cooperation" ru="Сотрудничество" />
              </ListItem>
              <ListItem>
                <LanguageFragment en="Confidence" ru="Уверенность" />
              </ListItem>
            </UnorderedList>
          </Section>
        </Box>
      </TagsContext.Provider>
    </Grid>
  );
};

export default CVDocument;
