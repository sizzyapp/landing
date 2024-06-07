import React from "react";
import { Box } from "@mantine/core";
import { Highlight } from "prism-react-renderer";

export const codeRenderer = ({ value, language }) => {
  return (
    <Highlight code={value} language={language || "javascript"}>
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
