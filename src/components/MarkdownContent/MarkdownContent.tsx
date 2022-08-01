import React from "react";
import Twemoji from "react-twemoji";
import { RealReactFC } from "types";
import * as S from "./styles";
import { renderers } from "./renderers";
import { Stack } from "@mantine/core";

const MarkdownContent: RealReactFC<{ clamp?: boolean }> = ({
  children,
  clamp,
}) => {
  if (!children) return null;
  return (
    <Stack sx={{ flex: 1, position: "relative" }}>
      <Twemoji>
        <S.Markdown
          {...{
            //@ts-ignore
            renderers: renderers,
            source: children as string,
            escapeHtml: false,
            clamp: clamp,
          }}
        />
      </Twemoji>
      {clamp && <S.Overflow />}
    </Stack>
  );
};

export default MarkdownContent;
