import { Box } from '@mui/material';
import Popper from '@mui/material/Popper';
import React from 'react';

const PopperCustom = ({id,  title, handleOpen,open, control } : any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <Popper id={id} open={open} anchorEl={anchorEl}>
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>The content of the Popper.</Box>
    </Popper>
  );
};

export default PopperCustom;
