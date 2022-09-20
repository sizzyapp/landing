import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "sections/HeaderSection/Header/index";
import { blurryBg } from "styles/mixin";

export const useStyles = createStyles(
  (theme, { blurry }: { blurry?: boolean }) => ({
    root: {
      position: "relative",
      zIndex: 99,
      width: "100%",
      ...(blurry && blurryBg),
      border: 0,
    },

    dropdown: {
      position: "absolute",
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  })
);
