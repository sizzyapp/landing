import { Stack, Group, StackProps, GroupProps } from "@mantine/core";
import { RealReactFC } from "types";

type commonProps = {
  centerH?: boolean;
  centerV?: boolean;
  center?: boolean;
  debug?: boolean;
  fullW?: boolean;
};

const enableDebug: boolean = false;

const commonProps = ({ debug, fullW }: commonProps) => {
  const shouldDebug = debug && enableDebug;
  return {
    ...(shouldDebug
      ? {
          border: "1px solid red",
        }
      : {}),
    ...(fullW && { width: "100%" }),
  };
};
export const Horizontal: RealReactFC<GroupProps & commonProps> = (props) => {
  const { children, center, fullW, centerV, centerH, debug, sx, ...rest } =
    props;
  return (
    <Group
      {...{
        ...(centerV && {
          align: "center",
        }),
        ...(centerH && {
          justify: "center",
        }),
      }}
      sx={{
        ...commonProps(props),
        ...sx,
        ...(center && {
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }),
      }}
      {...rest}
    >
      {children}
    </Group>
  );
};
export type VerticalProps = StackProps & commonProps;
export const Vertical: RealReactFC<VerticalProps> = (props) => {
  const { children, center, fullW, centerV, centerH, debug, sx, ...rest } =
    props;

  return (
    <Stack
      sx={{
        ...commonProps(props),
        ...sx,
        ...(center && {
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }),
      }}
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
};
