import { createIcon, extendTheme } from "@chakra-ui/react";

export const BugIcon = createIcon({
  displayName: "BugIcon",
  viewBox: "0 0 24 24",
  path: (
    <g fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.056 8.3a7.01 7.01 0 0 1 .199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.992 6.992 0 0 1 13 21.929V14h-2v7.93a6.992 6.992 0 0 1-4.438-2.522l-2.526 1.458-1-1.732 2.5-1.443A6.979 6.979 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3zM8 6a4 4 0 1 1 8 0H8z" />
    </g>
  ),
});

export const theme = extendTheme({
  colors: {
    purple: {
      50: "#eeecff",
      100: "#eeecff",
      200: "#cdc9ed",
      300: "#ada7da",
      400: "#8b83c9",
      500: "#6a60b9",
      600: "#51469f",
      700: "#3f377d",
      800: "#2d275a",
      900: "#1a1638",
    },
    white: "#fff",
    grayText: "#676767",
    headingColor: "#444444",
  },
  fonts: {
    body: "Lato, sans-serif",
    heading: "Lato, sans-serif",
  },
  sizes: {
    full: "100%",
  },
});
