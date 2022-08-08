import { NextPage } from "next";
import Shell from "components/Shell";
import Team from "components/Team";

const AboutPage: NextPage = () => {
  return (
    <Shell>
      <Team />
    </Shell>
  );
};

export default AboutPage;
