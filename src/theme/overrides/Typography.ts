// ----------------------------------------------------------------------
export interface ThemeTypes {
  spacing: (data: number) => string;
}

export default function Typography(theme: ThemeTypes) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
