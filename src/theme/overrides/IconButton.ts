// ----------------------------------------------------------------------
export interface ThemeTypes {
  palette: { action: { hover: string } };
}
export default function IconButton(theme: ThemeTypes) {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: 'default' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover },
          },
        },
        {
          props: { color: 'inherit' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover },
          },
        },
      ],

      styleOverrides: {
        root: {},
      },
    },
  };
}
