import React from "react";
import * as A from "styles/shared-components";
import Twemoji from "react-twemoji";
import { RealReactFC } from "types";
import * as S from "./styles";
import { renderers } from "./renderers";

const MarkdownContent: RealReactFC<{ clamp?: boolean }> = ({
  children,
  clamp,
}) => {
  if (!children) return null;
  return (
    <A.Vertical fullW fullH flex={1} position="relative">
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
    </A.Vertical>
  );
};

export default MarkdownContent;
