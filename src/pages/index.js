// Layout components
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// Product-related components
import Filters from "../components/product/Filters.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";

// UI sections
import ControlsBar from "../components/sections/ControlsBar.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";

// Page-level styles
import styles from "../styles/product.module.css";

// Custom hook for product logic (filtering, sorting, favorites)
import useProducts from "../hooks/useProducts";

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
          count={filteredProducts.length} // number of visible products
          showFilters={showFilters}
          onToggleFilters={toggleFilters}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <div className={styles.container}>
          {/* Sidebar filters */}
          <Filters show={showFilters} onFilter={handleFilter} />

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

// Runs on every request (SSR)
export async function getServerSideProps() {
  try {
    // Fetch products from external API
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
      props: {
        // Safety check to avoid runtime errors
        products: Array.isArray(products) ? products : [],
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    // Fallback if API fails
    return {
      props: {
        products: [],
      },
    };
  }
}
