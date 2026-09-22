'use client'

import React, { useState } from 'react'

export default function Home() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  // Replace with your file paths in public/ or hosted URLs
  const mediaItems = [
    { type: 'image', src: '/gallery1.jpg', alt: 'Addis Inglewood Interior' },
    { type: 'image', src: '/gallery2.jpg', alt: 'Lounge Seating Area' },
    { type: 'video', src: '/gallery-video.mp4', alt: 'Venue Walkthrough' },
    { type: 'image', src: '/gallery3.jpg', alt: 'Bar & Event Space' },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative font-sans selection:bg-[#D4A328] selection:text-black">
      
      {/* Import Google Font: Cormorant Garamond */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />

      {/* HERO SECTION WITH BACKGROUND VIDEO */}
      <section className="relative min-h-screen flex flex-col justify-between px-8 md:px-16 pt-32 pb-12 overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black pointer-events-none" />
        </div>

        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-black/70 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-[0.2em] uppercase text-white font-serif">ADDIS</span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4A328] -mt-1">INGLEWOOD</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] uppercase text-gray-300 font-light">
            <a href="#space" className="hover:text-[#D4A328] transition">The Space</a>
            <a href="#membership" className="hover:text-[#D4A328] transition">Membership</a>
            <a href="#contact" className="hover:text-[#D4A328] transition">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#D4A328] hover:bg-[#C29221] text-black px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition shadow-lg"
          >
            Book Event
          </a>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mt-10">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-[#D4A328]"></span>
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#D4A328] font-light">
              INGLEWOOD, CALIFORNIA
            </span>
          </div>

          <h1 
            className="text-5xl sm:text-7xl md:text-[80px] font-light leading-[1.05] text-white mb-8 tracking-tight max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Inglewood&apos;s Premier Elevated Lounge &amp; Creative Venue
          </h1>

          <p className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed font-light tracking-wide mb-6 opacity-85">
            A dark, sculptural sanctuary for private events, creative productions, and an intimate circle of members. Where every evening is composed like a work of art.
          </p>

          <p 
            className="text-[#D4A328] text-base md:text-lg italic font-light mb-10 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Where Culture Meets Class — Inglewood&apos;s Premier Elevated Lounge &amp; Creative Venue
          </p>

          <a 
            href="#contact"
            className="inline-block bg-[#D4A328] hover:bg-[#C29221] text-black px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition shadow-lg"
          >
            Reserve The Lounge
          </a>
        </div>
      </section>

      {/* THE SPACE / GALLERY SECTION */}
      <section id="space" className="py-24 px-8 md:px-16 border-t border-white/10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4A328] font-light block mb-2">
            EXPLORE THE VENUE
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            The Space
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
          <div className="aspect-[16/9] relative flex items-center justify-center bg-black">
            {mediaItems[currentMediaIndex].type === 'video' ? (
              <video 
                controls 
                autoPlay 
                muted 
                className="w-full h-full object-cover"
                src={mediaItems[currentMediaIndex].src}
              />
            ) : (
              <img 
                src={mediaItems[currentMediaIndex].src} 
                alt={mediaItems[currentMediaIndex].alt} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            )}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentMediaIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentMediaIndex === index ? 'w-8 bg-[#D4A328]' : 'w-2 bg-white/40'
                }`}
                title={item.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KITCHEN COMING SOON SECTION */}
      <section id="membership" className="py-24 px-8 md:px-16 border-t border-white/10 bg-neutral-950/50 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#D4A328]/20 border border-[#D4A328]/40 rounded-full text-[10px] tracking-[0.3em] uppercase text-[#D4A328] mb-4">
            NEW EXPANSION
          </span>
          <h2 
            className="text-3xl md:text-5xl font-light text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            KITCHEN COMING SOON
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Our new culinary concept, adjacent to the private lounge.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-neutral-900/60 border border-white/10 rounded-lg p-8 md:p-12 text-center backdrop-blur-sm">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4A328] font-light block mb-2">
            EXCLUSIVE ACCESS
          </span>
          <h3 
            className="text-3xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
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
              className="bg-black/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328] flex-1 placeholder:text-gray-600"
            />
            <button 
              type="submit"
              className="bg-[#D4A328] hover:bg-[#C29221] text-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded transition"
            >
              APPLY
            </button>
          </form>
        </div>
      </section>

      {/* BOOK EVENT / CONTACT SECTION */}
      <section id="contact" className="py-24 px-8 md:px-16 border-t border-white/10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4A328] font-light block mb-2">
            INQUIRIES &amp; RESERVATIONS
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Book Your Event
          </h2>
          <div className="w-12 h-[1px] bg-[#D4A328]/60 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-neutral-900/40 border border-white/10 rounded-lg p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328] placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328] placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">PHONE NUMBER</label>
                <input 
                  type="text" 
                  placeholder="(310) 000-0000" 
                  className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328] placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">EVENT TYPE</label>
                <select className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328]">
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
                className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A328] placeholder:text-gray-600"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#D4A328] hover:bg-[#C29221] text-black py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded transition shadow-lg"
            >
              SUBMIT INQUIRIES
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 md:px-16 border-t border-white/10 bg-black relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="text-3xl font-bold tracking-[0.2em] uppercase text-white font-serif mb-1">ADDIS</div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#D4A328] mb-4">INGLEWOOD</div>
          <p className="text-xs text-gray-500 max-w-xs font-light">
            An elevated lounge and creative venue for private events, productions, and an intimate community of members.
          </p>
        </div>

        <div className="text-left md:text-right text-xs text-gray-400 space-y-2 font-light">
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#D4A328] mb-1">VISIT &amp; CONTACT</div>
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
