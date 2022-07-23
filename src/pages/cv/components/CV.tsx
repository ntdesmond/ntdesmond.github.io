import React, { useState } from 'react';
import styled from 'styled-components';
import { YCentered } from '../../../components/layout/alignment/CenterAlign';
import FixedMargin, { NoMargin } from '../../../components/layout/alignment/FixedMargin';
import { FlexColumn } from '../../../components/layout/alignment/Flex';
import {
  InTextHeading,
  PageHeading,
  SectionHeading,
} from '../../../components/typography/Headings';
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
import TagsContext from '../contexts/TagsContext';

const StyledCV = styled.div`
  display: grid;
  grid-template:
    'name contact'
    'sections1 sections2' /
    auto fit-content(20em);
  gap: 1em;
  margin: 1.52cm;

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
              href="https://github.com/ntdesmond/ntdesmond.github.io"
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
            <InTextHeading>Programming languages</InTextHeading>
            <TechSkill name="Python" value={0.8}>
              <BulletPoint>
                Experienced in <Tag slug="FastAPI" /> framework
              </BulletPoint>
              <BulletPoint>
                Basic knowledge of <Tag slug="pandas" />, <Tag slug="numpy" /> libraries
              </BulletPoint>
            </TechSkill>
            <TechSkill name="JS/TS" value={0.7} tagSlug="JS">
              <BulletPoint>
                Used <Tag slug="React" /> and <Tag slug="Webpack" /> both in{' '}
                <Tag name="JavaScript" slug="JS" /> and <Tag slug="TypeScript" />
              </BulletPoint>
            </TechSkill>
            <TechSkill name="C#" value={0.5} />
            <TechSkill name="Java" value={0.2} />
            <TechSkill name="PHP" value={0.1} />
            <TechSkill name="C++" value={0.1} />
            <InTextHeading>Other</InTextHeading>
            <BulletPoint>
              Experienced in <Tag slug="Git" />
              <BulletPoint>
                Using <Tag slug="GitHub" /> mostly, worked with <Tag slug="GitHub Actions" />
              </BulletPoint>
            </BulletPoint>
            <BulletPoint>
              Experienced in <Tag slug="Docker" /> and <Tag slug="Docker Compose" />
            </BulletPoint>
            <BulletPoint>
              Worked with SQL and NoSQL databases (<Tag slug="Firestore" />, <Tag slug="Redis" />,{' '}
              <Tag slug="MongoDB" />, <Tag slug="SQLite" />, <Tag slug="MySQL" />,{' '}
              <Tag slug="PostgreSQL" />)
            </BulletPoint>
            <BulletPoint>
              Basic knowledge of <Tag slug="Bash" /> scripting
            </BulletPoint>
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
  );
};

export default CV;
