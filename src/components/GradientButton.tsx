import { Button, useMantineTheme, ButtonProps } from "@mantine/core";
import { trackButtonClick } from "utils/utils";

type T = ButtonProps &
  React.ComponentPropsWithoutRef<"a"> & { href: string; center?: boolean };

export const GradientButton: React.FC<T> = (props) => {
  const { children, center = true, href, ...rest } = props;
  const { colors } = useMantineTheme();

  return (
    <Button
      size="xl"
      variant="gradient"
      target="_blank"
      href={href}
      component="a"
      gradient={{ from: colors.purple[4], to: colors.pink[6] }}
      radius="xl"
      sx={{ alignSelf: center ? "center" : "flex-start" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
