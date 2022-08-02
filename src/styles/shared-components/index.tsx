import React from "react";

import { mqStrings } from "styles/responsive";

export const MediaQuery: React.FC<{ query: string; children: any }> = ({
  query,
  children,
}) => {
  const mq = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mq.matches);
  React.useEffect(() => {
    let callback = ({ matches }) => setMatches(matches);
    mq.addListener(callback);
    return () => mq.removeListener(callback);
  }, []);
  return typeof children === "function"
    ? children(matches)
    : matches
    ? children
    : null;
};

export const HideWhenSmaller: React.FC<{ width: number; children: any }> = ({
  children,
  width,
}) => <MediaQuery query={mqStrings.minWidth(width)}>{children}</MediaQuery>;

export const ShowWhenSmaller: React.FC<{ width: number; children: any }> = ({
  children,
  width,
}) => <MediaQuery query={mqStrings.maxWidth(width)}>{children}</MediaQuery>;

export const Spacer = ({ children }) => <> {children} </>;
