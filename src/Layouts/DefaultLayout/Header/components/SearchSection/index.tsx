import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import { alpha, useTheme } from '@mui/material/styles';
import { InputBase, IconButton, Box } from '@mui/material';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setGlobalSearch } from '@/redux/slices/global';
// import { searchVideos } from '@/redux/slices/videos';
import type { ChangeEvent } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 4,
  backgroundColor: alpha(theme.palette.grey[100], 0.8),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.9),
  },
  '&:focus-within': {
    backgroundColor: alpha(theme.palette.grey[200], 0.9),
    boxShadow: theme.shadows[2],
    outline: `1px solid ${theme.palette.primary.main}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary, // set màu chữ theo theme
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5), // placeholder mờ hơn text
      opacity: 0.8,
    },
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.grey[700], 0.2), // nền tối hơn một chút
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[700], 0.3),
  },
}));

const SearchSection: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.global.globalSearch);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGlobalSearch(e.target.value));
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // dispatch(searchVideos(searchQuery));
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        maxWidth: '600px',
        mx: 'auto',
      }}
    >
      <Search>
        <SearchIconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search videos"
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
      </Search>
      <StyledIconButton onClick={handleSearch}>
        <SettingsVoiceIcon />
      </StyledIconButton>
    </Box>
  );
};

export default SearchSection;
