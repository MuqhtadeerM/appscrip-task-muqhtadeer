import { useState } from "react";

export default function Toolbar() {
  const [showFilter, setShowFilter] = useState(true);
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

        <button
          className="filterToggle"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className="toolbarRight">
        <button className="sortButton" onClick={() => setShortSort(!showSort)}>
          {selectedSort}
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
