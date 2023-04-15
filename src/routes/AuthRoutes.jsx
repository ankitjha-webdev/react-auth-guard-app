import React from "react";
import { Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuards";
import Welcome from "../pages/Welcome";

const AuthRoutes = [
    <Route key="Welcome" path="/" element={<AuthGuard component={<Welcome />} />} />
]

export default AuthRoutes;