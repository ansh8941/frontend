import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box } from '@mui/material';

export interface PageProps {
  children: ReactNode;
  title: string;
  meta?: ReactNode;
  sx?: {};
}

export type Ref = ReactNode;

export const Page = forwardRef<Ref, PageProps>(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
      {meta}
    </Helmet>

    <Box component="main" ref={ref} {...other}>
      {children}
    </Box>
  </>
));
