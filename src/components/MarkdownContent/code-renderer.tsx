import React from 'react';
import { Box } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/shadesOfPurple';

export const codeRenderer = ({ value, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={value}
      language={language || 'javascript'}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          borderRadius={10}
          my={5}
          as="pre"
          fontSize="sm"
          p={5}
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
