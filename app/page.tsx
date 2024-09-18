"use client";
import "./globals.css";
import { Sidebar, InfoCard } from "./site-builder-components/registry";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <div>
      {/* Sidebar component usage */}
      <Sidebar
        drawerWidth={240} // Specify the width of the drawer
      >
        <InfoCard title={"NavBar"} />
      </Sidebar>
    </div>
  );
};

export default Home;
