import React from "react";
import {
  createStyles,
  Container,
  Group,
  Anchor,
  Title,
  Text,
  Stack,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link href={link.link} passHref>
      <Anchor color="dimmed" key={link.label} size="sm">
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Stack>
          <Title>Sizzy </Title>
          <Text color="dimmed" size="sm">
            © {new Date().getFullYear()} Kristijan Ristovski Kitze. All rights
            reserved.
          </Text>
        </Stack>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
