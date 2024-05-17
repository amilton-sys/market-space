import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    blue: {
      700: "#647ac7",
      500: "#364d9d",
    },
    gray: {
      700: "#F7F7F8",
      600: "#EDECEE",
      500: "#D9D8DA",
      400: "#9F9BA1",
      300: "#5F5B62",
      200: "#3E3A40",
      100: "#1A1818",
    },
    white: "#FFFFFF",
    red: {
      500: "#EE7979",
    },
  },
  fonts: {
    heading: "Karla_700Bold",
    body: "Karla_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
