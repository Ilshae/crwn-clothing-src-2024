export const theme = {
  fontFamily: '"Open Sans", sans-serif',
  screenSize: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "1980px",
    desktopL: "2560px",
  },
};

export const device = {
  mobileS: `(max-width: ${theme.screenSize.mobileS})`,
  mobileM: `(max-width: ${theme.screenSize.mobileM})`,
  mobileL: `(max-width: ${theme.screenSize.mobileL})`,
  tablet: `(max-width: ${theme.screenSize.tablet})`,
  laptop: `(max-width: ${theme.screenSize.laptop})`,
  laptopL: `(max-width: ${theme.screenSize.laptopL})`,
  desktop: `(max-width: ${theme.screenSize.desktop})`,
  desktopL: `(min-width: ${theme.screenSize.desktop})`,
};
