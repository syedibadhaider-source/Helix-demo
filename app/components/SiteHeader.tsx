"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "../site-data";

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Helix home">
        <Image className="brand-logo" src="/helix-logo-header.png" alt="Helix logo" width={272} height={153} priority />
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`nav-item${item.menu ? " has-menu" : ""}${activeMenu === item.label ? " menu-open" : ""}`}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              aria-expanded={item.menu ? activeMenu === item.label : undefined}
              onClick={(event) => {
                if (!item.menu) return;
                event.preventDefault();
                setActiveMenu((current) => (current === item.label ? null : item.label));
              }}
            >
              {item.label}
              {item.menu ? <span aria-hidden="true">⌄</span> : null}
            </Link>

            {item.menu ? (
              <div className={`nav-dropdown nav-dropdown-${item.menu.type}`}>
                {item.menu.type === "fire" ? (
                  <>
                    <div className="nav-fire-cards">
                      {item.menu.featureCards.map((card) => (
                        <Link
                          key={card.title}
                          href={card.href}
                          className={`nav-fire-card${card.active ? " active" : ""}`}
                          onClick={() => setActiveMenu(null)}
                        >
                          <div>
                            <strong>{card.title}</strong>
                            <span>{card.text}</span>
                          </div>
                          <em aria-hidden="true">→</em>
                        </Link>
                      ))}

                      <Link className="nav-explore-all" href={item.href} onClick={() => setActiveMenu(null)}>
                        Explore all
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>

                    <div className="nav-fire-links">
                      {item.menu.links.map((link) => (
                        <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="nav-list-links">
                    {item.menu.links.map((link) => (
                      <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}>
                        {link.label}
                      </Link>
                    ))}

                    <Link className="nav-explore-all inline" href={item.href} onClick={() => setActiveMenu(null)}>
                      Explore all
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="header-whatsapp"
          href="https://wa.me/4403706084350?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Helix via WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
              fill="currentColor"
            />
          </svg>
          <span>WhatsApp</span>
        </a>

        <Link className="header-cta" href="/book-now">
          Book Now
        </Link>
      </div>
    </header>
  );
}
