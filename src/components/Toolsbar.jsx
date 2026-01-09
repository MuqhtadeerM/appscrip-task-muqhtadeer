import { useState } from "react";

export default function Toolbar({ showFilter, setShowFilter, sort, setSort }) {
  const [showSort, setSortFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <section className="toolbar">
      <div className="toolbarLeft">
        <span className="itemCount">3425 Items</span>

        <button className="filterToggle" onClick={() => setShowFilter(false)}>
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className="toolbarRight">
        <button
          className="sortButton"
          onClick={() => {
            setSort(option);
            setShortSort(false);
          }}
        >
          {sort}
        </button>

        {showSort && (
          <ul className="sortDropdown">
            {sortOptions.map((option) => (
              <li
                key={option}
                className={option === selectedSort ? "active" : ""}
                onClick={() => {
                  setSelectedSort(option);
                  setShowFilter(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
