import { Button, useMantineTheme, ButtonProps } from "@mantine/core";
import { trackButtonClick } from "utils/utils";

type T = ButtonProps &
  React.ComponentPropsWithoutRef<"a"> & { label?: string; center?: boolean };

const DownloadButton: React.FC<T> = (props) => {
  const { label = "Download for free", center = true, ...rest } = props;
  const { colors } = useMantineTheme();

  return (
    <Button
      size="xl"
      variant="gradient"
      target="_blank"
      href="https://portal.sizzy.co/download"
      component="a"
      gradient={{ from: colors.purple[4], to: colors.pink[6] }}
      radius="xl"
      sx={{
        alignSelf: center ? "center" : "flex-start",
        // flexShrink: 0,
        // height: "auto",
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
