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
import { FormEvent, useEffect, useState } from "react";

const navItems = ["Portfolio", "Services", "Packages", "Process", "FAQ"];

const gallery = [
  {
    title: "Golden hour vows",
    category: "Ceremony",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Rings, florals, and textures",
    category: "Details",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Movement, laughter, and light",
    category: "Reception",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Editorial couple sessions",
    category: "Portraits",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=90",
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
    copy: "Soft romantic portraits with guided posing, refined composition, and timeless editing.",
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
    detail: "The complete wedding experience for full-event storytelling.",
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
    quote: "Every photo felt like a memory we could step back into. VowLens captured the quiet moments we almost missed.",
    name: "Amelia & Rowan",
    event: "Garden Wedding",
  },
  {
    quote: "The gallery looked cinematic, elegant, and deeply personal. It felt like our story, not just our event.",
    name: "Mika & Daniel",
    event: "Beach Ceremony",
  },
  {
    quote: "Professional, calm, and artistic from start to finish. The final images were beyond what we imagined.",
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
  {
    title: "Share Your Story",
    copy: "Tell us your date, location, celebration type, and the moments that matter most.",
  },
  {
    title: "Plan the Coverage",
    copy: "We help shape the timeline, coverage hours, and photography direction.",
  },
  {
    title: "Capture the Day",
    copy: "Your wedding is documented with calm guidance and emotional attention to detail.",
  },
  {
    title: "Receive Your Gallery",
    copy: "Your edited gallery is delivered with timeless images ready to share and preserve.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(205,170,113,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(65,42,31,0.16),transparent_30%)]" />

      {toast && (
        <button
          onClick={() => setToast("")}
          className="magnetic-button fixed right-5 top-5 z-50 max-w-sm rounded-full border border-[#d7b77e]/50 bg-[#241b16] px-5 py-3 text-sm font-medium text-[#fff7ec] shadow-2xl shadow-[#241b16]/20"
        >
          {toast}
        </button>
      )}

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#eadcc9]/70 bg-[#f8f2ea]/86 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#241b16] text-[#f9ead2] shadow-xl shadow-[#241b16]/15 transition group-hover:rotate-6 group-hover:scale-105">
              <Camera size={21} />
            </span>
            <span>
              <span className="block font-serif text-2xl leading-none tracking-[0.22em]">VOWLENS</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.34em] text-[#765c3f]">Studio</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#5f4734] hover:text-[#241b16]">
                {item}
              </a>
            ))}
          </div>

          <a href="#inquiry" className="magnetic-button hidden rounded-full bg-[#241b16] px-6 py-3 text-sm font-semibold text-[#fff7ec] shadow-xl shadow-[#241b16]/15 lg:inline-flex">
            Check Availability
          </a>

          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-[#dcc8ad] bg-white/60 lg:hidden" aria-label="Open navigation menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#eadcc9] bg-[#f8f2ea] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-2xl border border-[#eadcc9] bg-white/70 px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4734]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-[fade-up_900ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dec7a4] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#76552d] shadow-sm">
              <Sparkles size={14} /> Modern Wedding Storytelling
            </div>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-[#211611] sm:text-6xl lg:text-[5.8rem]">
              Timeless wedding stories, captured with cinematic elegance.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#5d4734]">
              VowLens Studio captures weddings and events through a refined, emotional, and cinematic lens — preserving every glance, detail, and quiet in-between moment with an artistic touch.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#inquiry" className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[#241b16] px-7 py-4 text-sm font-semibold text-[#fff7ec] shadow-2xl shadow-[#241b16]/20">
                Check Availability <CalendarCheck size={17} />
              </a>
              <a href="#portfolio" className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full border border-[#d6bd96] bg-white/65 px-7 py-4 text-sm font-semibold text-[#241b16] hover:bg-white">
                View Portfolio <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {[["120+", "Love Stories"], ["8 Years", "Experience"], ["4.9/5", "Client Rating"]].map(([value, label]) => (
                <div key={label} className="premium-hover rounded-3xl border border-[#eadcc9] bg-white/60 p-4 backdrop-blur">
                  <div className="font-serif text-3xl text-[#241b16]">{value}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#765c3f]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[fade-up_1100ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="absolute -left-8 top-12 z-10 hidden rounded-full border border-white/50 bg-white/80 px-5 py-3 text-sm font-semibold text-[#5f4734] shadow-2xl shadow-[#241b16]/10 backdrop-blur lg:flex">
              <Heart className="mr-2 text-[#b58b50]" size={17} /> Emotion-led photography
            </div>
            <div className="image-zoom luxury-glow relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#d9c4a4] p-3 shadow-2xl shadow-[#65472d]/20">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=90" alt="Cinematic wedding photography of an elegant couple by VowLens Studio" className="h-[560px] w-full rounded-[2rem] object-cover" />
              <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-t from-[#1d120c]/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-[#fff7ec]">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#f6d7a4]"><Play size={14} /> Featured story</div>
                <p className="max-w-md font-serif text-3xl leading-tight">A soft, editorial approach to moments that only happen once.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadcc9] bg-[#241b16] px-5 py-5 text-[#f9ead2] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b987] lg:justify-between">
          <span>Elegant ceremonies</span><span>Emotional candids</span><span>Cinematic color</span><span>Refined details</span>
        </div>
      </section>

      <section id="portfolio" data-reveal className="scroll-fade px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">Featured gallery</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">A portfolio shaped by light, movement, and honest emotion.</h2>
            </div>
            <p className="max-w-md text-base font-medium leading-7 text-[#5d4734]">Explore a curated preview of VowLens Studio&apos;s warm, cinematic direction for weddings, events, and editorial sessions.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {gallery.map((item) => (
                <button key={item.title} onClick={() => setSelectedImage(item)} className={`premium-hover group overflow-hidden rounded-[2rem] border p-3 text-left ${selectedImage.title === item.title ? "border-[#b58b50] bg-white/80 shadow-xl shadow-[#65472d]/10" : "border-[#eadcc9] bg-white/50"}`}>
                  <div className="flex items-center gap-4">
                    <div className="image-zoom h-24 w-24 overflow-hidden rounded-[1.5rem]"><img src={item.image} alt={`${item.category} wedding photography preview: ${item.title}`} className="h-full w-full object-cover" /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f642a]">{item.category}</p>
                      <h3 className="mt-2 font-serif text-2xl text-[#241b16]">{item.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="image-zoom relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/45 p-3 shadow-2xl shadow-[#65472d]/10">
              <img src={selectedImage.image} alt={`VowLens Studio ${selectedImage.category.toLowerCase()} wedding photography: ${selectedImage.title}`} className="h-[620px] w-full rounded-[2rem] object-cover" />
              <div className="absolute bottom-8 left-8 rounded-full bg-[#fff7ec]/90 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#5f4734] backdrop-blur">{selectedImage.category} — {selectedImage.title}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" data-reveal className="scroll-fade bg-[#fff9f0] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Photography for celebrations that deserve to feel eternal.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} data-reveal className="premium-hover rounded-[2rem] border border-[#eadcc9] bg-[#f8f2ea] p-8 shadow-sm">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#241b16] text-[#f9ead2]"><Icon size={22} /></div>
                  <h3 className="mt-8 font-serif text-3xl text-[#241b16]">{service.title}</h3>
                  <p className="mt-4 text-[15px] font-medium leading-7 text-[#5d4734]">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-reveal className="scroll-fade px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="image-zoom relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/50 p-3 shadow-2xl shadow-[#65472d]/10">
            <img src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=90" alt="Wedding rings, florals, and detail-focused wedding photography" className="h-[560px] w-full rounded-[2rem] object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">The signature style</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Refined direction with room for real emotion.</h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#5d4734]">VowLens Studio blends guided editorial composition with quiet documentary observation, creating galleries that feel elevated without losing the sincerity of the day.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Gentle direction when needed", "Calm, natural guidance", "Detail-focused storytelling", "Moments that feel unforced"].map((item) => (
                <div key={item} className="premium-hover flex items-center gap-3 rounded-full border border-[#eadcc9] bg-white/65 px-4 py-3 text-sm font-semibold text-[#5f4734]"><Check size={16} className="text-[#a17a45]" /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="packages" data-reveal className="scroll-fade bg-[#241b16] px-5 py-24 text-[#fff7ec] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#d9b987]">Packages</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Collections for every kind of celebration.</h2>
            </div>
            <p className="max-w-md font-medium leading-7 text-[#e3d2bf]">Transparent starting packages designed for portfolio presentation. Real client packages can be customized by location, hours, and add-ons.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} data-reveal className={`premium-hover relative rounded-[2rem] border p-8 ${item.featured ? "border-[#d9b987] bg-[#fff7ec] text-[#241b16] shadow-2xl shadow-[#d9b987]/10" : "border-white/10 bg-white/[0.07]"}`}>
                {item.featured && <span className="absolute right-6 top-6 rounded-full bg-[#241b16] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f9ead2]">Most booked</span>}
                <h3 className="font-serif text-4xl">{item.name}</h3>
                <p className={`mt-4 text-[15px] font-medium leading-6 ${item.featured ? "text-[#5d4734]" : "text-[#e3d2bf]"}`}>{item.detail}</p>
                <div className="mt-8 flex items-end gap-2"><span className="font-serif text-5xl">{item.price}</span><span className="pb-2 text-sm font-bold uppercase tracking-[0.2em] opacity-75">starting</span></div>
                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => <div key={feature} className="flex items-center gap-3 text-sm font-medium"><Check size={16} className={item.featured ? "text-[#a17a45]" : "text-[#d9b987]"} /> {feature}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" data-reveal className="scroll-fade px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">Booking process</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">A calm, guided experience from first message to final gallery.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} data-reveal className="premium-hover rounded-[2rem] border border-[#eadcc9] bg-white/60 p-6">
                <div className="font-serif text-5xl text-[#b8894f]">0{index + 1}</div>
                <h3 className="mt-8 font-serif text-2xl text-[#241b16]">{step.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#5d4734]">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="scroll-fade bg-[#fff9f0] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">Kind words</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Stories from the archive.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} data-reveal className="premium-hover rounded-[2rem] border border-[#eadcc9] bg-[#f8f2ea] p-8">
                <div className="flex gap-1 text-[#c79b5c]">{[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <p className="mt-8 font-serif text-2xl leading-relaxed text-[#2a1c14]">“{item.quote}”</p>
                <div className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#765c3f]">{item.name}</div>
                <div className="mt-1 text-sm font-medium text-[#5d4734]">{item.event}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" data-reveal className="scroll-fade px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8f642a]">FAQ</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Before you book.</h2><p className="mt-6 max-w-md font-medium leading-7 text-[#5d4734]">Simple answers for couples, planners, and event hosts preparing for a meaningful celebration.</p></div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} data-reveal className="premium-hover group rounded-[1.5rem] border border-[#eadcc9] bg-white/60 p-6 open:bg-white/85">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl text-[#241b16]">{item.q}<ChevronDown className="shrink-0 transition group-open:rotate-180" size={22} /></summary>
                <p className="mt-5 font-medium leading-7 text-[#5d4734]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" data-reveal className="scroll-fade px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#241b16] shadow-2xl shadow-[#65472d]/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="image-zoom relative min-h-[480px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=90" alt="Wedding reception table with candles for cinematic event storytelling" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241b16] via-[#241b16]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-[#fff7ec]">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f0c98d]">Now booking</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">Tell us what you want to remember forever.</h2>
              <p className="mt-4 max-w-md text-sm font-medium leading-6 text-[#e3d2bf]">Share your wedding date, location, and vision. We’ll respond with availability and package guidance.</p>
            </div>
          </div>
          <form onSubmit={handleInquiry} className="space-y-5 p-6 text-[#fff7ec] sm:p-10 lg:p-14">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-[#e3d2bf]">Your name<input name="name" className="w-full rounded-2xl border border-white/10 bg-white/12 px-4 py-4 text-[#fff7ec] outline-none placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="Name" /></label>
              <label className="space-y-2 text-sm font-semibold text-[#e3d2bf]">Email address<input name="email" className="w-full rounded-2xl border border-white/10 bg-white/12 px-4 py-4 text-[#fff7ec] outline-none placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="hello@email.com" /></label>
            </div>
            <label className="block space-y-2 text-sm font-semibold text-[#e3d2bf]">Event type<select name="event" className="w-full rounded-2xl border border-white/10 bg-white/12 px-4 py-4 text-[#fff7ec] outline-none focus:border-[#d9b987]"><option>Wedding</option><option>Engagement</option><option>Anniversary</option><option>Event coverage</option></select></label>
            <label className="block space-y-2 text-sm font-semibold text-[#e3d2bf]">Message<textarea name="message" rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/12 px-4 py-4 text-[#fff7ec] outline-none placeholder:text-[#b9a798] focus:border-[#d9b987]" placeholder="Share your date, location, and the feeling you want your gallery to have." /></label>
            <button className="magnetic-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fff7ec] px-7 py-4 text-sm font-bold text-[#241b16] sm:w-auto">Check My Date <Mail size={17} /></button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#eadcc9] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm font-medium text-[#5d4734] md:flex-row md:items-center">
          <div><div className="font-serif text-2xl tracking-[0.18em] text-[#241b16]">VOWLENS STUDIO</div><p className="mt-2">Premium wedding and event photography landing page concept.</p></div>
          <div className="flex flex-wrap gap-3"><a className="magnetic-button inline-flex items-center gap-2 rounded-full border border-[#eadcc9] bg-white/60 px-4 py-2" href="#inquiry"><MessageCircle size={16} /> Check availability</a><a className="magnetic-button inline-flex items-center gap-2 rounded-full border border-[#eadcc9] bg-white/60 px-4 py-2" href="#portfolio"><Camera size={16} /> View gallery</a></div>
        </div>
      </footer>
    </main>
  );
}
