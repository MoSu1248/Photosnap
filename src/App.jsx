import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Stories from "./pages/Stories/Stories";
import Pricing from "./pages/Pricing/Pricing";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import { AnimatePresence } from "motion/react";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            <Route
              path="/Features"
              element={
                <PageWrapper>
                  <Features />
                </PageWrapper>
              }
            />

            <Route
              path="/Stories"
              element={
                <PageWrapper>
                  <Stories />
                </PageWrapper>
              }
            />

            <Route
              path="/Pricing"
              element={
                <PageWrapper>
                  <Pricing />
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
