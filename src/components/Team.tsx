import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import TeamMember from "components/TeamMember";
import { TeamMember as TeamMemberType } from "contentlayer/generated";
import { Vertical } from "styles/layout-components";

export const TeamMission = () => {
  return (
    <Vertical>
      <Text size="xl">
        We're a small, remote team with a very ambitious mission.
      </Text>
      <Text size="lg">
        <b>We believe </b> everyone should be able to build and ship their ideas
        without having to waste time struggling with inefficient tools.
      </Text>{" "}
      <Text size="lg">
        <b>We want to </b> create a set of interlinked tools and platforms that
        focus on minimizing the friction from idea to execution.
      </Text>
    </Vertical>
  );
};

const Team: React.FC<{ members: TeamMemberType[] }> = ({ members }) => {
  let theCrew = (
    <Box sx={{ position: "relative", width: "fit-content" }}>
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          background: theme.colors["purple"][0],
          position: "absolute",
          transform: "translate(5px, 5px) rotate(-5deg)",
        })}
      />
      <Title
        sx={{
          fontSize: 54,
          fontWeight: 900,
          opacity: 0.8,
          display: "inline",
        }}
      >
        The Crew
      </Title>
    </Box>
  );

  return (
    <Vertical fullW spacing="xl" sx={{ flex: 1 }}>
      <Vertical spacing="xl">
        {theCrew}
        <TeamMission />
      </Vertical>
      <SimpleGrid
        cols={2}
        spacing="md"
        sx={{ width: "100%" }}
        breakpoints={[{ maxWidth: 1000, cols: 1, spacing: "sm" }]}
      >
        {members.map((member) => (
          <Box key={member.name}>
            <TeamMember member={member} />
          </Box>
        ))}
      </SimpleGrid>
    </Vertical>
  );
};

export default Team;
