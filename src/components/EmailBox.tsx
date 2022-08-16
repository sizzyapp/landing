import { Avatar, Divider, Group, Stack, Text } from "@mantine/core";
import { FiAtSign, FiChevronDown, FiSmile, FiVideo } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { RealReactFC } from "types";

const EmailBox: RealReactFC<{
  subject: string;
  recipient: string;
}> = ({ children, subject, recipient }) => {
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
      <Text color="dimmed">To: {recipient} </Text>
      <Divider />
      <Text color="dimmed">
        Subject:{" "}
        <Text component="b" color="black">
          {subject}
        </Text>
      </Text>
      <Divider />
      {children}
    </Stack>
  );
};

export default EmailBox;
