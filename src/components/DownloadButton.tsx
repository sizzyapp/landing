import { Button, useMantineTheme, ButtonProps } from "@mantine/core";
import { trackButtonClick } from "utils/utils";

type T = ButtonProps &
  React.ComponentPropsWithoutRef<"a"> & { label?: string; center?: boolean };

const DownloadButton: React.FC<T> = (props) => {
  const { label = "Download Sizzy", center = true, ...rest } = props;
  const { colors } = useMantineTheme();

  return (
    <Button
      size="md"
      variant="gradient"
      target="_blank"
      href="https://portal.sizzy.co/download"
      component="a"
      gradient={{ from: colors.purple[4], to: colors.pink[6] }}
      radius="xl"
      sx={{
        alignSelf: center ? "center" : "flex-start",
      }}
      {...rest}
      onClick={() => {
        try {
          // @ts-ignore
          window.gtag("event", "download");
          trackButtonClick("Download");
        } catch (e) {}
      }}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
