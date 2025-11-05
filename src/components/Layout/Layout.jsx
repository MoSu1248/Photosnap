import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.scss";

export default function Layout() {
  return (
    <div>
      <Nav />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
