import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Filters from "../components/product/Filters.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import ControlsBar from "../components/sections/ControlsBar.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import styles from "../styles/product.module.css";
import useProducts from "../hooks/useProducts";

export default function Home({ products }) {
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

        <ControlsBar
          count={filteredProducts.length}
          showFilters={showFilters}
          onToggleFilters={toggleFilters}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <div className={styles.container}>
          <Filters show={showFilters} onFilter={handleFilter} />

          <ProductGrid
            products={filteredProducts}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
      props: {
        products: Array.isArray(products) ? products : [],
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
