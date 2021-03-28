import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'

export let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5E18E8',
            dark: '#25028F',
            light: '#875CC0'
        },
        secondary: {
            main: '#f44336',
            dark: '#ba000d',
            light: '#ff7961'
        },
    },
    typography: {
        html: 10
    }
})

theme = responsiveFontSizes(theme)
