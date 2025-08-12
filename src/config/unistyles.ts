import { StyleSheet } from "react-native-unistyles";

const dimension = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
  br0: 8,
  br1: 4,
  brFull: 100,
};

const lightTheme = {
  colors: {
    primary: "#264CAB",
    secondary: "#9C803D",
    typography: "#1B140C",
    dimmed: "#ECE8E4",
    tint: "#9A734C",
    activeTint: "#1B140C",
    link: "#1E3799",
    grey: "#868585",
    accents: {
      banana: "#F6E58D",
      pumpkin: "#FFBE76",
      apple: "#FF7979",
      grass: "#BADC58",
      storm: "#686DE0",
    },
  },
  gap: (v: number) => v * 8,
  dimension,
} as const;

const darkTheme = {
  colors: {
    primary: "#264CAB",
    secondary: "#9C803D",
    typography: "#1B140C",
    dimmed: "#ECE8E4",
    tint: "#9A734C",
    activeTint: "#1B140C",
    link: "#1E3799",
    grey: "#868585",
    accents: {
      banana: "#F6E58D",
      pumpkin: "#FFBE76",
      apple: "#FF7979",
      grass: "#BADC58",
      storm: "#686DE0",
    },
  },
  gap: (v: number) => v * 8,
  dimension,
} as const;

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  breakpoints,
});
