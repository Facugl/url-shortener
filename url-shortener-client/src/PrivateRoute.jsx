import React from "react";
import { Navigate } from "react-router-dom";
import { useStoreContext } from "./context/ContextApi";

export default function PrivateRoute({ children, publicPage }) {
    const { token } = useStoreContext();

    if (publicPage) {
        return token ? <Navigate to="/dashboard" /> : children;
    }

    return !token ? <Navigate to="/login" /> : children;
}