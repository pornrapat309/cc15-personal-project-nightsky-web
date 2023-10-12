import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FollowPage from "../pages/FollowPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import { RouterProvider } from "react-router-dom";
import LayoutLogin from "../layout/LayoutLogin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutLogin />,
        children: [
            {path: 'login', element: <LoginPage />},
            {path: 'register', element: <RegisterPage />}
        ]
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'follow', element: <FollowPage />},
            {path: 'profile/:profileId', element: <ProfilePage />},
            {path: 'editProfile', element: <EditProfilePage />}
        ]
    }
]);

export default function Route() {
    return <RouterProvider router={router} />
}



