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
                  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:07359589933">07359 589933</a>
                </div>
                <div className="contact-row">
                  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@helixfiresecurity.com">Customer Services</a>
                </div>
                <div className="contact-row">
                  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open: 24/7</span>
                </div>
                <div className="contact-row !items-start">
                  <svg className="w-5 h-5 text-slate-400 shrink-0 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="not-italic">
                    29 Green Lane Road<br />
                    Leicester<br />
                    LE5 3TN
                  </address>
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
