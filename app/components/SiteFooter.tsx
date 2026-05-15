import Link from "next/link";
import Image from "next/image";
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
                <Image
                  src="/helix-logo-footer.png"
                  alt="Helix footer logo"
                  width={80}
                  height={66}
                  className="footer-logo-image"
                />
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
            <p>
              © {new Date().getFullYear()} Helix Fire & Security Ltd. All rights reserved. Designed by{" "}
              <a href="https://www.owlisticstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
                Owlistic Studio
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
