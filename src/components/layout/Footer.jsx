import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    // Footer wrapper
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top section: Newsletter + Contact info */}
        <div className={styles.grid}>
          {/* Newsletter signup */}
          <div className={styles.newsletter}>
            <h2 className={styles.title}>BE THE FIRST TO KNOW</h2>
            <p className={styles.text}>Sign up for updates from mettā muse.</p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.input}
                aria-label="Email address"
              />
              <button type="submit" className={styles.btn}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Contact & currency info */}
          <div className={styles.contact}>
            <h2 className={styles.title}>CONTACT US</h2>
            <p className={styles.text}>+44 221 133 5360</p>
            <p className={styles.text}>customercare@mettamuse.com</p>

            <h3 className={styles.subtitle}>CURRENCY</h3>
            <div className={styles.currency}>
              <span className={styles.flag}>🇺🇸</span>
              <span>• USD</span>
            </div>

            <p className={styles.note}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className={styles.divider}></div>

        {/* Bottom section: Links, social & payments */}
        <div className={styles.bottom}>
          {/* Footer navigation links */}
          <div className={styles.links}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>mettā muse</h3>
              <a href="#about" className={styles.link}>
                About Us
              </a>
              <a href="#stories" className={styles.link}>
                Stories
              </a>
              <a href="#artisans" className={styles.link}>
                Artisans
              </a>
              <a href="#boutiques" className={styles.link}>
                Boutiques
              </a>
              <a href="#contact" className={styles.link}>
                Contact Us
              </a>
              <a href="#compliance" className={styles.link}>
                EU Compliances Docs
              </a>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>QUICK LINKS</h3>
              <a href="#orders" className={styles.link}>
                Orders & Shipping
              </a>
              <a href="#join" className={styles.link}>
                Join/Login as a Seller
              </a>
              <a href="#payment" className={styles.link}>
                Payment & Pricing
              </a>
              <a href="#return" className={styles.link}>
                Return & Refunds
              </a>
              <a href="#faq" className={styles.link}>
                FAQs
              </a>
              <a href="#privacy" className={styles.link}>
                Privacy Policy
              </a>
              <a href="#terms" className={styles.link}>
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Social media & payment methods */}
          <div className={styles.social}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>

            {/* Social icons */}
            <div className={styles.socialIcons}>
              <a
                href="#instagram"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                {/* Instagram icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                {/* LinkedIn icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M8 11V17M8 8V8.01M12 17V13M12 13V11M12 13C12 11 14 11 14 11V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>

            {/* Accepted payment methods */}
            <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>

            <div className={styles.payment}>
              <div className={styles.paymentIcon}>GPay</div>
              <div className={styles.paymentIcon}>MC</div>
              <div className={styles.paymentIcon}>PP</div>
              <div className={styles.paymentIcon}>AMEX</div>
              <div className={styles.paymentIcon}>APay</div>
              <div className={styles.paymentIcon}>OPay</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
