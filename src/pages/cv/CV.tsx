import styled from "styled-components";
import { YCentered } from "../../components/layout/alignment/CenterAlign";
import { FlexColumn } from "../../components/layout/alignment/Flex";
import Layout from "../../components/layout/Layout";
import {
  PageHeading,
  SectionHeading,
} from "../../components/typography/Headings";
import EducationEntry from "./components/education/EducationEntry";
import LanguageEntry from "./components/languages/LanguageEntry";
import ProgrammingLanguages from "./components/programmingLanguages/ProgrammingLanguages";
import ProjectEntry from "./components/projects/ProjectEntry";
import { Section } from "./components/Section";
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
  > * {
    margin: 0;
  }
`;

const ContactSection = styled(YCentered)`
  grid-area: contact;
  gap: 0.5em;

  > * {
    margin: 0;
  }
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
        <Name>Vladislav Safonov</Name>
        <Position>Software Engineer</Position>
      </NameSection>
      <ContactSection>
        <div>
          <p>github.com/ntdesmond</p>
          <p>ntdesmond@gmail.com</p>
          <p>@ntdesmond</p>
          <p>Innopolis, Russia</p>
        </div>
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
              Experienced in <b>Git</b>
            </li>
            <li>
              Experienced in <b>Docker</b>
            </li>
            <li>
              Worked with SQL and NoSQL databases (<b>Firestore</b>,{" "}
              <b>Redis</b>, <b>MongoDB</b>, <b>SQLite</b>, <b>MySQL</b>,{" "}
              <b>PostgreSQL</b>)
            </li>
            <li>
              Experienced in <b>Python</b>
              <ul>
                <li>
                  Experienced in <b>FastAPI</b> framework
                </li>
                <li>
                  Basic knowledge of <b>pandas</b>, <b>numpy</b> libraries
                </li>
              </ul>
            </li>
            <li>
              Basic knowledge of <b>Bash</b> scripting
            </li>
          </ul>
        </Section>
        <Section title="Programming languages">
          <ProgrammingLanguages
            entries={{
              Python: 5,
              "JS/TS": 4,
              "C#": 3,
              Java: 1,
              PHP: 1,
              "C++": 1,
            }}
          />
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
          <ul>
            <li>Desire to learn</li>
            <li>Responsibility</li>
            <li>Writing skills</li>
            <li>Adaptability</li>
            <li>Cooperation</li>
            <li>Friendliness</li>
            <li>Confidence</li>
            <li>Dedication</li>
            <li>Honesty</li>
          </ul>
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