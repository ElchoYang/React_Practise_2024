import { createBrowserRouter } from "react-router-dom";

import LoginView from "./../views/login/LoginView";
import HomeView from "./../views/HomeView";
import AboutView from "./../views/AboutView";
import DashboardView from "./../views/DashboardView";
import UserInfoView from "./../views/userInfo/UserInfoView";
import PostView from "./../views/post/PostView";
import NotFoundView from "./../views/NotFoundView";
import MyLayout from "./../layout/MyLayout";
import { ProtectedRoute } from "./../routes/ProtectedRoute";

// 创建路由
const defaultRouter = [
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
        path: "userinfo",
        element: (
          <ProtectedRoute>
            <UserInfoView />
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
        path: "post",
        element: (
          <ProtectedRoute>
            <PostView />
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
];

export default defaultRouter;
