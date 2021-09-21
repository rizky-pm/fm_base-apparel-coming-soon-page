import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'hsl(0, 93%, 68%)',
        secondary: 'hsl(0, 36%, 70%)',
        tertiary: 'hsl(0, 6%, 24%)',
        primaryGradient:
            'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        secondaryGradient:
            'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
    },
    fontweights: {
        light: 300,
        regular: 400,
        semiBold: 600,
    },
    breakpoints: {
        portraitSmartphone: 'min-width: 480px',
        portraitTablets: 'min-width: 600px',
        landscapeTablets: 'min-width: 801px',
        laptops: 'min-width: 1025px',
        desktops: 'min-width: 1281px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
