import { useMemo, ReactNode } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
//import componentsOverride from './overrides';
//import shadows, { customShadows } from './shadows';

export interface ThemeProps {
  children: ReactNode;
}

export default function ThemeProvider(props: ThemeProps) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      //shadows,
      //customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  //theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
