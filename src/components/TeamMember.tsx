import {
  Text,
  Box,
  Center,
  Avatar,
  AspectRatio,
  Stack,
  Title,
  Group,
  Image,
  Badge,
} from "@mantine/core";
import { TeamMember as TeamMemberType } from "contentlayer/generated";

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
            border: "1px solid",
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
              {" "}
              {role}
            </Badge>
          ))}
        </Group>
        <Text color="dimmed">{member.description}</Text>
      </Stack>
    </Group>
  );
};

export default TeamMember;
