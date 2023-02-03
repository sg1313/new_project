import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Discography from "../pages/Discography";
import Board from "../pages/Board";
import Proof from "../albums/Proof";
import Butter from "../albums/Butter";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="/discography/proof" element={<Proof />} />
      <Route path="/discography/butter" element={<Butter />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default Router;
