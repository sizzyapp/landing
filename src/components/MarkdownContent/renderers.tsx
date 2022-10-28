import { Anchor, Blockquote, Code, Divider, Image, List, Title } from "@mantine/core";
import React from "react";
import { MdCheck } from "react-icons/md";
import { codeRenderer } from "./code-renderer";

import ZoomImage from "./ZoomImage";

const customLinks = {
  sub: () => {},
};

export const renderers = {
  code: (props) => {
    const { language } = props;
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
  hr: () => <Divider />,
  Image: ({ sx = "{}", centered, src, ...props }) => {
    const centeredStyles = {
      margin: "auto",
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 5,
      maxWidth: 700,
      width: "100%",
    };
    return (
      <Image
        sx={{
          overflow: "hidden",
          ...(centered && centeredStyles),
          ...JSON.parse(sx),
        }}
        src={src}
      />
    );
  },
  referenceImage: (props) => <ZoomImage borderRadius={6} {...props} style={{ width: "100%" }} />,
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
