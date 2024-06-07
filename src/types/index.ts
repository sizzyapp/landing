import React from "react";

export type ReactFC<T> = React.FC<{ children?: React.ReactNode } & T>;

export type LinkType = {
  link: string;
  label: string;
  isExternal?: boolean;
  counter?: number;
};
