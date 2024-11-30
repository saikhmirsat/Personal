import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import ForgetPassword from "../Pages/ForgetPassword";

export default function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/resetpassword" element={<ResetPassword />}></Route>
      <Route
        path="/forgetpassword/:id/:token"
        element={<ForgetPassword />}
      ></Route>
    </Routes>
  );
}
