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
  const { children, center, fullW, centerV, centerH, debug, ...rest } = props;
  return (
    <Group
      {...{
        ...(center && {
          align: "center",
          justify: "center",
        }),
        ...(centerV && {
          align: "center",
        }),
        ...(centerH && {
          justify: "center",
        }),
      }}
      sx={commonProps(props)}
      {...rest}
    >
      {children}
    </Group>
  );
};
export const Vertical: RealReactFC<StackProps & commonProps> = (props) => {
  const { children, center, fullW, centerV, centerH, debug, ...rest } = props;

  return (
    <Stack
      sx={commonProps(props)}
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
};