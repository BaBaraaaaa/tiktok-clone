import HomePage from "../pages/Home";
import Following from "../pages/Following";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/following", component: Following },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
