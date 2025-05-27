import { faMagnifyingGlass, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, TextField } from '@mui/material';
import { useEffect } from 'react';
const Header = () => {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        position: 'sticky',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* logo */}
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
          alt="File:TikTok logo.svg"
          style={{
            width: '118px',
            height: '42px',
          }}
        />
      </div>
      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          borderRadius: '40px',
          color: 'black',
          overflow: 'hidden',
          borderColor: '#e11f1f',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder='Search'        
          sx={{
            flex: 1, // TextField chiếm toàn bộ không gian còn lại
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', // Xóa viền mặc định của TextField
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
              borderRadius: '40px 0 0 40px', // Bo góc bên trái của TextField
            },
            '& .MuiInputBase-input': {
              padding: '10px 14px', // Điều chỉnh padding cho đẹp
              color: 'black',
            },
          }}
        />
        <Button
          sx={{
            padding: '10px 16px',
            backgroundColor: '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '0 40px 40px 0', // Bo góc bên phải của nút
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#c81b1b', // Màu đỏ đậm hơn khi hover
            },
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Box>
      <div>Btn acction</div>
    </Box>
  );
};

export default Header;
