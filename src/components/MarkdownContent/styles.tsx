import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

export const Markdown = styled(ReactMarkdown)<{ clamp?: boolean }>(
  {
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
  },
  ({ clamp }) => ({
    ...(clamp && {
      maxHeight: 200,
    }),
  })
);

export const Overflow = styled.div({
  backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), white)",
  height: 70,
  width: "100%",
  position: "absolute",
  bottom: 0,
});
