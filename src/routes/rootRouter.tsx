import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ErrorPage from '../pages/Error';
import Following from '../pages/Following';
import HomePage from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import AuthLayout from '../Layouts/AuthLayout';
import DefaultLayout from '../Layouts/DefaultLayout';
import HeaderOnly from '../Layouts/DefaultLayout/HeaderOnly';
import VideoPlayer from '@/pages/Videos/player';

const rootRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />} errorElement={<ErrorPage/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/following" element={<Following />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<VideoPlayer/>}></Route>
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
