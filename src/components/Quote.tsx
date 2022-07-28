import { Box, Stack, Text } from "@mantine/core";
import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Quote: React.FC<{ author: string; content: string }> = ({
  author,
  content,
}) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Box
        sx={(theme) => ({
          color: theme.colors.purple[0],
          position: "absolute",
          top: -20,
          left: 0,
          zIndex: -1,
        })}
      >
        <RiDoubleQuotesL size={90} />
      </Box>
      <Box
        sx={(theme) => ({
          color: theme.colors.purple[0],
          position: "absolute",
          bottom: -20,
          right: 0,
          zIndex: -1,
        })}
      >
        <RiDoubleQuotesR size={90} />
      </Box>
      <Text color="dimmed">
        <i>{content}</i>
      </Text>
      <Text
        color="dimmed"
        sx={(theme) => ({
          fontSize: theme.fontSizes.sm,
          textAlign: "right",
        })}
      >
        <b>{author}</b>
      </Text>
    </Stack>
  );
};

export default Quote;
