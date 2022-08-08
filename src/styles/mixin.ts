//eslint-rule-kitze-said-this-file-should-only-have-one-function
export const fontSize = (size, gapIncrease = 0) => ({
  fontSize: size,
  lineHeight: `${size + gapIncrease}px`,
});
