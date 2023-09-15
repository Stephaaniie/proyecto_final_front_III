import { createTheme } from '@mui/material/styles';

const darkPalette = {
    primary: {
        main: '#90caf9', // Azul claro
    },
    secondary: {
        main: '#f48fb1', // Rosa claro
    },
    text: {
        primary: '#ffffff', // Blanco
    },
    background: {
        default: '#121212', // Gris oscuro
        paper: '#212121',   // Gris un poco más claro
    },
};

// Paleta de colores para el tema claro
const lightPalette = {
    primary: {
        main: '#1976d2', // Azul estándar
    },
    secondary: {
        main: '#e91e63', // Rosa estándar
    },
    text: {
        primary: '#000000', // Negro
    },
    background: {
        default: '#ffffff', // Blanco
        paper: '#f5f5f5',   // Gris claro
    },
};

export const darkTheme = createTheme({
    palette: darkPalette,
});

export const lightTheme = createTheme({
    palette: lightPalette,
});
