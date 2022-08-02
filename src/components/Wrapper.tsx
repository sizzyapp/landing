import { createStyles, Stack } from "@mantine/core";
import React from "react";
import { RealReactFC } from "types";

export interface MyComponentStylesParams {
  padding?: boolean;
  maxWidth?: number;
}
const useStyles = createStyles(
  (theme, { padding, maxWidth = 1200 }: MyComponentStylesParams) => ({
    root: {
      width: "100%",
      maxWidth: maxWidth,
      margin: "0 auto",
      ...(padding && {
        paddingLeft: 50,
        paddingRight: 50,
        [theme.fn.smallerThan("md")]: {
          paddingLeft: 25,
          paddingRight: 25,
        },
        [theme.fn.smallerThan("sm")]: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      }),
    },
  })
);

const Wrapper: RealReactFC<MyComponentStylesParams & { id?: string }> = ({
  id,
  children,
  ...props
}) => {
  const { classes } = useStyles(props);
  return (
    <Stack id={id} className={`${classes.root} sizzy-green-2`}>
      {children}
    </Stack>
  );
};

export default Wrapper;
