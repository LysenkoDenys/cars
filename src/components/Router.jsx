import React from "react";
import Home from "./screens/home/Home";
import CarDetail from "./screens/car-detail/CarDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />

        <Route element={<div>Page not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
