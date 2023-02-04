// ----------------------------------------------------------------------
export interface ThemeTypes {
  palette: { grey: string };
}
export default function Tooltip(theme: ThemeTypes) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
