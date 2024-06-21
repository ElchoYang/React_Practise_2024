import { createBrowserRouter } from "react-router-dom";

import LoginView from "./../views/LoginView";
import HomeView from "./../views/HomeView";
import AboutView from "./../views/AboutView";
import DashboardView from "./../views/DashboardView";
import UserInfoView from "./../views/userInfo/UserInfoView";
import PostSubmitView from "./../views/post/PostSubmitView";
import PostListView from "./../views/post/PostListView";
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
        path: "post/submit",
        element: (
          <ProtectedRoute>
            <PostSubmitView />
          </ProtectedRoute>
        ),
      },
      {
        path: "post/view",
        element: (
          <ProtectedRoute>
            <PostListView />
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
