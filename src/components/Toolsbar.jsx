import { useState } from "react";

export default function Toolbar() {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <section className="toolbar">
      <div className="toolbarLeft">
        <span className="itemCount">3425 Items</span>
      </div>
    </section>
  );
}
