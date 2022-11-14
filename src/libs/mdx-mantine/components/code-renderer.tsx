import React from "react";
import { Box } from "@mantine/core";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/shadesOfPurple";

export const CodeRenderer: React.FC<{
  language: Language;
  value: string;
}> = ({ value, language }) => {
  if (!value) return null;
  return (
    <Highlight
      {...defaultProps}
      code={value}
      language={language || "javascript"}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          sx={(theme) => ({
            borderRadius: 10,
            fontSize: theme.fontSizes.sm,
            padding: 5,
            marginTop: 5,
            marginBottom: 5,
          })}
          component="pre"
          className={className}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
};
