import React from "react";
import Twemoji from "react-twemoji";
import { RealReactFC } from "types";
import { useStyles } from "./styles";
import { Stack } from "@mantine/core";
import { renderers } from "./renderers";
import Markdown from "markdown-to-jsx";

const MarkdownContent: RealReactFC<{ clamp?: boolean }> = ({ children, clamp }) => {
  if (!children) return null;
  const { classes } = useStyles({ clamp });
  return (
    <Stack sx={{ flex: 1, position: "relative" }}>
      <Twemoji>
        <Markdown options={{ overrides: renderers }} className={classes.markdown}>
          {children as string}
        </Markdown>
      </Twemoji>
      {clamp && <div className={classes.overflow} />}
    </Stack>
  );
};

export default MarkdownContent;
