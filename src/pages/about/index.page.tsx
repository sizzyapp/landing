import { NextPage } from "next";
import Shell from "components/Shell";
import Team from "components/Team";
import { allTeamMembers, TeamMember } from "contentlayer/generated";

const AboutPage: NextPage<{ allTeamMembers: TeamMember[] }> = ({
  allTeamMembers,
}) => {
  return (
    <Shell>
      <Team members={allTeamMembers} />
    </Shell>
  );
};

export default AboutPage;

export async function getStaticProps() {
  return {
    props: {
      allTeamMembers,
    },
  };
}
