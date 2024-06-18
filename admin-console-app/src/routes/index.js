import { createBrowserRouter } from "react-router-dom";

import LoginView from "./../views/LoginView";
import HomeView from "./../views/HomeView";
import AboutView from "./../views/AboutView";
import DashboardView from "./../views/DashboardView";
import NotFoundView from "./../views/NotFoundView";
import MyLayout from "./../layout/MyLayout";
import { ProtectedRoute } from "./../routes/ProtectedRoute";

// 创建路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <MyLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <HomeView />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <AboutView />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardView />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoute>
            <NotFoundView />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

export default router;
