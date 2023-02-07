import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';

export default function GuestLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
