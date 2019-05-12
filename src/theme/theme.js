import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: `"Roboto", sans-serif`,
        fontWeightLight: '600',
    },
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: '#53f6c7',
        },
        primary: {
            light: '#4f83cc',
            main: '#1d1b24',
            dark: '#002f6c',
        },
        secondary: {
            light: '#6ec6ff',
            main: '#0a192f',
            dark: '#0069c0',
        },
        fullHeight: {
            height: '100%',
        },
    },
});

export { darkTheme };