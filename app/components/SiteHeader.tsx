"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "../site-data";

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-100 transition-all duration-300 w-full flex flex-wrap items-center justify-between px-4 lg:px-[var(--page-gutter)] py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8">
      <Link className="brand-mark" href="/" aria-label="Helix home" onClick={closeAllMenus}>
        <Image className="w-[140px] lg:w-[198px] h-auto" src="/helix-logo-header.png" alt="Helix logo" width={272} height={153} priority />
      </Link>

      <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
        <a
          className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#1ca34a] text-white transition-transform hover:-translate-y-0.5"
          href="https://wa.me/4403706084350?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Helix via WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
            <path
              d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <button 
          className="flex items-center justify-center w-11 h-11 text-slate-800 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div className={`w-full lg:w-auto lg:contents ${isMobileMenuOpen ? "block" : "hidden lg:block"}`}>
        <div className="flex flex-col lg:contents mt-4 lg:mt-0 pt-2 lg:pt-0 border-t border-slate-100 lg:border-t-0">
          <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-6 text-[1.05rem] lg:text-[0.9rem] font-bold text-navy w-full lg:w-auto" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`nav-item w-full lg:w-auto border-b border-slate-100 lg:border-b-0 ${item.menu ? " has-menu" : ""} ${activeMenu === item.label ? " menu-open" : ""}`}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex justify-between items-center w-full py-4 lg:py-3 transition-colors text-slate-600 hover:text-red"
                  aria-expanded={item.menu ? activeMenu === item.label : undefined}
                  onClick={(event) => {
                    if (!item.menu) {
                      closeAllMenus();
                      return;
                    }
                    event.preventDefault();
                    setActiveMenu((current) => (current === item.label ? null : item.label));
                  }}
                >
                  {item.label}
                  {item.menu ? <span aria-hidden="true" className={`ml-1.5 text-[1.2em] relative -top-[1px] ${isMobileMenuOpen ? "transform rotate-0" : ""}`}>⌄</span> : null}
                </Link>

                {item.menu ? (
                  <div className={`nav-dropdown nav-dropdown-${item.menu.type} ${isMobileMenuOpen && activeMenu === item.label ? "block static shadow-none border-none bg-transparent w-full p-0 pb-4 opacity-100 visible" : "hidden lg:block"}`}>
                    {item.menu.type === "fire" ? (
                      <>
                        <div className="nav-fire-cards">
                          {item.menu.featureCards.map((card) => (
                            <Link
                              key={card.title}
                              href={card.href}
                              className={`nav-fire-card${card.active ? " active" : ""}`}
                              onClick={closeAllMenus}
                            >
                              <div>
                                <strong>{card.title}</strong>
                                <span>{card.text}</span>
                              </div>
                              <em aria-hidden="true">→</em>
                            </Link>
                          ))}

                          <Link className="nav-explore-all" href={item.href} onClick={closeAllMenus}>
                            Explore all
                            <span aria-hidden="true">↗</span>
                          </Link>
                        </div>

                        <div className="nav-fire-links">
                          {item.menu.links.map((link) => (
                            <Link key={link.label} href={link.href} onClick={closeAllMenus}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="nav-list-links">
                        {item.menu.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={closeAllMenus}>
                            {link.label}
                          </Link>
                        ))}

                        <Link className="nav-explore-all inline" href={item.href} onClick={closeAllMenus}>
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

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-[10px] w-full lg:w-auto mt-6 lg:mt-0 pb-4 lg:pb-0">
            <a
              className="hidden lg:inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-lg bg-[#1ca34a] text-white whitespace-nowrap font-heading text-[0.82rem] font-bold transition-transform hover:-translate-y-0.5"
              href="https://wa.me/4403706084350?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Helix via WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" aria-hidden="true">
                <path
                  d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
                  fill="currentColor"
                />
              </svg>
              <span>WhatsApp</span>
            </a>

            <Link className="flex items-center justify-center min-h-[48px] lg:min-h-[44px] px-5 bg-[#ff1015] text-white whitespace-nowrap font-heading text-[1rem] lg:text-[0.84rem] font-bold rounded-lg transition-transform hover:-translate-y-0.5 w-full lg:w-auto" href="/book-now" onClick={closeAllMenus}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
