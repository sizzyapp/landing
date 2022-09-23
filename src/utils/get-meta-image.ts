export const sizzyLogoUrl = `https://i.ibb.co/1f3VHFg/sizzy-logo.png`;

type NetlifyTemplate = {
  ctaText?: string;
  ctaBg?: string;
  ctaColor?: string;
  logo?: string;
  gradientColors?: [string, string, string];
  title?: string;
};

type Template = { preset?: string } & NetlifyTemplate;

const defaultValues: Template = {
  preset: "netlify",
  logo: sizzyLogoUrl,
  gradientColors: ["#412593", "#24145b", "#10062c"],
  ctaColor: "black",
  ctaBg: "#ffffff",
};

export const getMetaImage = (args: Template) => {
  const { gradientColors: colors = ["a", "b", "c"], ...rest } = { ...defaultValues, ...args };

  const gradient = colors.reduce((acc, g, i) => ({ ...acc, [`gradientColors.${i}`]: g }), {});
  const urlParams = new URLSearchParams({ ...gradient, ...rest });

  return (
    "https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3F" +
    encodeURIComponent(urlParams.toString())
  );
};
