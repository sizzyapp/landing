import { Button, useMantineTheme, ButtonProps } from "@mantine/core";
import { trackButtonClick } from "utils/utils";

const DownloadButton: React.FC<{ label?: string } & ButtonProps<"a">> = (
  props
) => {
  const { label = "Download Now", ...rest } = props;
  const { colors } = useMantineTheme();

  return (
    <Button
      variant="gradient"
      gradient={{ from: colors.purple[4], to: colors.pink[6] }}
      radius="xl"
      target="_blank"
      href="https://portal.sizzy.co/download"
      component="a"
      sx={{
        alignSelf: "center",
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
