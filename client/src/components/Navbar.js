import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      {" "}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar">
            <img
              src="https://www.logo-designer.co/wp-content/uploads/2019/12/2019-stock-market-company-ned-davis-research-new-logo-design-4.png"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
          <p>Login</p>
          <p>Sign Up</p>
          <p>Download APP</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
