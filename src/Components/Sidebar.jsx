import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt, UilSignInAlt } from "@iconscout/react-unicons"; // Importing the sign-in and sign-out icons
import { SidebarData } from "../Data/Data";
import { Link } from "react-router-dom";


// Sidebar component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSignInOut = () => {
    if (isAuthenticated) {
      const confirmSignOut = window.confirm("Are you sure you want to sign out?");
      if (confirmSignOut) {
        
        setIsAuthenticated(false);
        alert("Successfully signed out!"); 
      }
    } else {
      setIsAuthenticated(true);
      alert("Successfully signed in!"); 
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      
      {!isOpen && (
        <div className="bars" onClick={toggleMenu}>
          &#8801; {/* Unicode character for the hamburger icon */}
        </div>
      )}

      {!isOpen && (
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="erp">
            E<span>R</span>P System

          </span>
        </div>
      )}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="menuItem"
              onClick={closeMenu}
            >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
          );
        })}
        {/* Sign-in or sign-out button */}
        <div className="menuItem" onClick={handleSignInOut}>
          {isAuthenticated ? (
            <>
              <UilSignOutAlt />
              <span>Sign Out</span>
            </>
          ) : (
            <>
              <UilSignInAlt />
              <span>Sign In</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;