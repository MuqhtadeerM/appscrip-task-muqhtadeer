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

  if (products.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <HeroSection />
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>No products found. API may have failed.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
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

// Runs at build time with ISR
export async function getStaticProps() {
  try {
    console.log("Fetching products from API...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const res = await fetch("https://fakestoreapi.com/products", {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(`Successfully fetched ${data.length} products`);

    const products = Array.isArray(data) ? data : [];

    return {
      props: {
        products,
      },
      revalidate: 3600, // re-fetch every 1 hour
    };
  } catch (error) {
    console.error("Failed to fetch products:", error.message);

    // Return empty array on failure
    return {
      props: {
        products: [],
      },
      revalidate: 60, // retry after 1 minute
    };
  }
}
