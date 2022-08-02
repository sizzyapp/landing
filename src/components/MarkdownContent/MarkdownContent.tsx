import React from "react";
import ReactMarkdown from "react-markdown";
import Twemoji from "react-twemoji";
import { RealReactFC } from "types";
import * as S from "./styles";
import { renderers } from "./renderers";
import { Stack } from "@mantine/core";
import { useStyles } from "./styles";

const MarkdownContent: RealReactFC<{ clamp?: boolean }> = ({
  children,
  clamp,
}) => {
  if (!children) return null;
  const { classes } = useStyles({ clamp });
  return (
    <Stack sx={{ flex: 1, position: "relative" }}>
      <Twemoji>
        <ReactMarkdown
          className={classes.markdown}
          {...{
            //@ts-ignore
            renderers: renderers,
            source: children as string,
            escapeHtml: false,
            clamp: clamp,
          }}
        />
      </Twemoji>
      {clamp && <div className={classes.overflow} />}
    </Stack>
  );
};

export default MarkdownContent;
