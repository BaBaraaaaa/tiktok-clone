import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { Box } from '@mui/material';
const cx = classNames.bind(styles);
const DefaultLayout = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        height:'1150px',
        width: '100%',
        backgroundColor:'#fff'
      }}
    >
      <Header />
      <Box
        component="div"
        sx={{
          display: 'flex',
          width: '100%', // Chiều rộng cố định
          minHeight: '1000px',
          backgroundColor: '##ccc',
          margin: '0 auto', // Căn giữa theo chiều ngang
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            backgroundColor: '#ccc',
            minHeight: '1000px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default DefaultLayout;
