// ----------------------------------------------------------------------
export interface ThemeTypes {
  customShadows: { z20: string };
}
export default function Autocomplete(theme: ThemeTypes) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
