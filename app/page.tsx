'use client'

import React, { useState } from 'react'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Carousel images matching your venue preview
  const spaceImages = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1920&auto=format&fit=crop',
  ]

  return (
    <main className="min-h-screen bg-black text-white relative font-sans selection:bg-amber-200 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between px-8 md:px-16 pt-32 pb-12 overflow-hidden">
        {/* Background Overlay & Media */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${spaceImages[0]}')` }}
        />

        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-black/60 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-[0.2em] uppercase text-white font-serif">ADDIS</span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200/80 -mt-1">INGLEWOOD</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] uppercase text-gray-300 font-light">
            <a href="#space" className="hover:text-amber-200 transition">The Space</a>
            <a href="#membership" className="hover:text-amber-200 transition">Membership</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#E2C799] text-black px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition"
          >
            Book Event
          </a>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mt-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-200/60"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-200/90 font-light">
              PRIVATE LOUNGE &amp; SPEAKEASY • INGLEWOOD, CA
            </span>
          </div>

          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-normal leading-none text-white mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Addis Inglewood
          </h1>

          <p className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed font-light tracking-wide mb-10 opacity-90">
            An intimate speakeasy with bespoke seating and ambient lighting, crafted for exclusive gatherings.
          </p>

          <a 
            href="#contact"
            className="inline-block bg-[#E2C799] text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition"
          >
            Reserve The Lounge
          </a>
        </div>
      </section>

      {/* 2. THE SPACE / GALLERY SECTION */}
      <section id="space" className="py-24 px-8 md:px-16 border-t border-white/10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-amber-200/80 font-light block mb-2">
            EXPLORE THE VENUE
          </span>
          <h2 
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Space
          </h2>
        </div>

        {/* Main Interactive Carousel Frame */}
        <div className="max-w-5xl mx-auto relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
          <div className="aspect-[16/9] relative">
            <img 
              src={spaceImages[currentImageIndex]} 
              alt="Addis Inglewood Interior" 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {spaceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentImageIndex === index ? 'w-8 bg-amber-200' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESTAURANT & MEMBERSHIP WAITLIST SECTION */}
      <section id="membership" className="py-24 px-8 md:px-16 border-t border-white/10 bg-neutral-950/50 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-amber-900/30 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-amber-300 mb-4">
            NEW EXPANSION
          </span>
          <h2 
            className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            RESTAURANT COMING SOON
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Our new culinary concept, adjacent to the private lounge.
          </p>
        </div>

        {/* Waitlist Card */}
        <div className="max-w-2xl mx-auto bg-neutral-900/60 border border-white/10 rounded-lg p-8 md:p-12 text-center backdrop-blur-sm">
          <span className="text-[10px] tracking-[0.35em] uppercase text-amber-200/80 font-light block mb-2">
            EXCLUSIVE ACCESS
          </span>
          <h3 
            className="text-3xl font-serif text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Join The Membership Waitlist
          </h3>
          <p className="text-xs text-gray-400 mb-8 max-w-md mx-auto font-light">
            All memberships are subject to application review. Enter your email below to join the priority list.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-black/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200 flex-1 placeholder:text-gray-600"
            />
            <button 
              type="submit"
              className="bg-[#E2C799] text-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] rounded hover:bg-white transition"
            >
              APPLY
            </button>
          </form>
        </div>
      </section>

      {/* 4. BOOK EVENT / CONTACT FORM SECTION */}
      <section id="contact" className="py-24 px-8 md:px-16 border-t border-white/10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.35em] uppercase text-amber-200/80 font-light block mb-2">
            INQUIRIES &amp; RESERVATIONS
          </span>
          <h2 
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Book Your Event
          </h2>
          <div className="w-12 h-[1px] bg-amber-200/40 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-neutral-900/40 border border-white/10 rounded-lg p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200 placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">PHONE NUMBER</label>
                <input 
                  type="text" 
                  placeholder="(310) 000-0000" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200 placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">EVENT TYPE</label>
                <select className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200">
                  <option>Private Party / Celebration</option>
                  <option>Creative Production / Photoshoot</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">EVENT NOTES &amp; DETAILS</label>
              <textarea 
                rows={4} 
                placeholder="Estimated guest count, preferred date, or special requests..." 
                className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200 placeholder:text-gray-600"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#E2C799] text-black py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded hover:bg-white transition"
            >
              SUBMIT INQUIRIES
            </button>
          </form>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-16 px-8 md:px-16 border-t border-white/10 bg-black relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="text-3xl font-bold tracking-[0.2em] uppercase text-white font-serif mb-1">ADDIS</div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-amber-200/80 mb-4">INGLEWOOD</div>
          <p className="text-xs text-gray-500 max-w-xs font-light">
            An elevated lounge and creative venue for private events, productions, and an intimate community of members.
          </p>
        </div>

        <div className="text-left md:text-right text-xs text-gray-400 space-y-2 font-light">
          <div className="text-[10px] tracking-[0.25em] uppercase text-amber-200/80 mb-1">VISIT &amp; CONTACT</div>
          <p>📍 201 S Market St, Inglewood, CA 90301</p>
          <p>📞 (310) 569-5695</p>
          <p>✉️ info@addisinglewood.com</p>
        </div>

        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-600 font-light">
          <p>© 2026 Addis Inglewood. All rights reserved.</p>
          <p>201 S MARKET ST.</p>
        </div>
      </footer>

    </main>
  )
}
