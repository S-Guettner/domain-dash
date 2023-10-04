"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import NavbarHero from "./components/NavbarHero/NavbarHero";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  
  useEffect(() => {
    const db = async () => {
      try {
        const response = await axios.post("/api/dbconnect");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    db();
  }, []);



  return (
    <main className="">
      <NavbarHero />
      <HeroSection />

    </main>
  );
}
