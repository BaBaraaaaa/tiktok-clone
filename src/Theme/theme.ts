import { useAppSelector } from '@/redux/hook';
import { createTheme } from '@mui/material/styles';

export const useAppTheme = () => {
  const mode = useAppSelector((state: any) => state.global.theme);
  return createTheme({
    palette: {
      mode: 'dark', // Chế độ tối giống YouTube
      primary: {
        main: '#ff0000', // Màu đỏ YouTube
      },
      background: {
        default: '#212121', // Nền tối chính
        paper: '#282828', // Nền cho các thành phần như sidebar
      },
      text: {
        primary: '#ffffff', // Chữ trắng
        secondary: '#b0b0b0', // Chữ xám nhạt
      },
      grey: {
        100: '#333333', // Màu xám đậm cho hover
        200: '#404040', // Màu xám nhạt hơn
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif', // Font giống YouTube
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.875rem',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ff0000', // Đảm bảo AppBar luôn đỏ
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 50,
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: '#cc0000', // Hover đỏ đậm hơn
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 50,
            '&:hover': {
              backgroundColor: '#333333', // Hover xám đậm
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#282828', // Nền sidebar
            color: '#ffffff',
          },
        },
      },
    },
  });
};
