import React from "react";
import $Markdown from "markdown-to-jsx";
import { MDXPreviewProps } from "./types";

export const RawMDXPreview: React.FC<MDXPreviewProps> = (props) => {
  const {
    markdown = "",
    className,
    MDXrenderer = $Markdown,
    disableParsingRawHTML = true,
    overrides,
  } = props;

  return (
    <MDXrenderer
      className={className}
      options={{
        disableParsingRawHTML,
        overrides,
      }}
    >
      {markdown}
    </MDXrenderer>
  );
};
