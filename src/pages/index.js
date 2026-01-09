import { useState, useMemo } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Toolbar from "../components/Toolsbar";

export default function Home({ products = [] }) {
  const [showFilter, setShowFilter] = useState(true);
  const [sort, setSort] = useState("RECOMMENDED");
  const [selectedCategories, setSelectedCategories] = useState({
    men: false,
    women: false,
    kids: false,
  });

  const filteredAndSortedProducts = useMemo(() => {
    let updated = Array.isArray(products) ? [...products] : [];

    // CATEGORY FILTER
    const activeCategories = Object.keys(selectedCategories).filter(
      (key) => selectedCategories[key]
    );

    if (activeCategories.length > 0) {
      updated = updated.filter((product) => {
        const category = product.category.toLowerCase();
        if (activeCategories.includes("men") && category.includes("men"))
          return true;
        if (activeCategories.includes("women") && category.includes("women"))
          return true;
        if (activeCategories.includes("kids") && category.includes("kid"))
          return true;
        return false;
      });
    }

    // SORTING
    if (sort === "PRICE : LOW TO HIGH") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sort === "PRICE : HIGH TO LOW") {
      updated.sort((a, b) => b.price - a.price);
    }

    return updated;
  }, [products, sort, selectedCategories]);

  return (
    <>
      <Header />
      <Hero />

      <Toolbar
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className="content">
        <FilterSidebar
          visible={showFilter}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <section className="productGrid">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();

    return {
      props: {
        products: Array.isArray(products) ? products : [],
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}
