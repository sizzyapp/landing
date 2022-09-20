//eslint-rule-kitze-said-this-file-should-only-have-one-function
export const fontSize = (size, gapIncrease = 0) => ({
  fontSize: size,
  lineHeight: `${size + gapIncrease}px`,
});

export const blurryBg = {
  backgroundColor: "rgba(255,255,255, 0.8)",
  backdropFilter: `blur(8px)`,
};
