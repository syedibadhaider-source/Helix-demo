import Link from "next/link";
import { footerColumns } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-contact-card">
            <div className="footer-brand-mark">CFS</div>

            <div className="footer-contact-grid">
              <div className="footer-address">
                <p>
                  Churches Fire &amp; Security Fire
                  <br />
                  House, Mayflower Close,
                  <br />
                  Chandlers Ford SO53 4AR
                </p>

                <p>
                  VAT No: 275056495
                  <br />
                  Registration No: 2703471
                </p>
              </div>

              <div className="footer-contact-meta">
                <a href="tel:03706084350">0370 608 4350</a>
                <a href="mailto:hello@helixfiresecurity.com">Customer Services</a>
                <span>Open: 24/7</span>

                <div className="footer-socials">
                  <a href="#linkedin" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#facebook" aria-label="Facebook">
                    f
                  </a>
                  <a href="#x" aria-label="X">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-links-grid">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          <p>© 2026 Helix Fire Security Ltd. All rights reserved. Designed by Owalistic Solution.</p>
        </div>
      </div>
    </footer>
  );
}
