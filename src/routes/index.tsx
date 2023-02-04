import { Routes, Route } from 'react-router-dom';
// layouts
// import DashboardLayout from '../layouts/dashboard';
// import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import { Login, Page404, Home } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route element={<Page404 />} />
    </Routes>
  );
};

export default Router;
