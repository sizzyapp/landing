import { createStyles } from "@mantine/core";

export interface MyComponentStylesParams {
  clamp?: boolean;
}

export const useStyles = createStyles((theme, { clamp }: MyComponentStylesParams) => ({
  markdown: {
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    width: "100%",
    "img.emoji": {
      display: "inline-block",
      width: 20,
      height: 20,
      margin: "2px 5px",
    },
    ...(clamp && {
      maxHeight: 200,
    }),
  },
  overflow: {
    backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), white)",
    height: 70,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
}));
