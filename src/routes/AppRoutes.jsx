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
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordConfirm from "../components/Registration/ResetPasswordConfirm";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import PaymentSuccess from "../pages/PaymentSuccess";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";

const AppRoutes = () => {
    return (
        // Public Routes:
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                {/* <Route path="dashboard" element={<Dashboard />}/> */}
                <Route path="activate/:uid/:token" element={<ActivateAccount />}/>
                <Route path="reset_password" element={<ResetPassword />}/>
                <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
                <Route path="shop/:productId" element={<ProductDetail />}/>
            </Route>
            
            {/* Private Routes */}
            <Route path="dashboard" element={
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>
            }>
                <Route index element={<Dashboard />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="cart" element={<Cart />}/>
                <Route path="orders" element={<Order />}/>
                <Route path="payment/success" element={<PaymentSuccess />}/>
                <Route path="products/add" element={<AddProduct />}/>
            </Route>
            
            {/* <Route path="dashboard" element={ */}
                    {/* <PrivateRoute><Dashboard/></PrivateRoute> */}
                    {/* // }> */}
            {/* </Route> */}
        </Routes>
    );
};

export default AppRoutes;