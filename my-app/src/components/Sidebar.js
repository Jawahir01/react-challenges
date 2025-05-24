import React from "react";
import css from './css/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <h2>Sidebar</h2>
      </div>
      <div className={css.sidebar}>
        <a href="#.">My photos</a>
        <a href="#.">My Illustrations</a>
        <a href="#.">My Paintigs</a>
      </div>
    </div>
  );
}

export default Sidebar;