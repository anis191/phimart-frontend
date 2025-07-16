// import React from 'react';
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";

const AppRoutes = () => {
    return (
        // Public Routes:
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="about" element={<About />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                {/* <Route path="dashboard" element={<Dashboard />}/> */}
                <Route path="activate/:uid/:token" element={<ActivateAccount />}/>
            </Route>
            
            {/* Private Routes */}
            <Route path="dashboard" element={
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>
            }>
                <Route index element={<Dashboard />}/>
                <Route path="profile" element={<Profile />}/>
            </Route>
            
            {/* <Route path="dashboard" element={ */}
                    {/* <PrivateRoute><Dashboard/></PrivateRoute> */}
                    {/* // }> */}
            {/* </Route> */}
        </Routes>
    );
};

export default AppRoutes;