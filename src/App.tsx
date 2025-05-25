import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import type { Component } from "react";
interface IPage {
    path: string;
    component: () => Element;
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route: any)  => {
            const Page = route.component;
            return <Route   path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
