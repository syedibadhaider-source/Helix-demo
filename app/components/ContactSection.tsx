import { ContactForm } from "./ContactForm";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`contact-section${standalone ? " standalone" : ""}`} id="contact">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="service-page-eyebrow">Book now</p>
          <h2>Book a survey or request a callback</h2>
          <p>
            Tell us about your property, service requirements and timeline. Our team will review your
            enquiry and come back with the right next step, whether that is a survey, quote or quick
            callback.
          </p>

          <div className="contact-quick-links">
            <a className="contact-quick-card" href="https://wa.me/4403706084350?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey." target="_blank" rel="noreferrer">
              <strong>Quick contact via WhatsApp</strong>
              <span>Start a fast conversation with our team</span>
            </a>

            <a className="contact-quick-card" href="tel:03706084350">
              <strong>Call 0370 608 4350</strong>
              <span>Speak to us directly about your requirements</span>
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
