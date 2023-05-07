"use client";

import HomePage from './pages/homepage/homepage'

export default function Home() {
  return (
    <main className='main'>
      <nav className='navbar'>
        <div className='logo'>Weather Now</div>
      </nav>
      {/* GUYS, WORK IN HOMEPAGE.JS IN PAGES DIRECTORY ONLY FOR NOW */}
      <HomePage></HomePage>
    </main>
  )
}
