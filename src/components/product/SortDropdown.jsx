import { useState } from "react";
import styles from "../../styles/product.module.css";

export default function SortDropdown({ currentSort, onSort }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "price-high", label: "PRICE : HIGH TO LOW" },
    { value: "price-low", label: "PRICE : LOW TO HIGH" },
  ];

  const handleSelect = (value) => {
    onSort(value);
    setIsOpen(false);
  };

  const currentLabel =
    options.find((opt) => opt.value === currentSort)?.label || "RECOMMENDED";

  return (
    <div className={styles.sortDropdown}>
      <button
        className={styles.sortButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sort products"
        aria-expanded={isOpen}
      >
        {currentLabel} <span className={styles.arrow}>▼</span>
      </button>

      {isOpen && (
        <div className={styles.sortMenu}>
          {options.map((option) => (
            <button
              key={option.value}
              className={`${styles.sortOption} ${
                currentSort === option.value ? styles.sortActive : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {currentSort === option.value && (
                <span className={styles.checkmark}>✓</span>
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
