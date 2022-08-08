import { Text, Box, Center, Transition, Avatar } from "@mantine/core";
import { TeamMember } from "contentlayer/generated";

const TeamMemberAvatar: React.FC<{ member: TeamMember; expand: boolean }> = ({
  member,
  expand,
}) => {
  return (
    <Box
      sx={(theme) => ({
        width: 150,
        height: 150,
        background: theme.colors[member.color][5],
        borderRadius: "100%",
        overflow: "hidden",
      })}
    >
      <Transition transition="slide-up" mounted={expand}>
        {(styles) => (
          <Center sx={{ width: "100%", height: "100%" }} style={styles}>
            <Avatar
              src={member.image}
              sx={{
                width: "90%",
                height: "100%",
                marginTop: "auto",
              }}
            />
          </Center>
        )}
      </Transition>
      <Transition transition="fade" mounted={!expand}>
        {(styles) => (
          <Center sx={{ width: "100%", height: "100%" }} style={styles}>
            <Text sx={{ fontSize: "4rem", color: "white", opacity: 0.7 }}>
              {member.name.charAt(0)}
            </Text>
          </Center>
        )}
      </Transition>
    </Box>
  );
};

export default TeamMemberAvatar;
