export const theme = {
  container: {
    maxWidth: "1900px",
    margin: {
      desktop: "0 100px",
      laptopL: "0 80px",
      laptop: "0 20px",
      tablet: "0 20px",
      mobileM: "0 20px",
    },
  },
  color: {
    primary: "#0A2760",
    primary75: "#0A2760BF",
    primary20: "#0A276020",
    primary10: "#0A276010",
    secondary: "#e3ab4f",
    secondary60: "#e3ab4f60",
    secondary90: "#e3ab4f90",
    primaryLighter: "#cedded",
    light: "#fff",
    light80: "#ffffff80",
    dark: "#020203",
  },
  fontFamily: {
    text: "'Roboto', sans-serif",
    action: "'Oswald', serif",
    special: "'Courgette', cursive",
  },
  fontSize: {
    small: "14px",
    regular: "16px",
    subTitle: "20px",
    title: "24px",
    bigTitle: "30px",
    reallyBigTitle: "48px",
  },
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
  shadow: {
    text: "#181818 0px 3px 3px,#181818 0px -3px 3px,#181818 3px 0px 3px,#181818 -3px 0px 3px",
    box: "0px 5px 5px -3px #424242",
    box2: "0px 0px 10px 0px #424242",
  },
  navbar: {
    height: {
      desktop: "60px",
    },
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
