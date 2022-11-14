import React from "react";
import { MdCheck } from "react-icons/md";
import ZoomImage from "./components/ZoomImage";
import { CodeRenderer } from "./components/code-renderer";
import { Anchor, Blockquote, Code, List, Title } from "@mantine/core";

const customLinks = {
  sub: () => {},
};

export const mantineMDXrenderers = {
  code: ({ children, language }) => {
    //in the future we can use codeRenderer again
    return (
      <Code sx={{ fontSize: 16 }} color="violet">
        {children}
      </Code>
    );
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
  image: (props) => <ZoomImage sx={{ borderRadius: 6 }} {...props} />,
  // referenceImage: (props) => (
  //   <ZoomImage borderRadius={6} {...props} style={{ width: "100%" }} />
  // ),
  // link: (props) => {
  //   const customLink = customLinks[props.href];
  //   if (customLink) {
  //     return customLink(props);
  //   }
  //   return <Anchor {...props} target="_blank" rel="noopener noreferrer" />;
  // },
  // inlineCode: ({ children }) => (
  //   <Code
  //     sx={(theme) => ({
  //       backgroundColor: theme.colors.gray[0],
  //     })}
  //   >
  //     {children}
  //   </Code>
  // ),
  // list: (props) => <List sx={{ marginBottom: 5 }} {...props} />,
  // listItem: ({ children, ...props }) => (
  //   <List.Item icon={<MdCheck />} {...props}>
  //     {children}
  //   </List.Item>
  // ),
  // blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,*/
};
