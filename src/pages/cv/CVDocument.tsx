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
import TelegramIcon from './components/icons/TelegramIcon';
import TagsContext from './contexts/TagsContext';
import Section from './components/Section';
import TagList from './components/tags/TagList';
import Tag from './components/tags/Tag';
import QrCode from './components/icons/QrCode';
import { OnlyPrint } from '../../components/utils/Print';
import type { ProjectId, Project } from './data/projects';
import type { Language } from './Language';
import type { LanguageProficiency } from './data/languages';
import type { WorkEntryId, WorkExperience } from './data/work';
import type { Education, EducationId } from './data/education';
import type { ProgrammingLanguageId, TechSkillId } from './data/tech_skills';

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
                {t('info.cv_name')}
              </Heading>
              <Heading size="lg" color="#035" fontWeight="normal">
                {t('info.position')}
              </Heading>
            </Box>
            <Box whiteSpace="nowrap">
              <Grid
                margin="0.5em"
                gridTemplateRows="repeat(4, auto)"
                columnGap="0.5em"
                gridAutoFlow="column"
              >
                <Icon as={AiFillGithub} boxSize="1.5em" />
                <Icon as={MdMail} boxSize="1.5em" />
                <TelegramIcon boxSize="1.5em" />
                <Icon as={MdLocationPin} boxSize="1.5em" />
                {['github', 'mail', 'telegram', 'location'].map((key) => (
                  <Text key={key}>
                    <Trans
                      t={t}
                      i18nKey={`info.${key}`}
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      components={{ a: <Link isExternal /> }}
                    />
                  </Text>
                ))}
              </Grid>
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
                Tag: <Tag />,
              }}
            />
          </Section>
          <Section title={t('sections.work.title')}>
            {Object.entries(
              t('sections.work.content', { returnObjects: true }) as Record<
                WorkEntryId,
                WorkExperience
              >,
            ).map(([id, work]) => (
              <Box marginBottom="1em" key={id}>
                <HStack justify="space-between" align="center">
                  <Box>
                    <Heading size="md">{work.company}</Heading>
                    <Text>{work.position}</Text>
                    <Text>{work.period}</Text>
                  </Box>
                </HStack>
                <Box>
                  {Object.entries(work.responsibilities).map(([rid, { content, tags }]) => (
                    <HStack justify="space-between" key={rid}>
                      <Box>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Trans components={{ a: <Link isExternal /> }}>{content}</Trans>
                      </Box>
                      <TagList tags={tags} print />
                    </HStack>
                  ))}
                </Box>
              </Box>
            ))}
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
              {t('sections.tech_skills.languages')}
            </Heading>
            {Object.entries(
              t('sections.tech_skills.content.languages', { returnObjects: true }) as Record<
                ProgrammingLanguageId,
                string
              >,
            ).map(([id, content]) => (
              <Text key={id}>
                <Trans components={{ Tag: <Tag /> }}>{content}</Trans>
              </Text>
            ))}
            <Heading size="md" marginY="0.5em">
              {t('sections.tech_skills.other')}
            </Heading>
            {Object.entries(
              t('sections.tech_skills.content.other', { returnObjects: true }) as Record<
                TechSkillId,
                string
              >,
            ).map(([id, content]) => (
              <Text key={id}>
                <Trans components={{ Tag: <Tag /> }}>{content}</Trans>
              </Text>
            ))}
          </Section>
          <Section title={t('sections.education.title')}>
            {Object.entries(
              t('sections.education.content', { returnObjects: true }) as Record<
                EducationId,
                Education
              >,
            ).map(([id, { organization, period, specialty }]) => (
              <Box key={id}>
                <Heading size="md">{organization}</Heading>
                <Text>{specialty}</Text>
                <Text>{period}</Text>
              </Box>
            ))}
          </Section>
          <Section title={t('sections.languages.title')}>
            {Object.entries(
              t('sections.languages.content', { returnObjects: true }) as Record<
                Language,
                LanguageProficiency
              >,
            ).map(([id, { language, level }]) => (
              <Text key={id}>
                <b>{language}</b>: {level}
              </Text>
            ))}
          </Section>
          <Section title={t('sections.soft_skills.title')}>
            <UnorderedList marginLeft="1.5em">
              {(t('sections.soft_skills.content', { returnObjects: true }) as string[]).map(
                (item) => (
                  <ListItem key={item}>{item}</ListItem>
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
