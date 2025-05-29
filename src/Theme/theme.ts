import { createTheme } from '@mui/material/styles';
import { useAppSelector } from '@/redux/hook';
import type { ThemeOptions } from '@mui/material/styles';
import type { RootState } from '@/redux/store';

// Define the type for themeConfig
type ThemeMode = 'dark' | 'light' | 'custom';
type ThemeConfig = {
  [key in ThemeMode]: ThemeOptions;
};

export const useAppTheme = () => {
  // Ensure mode is typed correctly
  const modeFromStore = useAppSelector((state: RootState) => state.global.theme);
  const mode: ThemeMode = ['dark', 'light', 'custom'].includes(modeFromStore as string) ? (modeFromStore as ThemeMode) : 'dark';
  const themeConfig: ThemeConfig = {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#ff0000',
          dark: '#cc0000',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#bbbbbb',
        },
        grey: {
          100: '#333',
          200: '#444',
        },
      },
    },
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#ff0000',
          dark: '#cc0000',
        },
        background: {
          default: '#f0f0f0',
          paper: '#ffffff',
        },
        text: {
          primary: '#000000',
          secondary: '#444444',
        },
        grey: {
          100: '#e0e0e0',
          200: '#cccccc',
        },
      },
    },
    custom: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#ff0000',
          dark: '#cc0000',
        },
        background: {
          default: '#2e2e2e',
          paper: '#3a3a3a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
        },
        grey: {
          100: '#444',
          200: '#505050',
        },
      },
    },
  };

  const selectedTheme = themeConfig[mode];
  const baseTheme = createTheme(selectedTheme);
  return createTheme(baseTheme, {
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h4: { fontSize: '1.5rem', fontWeight: 600 },
      subtitle1: { fontSize: '1rem', fontWeight: 500 },
      body1: { fontSize: '0.875rem' },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: baseTheme.palette.text.primary, // <- dùng text.primary cho chữ
            '&:hover': {
              backgroundColor: baseTheme.palette.primary.dark,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 50,
            '&:hover': {
              backgroundColor: baseTheme.palette.grey[100],
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: baseTheme.palette.background.paper,
            color: baseTheme.palette.text.primary,
          },
        },
      },
    },
  });
};
