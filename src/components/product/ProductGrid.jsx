import ProductCard from "./ProductCard";
import styles from "../../styles/product.module.css";

export default function ProductGrid({ products, favorites, onToggleFavorite }) {
  return (
    // Grid layout for product cards
    <div className={styles.grid}>
      {products.map((product) => (
        // Render a card for each product
        <ProductCard
          key={product.id} // Unique key for React
          product={product} // Product data
          isFavorite={favorites[product.id]} // Favorite state
          onToggleFavorite={onToggleFavorite} // Toggle handler
        />
      ))}
    </div>
  );
}
