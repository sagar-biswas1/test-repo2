import React from 'react';
import './header.css'
const Header = () => {
    return (
      <div class="mt-5">
        <div class="hero-image">
          <div class="hero-text">
            <h1 style={{fontSize:"4rem"}}>YOUR PAPER </h1>
            <p class="card-text fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, maiores!   </p>
            <button class="button draw-border p-3 header-button">SIGN UP</button>
          </div>
        </div>
      </div>
    );
};

export default Header;