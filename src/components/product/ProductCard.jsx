import styles from "../../styles/product.module.css";

export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    // Single product card
    <article className={styles.card}>
      {/* Product image */}
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* Product details */}
      <div className={styles.info}>
        {/* Product title */}
        <h3 className={styles.name}>{product.title.toUpperCase()}</h3>

        {/* Pricing access message */}
        <div className={styles.meta}>
          <a href="#signin" className={styles.link}>
            Sign in
          </a>
          <span> or </span>
          <a href="#create" className={styles.link}>
            Create an account to see pricing
          </a>
        </div>

        {/* Wishlist / favorite button */}
        <button
          className={`${styles.favorite} ${
            isFavorite ? styles.favoriteActive : ""
          }`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label="Add to wishlist"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
          >
            <path
              d="M12 21L3 12C1 10 1 7 3 5C5 3 8 3 10 5L12 7L14 5C16 3 19 3 21 5C23 7 23 10 21 12L12 21Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
