import { Stack, Group, StackProps, GroupProps } from "@mantine/core";
import { RealReactFC } from "types";

type commonProps = {
  centerH?: boolean;
  centerV?: boolean;
  center?: boolean;
};
export const Horizontal: RealReactFC<GroupProps & commonProps> = ({
  children,
  center,
  centerV,
  centerH,
  ...rest
}) => (
  <Group
    {...(center && {
      align: "center",
      justify: "center",
    })}
    {...(centerV && {
      align: "center",
    })}
    {...(centerH && {
      justify: "center",
    })}
    {...rest}
  >
    {children}
  </Group>
);
export const Vertical: RealReactFC<StackProps & commonProps> = ({
  children,
  center,
  centerV,
  centerH,
  ...rest
}) => (
  <Stack
    {...(center && {
      align: "center",
      justify: "center",
    })}
    {...(centerV && {
      align: "center",
    })}
    {...(centerH && {
      justify: "center",
    })}
    {...rest}
  >
    {children}
  </Stack>
);
