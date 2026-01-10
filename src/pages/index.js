import { useEffect, useState } from "react";

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

export default function Home({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(initialProducts.length === 0);

  // Fetch on client-side if SSG failed
  useEffect(() => {
    if (initialProducts.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Client-side fetch failed:", err);
          setLoading(false);
        });
    }
  }, [initialProducts.length]);

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
      <Header />

      <main className={styles.main}>
        <HeroSection />

        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>No products found. Please try again later.</p>
          </div>
        ) : (
          <>
            <ControlsBar
              count={filteredProducts.length}
              showFilters={showFilters}
              onToggleFilters={toggleFilters}
              sortOrder={sortOrder}
              onSort={handleSort}
            />

            <div className={styles.container}>
              <Filters
                show={showFilters}
                onFilter={handleFilter}
                categories={[
                  "all",
                  ...new Set(products.map((p) => p.category)),
                ]}
              />

              <ProductGrid
                products={filteredProducts}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) {
      console.error(`API responded with status: ${res.status}`);
      return {
        props: { products: [] },
        revalidate: 60,
      };
    }

    const products = await res.json();

    return {
      props: {
        products: Array.isArray(products) ? products : [],
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Build-time fetch failed:", error.message);
    // Return empty array, will fetch on client-side
    return {
      props: { products: [] },
      revalidate: 60,
    };
  }
}
