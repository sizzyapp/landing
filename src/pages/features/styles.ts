import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  image: {
    objectFit: "cover",
    objectPosition: "left",
    flex: 3,
    borderRadius: theme.radius.md,
    overflow: "hidden",
    boxShadow: theme.shadows.lg,
  },
}));
