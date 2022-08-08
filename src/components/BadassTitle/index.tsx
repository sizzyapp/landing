import { Title } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

export const Highlight = ({ children }) => {
  const { classes } = useStyles();
  return <span className={`${classes.highlight}`}>{children}</span>;
};

const BadassTitle = ({ children }) => {
  const { classes } = useStyles();
  return (
    <Title align="center" id="sizzy-text" className={classes.title}>
      {children}
    </Title>
  );
};

export default BadassTitle;
