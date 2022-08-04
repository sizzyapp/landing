import styled from "@emotion/styled";

export const Logo = styled.img<{ width?: number }>(
  {
    width: "70%",
    margin: "auto",
  },
  ({ width = 170 }) => ({
    maxWidth: width,
    filter: "grayscale(100%)",
    transition: "all 100ms linear",
    ":hover": {
      filter: "grayscale(10%)",
    },
  })
);
