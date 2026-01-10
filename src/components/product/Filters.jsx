import { useState } from "react";
import styles from "../../styles/product.module.css";

export default function Filters({ show, onFilter, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilter({ category });
  };

  if (!show) return null;

  return (
    <aside className={styles.filters}>
      <div className={styles.filterSection}>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span>CUSTOMIZBLE</span>
        </label>
      </div>

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

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("occasion")}
          aria-expanded={expandedSections.occasion}
        >
          <span>OCCASION</span>
          <span
            className={
              expandedSections.occasion ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.occasion ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.occasion && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("work")}
          aria-expanded={expandedSections.work}
        >
          <span>WORK</span>
          <span
            className={
              expandedSections.work ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.work ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.work && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("fabric")}
          aria-expanded={expandedSections.fabric}
        >
          <span>FABRIC</span>
          <span
            className={
              expandedSections.fabric ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.fabric ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.fabric && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("segment")}
          aria-expanded={expandedSections.segment}
        >
          <span>SEGMENT</span>
          <span
            className={
              expandedSections.segment ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.segment ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.segment && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("suitable")}
          aria-expanded={expandedSections.suitable}
        >
          <span>SUITABLE FOR</span>
          <span
            className={
              expandedSections.suitable ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.suitable ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.suitable && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("materials")}
          aria-expanded={expandedSections.materials}
        >
          <span>RAW MATERIALS</span>
          <span
            className={
              expandedSections.materials ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.materials ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.materials && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("pattern")}
          aria-expanded={expandedSections.pattern}
        >
          <span>PATTERN</span>
          <span
            className={
              expandedSections.pattern ? styles.chevronUp : styles.chevronDown
            }
          >
            {expandedSections.pattern ? "▲" : "▼"}
          </span>
        </button>

        {expandedSections.pattern && (
          <div className={styles.filterContent}>
            <p className={styles.filterLabel}>All</p>
          </div>
        )}
      </div>
    </aside>
  );
}
