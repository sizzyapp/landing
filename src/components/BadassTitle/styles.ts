import { createStyles } from "@mantine/core";

export const useStyles = createStyles(
  (theme, { maxWidth = 650 }: { maxWidth?: number | string }) => ({
    title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
      maxWidth,

      [theme.fn.smallerThan("xs")]: {
        fontSize: 28,
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
  })
);
