import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="nav-container">
        <nav className="nav">
          <ul>
            <li>
              Qualifications <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Organizations <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Research & Analysis <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Lorem Ipsum <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Lorem Ipsum <i className="fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <button className="enroll-btn">Enrollment</button>
      </div>
    </header>
  );
};

export default Header;
