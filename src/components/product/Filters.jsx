import { useState } from "react";
import styles from "../../styles/product.module.css";

export default function Filters({ show, onFilter, categories }) {
  // Selected category for filtering products
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Controls expand/collapse state of each filter section
  const [expandedSections, setExpandedSections] = useState({
    ideal: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitable: false,
    materials: false,
    pattern: false,
  });

  // Toggle individual filter section
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Handle category change and notify parent
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilter({ category });
  };

  // Hide filters when toggle is off
  if (!show) return null;

  return (
    // Filters sidebar
    <aside className={styles.filters}>
      {/* Customizable checkbox */}
      <div className={styles.filterSection}>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span>CUSTOMIZBLE</span>
        </label>
      </div>

      {/* IDEAL FOR filter */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("ideal")}
          aria-expanded={expandedSections.ideal}
        >
          <span>IDEAL FOR</span>
          <span
            className={
              expandedSections.ideal ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.ideal ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.ideal && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
            <button className={styles.unselectAll}>Unselect all</button>

            {/* Category selection */}
            <label className={styles.checkbox}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === "all"}
                onChange={() => handleCategoryChange("all")}
              />
              <span>Men</span>
            </label>

            <label className={styles.checkbox}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === "men's clothing"}
                onChange={() => handleCategoryChange("men's clothing")}
              />
              <span>Women</span>
            </label>

            <label className={styles.checkbox}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === "women's clothing"}
                onChange={() => handleCategoryChange("women's clothing")}
              />
              <span>Baby & Kids</span>
            </label>
          </div>
        )}
      </div>

      {/* Reusable filter sections (occasion, work, fabric, etc.) */}
      {[
        ["occasion", "OCCASION"],
        ["work", "WORK"],
        ["fabric", "FABRIC"],
        ["segment", "SEGMENT"],
        ["suitable", "SUITABLE FOR"],
        ["materials", "RAW MATERIALS"],
        ["pattern", "PATTERN"],
      ].map(([key, label]) => (
        <div key={key} className={styles.filterSection}>
          <button
            className={styles.filterHeader}
            onClick={() => toggleSection(key)}
            aria-expanded={expandedSections[key]}
          >
            <span>{label}</span>
            <span
              className={
                expandedSections[key] ? styles.chevronUp : styles.chevronDown
              }
            >
              {expandedSections[key] ? "▲" : "▼"}
            </span>
          </button>

          {expandedSections[key] && (
            <div className={styles.filterContent}>
              <p className={styles.filterLabel}>All</p>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
