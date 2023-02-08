import { Routes, Route } from 'react-router-dom';

import { GuestLayout } from '../layouts';
import { Login, Register, Page404, Home } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route element={<GuestLayout isHeader={true} />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<Page404 />} />
    </Routes>
  );
};

export default Router;
