import React from "react";

import { createStyles, Group } from "@mantine/core";

export interface MyComponentStylesParams {}

const useStyles = createStyles((theme, {}: MyComponentStylesParams) => ({
  root: {
    maxWidth: 1030,
    width: "100%",
    margin: "0 auto",
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
  },
}));

const Wrapper = ({ children }) => {
  const { classes } = useStyles({});
  return <Group className={classes.root}>{children}</Group>;
};

export default Wrapper;
