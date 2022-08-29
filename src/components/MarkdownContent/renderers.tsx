import {Anchor, Blockquote, Code, Divider, List, Title,} from "@mantine/core";
import React from "react";
import {MdCheck} from "react-icons/md";
import {codeRenderer} from "./code-renderer";

import {customComponents} from "./custom-components";
import ZoomImage from "./ZoomImage";

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
      <p className={"paragraph"}>{children}</p>
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
  hr: Divider,
  image: (props) => <ZoomImage sx={{ borderRadius: 6 }} {...props} />,
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
  list: (props) => <List sx={{ marginBottom: 5 }} {...props} />,
  listItem: ({ children, ...props }) => (
    <List.Item icon={<MdCheck />} {...props}>
      {children}
    </List.Item>
  ),
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
};
