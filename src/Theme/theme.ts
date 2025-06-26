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
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#FF0000',
        },
        background: {
          default: '#FFFFFF',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#0F0F0F',
          secondary: '#606060',
        },
        grey: {
          100: '#F2F2F2',
          200: '#E5E5E5',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#FF0000',
        },
        background: {
          default: '#0F0F0F',
          paper: '#181818',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
        },
        grey: {
          100: '#272727',
          200: '#383838',
        },
      },
    },
    custom: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#FF0000',
        },
        background: {
          default: '#111',
          paper: '#111',
        },
        text: {
          primary: '#EEE',
          secondary: '#AAA',
        },
        grey: {
          100: '#2a2a2a',
          200: '#3c3c3c',
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
            color: baseTheme.palette.text.primary,
            '&:hover': {
              backgroundColor: baseTheme.palette.grey[100],
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: baseTheme.palette.text.primary, // <- dùng text.primary cho chữ
            '&:hover': {
              backgroundColor: baseTheme.palette.grey[100],
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
