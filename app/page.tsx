"use client";

import {
  Aperture,
  ArrowRight,
  CalendarCheck,
  Camera,
  Check,
  ChevronDown,
  Film,
  Heart,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const navItems = ["Portfolio", "Services", "Packages", "Process", "FAQ"];

const gallery = [
  {
    title: "Golden hour vows",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Quiet bridal details",
    category: "Details",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Reception glow",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Editorial portraits",
    category: "Portraits",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    copy: "Full-day visual storytelling for intimate ceremonies, destination weddings, and grand celebrations.",
  },
  {
    icon: Film,
    title: "Cinematic Event Coverage",
    copy: "Elegant coverage for proposals, anniversaries, debuts, receptions, and curated brand events.",
  },
  {
    icon: Aperture,
    title: "Editorial Portrait Sessions",
    copy: "Soft, romantic portraits with guided posing, refined composition, and timeless editing.",
  },
];

const packages = [
  {
    name: "Intimate",
    price: "$950",
    detail: "For civil weddings, elopements, and private ceremonies.",
    features: ["4 hours coverage", "1 photographer", "150 edited images", "Online gallery"],
  },
  {
    name: "Signature",
    price: "$1,850",
    detail: "The complete VowLens experience for full wedding days.",
    featured: true,
    features: ["8 hours coverage", "2 photographers", "450 edited images", "Engagement mini session", "Online gallery"],
  },
  {
    name: "Cinematic",
    price: "$2,750",
    detail: "For couples who want photography with a film-inspired story arc.",
    features: ["10 hours coverage", "2 photographers", "Highlight reel add-on", "700 edited images", "Premium album design"],
  },
];

const testimonials = [
  {
    quote:
      "Every photo felt like a memory we could step back into. VowLens captured the quiet moments we almost missed.",
    name: "Amelia & Rowan",
    event: "Garden Wedding",
  },
  {
    quote:
      "The gallery looked cinematic, elegant, and deeply personal. It felt like our story, not just our event.",
    name: "Mika & Daniel",
    event: "Beach Ceremony",
  },
  {
    quote:
      "Professional, calm, and artistic from start to finish. The final images were beyond what we imagined.",
    name: "Sofia Lee",
    event: "Anniversary Celebration",
  },
];

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For weddings, booking 6 to 12 months ahead is recommended. Smaller events and portrait sessions can often be scheduled with shorter notice.",
  },
  {
    q: "Do you travel for destination events?",
    a: "Yes. VowLens Studio can create custom travel collections for destination weddings, intimate elopements, and events outside the city.",
  },
  {
    q: "How long until we receive our gallery?",
    a: "Preview images are usually delivered within one week. Complete edited galleries are typically delivered within 4 to 8 weeks depending on the package.",
  },
  {
    q: "Can we customize a package?",
    a: "Absolutely. Coverage hours, second shooters, albums, engagement sessions, and event add-ons can be adjusted to fit your celebration.",
  },
];

const process = [
  "Share your story",
  "Plan the visual direction",
  "Capture the celebration",
  "Deliver your timeless gallery",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [toast, setToast] = useState("");

  const featuredStats = useMemo(
    () => [
      ["120+", "love stories captured"],
      ["8 yrs", "visual storytelling"],
      ["4.9/5", "client experience"],
    ],
    []
  );

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const name = String(data.get("name") || "").trim();

    if (!name || !email.includes("@")) {
      setToast("Please add your name and a valid email.");
      return;
    }

    form.reset();
    setToast("Inquiry received. VowLens will reach out shortly.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f2ea] text-[#241b16]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(205,170,113,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(65,42,31,0.16),transparent_30%)]" />

      {toast && (
        <button
          onClick={() => setToast("")}
          className="fixed right-5 top-5 z-50 max-w-sm rounded-full border border-[#d7b77e]/50 bg-[#241b16] px-5 py-3 text-sm text-[#fff7ec] shadow-2xl shadow-[#241b16]/20 transition hover:-translate-y-0.5"
        >
          {toast}
        </button>
      )}

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-[#f8f2ea]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#241b16] text-[#f9ead2] shadow-xl shadow-[#241b16]/15 transition group-hover:rotate-6">
              <Camera size={20} />
            </span>
            <span>
              <span className="block font-serif text-xl tracking-[0.22em]">VOWLENS</span>
              <span className="block text-[10px] uppercase tracking-[0.36em] text-[#8b6f52]">Studio</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-[0.22em] text-[#6f5842] transition hover:text-[#241b16]"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#inquiry"
            className="hidden rounded-full bg-[#241b16] px-6 py-3 text-sm font-medium text-[#fff7ec] shadow-xl shadow-[#241b16]/15 transition hover:-translate-y-0.5 lg:inline-flex"
          >
            Book a consultation
          </a>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#dcc8ad] bg-white/45 lg:hidden"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#eadcc9] bg-[#f8f2ea] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-2xl border border-[#eadcc9] bg-white/50 px-4 py-3 text-sm uppercase tracking-[0.22em] text-[#6f5842]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dec7a4] bg-white/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#866741]">
              <Sparkles size={14} /> Modern wedding storytelling
            </div>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#211611] sm:text-6xl lg:text-8xl">
              Timeless wedding stories, captured with cinematic elegance.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5842]">
              VowLens Studio captures weddings and events through refined, emotional, and cinematic visuals — preserving every glance, detail, and unforgettable moment with an artistic touch.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241b16] px-7 py-4 text-sm font-medium text-[#fff7ec] shadow-2xl shadow-[#241b16]/20 transition hover:-translate-y-1"
              >
                View portfolio <ArrowRight size={17} />
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6bd96] bg-white/45 px-7 py-4 text-sm font-medium text-[#241b16] transition hover:-translate-y-1 hover:bg-white"
              >
                <CalendarCheck size={17} /> Book a consultation
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {featuredStats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-[#eadcc9] bg-white/40 p-4 backdrop-blur">
                  <div className="font-serif text-2xl text-[#241b16]">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8b6f52]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-12 z-10 hidden rounded-full border border-white/40 bg-white/70 px-5 py-3 text-sm text-[#6a513c] shadow-2xl shadow-[#241b16]/10 backdrop-blur lg:flex">
              <Heart className="mr-2 text-[#b58b50]" size={17} /> Emotion-led photography
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-[#d9c4a4] p-3 shadow-2xl shadow-[#65472d]/20">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=90"
                alt="Elegant wedding couple photographed by VowLens Studio"
                className="h-[560px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-t from-[#1d120c]/65 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-[#fff7ec]">
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-[#f6d7a4]">
                  <Play size={14} /> Featured story
                </div>
                <p className="max-w-md font-serif text-3xl leading-tight">A soft, editorial approach to moments that only happen once.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadcc9] bg-[#241b16] px-5 py-5 text-[#f9ead2] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 text-center text-xs uppercase tracking-[0.32em] text-[#d9b987] lg:justify-between">
          <span>Elegant ceremonies</span>
          <span>Emotional candids</span>
          <span>Cinematic color</span>
          <span>Refined details</span>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">Featured gallery</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                A portfolio shaped by light, movement, and honest emotion.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#735c45]">
              Explore a curated preview of VowLens Studio's warm, cinematic direction for weddings, events, and editorial sessions.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {gallery.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setSelectedImage(item)}
                  className={`group overflow-hidden rounded-[2rem] border p-3 text-left transition hover:-translate-y-1 ${selectedImage.title === item.title ? "border-[#b58b50] bg-white/65" : "border-[#eadcc9] bg-white/35"}`}
                >
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="h-24 w-24 rounded-[1.5rem] object-cover" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#a17a45]">{item.category}</p>
                      <h3 className="mt-2 font-serif text-2xl text-[#241b16]">{item.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/35 p-3 shadow-2xl shadow-[#65472d]/10">
              <img src={selectedImage.image} alt={selectedImage.title} className="h-[620px] w-full rounded-[2rem] object-cover" />
              <div className="absolute bottom-8 left-8 rounded-full bg-[#fff7ec]/85 px-5 py-3 text-sm uppercase tracking-[0.22em] text-[#6f5842] backdrop-blur">
                {selectedImage.category} — {selectedImage.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fff9f0] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Photography for celebrations that deserve to feel eternal.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group rounded-[2rem] border border-[#eadcc9] bg-[#f8f2ea] p-8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#65472d]/10">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#241b16] text-[#f9ead2] transition group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-8 font-serif text-3xl text-[#241b16]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-[#735c45]">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/40 p-3 shadow-2xl shadow-[#65472d]/10">
            <img
              src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=85"
              alt="Wedding rings and floral details"
              className="h-[560px] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">The signature style</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              Refined direction with room for real emotion.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#735c45]">
              VowLens Studio blends guided editorial composition with quiet documentary observation, creating galleries that feel elevated without losing the sincerity of the day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Warm cinematic color grading",
                "Calm posing guidance",
                "Detail-focused storytelling",
                "Mobile-ready online galleries",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-[#eadcc9] bg-white/45 px-4 py-3 text-sm text-[#5f4734]">
                  <Check size={16} className="text-[#a17a45]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="bg-[#241b16] px-5 py-24 text-[#fff7ec] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#d9b987]">Packages</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Collections for every kind of celebration.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#d9c7b5]">Transparent starting packages designed for portfolio presentation. Real client packages can be customized by location, hours, and add-ons.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={`relative rounded-[2rem] border p-8 ${item.featured ? "border-[#d9b987] bg-[#fff7ec] text-[#241b16]" : "border-white/10 bg-white/[0.06]"}`}>
                {item.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#241b16] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f9ead2]">Most booked</span>
                )}
                <h3 className="font-serif text-4xl">{item.name}</h3>
                <p className={`mt-4 text-sm leading-6 ${item.featured ? "text-[#735c45]" : "text-[#d9c7b5]"}`}>{item.detail}</p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="font-serif text-5xl">{item.price}</span>
                  <span className="pb-2 text-sm uppercase tracking-[0.2em] opacity-70">starting</span>
                </div>
                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={item.featured ? "text-[#a17a45]" : "text-[#d9b987]"} /> {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">Booking process</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">A calm, guided experience from first message to final gallery.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-[2rem] border border-[#eadcc9] bg-white/40 p-6">
                <div className="font-serif text-5xl text-[#c9a069]">0{index + 1}</div>
                <h3 className="mt-8 font-serif text-2xl text-[#241b16]">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff9f0] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">Kind words</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Stories from the archive.</h2>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-[#eadcc9] bg-[#f8f2ea] p-8">
                <div className="flex gap-1 text-[#c79b5c]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-8 font-serif text-2xl leading-relaxed text-[#2a1c14]">“{item.quote}”</p>
                <div className="mt-8 text-sm uppercase tracking-[0.22em] text-[#8b6f52]">{item.name}</div>
                <div className="mt-1 text-sm text-[#735c45]">{item.event}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#a17a45]">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Before you book.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#735c45]">Simple answers for couples, planners, and event hosts preparing for a meaningful celebration.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.5rem] border border-[#eadcc9] bg-white/45 p-6 open:bg-white/70">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl text-[#241b16]">
                  {item.q}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={22} />
                </summary>
                <p className="mt-5 leading-7 text-[#735c45]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#241b16] shadow-2xl shadow-[#65472d]/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85"
              alt="Wedding reception table with candles"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241b16] via-[#241b16]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-[#fff7ec]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f0c98d]">Now booking</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">Tell us what you want to remember forever.</h2>
            </div>
          </div>
          <form onSubmit={handleInquiry} className="space-y-5 p-6 text-[#fff7ec] sm:p-10 lg:p-14">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-[#d9c7b5]">
                Your name
                <input name="name" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#fff7ec] outline-none transition placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="Name" />
              </label>
              <label className="space-y-2 text-sm text-[#d9c7b5]">
                Email address
                <input name="email" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#fff7ec] outline-none transition placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="hello@email.com" />
              </label>
            </div>
            <label className="block space-y-2 text-sm text-[#d9c7b5]">
              Event type
              <select name="event" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#fff7ec] outline-none transition focus:border-[#d9b987]">
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Event coverage</option>
              </select>
            </label>
            <label className="block space-y-2 text-sm text-[#d9c7b5]">
              Message
              <textarea name="message" rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#fff7ec] outline-none transition placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="Share your date, location, and the feeling you want your gallery to have." />
            </label>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fff7ec] px-7 py-4 text-sm font-semibold text-[#241b16] transition hover:-translate-y-1 sm:w-auto">
              Send inquiry <Mail size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#eadcc9] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-[#735c45] md:flex-row md:items-center">
          <div>
            <div className="font-serif text-2xl tracking-[0.18em] text-[#241b16]">VOWLENS STUDIO</div>
            <p className="mt-2">Premium wedding and event photography landing page concept.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full border border-[#eadcc9] bg-white/40 px-4 py-2" href="#inquiry">
              <MessageCircle size={16} /> Start an inquiry
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-[#eadcc9] bg-white/40 px-4 py-2" href="#portfolio">
              <Camera size={16} /> View gallery
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
