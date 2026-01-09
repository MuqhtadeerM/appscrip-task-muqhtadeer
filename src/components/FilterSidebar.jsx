export default function FilterSidebar({
  visible,
  selectedCategories,
  setSelectedCategories,
}) {
  const toggleCategory = (key) => {
    setSelectedCategories({
      ...selectedCategories,
      [key]: !selectedCategories[key],
    });
  };

  if (!visible) return null;

  return (
    <aside className="filterSidebar">
      <div className="filterSections">
        <label className="checkbox">
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      <div>
        <h4>IDEAL FOR</h4>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={selectedCategories.men}
            onChange={() => toggleCategory("men")}
          />{" "}
          <span>Men</span>
        </label>{" "}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={selectedCategories.women}
            onChange={() => toggleCategory("women")}
          />
          <span>Women</span>
        </label>{" "}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={selectedCategories.women}
            onChange={() => toggleCategory("women")}
          />
          <span>Women</span>
        </label>
      </div>
    </aside>
  );
}
