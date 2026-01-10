import styles from "../../styles/product.module.css";

export default function HeroSection() {
  return (
    // Hero/banner section at top of product page
    <section className={styles.hero}>
      {/* Main page heading */}
      <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>

      {/* Supporting description text */}
      <p className={styles.heroText}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
}
