import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ToTopButton from "../components/ToTopButton";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <ToTopButton/>
    </BrowserRouter>
  );
};
