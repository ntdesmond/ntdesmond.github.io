import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { InTextHeading } from "../components/typography/Headings";

const Home = () => (
  <Layout>
    <p>
      Hello, <code>ntdesmond</code> here.
    </p>
    <InTextHeading>Who?</InTextHeading>
    <p>
      <code>ntdesmond</code>, usually pronounced as{" "}
      <i>NT Desmond (an tee desmond)</i> is my nickname.
    </p>
    <p>
      My real name is <b>Vladislav Safonov</b>, and, as of 2022, I'm a student
      of <a href="https://innopolis.university/">Innopolis University</a>.
    </p>
    <InTextHeading>So?</InTextHeading>
    <p>
      Originally this site is meant to hold my{" "}
      <Link to="/cv">"interactive" CV</Link>, written in React, so that it works
      as an example of my work.
    </p>
    <p>Probably, I will add some more stuff here, we'll see.</p>
  </Layout>
);

export default Home;
