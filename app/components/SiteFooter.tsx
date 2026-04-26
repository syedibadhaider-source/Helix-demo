import Link from "next/link";
import { footerColumns } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main-grid">
          {/* Left Column Card */}
          <div className="footer-contact-card">
            <div className="footer-card-header">
              <div className="footer-logo-circle">
                <span className="logo-text">H</span>
              </div>
              <div className="footer-contact-info">
                <div className="contact-row">
                  <span className="icon">📞</span>
                  <a href="tel:03706084350">0370 608 4350</a>
                </div>
                <div className="contact-row">
                  <span className="icon">✉️</span>
                  <a href="mailto:hello@helixfiresecurity.com">Customer Services</a>
                </div>
                <div className="contact-row">
                  <span className="icon">🕒</span>
                  <span>Open: 24/7</span>
                </div>
              </div>
            </div>

            <div className="footer-address-block">
              <p className="company-name">Helix Fire & Security Ltd.</p>
              <p>Mayflower Close, Chandlers Ford SO53 4AR</p>
              <div className="registration-info">
                <p>VAT No: 275056495</p>
                <p>Registration No: 2703471</p>
              </div>
            </div>

            <div className="footer-social-pill">
              <a href="#linkedin" aria-label="LinkedIn">in</a>
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#x" aria-label="X">X</a>
            </div>
          </div>

          {/* Right Link Columns */}
          <div className="footer-nav-columns">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-nav-col">
                <h3>{column.title}</h3>
                <div className="footer-nav-links">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="footer-copyright">
            <p>© 2026 Helix Fire Security Ltd. All rights reserved. Designed by Owalistic Solution.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

