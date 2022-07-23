import React, { useState } from 'react';
import styled from 'styled-components';
import { YCentered } from '../../components/layout/alignment/CenterAlign';
import FixedMargin, { NoMargin } from '../../components/layout/alignment/FixedMargin';
import { FlexColumn } from '../../components/layout/alignment/Flex';
import Layout from '../../components/layout/Layout';
import { PageHeading, SectionHeading } from '../../components/typography/Headings';
import EmailLink from './components/contacts/EmailLink';
import GithubLink from './components/contacts/GithubLink';
import Location from './components/contacts/Location';
import TelegramLink from './components/contacts/TelegramLink';
import EducationEntry from './components/education/EducationEntry';
import Language from './components/languages/Language';
import ProgrammingLanguage from './components/programmingLanguages/ProgrammingLanguage';
import ProgrammingLanguages from './components/programmingLanguages/ProgrammingLanguages';
import Project from './components/projects/Project';
import Section from './components/Section';
import Skill from './components/skills/Skill';
import SoftSkillsList from './components/skills/SoftSkillsList';
import Tag from './components/tags/Tag';
import TagsSection from './components/tags/TagsSection';
import Responsibility from './components/workExperience/Responsibility';
import WorkExperienceEntry from './components/workExperience/WorkExperienceEntry';
import TagsContext from './contexts/TagsContext';

const StyledCV = styled.div`
  display: grid;
  grid-template:
    'name contact'
    'sections1 sections2' /
    auto fit-content(20em);
  gap: 1em;
  margin: 3em 2em;

  @media screen and (max-width: 720px) {
    grid-template-areas:
      'name contact'
      'sections1 sections1'
      'sections2 sections2';
  }

  @media screen and (max-width: 640px) {
    grid-template-areas:
      'name'
      'contact'
      'sections1'
      'sections2';
  }
`;

const NameSection = styled(YCentered)`
  grid-area: name;
  white-space: nowrap;

  @media screen and (max-width: 640px) {
    justify-content: center;
    text-align: center;
  }
`;

const ContactSection = styled(YCentered)`
  grid-area: contact;
  white-space: nowrap;

  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`;

const FirstColumn = styled(FlexColumn)`
  grid-area: sections1;
`;

const SecondColumn = styled(FlexColumn)`
  grid-area: sections2;
`;

const Name = styled(PageHeading)`
  font-family: 'Oswald', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Position = styled(SectionHeading)`
  font-weight: normal;
  color: #035;
`;

const CV = () => {
  const [tags, setTags] = useState<Set<string>>(new Set(['Frontend', 'Backend']));

  const pushTag = (tag: string) => setTags(tags.add(tag));

  const contextValue = React.useMemo(() => ({ tags, pushTag }), [tags]);

  return (
    <Layout>
      <StyledCV>
        <TagsContext.Provider value={contextValue}>
          <NameSection>
            <NoMargin>
              <Name>Vladislav Safonov</Name>
              <Position>Software Engineer</Position>
            </NoMargin>
          </NameSection>
          <ContactSection>
            <FixedMargin margin="0.5em">
              <GithubLink path="ntdesmond" />
              <EmailLink address="ntdesmond@gmail.com" />
              <TelegramLink path="ntdesmond" />
              <Location location="Innopolis, Russia" />
            </FixedMargin>
          </ContactSection>
          <FirstColumn>
            <Section title="Work Experience">
              <WorkExperienceEntry
                company="Innopolis University"
                position="Electronics Design Center Specialist"
                period="April 2021 - October 2021"
              >
                <Responsibility tags={['Linux', 'Bash', 'Python', 'Git']}>
                  Work on automation scripts and try to improve open-source instruments{' '}
                  <a href="http://opencircuitdesign.com/qflow/">qflow</a> and{' '}
                  <a href="https://github.com/The-OpenROAD-Project/OpenLane/">OpenLane</a>
                </Responsibility>
              </WorkExperienceEntry>
            </Section>
            <Section title="Projects">
              <Project
                title="ntdesmond.github.io"
                href="https://ntdesmond.github.io"
                description="Personal website with interactive CV"
                period="2022"
                tags={['TypeScript', 'React', 'Github Actions']}
              />
              <Project
                title="PPFS"
                href="https://github.com/ntdesmond/PPFS"
                description="File server made with FastAPI and GridFS"
                period="2022"
                tags={['Python', 'FastAPI', 'asyncio', 'MongoDB', 'Docker', 'GridFS']}
              />
              <Project
                title="fraumarta.store"
                href="https://fraumarta.store"
                description="Website written from scratch"
                period="2021"
                tags={['JS', 'HTML', 'Python', 'Flask', 'nginx']}
              />
              <Project
                title="@goodscalcbot"
                href="https://t.me/goodscalcbot"
                description="Telegram bot to share expenses"
                period="2020"
                tags={['Telegram API', 'Firestore', 'Python']}
              />
            </Section>
            <Section title="Technical skills">
              <Skill>
                Experienced in <Tag slug="Git" />
              </Skill>
              <Skill>
                Experienced in <Tag slug="Docker" />
              </Skill>
              <Skill>
                Worked with SQL and NoSQL databases (<Tag slug="Firestore" />, <Tag slug="Redis" />,{' '}
                <Tag slug="MongoDB" />, <Tag slug="SQLite" />, <Tag slug="MySQL" />,{' '}
                <Tag slug="PostgreSQL" />)
              </Skill>
              <Skill>
                Experienced in <Tag slug="Python" />
                <Skill>
                  Experienced in <Tag slug="FastAPI" /> framework
                </Skill>
                <Skill>
                  Basic knowledge of <Tag slug="pandas" />, <Tag slug="numpy" /> libraries
                </Skill>
              </Skill>
              <Skill>
                Basic knowledge of <Tag slug="Bash" /> scripting
              </Skill>
            </Section>
            <Section title="Programming languages">
              <ProgrammingLanguages>
                <ProgrammingLanguage name="Python" value={4} />
                <ProgrammingLanguage name="JS/TS" value={4} tagSlug="JS" />
                <ProgrammingLanguage name="C#" value={3} />
                <ProgrammingLanguage name="Java" value={1} />
                <ProgrammingLanguage name="PHP" value={1} />
                <ProgrammingLanguage name="C++" value={1} />
              </ProgrammingLanguages>
            </Section>
          </FirstColumn>
          <SecondColumn>
            <Section title="Education">
              <EducationEntry
                speciality="Computer science, Bachelor"
                organization="Innopolis University"
                period="2019 - Present"
              />
            </Section>
            <Section title="Languages">
              <Language name="English" level="Upper-Intermediate" />
              <Language name="Russian" level="Native" />
            </Section>
            <Section title="Soft skills">
              <SoftSkillsList
                skills={[
                  'Desire to learn',
                  'Responsibility',
                  'Writing skills',
                  'Adaptability',
                  'Friendliness',
                  'Cooperation',
                  'Confidence',
                  'Dedication',
                  'Honesty',
                ]}
              />
            </Section>
            <Section title="Tags">
              <TagsSection />
            </Section>
          </SecondColumn>
        </TagsContext.Provider>
      </StyledCV>
    </Layout>
  );
};

export default CV;
