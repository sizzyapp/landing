export const widths = {
  bigMobile: 600,
  mobile: 480,
  mobileSmall: 320,
};

export const mqStrings = {
  maxWidth: (width) => `(max-width: ${width}px)`,
  minWidth: (width) => `(min-width: ${width}px)`,
};

export const makeQuery = (query) => `@media ${query}`;

export const smaller = (width, styles) => ({
  [makeQuery(mqStrings.maxWidth(width))]: styles,
});

export const bigger = (width, styles) => ({
  [makeQuery(mqStrings.minWidth(width))]: styles,
});
