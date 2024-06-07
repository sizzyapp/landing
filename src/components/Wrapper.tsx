import { createStyles } from "@mantine/core";
import React from "react";
import { Vertical, VerticalProps } from "styles/layout-components";
import { ReactFC } from "types";

export interface MyComponentStylesParams {
  padding?: boolean;
  maxWidth?: number;
}
const useStyles = createStyles((theme, { padding, maxWidth = 1200 }: MyComponentStylesParams) => ({
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
}));

export type WrapperProps = MyComponentStylesParams & {
  id?: string;
} & Partial<VerticalProps>;
const Wrapper: ReactFC<WrapperProps> = ({ id, children, ...props }) => {
  const { classes } = useStyles(props);
  return (
    <Vertical id={id} className={`${classes.root} sizzy-purple-8`} {...props}>
      {children}
    </Vertical>
  );
};

export default Wrapper;
