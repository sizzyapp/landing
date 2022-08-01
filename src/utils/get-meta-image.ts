export const sizzyLogoUrl = `https://i.ibb.co/1f3VHFg/sizzy-logo.png`;

type NetlifyTemplate = {
  ctaText?: string;
  ctaBg?: string;
  ctaColor?: string;
  logo?: string;
  gradientColors?: [string, string, string];
  title?: string;
};

type Template = { preset: string } & NetlifyTemplate;

export const getMetaImage = ({
  gradientColors = ["a", "b", "c"],
  ...rest
}: Template) => {
  const gradients = gradientColors.reduce((accum, g, i) => {
    accum[`gradientColors.${i}`] = g;
    return accum;
  }, {});
  const urlParams = new URLSearchParams({ ...gradients, ...rest });
  let ramz = urlParams.toString();
  let params = encodeURIComponent(ramz);
  const workingUrl =
    "https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3F" + params;
  return workingUrl;
};
