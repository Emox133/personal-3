import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'

export let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5E18E8',
            dark: '#25028F',
            light: '#875CC0'
        },
        secondary: {
            // main: '#bdbdbd',
            main: '#fff',
            dark: '#8d8d8d',
            light: '#efefef'
        },
    },
    typography: {
        html: 10
    }
})

theme = responsiveFontSizes(theme)
