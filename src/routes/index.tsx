import { Routes, Route } from 'react-router-dom';
// layouts
// import DashboardLayout from '../layouts/dashboard';

import { GuestLayout, AuthLayout } from '../layouts';
import { Login, Register, Page404, Home } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<Page404 />} />
    </Routes>
  );
};

export default Router;
