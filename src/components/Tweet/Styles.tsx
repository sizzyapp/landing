import styled from "@emotion/styled";

export const TweetWrapper = styled("div")`
  color: var(--maximeheckel-colors-typeface-0);
  border-radius: var(--border-radius-2);
  background-color: var(--maximeheckel-colors-foreground);
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--maximeheckel-colors-typeface-2);
  }

  svg {
    margin-right: 5px;
  }
`;

export const Avatar = styled("a")`
  text-decoration: none;
`;

export const Name = styled("a")`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  span:first-of-type {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: var(--maximeheckel-colors-typeface-0);
  }
`;

export const Body = styled("p")`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
`;

export const ActionIcons = styled("a")`
  display: flex;
  align-items: center;
  margin-right: 25px;
  gap: 5px;
  color: black;
  opacity: 0.6;
  text-decoration: none;
  font-size: 14px;
`;
