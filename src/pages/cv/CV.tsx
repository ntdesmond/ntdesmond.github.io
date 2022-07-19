import styled from "styled-components";
import { YCentered } from "../../components/layout/alignment/CenterAlign";
import FixedMargin, {
  NoMargin,
} from "../../components/layout/alignment/FixedMargin";
import { FlexColumn } from "../../components/layout/alignment/Flex";
import Layout from "../../components/layout/Layout";
import {
  PageHeading,
  SectionHeading,
} from "../../components/typography/Headings";
import EducationEntry from "./components/education/EducationEntry";
import LanguageEntry from "./components/languages/LanguageEntry";
import ProgrammingLanguageEntry from "./components/programmingLanguages/ProgrammingLanguageEntry";
import ProgrammingLanguages from "./components/programmingLanguages/ProgrammingLanguages";
import ProjectEntry from "./components/projects/ProjectEntry";
import { Section } from "./components/Section";
import SoftSkillsList from "./components/skills/SoftSkillsList";
import Tag from "./components/tags/Tag";
import TagList from "./components/tags/TagList";
import Responsibility from "./components/workExperience/Responsibility";
import WorkExperienceEntry from "./components/workExperience/WorkExperienceEntry";

const StyledCV = styled.div`
  display: grid;
  grid-template:
    "name contact"
    "sections1 sections2";
  gap: 1em;
`;

const NameSection = styled(YCentered)`
  grid-area: name;
`;

const ContactSection = styled(YCentered)`
  grid-area: contact;
`;

const StyledTagList = styled(TagList)`
  font-size: 1.2em;
`;

const Name = styled(PageHeading)`
  font-family: "Oswald", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
`;

const Position = styled(SectionHeading)`
  font-weight: normal;
  color: #035;
`;

const CV = () => (
  <Layout>
    <StyledCV>
      <NameSection>
        <NoMargin>
          <Name>Vladislav Safonov</Name>
          <Position>Software Engineer</Position>
        </NoMargin>
      </NameSection>
      <ContactSection>
        <FixedMargin margin="0.5em">
          <p>github.com/ntdesmond</p>
          <p>ntdesmond@gmail.com</p>
          <p>@ntdesmond</p>
          <p>Innopolis, Russia</p>
        </FixedMargin>
      </ContactSection>
      <FlexColumn>
        <Section title="Work Experience">
          <WorkExperienceEntry
            company="Innopolis University"
            position="Electronics Design Center Specialist"
            period="April 2021 - October 2021"
          >
            <Responsibility tags={["Linux", "Bash", "Python", "Git"]}>
              Work on automation scripts and try to improve open-source
              instruments{" "}
              <a href="http://opencircuitdesign.com/qflow/">qflow</a> and{" "}
              <a href="https://github.com/The-OpenROAD-Project/OpenLane/">
                OpenLane
              </a>
            </Responsibility>
          </WorkExperienceEntry>
        </Section>
        <Section title="Projects">
          <ProjectEntry
            title="fraumarta.store"
            href="https://fraumarta.store"
            description="Website written from scratch"
            period="2021"
            tags={["JS", "HTML", "Python", "Flask", "nginx"]}
          />
          <ProjectEntry
            title="@goodscalcbot"
            href="https://t.me/goodscalcbot"
            description="Telegram bot to share expenses"
            period="2020"
            tags={["Telegram API", "Google Firestore", "Python"]}
          />
        </Section>
        <Section title="Technical skills">
          <ul>
            <li>
              Experienced in <Tag slug="Git" />
            </li>
            <li>
              Experienced in <Tag slug="Docker" />
            </li>
            <li>
              Worked with SQL and NoSQL databases (<Tag slug="Firestore" />,{" "}
              <Tag slug="Redis" />, <Tag slug="MongoDB" />,{" "}
              <Tag slug="SQLite" />, <Tag slug="MySQL" />,{" "}
              <Tag slug="PostgreSQL" />)
            </li>
            <li>
              Experienced in <Tag slug="Python" />
              <ul>
                <li>
                  Experienced in <Tag slug="FastAPI" /> framework
                </li>
                <li>
                  Basic knowledge of <Tag slug="pandas" />, <Tag slug="numpy" />{" "}
                  libraries
                </li>
              </ul>
            </li>
            <li>
              Basic knowledge of <Tag slug="Bash" /> scripting
            </li>
          </ul>
        </Section>
        <Section title="Programming languages">
          <ProgrammingLanguages>
            <ProgrammingLanguageEntry name="Python" value={5} />
            <ProgrammingLanguageEntry name="JS/TS" value={4} tagSlug="JS" />
            <ProgrammingLanguageEntry name="C#" value={3} />
            <ProgrammingLanguageEntry name="Java" value={1} />
            <ProgrammingLanguageEntry name="PHP" value={1} />
            <ProgrammingLanguageEntry name="C++" value={1} />
          </ProgrammingLanguages>
        </Section>
      </FlexColumn>
      <FlexColumn>
        <Section title="Education">
          <EducationEntry
            speciality="Computer science, Bachelor"
            organization="Innopolis University"
            period="2019 - Present"
          />
        </Section>
        <Section title="Languages">
          <LanguageEntry language="English" level="Upper-Intermediate" />
          <LanguageEntry language="Russian" level="Native" />
        </Section>
        <Section title="Soft skills">
          <SoftSkillsList
            skills={[
              "Desire to learn",
              "Responsibility",
              "Writing skills",
              "Adaptability",
              "Friendliness",
              "Cooperation",
              "Confidence",
              "Dedication",
              "Honesty",
            ]}
          />
        </Section>
        <Section title="Tags">
          <StyledTagList
            tags={[
              "JS",
              "HTML",
              "Python",
              "Flask",
              "nginx",
              "Docker",
              "Bash",
              "Linux",
              "C#",
              "Git",
              "Frontend",
              "Backend",
              "React",
              "FastAPI",
            ]}
          />
        </Section>
      </FlexColumn>
    </StyledCV>
  </Layout>
);

export default CV;
