import ProductCard from "./ProductCard";
import styles from "../../styles/product.module.css";

export default function ProductGrid({ products, favorites, onToggleFavorite }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites[product.id]}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
