import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "sections/HeaderSection/Header";
import { fontSize } from "styles/mixin";

export const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("md")]: {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
    },
  },

  content: {
    maxWidth: 700,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  subtitle: {
    fontSize: theme.fontSizes.xl * 1.3,
    lineHeight: 1.2,
    opacity: 0.8,
    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.xl,
    },
  },

  wrapper: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  },
  description: {
    color: theme.colors.gray[7],
    ...fontSize(20, 8),
    [theme.fn.smallerThan("md")]: {
      size: "sm",
      ...fontSize(16, 8),
    },
  },

  logo: {
    flex: 1,
    maxWidth: 150,
    [theme.fn.smallerThan("md")]: {
      margin: theme.spacing.md,
      maxWidth: 150,
    },
    [theme.fn.smallerThan("sm")]: {
      margin: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 100,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));
