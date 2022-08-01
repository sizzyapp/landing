import React from 'react';
import {
  Code,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';

import { customComponents } from './custom-components';
import ZoomImage from './ZoomImage';
import * as A from 'styles/shared-components';
import { codeRenderer } from './code-renderer';

const headingMap = {
  1: 'xl',
  2: 'lg',
  3: 'md',
  4: 'sm',
};

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
      <p className={'paragraph'}>{children}</p>
      &nbsp;
    </>
  ),
  heading: ({ children, level }) => {
    return (
      <Heading marginBottom={4} color="gray.700" size={headingMap[level]}>
        {children}
      </Heading>
    );
  },
  image: (props) => <ZoomImage borderRadius={6} {...props} />,
  referenceImage: (props) => (
    <ZoomImage borderRadius={6} {...props} style={{ width: '100%' }} />
  ),
  link: (props) => {
    const customLink = customLinks[props.href];
    if (customLink) {
      return customLink(props);
    }
    return <Link {...props} target="_blank" rel="noopener noreferrer" />;
  },
  inlineCode: ({ children }) => (
    <Code backgroundColor="gray.100" fontSize="inherit">
      {children}
    </Code>
  ),
  list: (props) => <List mb={5} {...props} />,
  listItem: ({ children, ...props }) => (
    <ListItem {...props}>
      <ListIcon as={MdCheck} color="purple.500" />
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => (
    <A.Horizontal
      className="blockquote"
      borderRadius={8}
      centerV
      spacing={5}
      p={5}
      mb={5}
      fontSize={14}
      fontStyle="italic"
      bg="gray.50"
      color="gray.600"
    >
      {children}
    </A.Horizontal>
  ),
};
