/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
export function themePalette(theme) {
  const forLight = {
    common: {
      black: '#000000'
    },
    primary: {
      light: theme.colors.primaryLight,
      main: theme.colors.primaryMain,
      dark: theme.colors.primaryDark,
      200: theme.colors.primary200,
      800: theme.colors.primary800
    },
    secondary: {
      light: theme.colors.secondaryLight,
      main: theme.colors.secondaryMain,
      dark: theme.colors.secondaryDark,
      200: theme.colors.secondary200,
      800: theme.colors.secondary800
    },
    error: {
      light: theme.colors.errorLight,
      main: theme.colors.errorMain,
      dark: theme.colors.errorDark
    },
    orange: {
      light: theme.colors.orangeLight,
      main: theme.colors.orangeMain,
      dark: theme.colors.orangeDark
    },
    warning: {
      light: theme.colors.warningLight,
      main: theme.colors.warningMain,
      dark: theme.colors.warningDark
    },
    success: {
      light: theme.colors.successLight,
      200: theme.colors.success200,
      main: theme.colors.successMain,
      dark: theme.colors.successDark
    },
    grey: {
      50: theme.colors.grey50,
      100: theme.colors.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      dark: theme.textDark,
      hint: theme.colors.grey100
    },
    background: {
      paper: theme.paper,
      default: '#ffffff'
    }
  }
  const forDark = {
    primary: {
      main: '#673ab7',
      light: '#ede7f6',
      dark: '#5e35b1',
    },
    secondary: {
      main: '#2ec5d3',
      contrastText: '#fff',
    },
    background: {
      default: '#18191a',
      paper: '#242526',
    },
    text: {
      primary: '#e4e6ce',
      secondary: '#aeb3ab',
    },
  }

  const valueTheme = 'light'
  const currentTheme =  valueTheme === 'light' ? forLight : forDark 

  return {
    mode: theme.customization.modeTheme,
    ...currentTheme,
  };
}
