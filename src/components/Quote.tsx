import { Box, Stack, Text } from "@mantine/core";
import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ReactFC } from "types";

const QuoteIcon: ReactFC<{ orientation: "Left" | "Right" }> = ({ orientation }) => {
  let isLeft = orientation == "Left";
  const Icon = isLeft ? RiDoubleQuotesL : RiDoubleQuotesR;
  return (
    <Box
      sx={(theme) => ({
        color: theme.colors.purple[0],
        opacity: 0.65,
        position: "absolute",
        [isLeft ? "bottom" : "top"]: -20,
        [isLeft ? "left" : "right"]: 0,
        zIndex: -1,
      })}
    >
      <Icon size={90} />
    </Box>
  );
};

const Quote: React.FC<{ author: string; content: string }> = ({ author, content }) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <QuoteIcon orientation="Left" />
      <QuoteIcon orientation="Right" />
      <Text color="gray.8">
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
