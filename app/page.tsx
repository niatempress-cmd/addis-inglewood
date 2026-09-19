'use client';

import { useState, useEffect } from 'react';

const HONEYBOOK_EMBED_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js?68b9f85eca1058000759b102';

const NAV_LINKS = [
  { name: 'THE SPACE', href: '#space' },
  { name: 'MEMBERSHIP', href: '#membership' },
  { name: 'CONTACT', href: '#contact' },
];

const HERO_IMAGE = 'https://i.ibb.co/kfq11d0/2C4A2804.jpg';

const SPACE_IMAGES = [
  'https://i.ibb.co/kfq11d0/2C4A2804.jpg',
  'https://i.ibb.co/ytnD7c8/2C4A2813.jpg',
  'https://i.ibb.co/vC4XWD0B/2-C4-A2859-2.jpg',
  'https://i.ibb.co/tw187KfC/photo-2026-08-20-23-41-08.jpg',
  'https://i.ibb.co/1tm33fCy/photo-2026-08-20-23-41-11.jpg',
  'https://i.ibb.co/7NYHdZ1b/photo-2026-08-20-23-41-15.jpg',
  'https://i.ibb.co/j9Ny5g97/photo-2026-08-20-23-41-18.jpg',
  'https://i.ibb.co/JWcH7NyH/photo-2026-08-20-23-41-22.jpg',
  'https://i.ibb.co/1GTBxw57/photo-2026-08-20-23-41-31.jpg',
  'https://i.ibb.co/CK7DDJtM/photo-2026-08-20-23-41-33.jpg',
  'https://i.ibb.co/PZ4hxWQJ/photo-2026-08-20-23-41-36.jpg',
  'https://i.ibb.co/1fY0k8F6/photo-2026-08-20-23-41-44.jpg',
  'https://i.ibb.co/gFgkHX7t/photo-2026-08-20-23-41-46.jpg',
  'https://i.ibb.co/6cvjbDgZ/photo-2026-08-20-23-41-48.jpg',
  'https://i.ibb.co/GfPpWqmp/photo-2026-08-20-23-46-33.jpg',
  'https://i.ibb.co/8LK6b9CG/IMG-4735.avif',
  'https://i.ibb.co/8L8hyDzn/IMG-4736.avif',
  'https://i.ibb.co/xSwCVxXP/IMG-4738.avif',
];

const WALKTHROUGH_VIDEOS = [
  {
    title: 'Space Walkthrough 1',
    url: 'https://streamable.com/e/twygvk?autoplay=0',
  },
  {
    title: 'Space Walkthrough 2',
    url: 'https://streamable.com/e/asw8yq?autoplay=0',
  },
  {
    title: 'Space Walkthrough 3',
    url: 'https://streamable.com/e/bre62w?autoplay=0',
  },
];

// Cleaned list: Removed the walkthrough video (bre62w) from Past Events
const PAST_EVENT_VIDEOS = [
  {
    title: 'Event Footage 1',
    url: 'https://streamable.com/e/zso4ux?autoplay=0',
  },
  {
    title: 'Event Footage 2',
    url: 'https://streamable.com/e/gkwq5z?autoplay=0',
  },
  {
    title: 'Event Footage 3',
    url: 'https://streamable.com/e/1zcby0?autoplay=0',
  },
  {
    title: 'Event Footage 4',
    url: 'https://streamable.com/e/xk3ns8?autoplay=0',
  },
];

function CustomBrandLogo() {
  return (
    <a
      href="#"
      className="flex flex-col group transition-transform duration-300 hover:scale-105"
    >
      <span className="font-serif text-2xl md:text-4xl font-black tracking-[0.2em] text-white leading-none uppercase">
        ADDIS
      </span>
      <span className="text-[9px] md:text-[11px] uppercase tracking-[0.45em] text-[#C9A227] font-bold mt-1 pl-0.5">
        INGLEWOOD
      </span>
    </a>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWalkthroughSlide, setCurrentWalkthroughSlide] = useState(0);
  const [currentEventSlide, setCurrentEventSlide] = useState(0);

  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Private Event',
    notes: '',
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SPACE_IMAGES.length);
    }, 3500);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = HONEYBOOK_EMBED_URL;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSubmitted(true);
      setWaitlistEmail('');
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#C9A227] selection:text-black font-sans overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#C9A227]/20 py-3'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          <CustomBrandLogo />

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-gray-300 hover:text-[#C9A227] transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="#contact"
              className="bg-[#C9A227] hover:bg-[#b08d20] text-black font-extrabold text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded transition-all shadow-lg shadow-[#C9A227]/20"
            >
              BOOK EVENT
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/80 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto space-y-4 md:space-y-6 pt-16 md:pt-20">
          <p className="text-[#C9A227] text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] font-semibold">
            PRIVATE LOUNGE & SPEAKEASY • INGLEWOOD, CA
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            Addis Inglewood
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto font-light tracking-wide leading-relaxed px-2">
            An intimate speakeasy with bespoke seating and ambient lighting,
            crafted for exclusive gatherings.
          </p>

          <div className="pt-4 md:pt-6">
            <a
              href="#contact"
              className="inline-block bg-[#C9A227] hover:bg-[#b08d20] text-black font-bold text-xs md:text-sm uppercase tracking-widest px-8 md:px-10 py-3.5 md:py-4 rounded transition-all shadow-xl shadow-[#C9A227]/20"
            >
              RESERVE THE LOUNGE
            </a>
          </div>
        </div>
      </section>

      {/* Gallery & Video Carousels */}
      <section
        id="space"
        className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 md:space-y-20"
      >
        <div>
          <div className="text-center space-y-3 mb-8 md:mb-12">
            <p className="text-[#C9A227] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
              EXPLORE THE VENUE
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              The Space
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-[#C9A227] mx-auto mt-3" />
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[320px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
            {SPACE_IMAGES.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Space Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-20 flex justify-center gap-1.5 md:gap-2 px-2 overflow-x-auto">
              {SPACE_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-6 md:w-8 bg-[#C9A227]'
                      : 'w-1.5 md:w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Slider Section with Full Zoom/Crop Fix */}
        <div className="bg-neutral-950/60 p-4 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-neutral-900">
          <div className="text-center space-y-3 mb-8 md:mb-12">
            <p className="text-[#C9A227] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
              VISUAL EXPERIENCE
            </p>
            <h2 className="font-serif text-2xl md:text-5xl font-bold tracking-tight">
              Walkthroughs & Event Footage
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-[#C9A227] mx-auto mt-3" />
          </div>

          {/* Walkthrough Slider */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227] mb-4 md:mb-6 text-center">
              Space Walkthroughs
            </h3>

            <div className="relative w-full max-w-xl md:max-w-3xl mx-auto flex justify-center items-center">
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[680px] rounded-2xl overflow-hidden border border-neutral-800 bg-black shadow-2xl flex items-center justify-center">
                <iframe
                  key={WALKTHROUGH_VIDEOS[currentWalkthroughSlide].url}
                  src={WALKTHROUGH_VIDEOS[currentWalkthroughSlide].url}
                  className="w-[300%] h-[180%] border-0 pointer-events-auto"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              <button
                onClick={() =>
                  setCurrentWalkthroughSlide(
                    (prev) =>
                      (prev - 1 + WALKTHROUGH_VIDEOS.length) %
                      WALKTHROUGH_VIDEOS.length
                  )
                }
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A227] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all text-xs font-bold border border-white/20 z-20 shadow-lg"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  setCurrentWalkthroughSlide(
                    (prev) => (prev + 1) % WALKTHROUGH_VIDEOS.length
                  )
                }
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A227] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all text-xs font-bold border border-white/20 z-20 shadow-lg"
              >
                ❯
              </button>

              <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                {WALKTHROUGH_VIDEOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentWalkthroughSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentWalkthroughSlide
                        ? 'w-6 bg-[#C9A227]'
                        : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Event Footage Slider */}
          <div className="pt-4">
            <h3 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227] mb-4 md:mb-6 text-center">
              Past Event Archives
            </h3>

            <div className="relative w-full max-w-xl md:max-w-3xl mx-auto flex justify-center items-center">
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[680px] rounded-2xl overflow-hidden border border-neutral-800 bg-black shadow-2xl flex items-center justify-center">
                <iframe
                  key={PAST_EVENT_VIDEOS[currentEventSlide].url}
                  src={PAST_EVENT_VIDEOS[currentEventSlide].url}
                  className="w-[300%] h-[180%] border-0 pointer-events-auto"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              <button
                onClick={() =>
                  setCurrentEventSlide(
                    (prev) =>
                      (prev - 1 + PAST_EVENT_VIDEOS.length) %
                      PAST_EVENT_VIDEOS.length
                  )
                }
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A227] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all text-xs font-bold border border-white/20 z-20 shadow-lg"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  setCurrentEventSlide(
                    (prev) => (prev + 1) % PAST_EVENT_VIDEOS.length
                  )
                }
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A227] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all text-xs font-bold border border-white/20 z-20 shadow-lg"
              >
                ❯
              </button>

              <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                {PAST_EVENT_VIDEOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentEventSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentEventSlide
                        ? 'w-6 bg-[#C9A227]'
                        : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT COMING SOON BANNER */}
      <section className="bg-gradient-to-r from-neutral-950 via-[#1a1608] to-neutral-950 border-y border-[#C9A227]/30 py-10 md:py-12 px-4 text-center relative z-20 shadow-2xl my-8 md:my-12">
        <div className="max-w-4xl mx-auto space-y-2 md:space-y-3">
          <span className="inline-block bg-[#C9A227]/20 text-[#C9A227] text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1 rounded-full border border-[#C9A227]/40 mb-1">
            NEW EXPANSION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
            RESTAURANT COMING SOON
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light">
            Our new culinary concept, adjacent to the private lounge.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="membership"
        className="py-10 md:py-12 px-4 max-w-3xl mx-auto text-center"
      >
        <div className="bg-neutral-900/40 p-6 sm:p-8 md:p-12 rounded-2xl border border-neutral-800 backdrop-blur-sm space-y-4 md:space-y-6">
          <p className="text-[#C9A227] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            EXCLUSIVE ACCESS
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            Join The Membership Waitlist
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-light">
            All memberships are subject to application review. Enter your email
            below to join the priority list.
          </p>

          {waitlistSubmitted ? (
            <div className="p-4 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg text-[#C9A227] text-xs uppercase tracking-wider font-semibold">
              Thank you! You have been added to the membership waitlist.
            </div>
          ) : (
            <form
              onSubmit={handleWaitlistSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="flex-1 bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A227] hover:bg-[#b08d20] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg transition-all"
              >
                Apply
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Booking Form & HoneyBook Embed */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center space-y-3 mb-8 md:mb-12">
          <p className="text-[#C9A227] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            INQUIRIES & RESERVATIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            Book Your Event
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#C9A227] mx-auto mt-3" />
        </div>

        <div className="bg-neutral-900/50 p-6 sm:p-8 md:p-12 rounded-2xl border border-neutral-800 backdrop-blur-sm shadow-2xl space-y-8">
          {bookingSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <h3 className="text-[#C9A227] font-serif text-2xl font-bold">
                Booking Request Received!
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Thank you for reaching out. Our events coordinator will review
                your request and contact you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleBookingSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={bookingData.name}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, name: e.target.value })
                    }
                    className="w-full bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={bookingData.email}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, email: e.target.value })
                    }
                    className="w-full bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 000-0000"
                    value={bookingData.phone}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, phone: e.target.value })
                    }
                    className="w-full bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-medium">
                    Event Type
                  </label>
                  <select
                    value={bookingData.eventType}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        eventType: e.target.value,
                      })
                    }
                    className="w-full bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C9A227] transition-colors"
                  >
                    <option value="Private Event">
                      Private Party / Celebration
                    </option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Film / Photo Shoot">
                      Film / Photo Shoot
                    </option>
                    <option value="Music / Creative Launch">
                      Music / Creative Launch
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-medium">
                  Event Notes & Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Estimated guest count, preferred date, or special requests..."
                  value={bookingData.notes}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, notes: e.target.value })
                  }
                  className="w-full bg-black/80 border border-neutral-700 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-[#b08d20] text-black font-extrabold text-xs uppercase tracking-widest py-3.5 md:py-4 rounded-lg transition-all shadow-xl shadow-[#C9A227]/20"
              >
                Submit Inquiries
              </button>
            </form>
          )}

          {/* HoneyBook Widget Container */}
          <div className="pt-6 border-t border-neutral-800">
            <div className="hb-p-68b9f85eca1058000759b102-4" />
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.honeybook.com/p.png?pid=68b9f85eca1058000759b102"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black pt-16 md:pt-20 pb-10 md:pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <CustomBrandLogo />
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-light">
              An elevated lounge and creative venue for private events,
              productions, and an intimate community of members.
            </p>
          </div>

          <div className="space-y-3 md:space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              VISIT & CONTACT
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs text-gray-300 font-light">
              <li>📍 201 S Market St, Inglewood, CA 90301</li>
              <li>📞 (310) 569-5695</li>
              <li>✉️ info@addisinglewood.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 md:pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] tracking-wider gap-3 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Addis Inglewood. All rights reserved.
          </p>
          <p>201 S MARKET ST, INGLEWOOD, CA 90301</p>
        </div>
      </footer>
    </div>
  );
}
