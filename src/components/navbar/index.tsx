import { Link as RouterLink } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import { AppBar, Container, Link, Toolbar, ListItemButton, Button, Box } from '@mui/material';
import Logo from '../Logo';
import AccountPopover from './AccountPopover';
// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const HeaderStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.95),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: 88,
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const ContainerStyle = styled(Container)(() => ({
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const NavStyle = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginRight: '40px',
  height: '100%',
  '& > :not(style) + :not(style)': {
    margin: '0px 0px 0px 40px',
  },
}));

const MenuStyle = styled(ListItemButton)(() => ({
  backgroundColor: 'transparent',
  outline: '0px',
  border: '0px',
  margin: '0px',
  borderRadius: '0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minWidth: '0px',
  boxSizing: 'border-box',
  textAlign: 'left',
  fontWeight: 600,
  lineHeight: 1.57143,
  fontSize: '0.875rem',
  fontFamily: 'Public Sans, sans-serif',
  padding: '0px',
  height: '100%',
  color: 'rgb(33, 43, 54)',
  transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    opacity: '0.48 !important',
    textDecoration: 'none',
    background: 'none',
    backgroundColor: 'transparent',
  },
}));

export default function NavBar() {
  return (
    <HeaderStyle>
      <ToolbarStyle>
        <ContainerStyle maxWidth="xl">
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <NavStyle>
            <Link underline="none" component={RouterLink} to="/">
              <MenuStyle>Home</MenuStyle>
            </Link>
            <Link underline="none" component={RouterLink} to="/">
              <MenuStyle>Pages</MenuStyle>
            </Link>
          </NavStyle>
          <Button variant="contained" component={RouterLink} to="/login">
            Login
          </Button>
          <AccountPopover />
        </ContainerStyle>
      </ToolbarStyle>
    </HeaderStyle>
  );
}
