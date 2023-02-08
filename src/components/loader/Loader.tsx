import { styled } from '@mui/material/styles';
import { LinearProgress, Container } from '@mui/material';

const Loader = () => {
  const ContainerStyle = styled(Container)(() => ({
    right: '0px',
    left: '0px',
    bottom: '0px',
    zIndex: 9998,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    height: 'calc(100% - 92px)',
  }));
  return (
    <ContainerStyle maxWidth="sm">
      <LinearProgress color="inherit" sx={{ width: '100%' }} />
    </ContainerStyle>
  );
};

export default Loader;
