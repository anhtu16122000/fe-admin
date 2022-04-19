/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
 export function themePalette(theme) {
    return {
        mode: theme.customization.modeTheme,
        primary: {
            main: '#673ab7',
            light: '#ede7f6',
            dark: '#5e35b1',
          },
          secondary: {
            main: '#2ec5d3',
          },
          background: {
            default: '#18191a',
            paper: '#242526',
          },
          text: {
            primary: '#e4e6ce',
            secondary: '#aeb3ab',
          },
    };
}
