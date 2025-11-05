import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Stories from "./pages/Stories/Stories";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
