import { Box, Stack, Text } from "@mantine/core";
import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { RealReactFC } from "types";

const QuoteIcon: RealReactFC<{ orientation: "Left" | "Right" }> = ({
  orientation,
}) => {
  let isLeft = orientation == "Left";
  const Icon = isLeft ? RiDoubleQuotesL : RiDoubleQuotesR;
  return (
    <Box
      sx={(theme) => ({
        color: theme.colors.purple[0],
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

const Quote: React.FC<{ author: string; content: string }> = ({
  author,
  content,
}) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <QuoteIcon orientation="Left" />
      <QuoteIcon orientation="Right" />
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
