import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetailPage from "../Pages/ProductDetailPage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}
