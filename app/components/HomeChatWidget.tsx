"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SESSION_KEY = "helix-home-chat-dismissed";

function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4C7.03 4 3 7.36 3 11.5c0 2.13 1.08 4.05 2.8 5.41L5 20l3.58-1.86c1.04.23 2.12.36 3.42.36 4.97 0 9-3.36 9-7.5S16.97 4 12 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="11.4" r="1" fill="currentColor" />
      <circle cx="12" cy="11.4" r="1" fill="currentColor" />
      <circle cx="15.5" cy="11.4" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BookNowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4 9h16M6 6h12a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 14 1.7 1.7 3.3-3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuzzing, setIsBuzzing] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "true") return;

    const openTimer = window.setTimeout(() => {
      setIsOpen(true);
      setIsBuzzing(true);
      setAutoOpened(true);
    }, 2000);

    return () => window.clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen || !autoOpened) return;

    const closeTimer = window.setTimeout(() => {
      setIsOpen(false);
      setIsBuzzing(false);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 5000);

    return () => window.clearTimeout(closeTimer);
  }, [isOpen, autoOpened]);

  function handleToggle() {
    setIsOpen((current) => !current);
    setIsBuzzing((current) => !current && current ? current : false);
    sessionStorage.setItem(SESSION_KEY, "true");
  }

  return (
    <div className="chat-widget">
      {isOpen ? (
        <div className="chat-widget-panel">
          <div className="chat-widget-head">
            <div>
              <p>Need help quickly?</p>
              <h3>Choose an option</h3>
            </div>
            <button type="button" className="chat-widget-close" onClick={handleToggle} aria-label="Close chat widget">
              ×
            </button>
          </div>

          <div className="chat-widget-options compact">
            <a
              className="chat-widget-option"
              href="https://wa.me/4403706084350?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
              target="_blank"
              rel="noreferrer"
            >
              <span className="chat-widget-option-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <div>
                <strong>WhatsApp</strong>
                <span>Quick contact with our team</span>
              </div>
            </a>

            <Link className="chat-widget-option book-now" href="/book-now">
              <span className="chat-widget-option-icon" aria-hidden="true">
                <BookNowIcon />
              </span>
              <div>
                <strong>Book Now</strong>
                <span>Open the dedicated enquiry form</span>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className={`chat-widget-trigger${isBuzzing ? " buzzing" : ""}`}
        onClick={handleToggle}
        aria-label="Open chat widget"
      >
        <span className="chat-widget-trigger-icon" aria-hidden="true">
          <ChatBubbleIcon />
        </span>
      </button>
    </div>
  );
}
