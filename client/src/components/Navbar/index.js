import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {

  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [savedRouteActive, setSavedRouteActive] = useState(false);
  const [searchRouteActive, setSearchRouteActive] = useState(false);

  const location = useLocation();

  useEffect(function () {
    if (location.pathname === "/search") {
      setSavedRouteActive(false);
      setSearchRouteActive(true);
    } else if (location.pathname === "/saved") {
      setSavedRouteActive(true);
      setSearchRouteActive(false);
    }
  }, [])

  function handleDropdown() {
    const newDropdownState = (!dropdownToggle)
    setDropdownToggle(newDropdownState);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" >Google Book Search</div>
      <button className="navbar-toggler"
        onClick={handleDropdown}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=
      {
        !dropdownToggle
        ? "collapse navbar-collapse"
        : "navbar-collapse"
        } id="navbarNav">
        <ul className="navbar-nav">
          <li className={
            searchRouteActive
              ? "nav-item active"
              : "nav-item"
          }>
            <a className="nav-link" href="/search">Search <span className="sr-only">Search</span></a>
          </li>
          <li className={
            savedRouteActive
              ? "nav-item active"
              : "nav-item"
          }>
            <a className="nav-link" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

