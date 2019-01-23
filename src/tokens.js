const SCREEN_SIZES = [["mobile", 400], ["tabletLandscape", 960]];

export const colors = {
  blue: "#0300FF",
  red: "red"
};

export const fonts = {
  mark: {
    name: "MarkWebPro",
    family: '"MarkWebPro", serif',
    weight: {
      medium: 500,
      bold: 700
    }
  }
};

export const mq = SCREEN_SIZES.reduce((acc, screen) => {
  acc[screen[0]] = `screen and (min-width: ${screen[1]}px)`;
  return acc;
}, {});
