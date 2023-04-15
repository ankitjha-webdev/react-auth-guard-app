import React from "react";
import { Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuards";
import Login from "../pages/Login";
import Register from "../pages/Register";

const UnAuthRoutes = [
    <Route key="Login" path="/login" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route key="Register" path="/register" element={<UnAuthGuard component={<Register />} />} > </Route>
]

export default UnAuthRoutes;