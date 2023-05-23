import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MeZinkBlog</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="https://mez.ink/">
            <a>MeZink</a>
          </Link>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Tips & Tutorials</a>
          <ul className={styles.dropdownContent}>
            <li>
              <Link href="/dropdown-link1">
                <a>Tutorial Dashboard YouTube</a>
              </Link>
            </li>
            <li>
              <Link href="/dropdown-link2">
                <a>Tutorial Figma</a>
              </Link>
              <Link href="/dropdown-link3">
                <a>MeZink Academy</a>
              </Link>
              <Link href="/dropdown-link4">
                <a>Tutorial Figma</a>
              </Link>
              <Link href="/dropdown-link5">
                <a>Perpustakaan Konten Kreator</a>
              </Link>
              <Link href="/dropdown-link6">
                <a>Inspirasi Untuk Konten Kreator</a>
              </Link>
              <Link href="/dropdown-link7">
              <a>Sosmed & Komunitas</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/https://mez.ink/">
            <a>KIRITK & SARAN </a>
          </Link>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
