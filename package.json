import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div 
          className="text-xl tracking-widest uppercase font-serif text-amber-50"
          style={{ fontFamily: "serif" }}
        >
          ADDIS
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] uppercase text-gray-300 font-light">
          <a href="#space" className="hover:text-white transition">The Space</a>
          <a href="#estimate" className="hover:text-white transition">Estimate</a>
          <a href="#membership" className="hover:text-white transition">Membership</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-6">
          <span className="hidden sm:inline text-xs text-gray-300 tracking-wider font-light">(310) 555-0188</span>
          <a 
            href="#book" 
            className="bg-amber-100/90 text-black px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] rounded hover:bg-white transition"
          >
            Book Event
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-20 pt-24">
        {/* Subtitle Accent Line */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1px] bg-amber-200/50"></span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-200/80 font-light">
            PRIVATE LOUNGE &amp; SPEAKEASY • INGLEWOOD, CA
          </span>
        </div>

        {/* Main Headline in matching serif font */}
        <h1 
          className="text-5xl md:text-8xl font-normal leading-[1.08] max-w-4xl text-amber-50/95 mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Addis Inglewood
        </h1>

        {/* Subtext description */}
        <p className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed font-light tracking-wide">
          An intimate speakeasy with bespoke seating and ambient lighting, crafted for exclusive gatherings.
        </p>
      </section>
    </main>
  )
}
