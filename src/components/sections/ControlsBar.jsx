import SortDropdown from "../product/SortDropdown";
import styles from "../../styles/product.module.css";

export default function ControlsBar({
  count,
  showFilters,
  onToggleFilters,
  sortOrder,
  onSort,
}) {
  return (
    <div className={styles.controls}>
      <div className={styles.itemCount}>
        <span>{count} ITEMS</span>
        <button
          className={styles.filterToggle}
          onClick={onToggleFilters}
          aria-label={showFilters ? "Hide filters" : "Show filters"}
        >
          {showFilters ? "← HIDE FILTER" : "→ SHOW FILTER"}
        </button>
      </div>

      <SortDropdown currentSort={sortOrder} onSort={onSort} />
    </div>
  );
}
