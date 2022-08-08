import {
  Container,
  Group,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Box,
  Transition,
  Badge,
} from "@mantine/core";
import TeamMemberAvatar from "components/TeamMemberAvatar";
import { useState } from "react";
import { TeamMember } from "contentlayer/generated";

const Team: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <Container>
      <Stack spacing="xl" sx={{ width: "100%", flex: 1 }}>
        <Box
          sx={{
            flex: 1,
            height: 200,
          }}
        >
          <Stack>
            <Title
              sx={(theme) => ({
                color:
                  theme.colors[selectedMember?.color]?.[6] ?? "currentColor",
              })}
            >
              {selectedMember?.name ?? "Our Team"}
            </Title>
            <Stack
              spacing={5}
              sx={{
                minHeight: 100,
              }}
              align="start"
            >
              {selectedMember?.role && (
                <Badge color={selectedMember.color} size="lg">
                  {selectedMember.role}
                </Badge>
              )}
              {selectedMember && <Text>{selectedMember?.description}</Text>}
              {!selectedMember && (
                <>
                  <Text>We're an amazing team of four humans and a dog!</Text>
                  <Text>Hover the letters to learn more!</Text>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
        <Group spacing={10}>
          {members.map((member) => (
            <Box
              sx={{ maxWidth: 150 }}
              key={member.name}
              onMouseOver={() => {
                setSelectedMember(member);
              }}
              onMouseLeave={() => {
                setSelectedMember(null);
              }}
            >
              <TeamMemberAvatar
                member={member}
                expand={selectedMember === member}
              />
            </Box>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

export default Team;
