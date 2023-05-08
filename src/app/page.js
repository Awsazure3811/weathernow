"use client";

import { useState } from 'react';
import HomePage from './pages/homepage/homepage';
import backgroundData from "@/app/data.json";

export default function Home() {

  const [background, setBackground] = useState("");
  const getBackground = (code) => {
    const newCode = code.slice(0, -1) + "d";
    const randInt = Math.round(Math.random() * backgroundData[newCode].length);
    console.log(randInt);
    setBackground("/backgrounds/" + backgroundData[newCode][randInt]);
  }

  return (
    <main className='main' style={{backgroundImage: `url(${background})`}}>
      <nav className='navbar'>
        <div className='logo'>Weather Now</div>
      </nav>
      {/* GUYS, WORK IN HOMEPAGE.JS IN PAGES DIRECTORY ONLY FOR NOW */}
      <HomePage setWeatherCode={getBackground}></HomePage>
    </main>
  )
}
