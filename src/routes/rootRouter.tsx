import { Route, Routes } from 'react-router-dom';
import HeaderOnly from '../Layout/DefaultLayout/HeaderOnly';
import AuthLayout from '../Layout/AuthLayout';
import DefaultLayout from '../Layout/DefaultLayout';
import About from '../pages/About';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ErrorPage from '../pages/Error';
import Following from '../pages/Following';
import HomePage from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { Navigate } from 'react-router-dom';

const rootRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />} errorElement={<ErrorPage/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/following" element={<Following />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<HeaderOnly />}>
        <Route path="/upload" element={<Upload />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
         <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default rootRouter;
