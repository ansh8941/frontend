// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

export interface BlogPostsSortTypes {
  options: any;
  onSort?: () => void;
}

export default function BlogPostsSort({ options, onSort }: BlogPostsSortTypes) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
