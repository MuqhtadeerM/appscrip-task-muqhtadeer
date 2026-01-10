import { useState } from "react";
import image from "../../assets/image.png";
import styles from "../../styles/header.module.css";

export default function Header() {
  // Controls mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Header wrapper
    <header className={styles.header}>
      {/* Top bar: menu, logo, actions */}
      <div className={styles.topBar}>
        {/* Mobile menu toggle button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        {/* Brand logo image */}
        <div className={styles.logo}>
          <img src={image.src} alt="Logo" />
        </div>

        {/* Brand text */}
        <div className={styles.logoText}>LOGO</div>

        {/* Action icons (search, wishlist, cart, account, language) */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            {/* Search icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="9"
                cy="9"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M14 14L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Wishlist">
            {/* Wishlist icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 18L2 10C0 8 0 5 2 3C4 1 7 1 9 3L10 4L11 3C13 1 16 1 18 3C20 5 20 8 18 10L10 18Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Cart">
            {/* Cart icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 2H4L6 14H16L18 6H6"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="7" cy="18" r="1" fill="currentColor" />
              <circle cx="15" cy="18" r="1" fill="currentColor" />
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Account">
            {/* Account icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M3 19C3 15 6 13 10 13C14 13 17 15 17 19"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Language selector */}
          <select className={styles.langSelect} aria-label="Language">
            <option>ENG</option>
            <option>ESP</option>
            <option>FRA</option>
          </select>
        </div>
      </div>

      {/* Navigation menu (mobile + desktop) */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <a href="#shop" className={styles.navLink}>
          SHOP
        </a>
        <a href="#skills" className={styles.navLink}>
          SKILLS
        </a>
        <a href="#stories" className={styles.navLink}>
          STORIES
        </a>
        <a href="#about" className={styles.navLink}>
          ABOUT
        </a>
        <a href="#contact" className={styles.navLink}>
          CONTACT US
        </a>
      </nav>
    </header>
  );
}
