/* eslint-disable no-unused-vars */
import React from 'react';
import Profile from './components/profile/profileImage';
import Details from './components/details/userDetails';
import Links from './components/links/socialLinks';
import './App.css';
import './colors.css'
import './fonts.css'


function App() {
  return (
    <div className="App">
      <Profile />
      <Details />
      <Links />
{/*       <Links>GitHub</Links>
      <Links>Frontend Mentor</Links>
      <Links>Linkedin</Links>
      <Links>Twitter</Links>
      <Links>GitHub</Links> */}
    </div>
  );
}

export default App;