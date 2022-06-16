import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Reports from "./Reports";
import Products from "./Products";
import Team from "./Team";
import Messages from "./Messages";
import Support from "./Support";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/products" element={<Products />} />
      <Route path="/team" element={<Team />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default WebRoutes;
