import { Avatar, Group, Stack, Text } from "@mantine/core";
import { FiAtSign, FiChevronDown, FiSmile, FiVideo } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";

const SlackMessage: React.FC<{ text: string; avatar: string }> = ({
  text,
  avatar,
}) => {
  return (
    <Stack
      sx={(t) => ({
        width: "100%",
        border: "1px solid lightgray",
        borderRadius: t.radius.md,
        padding: t.spacing.md,
        background: `${t.colors.orange[0]}55`,
      })}
    >
      <Group>
        <Avatar src={avatar} />
        <Text sx={{ maxWidth: 750 }}> {text}</Text>
      </Group>
      <Group
        position="apart"
        sx={(t) => ({
          color: t.colors.gray[5],
        })}
      >
        <Group>
          <FiAtSign />
          <FiSmile />
          <FiVideo />
        </Group>
        <Group>
          <IoMdSend />
          <FiChevronDown />
        </Group>
      </Group>
    </Stack>
  );
};

export default SlackMessage;
