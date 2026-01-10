// Layout components
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";

// Product-related components
import Filters from "../components/product/Filters.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";

// UI sections
import ControlsBar from "../components/sections/ControlsBar.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";

// Page-level styles
import styles from "../styles/product.module.css";

// Custom hook for product logic (filtering, sorting, favorites)
import useProducts from "../hooks/useProducts.js";

export default function Home({ products }) {
  // All product-related state & handlers come from custom hook
  const {
    filteredProducts,
    sortOrder,
    showFilters,
    favorites,
    handleSort,
    handleFilter,
    toggleFavorite,
    toggleFilters,
  } = useProducts(products);

  return (
    <>
      {/* Common site header */}
      <Header />

      <main className={styles.main}>
        {/* Top hero/banner section */}
        <HeroSection />

        {/* Sorting & filter toggle bar */}
        <ControlsBar
          itemCount={filteredProducts.length}
          showFilters={showFilters}
          onToggleFilters={toggleFilters}
          currentSort={sortOrder}
          onSort={handleSort}
        />

        <div className={styles.container}>
          {/* Sidebar filters */}
          <Filters
            show={showFilters}
            onFilter={handleFilter}
            categories={["all", ...new Set(products.map((p) => p.category))]}
          />

          {/* Product listing grid */}
          <ProductGrid
            products={filteredProducts}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </main>

      {/* Common site footer */}
      <Footer />
    </>
  );
}

// Server-Side Rendering - Better for Netlify
export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const products = await res.json();

    return {
      props: {
        products: Array.isArray(products) ? products : [],
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
