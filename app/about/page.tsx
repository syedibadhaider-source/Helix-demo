import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function AboutPage() {
  const page = getSectionLanding("about");

  return (
    <main className="bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={page.image}
            alt={page.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red/20 text-red font-heading text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm border border-red/30">
            {page.eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-8">
            {page.title}
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-slate-200 font-medium">
            {page.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                {page.overviewTitle}
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                {page.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {page.highlights.map((highlight, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center text-red">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg">{highlight}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Items Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">Discover More</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explore our operational processes, team structure, and commitment to the environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.gridItems.map((item) => (
              <Link 
                key={item.title} 
                href={item.href || "#"} 
                className="group relative bg-slate-50 p-8 rounded-2xl overflow-hidden transition-all hover:bg-navy hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <h3 className="text-2xl font-heading font-bold text-navy mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors mb-8 flex-grow">{item.text}</p>
                <div className="mt-auto flex items-center text-red font-bold group-hover:text-white transition-colors">
                  Explore <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {page.fitTitle}
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {page.ctaText}
          </p>
          <a href="/book-now" className="inline-flex items-center justify-center px-8 py-4 bg-red text-white rounded-xl font-heading font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red/30">
            {page.ctaButton}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
