import { ButtonProps } from "@mantine/core";
import GradientButton from "components/GradientButton";
import { trackButtonClick } from "utils/utils";

type T = ButtonProps &
  React.ComponentPropsWithoutRef<"a"> & { label?: string; center?: boolean };

const DownloadButton: React.FC<T> = (props) => {
  const { label = "Download for free", center = true, ...rest } = props;

  return (
    <GradientButton
      href="https://portal.sizzy.co/download"
      onClick={() => {
        try {
          // @ts-ignore
          window.gtag("event", "download");
          trackButtonClick("Download");
        } catch (e) {}
      }}
      {...rest}
    >
      {label}
    </GradientButton>
  );
};

export default DownloadButton;
