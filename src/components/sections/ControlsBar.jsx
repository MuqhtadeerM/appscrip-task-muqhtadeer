import SortDropdown from "../product/SortDropdown.jsx";
import styles from "../../styles/product.module.css";

export default function ControlsBar({
  count,
  showFilters,
  onToggleFilters,
  sortOrder,
  onSort,
}) {
  return (
    // Top controls section (item count, filter toggle, sort)
    <div className={styles.controls}>
      {/* Item count + filter toggle */}
      <div className={styles.itemCount}>
        <span>{count} ITEMS</span>

        {/* Show / hide filters button */}
        <button
          className={styles.filterToggle}
          onClick={onToggleFilters}
          aria-label={showFilters ? "Hide filters" : "Show filters"}
        >
          {showFilters ? "← HIDE FILTER" : "→ SHOW FILTER"}
        </button>
      </div>

      {/* Sort dropdown */}
      <SortDropdown currentSort={sortOrder} onSort={onSort} />
    </div>
  );
}
