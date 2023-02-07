import { lazy } from 'react';
const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Page404 = lazy(() => import('./Page404'));
const Register = lazy(() => import('./Register'));

export { Home, Login, Page404, Register };
