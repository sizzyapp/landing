import React from "react";
import { MdCheck } from "react-icons/md";

import { customComponents } from "./custom-components";
import ZoomImage from "./ZoomImage";
import { codeRenderer } from "./code-renderer";
import {
  Anchor,
  Code,
  List,
  ListItem,
  Title,
  Box,
  Text,
  Blockquote,
} from "@mantine/core";

const customLinks = {
  sub: () => {},
};

export const renderers = {
  code: (props) => {
    const { language } = props;
    let found = customComponents[language];
    if (found) {
      return found(props);
    }
    return codeRenderer(props);
  },
  break: () => <br />,
  paragraph: ({ children }) => (
    <>
      <Text className={"paragraph"}>{children}</Text>
      &nbsp;
    </>
  ),
  heading: ({ children, level }) => {
    return (
      <Title
        sx={(theme) => ({
          marginBottom: theme.spacing.md,
          color: theme.colors.gray[7],
        })}
        order={level}
      >
        {children}
      </Title>
    );
  },
  image: (props) => <ZoomImage borderRadius={6} {...props} />,
  referenceImage: (props) => (
    <ZoomImage borderRadius={6} {...props} style={{ width: "100%" }} />
  ),
  link: (props) => {
    const customLink = customLinks[props.href];
    if (customLink) {
      return customLink(props);
    }
    return <Anchor {...props} target="_blank" rel="noopener noreferrer" />;
  },
  inlineCode: ({ children }) => (
    <Code
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
      })}
    >
      {children}
    </Code>
  ),
  list: (props) => <List mb={5} {...props} />,
  listItem: ({ children, ...props }) => (
    <ListItem
      {...props}
      icon={
        <Box
          sx={(theme) => ({
            color: theme.colors.purple[5],
          })}
        >
          <MdCheck />
        </Box>
      }
    >
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
};
