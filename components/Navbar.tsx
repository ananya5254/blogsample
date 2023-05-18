import Link from "next/link";
import React from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { useState } from 'react';
const Navbar=() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MeZinkBlog</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">MEZINK</Link>
          </li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleDropdown}>
            TIPS & TUTORIALS
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/dropdown1">Tutorial Dashboard YouTube</a>
              </li>
              <li>
                <a href="/dropdown2">Tutorial Figma</a>
              </li>
              <li>
                <a href="/dropdown3">Mezink Academy</a>
              </li>
              <li>
                <a href="/dropdown3">Mezink Academy</a>
              </li>
              <li>
                <a href="/dropdown3">Mezink Academy</a>
              </li>
              <li>
                <a href="/dropdown3">Perpustakaan Konten Kreator</a>
              </li>

            </ul>
          )}
          </li>
          <li>
            <Link href="/about">KRITIK & SARAN</Link>
          </li>
          <li>
          <a href="https://www.instagram.com/your-instagram-handle">
            <FaInstagramSquare />
          </a>
        </li>
        </ul>
      </div>
    </div>
    
  );
}
export default Navbar;
