import React from 'react';
import './menu.css';

export default function Menu({ }) {

  return (
    <nav>
          <div className="menu-item alpha">
            <h4><a href="#">Games</a></h4>
            <ul>
              <li><a href="#">RPG</a></li>
              <li><a href="#">Strategy</a></li>
              <li><a href="#">FPS</a></li>
            </ul>
          </div>
          <div className="menu-item">
            <h4><a href="#">Laptops</a></h4>
            <ul>
              <li><a href="#">Gaming Laptops</a></li>
              <li><a href="#">Ultrabooks</a></li>
              <li><a href="#">Budget Laptops</a></li>
            </ul>
          </div>
          <div className="menu-item">
            <h4><a href="#">Consoles</a></h4>
            <ul>
              <li><a href="#">Xbox One</a></li>
              <li><a href="#">Playstation 4</a></li>
              <li><a href="#">Nintendo Wii U</a></li>
            </ul>
          </div>
        </nav>
  )
}
