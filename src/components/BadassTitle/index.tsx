import { CSSObject, Title } from "@mantine/core";
import React from "react";
import { ReactFC } from "types";
import { useStyles } from "./styles";

export const Highlight = ({ children }) => {
  const { classes } = useStyles({});
  return <span className={`${classes.highlight}`}>{children}</span>;
};

const BadassTitle: ReactFC<{
  sx?: CSSObject;
  maxWidth?: number | string;
}> = ({ children, sx, maxWidth }) => {
  const { classes } = useStyles({ maxWidth });
  return (
    <Title align="center" id="sizzy-text" className={classes.title} sx={sx}>
      {children}
    </Title>
  );
};

export default BadassTitle;
