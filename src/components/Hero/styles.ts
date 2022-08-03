import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "components/Header";

export const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },
    [theme.fn.smallerThan("sm")]: {
      paddingTop: 0,
      paddingBottom: theme.spacing.xl * 2,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

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

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  wrapper: {
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    [theme.fn.smallerThan("sm")]: {
      height: "auto",
    },
  },

  logo: {
    flex: 1,
    maxWidth: 300,
    [theme.fn.smallerThan("md")]: {
      margin: theme.spacing.md,
      maxWidth: 250,
    },
    [theme.fn.smallerThan("sm")]: {
      margin: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 200,
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
