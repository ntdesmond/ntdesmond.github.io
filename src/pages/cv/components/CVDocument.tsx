import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
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
import { useLocation } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { MdMail, MdLocationPin } from 'react-icons/md';
import TelegramIcon from './TelegramIcon';
import TagsContext from '../contexts/TagsContext';
import EducationEntry from './education/EducationEntry';
import Language from './languages/Language';
import Section from './Section';
import TechSkill from './skills/TechSkill';
import TagList from './tags/TagList';
import Tag from './tags/Tag';
import Responsibility from './workExperience/Responsibility';
import WorkExperienceEntry from './workExperience/WorkExperienceEntry';
import QrCode from './QrCode';
import { OnlyPrint } from '../../../components/utils/Print';
import { ProjectId, type Project } from '../data/projects';

const CVDocument = () => {
  const [allTags, setTags] = useState<Set<string>>(new Set(['Frontend', 'Backend']));
  const [isPrintMode] = useMediaQuery('print');

  const { search } = useLocation();

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    const language = new URLSearchParams(search).get('language');
    if (!language) {
      return;
    }

    changeLanguage(language);
  }, [changeLanguage, search]);

  const pushTag = useCallback((tag: string) => setTags((oldTags) => new Set(oldTags.add(tag))), []);

  const tagsContextValue = useMemo(() => ({ tags: allTags, pushTag }), [pushTag, allTags]);

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
              <Heading as="h1" size="xl" fontFamily="cv_name" whiteSpace="nowrap">
                {t('cv_name')}
              </Heading>
              <Heading size="lg" color="#035" fontWeight="normal">
                {t('position')}
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
                  <Text>{t('location')}</Text>
                </HStack>
              </Box>
            </Box>
            <OnlyPrint>
              <Spacer />
              <VStack spacing="0" alignSelf="stretch" textAlign="center">
                <Box>{t('full_cv')}</Box>
                <Link href="https://ntdesmond.github.io/#/cv" isExternal>
                  ntdesmond.github.io/#/cv
                </Link>
                <QrCode width="100%" flexGrow="1" />
              </VStack>
            </OnlyPrint>
          </HStack>
        </GridItem>
        <Box>
          <Section title={t('sections.summary.title')}>
            <Trans
              t={t}
              i18nKey="sections.summary.content"
              components={{
                FastAPI: <Tag slug="FastAPI" />,
                React: <Tag slug="React" />,
                CI_CD: <Tag slug="CI/CD" />,
              }}
            />
          </Section>
          <Section title={t('sections.work.title')}>
            <WorkExperienceEntry
              company={t('sections.work.content.iu_electronics.company')}
              position={t('sections.work.content.iu_electronics.position')}
              period={t('sections.work.content.iu_electronics.period')}
            >
              <Responsibility tags={['Linux', 'Bash', 'Python', 'Git']}>
                <Trans
                  t={t}
                  i18nKey="sections.work.content.iu_electronics.responsibilities.automation"
                  components={[
                    <Link href="http://opencircuitdesign.com/qflow/" isExternal />,
                    <Link href="https://github.com/The-OpenROAD-Project/OpenLane/" isExternal />,
                  ]}
                />
              </Responsibility>
            </WorkExperienceEntry>
          </Section>
          <Section title={t('sections.projects.title')}>
            <VStack align="stretch" spacing="1em">
              {Object.entries(
                t('sections.projects.content', { returnObjects: true }) as Record<
                  ProjectId,
                  Project
                >,
              ).map(([id, project]) => (
                <HStack key={id} justify="space-between" align="center">
                  <Box>
                    <Heading size="md">
                      <Link href={project.url} isExternal>
                        {project.name}
                      </Link>
                    </Heading>
                    <Text>{project.description}</Text>
                    <Text>{project.year}</Text>
                  </Box>
                  <Box width="10em">
                    <TagList tags={project.tags} print />
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Section>
        </Box>
        <Box lineHeight="2em">
          <Section title={t('sections.tech_skills.title')}>
            <Heading size="md" marginY="0.5em">
              {t('sections.tech_skills.content.languages')}
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
              {t('sections.tech_skills.content.other')}
            </Heading>
            <Text>
              <Tag slug="Git" /> ({t('sections.tech_skills.content.prefer_github')})
            </Text>
            <Text>
              <Tag slug="CI/CD" />: GitHub Actions, GitLab CI
            </Text>
            <Text>Docker, Docker Compose</Text>
            <Text>Redis, MongoDB, SQLite, MySQL, PostgreSQL</Text>
            <Text>
              <Trans
                t={t}
                i18nKey="sections.tech_skills.content.scripts"
                components={{
                  Bash: <Tag slug="Bash" />,
                  PowerShell: <Tag slug="PowerShell" />,
                }}
              />
            </Text>
          </Section>
          <Section title={t('sections.education.title')}>
            <EducationEntry
              specialty={t('sections.education.content.specialty')}
              organization={t('sections.education.content.organization')}
              period="2019 — 2023"
            />
          </Section>
          <Section title={t('sections.languages.title')}>
            {(
              t('sections.languages.content', { returnObjects: true }) as {
                name: string;
                level: string;
              }[]
            ).map(({ name, level }) => (
              <Language key={name} {...{ name, level }} />
            ))}
          </Section>
          <Section title={t('sections.soft_skills.title')}>
            <UnorderedList marginLeft="1.5em">
              {(t('sections.soft_skills.content', { returnObjects: true }) as string[]).map(
                (item) => (
                  <ListItem key={item} sx={{ '::marker': { fontSize: '1.5em' } }}>
                    {item}
                  </ListItem>
                ),
              )}
            </UnorderedList>
          </Section>
        </Box>
      </TagsContext.Provider>
    </Grid>
  );
};

export default CVDocument;
