import { AspectRatio, Badge, Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import { TeamMember as TeamMemberType } from "contentlayer/generated";

export const TeamMemberText = ({ children }) => {
  return (
    <Text
      sx={(t) => ({
        ">a": {
          color: t.colors.violet[6],
          textDecoration: "none",
        },
      })}
      color="dimmed"
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};

const TeamMember: React.FC<{ member: TeamMemberType }> = ({ member }) => {
  return (
    <Group
      align="start"
      py="lg"
      sx={(theme) => ({
        [theme.fn.smallerThan("xs")]: {
          flexDirection: "column",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          flex: 1,
          [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
            height: 250,
            width: 250,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            borderTop: "6px solid",
            borderLeft: "6px solid",
            transform: "rotate(-5deg)",
            borderColor: theme.colors["purple"][4],
          })}
        />
        <AspectRatio ratio={1}>
          <Image src={member.image} />
        </AspectRatio>
        <Box
          sx={(theme) => ({
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            borderBottom: "6px solid",
            borderRight: "6px solid",
            transform: "rotate(-5deg)",
            borderColor: theme.colors["purple"][4],
          })}
        />
      </Box>
      <Stack spacing="sm" sx={{ flex: 2 }} align="start">
        <Group align="center" spacing={10}>
          <Title order={2}>{member.name}</Title>
          <Text size="xl">{member.country}</Text>
        </Group>
        <Group spacing={5}>
          {member.roles.map((role) => (
            <Badge key={role} size="md">
              {role}
            </Badge>
          ))}
        </Group>
        <TeamMemberText>{member.description}</TeamMemberText>
      </Stack>
    </Group>
  );
};

export default TeamMember;
