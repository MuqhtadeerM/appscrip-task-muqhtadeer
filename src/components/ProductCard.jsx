export default function ProductCard({ product }) {
  return (
    <article className="productCard">
      <div className="imageWrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="wishlist">♡</span>
      </div>

      <h3 className="productTitle">{product.title}</h3>
      <p className="productPrice">${product.price}</p>
    </article>
  );
}
