import { createTheme } from '@material-ui/core/styles'
import colors from '../assets/styles/themeVars.module.scss'
import { themePalette } from './palette';
import { themeTypography } from './typography'
import { componentStyleOverrides } from './compStyleOverride'

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

const theme = (customization) => {
    const color = colors
    let themeOption = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization: customization
    };

    return createTheme({
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                sm1: 620,
                md: 960,
                lg: 1200,
                xl: 1920
            }
        },
        typography: themeTypography(themeOption),
        components: componentStyleOverrides(themeOption)
    })
}

export default theme