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
import { PATH_ACCOUNT, PATH_AUTH, PATH_DASHBOARD, PATH_PAGE, PATH_VIDEO } from './path';

const rootRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />} errorElement={<ErrorPage />}>
        <Route path={PATH_DASHBOARD.general.home} element={<HomePage />} />
        <Route path={PATH_DASHBOARD.general.subscriptions} element={<Following />} />
        <Route path={PATH_ACCOUNT.profile} element={<Profile />} />
        <Route path="/about" element={<HomePage />} />
        <Route path={PATH_VIDEO.watch(':videoId')} element={<VideoPlayer />} />
        <Route path="/following" element={<Following />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/watch/:videoId" element={<VideoPlayer />}></Route>
      </Route>
      {/* Layout chỉ có Header (ví dụ trang upload) */}
      <Route element={<HeaderOnly />}>
        <Route path={PATH_VIDEO.upload} element={<Upload />} />
      </Route>

      {/* Auth layout */}
      <Route element={<AuthLayout />}>
        <Route path={PATH_AUTH.login} element={<Login />} />
        <Route path={PATH_AUTH.register} element={<Register />} />
      </Route>

      {/* Catch all - 404 */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default rootRouter;
