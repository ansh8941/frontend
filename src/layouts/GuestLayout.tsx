import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';

export interface GuestLayoutTypes {
  isHeader?: boolean;
}

export default function GuestLayout({ isHeader }: GuestLayoutTypes) {
  return (
    <>
      {isHeader && <NavBar />}
      <Outlet />
    </>
  );
}
