import React from 'react';
import './interface.css';

export default function Interface({ }) {
  const showTheMenu = "showTheMenu()"
  return (
  <button ng-click={showTheMenu} className="show-menu">Show me the stuff!</button>
)
}
