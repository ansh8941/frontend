// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export interface IconifyTypes {
  icon: string;
  sx?: {};
}

export default function Iconify({ icon, sx, ...other }: IconifyTypes) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
