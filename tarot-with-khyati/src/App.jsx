import { useState } from "react";

export default function TarotWithKhyati() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const quotes = [
    "The cards reveal what your soul already knows.",
    "Healing begins when intuition speaks.",
    "Your energy creates your destiny.",
    "Trust the universe and your inner wisdom.",
  ];

  const whatsappBookingMessage = encodeURIComponent(`🔮 Tarot Reading Booking 🔮

👤 Name: __________

I would like to book a tarot reading session. Please share the details and available timings. ✨`);

  const handleBookingClick = () => {
    window.open(
      `https://wa.me/919910575591?text=${whatsappBookingMessage}`,
      "_blank"
    );
  };

  const handleReviewSubmit = () => {
    if (!name.trim() || !review.trim()) return;

    const message = `✨ New Tarot Review ✨\n\n👤 Name: ${name}\n💜 Review: ${review}`;

    window.open(
      `https://wa.me/919910575591?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setName("");
    setReview("");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f9f0e8] text-[#3d1d4f] font-serif bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1e0937] via-[#2d0b4e] to-[#3a1360] text-white border-b-4 border-[#d9a441] pb-24">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <nav className="relative z-50 flex items-center justify-between border-b border-[#ffffff20] px-6 py-6 md:px-16">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🔮</div>

            <div>
              <h1 className="text-3xl font-bold text-[#ffd369]">
                Tarot with
              </h1>

              <h2 className="text-5xl font-bold">Khyati ✨</h2>
            </div>
          </div>

          <div className="hidden gap-10 text-xl text-[#fff3d6] md:flex">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            onClick={handleBookingClick}
            className="rounded-full bg-gradient-to-r from-[#ffcf5c] to-[#ff9f43] px-8 py-4 text-xl font-bold text-[#3d1d4f] shadow-2xl transition duration-300 hover:scale-105"
          >
            Book A Reading ✨
          </button>
        </nav>

        <div className="relative z-20 grid items-center gap-12 px-6 pt-20 md:grid-cols-2 md:px-16">
          <div>
            <div className="mb-8 inline-block rounded-full border border-[#ffd36966] bg-[#ffffff15] px-6 py-3 text-lg text-[#ffd369] shadow-xl backdrop-blur-md">
              ✨ WELCOME SOUL ✨
            </div>

            <h1 className="mb-8 text-6xl font-bold leading-none md:text-8xl">
              Tarot with <span className="text-[#ffd369]">Khyati</span>
            </h1>

            <p className="mb-10 text-2xl uppercase tracking-[8px] text-[#ffe6a7] md:text-3xl">
              Learn • Practice • Heal
            </p>

            <div className="mb-10 max-w-2xl rounded-[30px] border border-[#ffd36955] bg-[#ffffff10] p-8 shadow-2xl backdrop-blur-md">
              <p className="text-2xl italic leading-relaxed text-[#fff5da]">
                “The universe is always speaking to you through signs, energy,
                intuition and tarot.” 🔮
              </p>
            </div>

            <button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-full bg-gradient-to-r from-[#6d28d9] to-[#c084fc] px-12 py-5 text-2xl font-bold text-white shadow-[0_0_40px_rgba(192,132,252,0.6)] transition duration-300 hover:scale-105"
            >
              Explore Your Journey ✨
            </button>

            <div className="mt-12 flex flex-wrap gap-10 text-xl text-[#fff3d6]">
              <div>🪷 Spiritual Guidance</div>
              <div>☀️ Self Discovery</div>
              <div>💜 Inner Healing</div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(192,132,252,0.25),transparent_70%)] blur-3xl" />

            <div className="relative flex h-[650px] w-full max-w-2xl items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,211,105,0.18),transparent_70%)] blur-3xl" />

              <img
                src="/tarot-poster.jpeg"
                alt="Tarot Poster"
                className="absolute w-[120%] scale-110 rounded-[45px] opacity-100 "
              />

              

              <div className="absolute left-0 top-10 text-7xl opacity-70 animate-floatSparkle">
                🌙
              </div>

              <div className="absolute bottom-10 right-0 text-7xl opacity-70 animate-floatSparkle">
                ✨
              </div>

              <div className="absolute -right-5 top-1/2 text-6xl opacity-60 animate-spin-slow">
                🔮
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] px-6 py-24 md:px-16"
      >
        <div className="absolute left-0 top-10 text-8xl opacity-20">
          ✨
        </div>

        <div className="absolute bottom-10 right-0 text-8xl opacity-20">
          🔮
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <img
              src="khyati-photo.jpeg"
              alt="Tarot"
              className="w-full rounded-[40px] border-4 border-[#e9d5ff] object-cover shadow-2xl"
            />
          </div>

          <div>
            <h2 className="mb-8 text-5xl font-bold">
              About the Tarot Space
            </h2>

            <p className="text-xl leading-loose text-[#5b3a67]">
              Tarot with Khyati is a peaceful spiritual corner where intuition,
              healing, and cosmic energy come together. Discover self-growth,
              divine guidance, and soulful transformation through tarot,
              meditation, affirmations, and spiritual wisdom.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-[#e9d5ff] bg-white/70 p-6 text-center shadow-xl">
                <div className="mb-4 text-5xl">🌙</div>
                <h3 className="text-2xl font-semibold">Intuition</h3>
              </div>

              <div className="rounded-3xl border border-[#e9d5ff] bg-white/70 p-6 text-center shadow-xl">
                <div className="mb-4 text-5xl">🪷</div>
                <h3 className="text-2xl font-semibold">Healing</h3>
              </div>

              <div className="rounded-3xl border border-[#e9d5ff] bg-white/70 p-6 text-center shadow-xl">
                <div className="mb-4 text-5xl">✨</div>
                <h3 className="text-2xl font-semibold">Manifestation</h3>
              </div>

              <div className="rounded-3xl border border-[#e9d5ff] bg-white/70 p-6 text-center shadow-xl">
                <div className="mb-4 text-5xl">🔮</div>
                <h3 className="text-2xl font-semibold">Tarot Wisdom</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#f3e8ff] to-[#fff7ed] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] px-6 py-24">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Soulful Tarot Quotes
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="rounded-[30px] border border-[#e9d5ff] bg-white/80 p-10 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl">✨</div>

              <p className="text-2xl italic leading-relaxed text-[#4b2b57]">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="reviews"
        className="bg-gradient-to-r from-[#fff7ed] to-[#f3e8ff] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] px-6 py-24 md:px-16"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-5xl font-bold">
            Share Your Experience ✨
          </h2>

          <p className="mb-16 text-2xl text-[#6b4d77]">
            Write your tarot experience and energy journey 💜
          </p>

          <div className="mx-auto max-w-3xl rounded-[40px] border border-[#e9d5ff] bg-white/80 p-10 text-left shadow-2xl backdrop-blur-md">
            <div className="mb-8">
              <label className="mb-3 block text-2xl font-semibold text-[#4b2b57]">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-[#d8b4fe] bg-white/70 p-5 text-xl outline-none focus:ring-4 focus:ring-[#d8b4fe]"
              />
            </div>

            <div className="mb-8">
              <label className="mb-3 block text-2xl font-semibold text-[#4b2b57]">
                Your Review
              </label>

              <textarea
                rows="6"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your beautiful experience here..."
                className="w-full resize-none rounded-2xl border border-[#d8b4fe] bg-white/70 p-5 text-xl outline-none focus:ring-4 focus:ring-[#d8b4fe]"
              />
            </div>

            <button
              onClick={handleReviewSubmit}
              className="w-full rounded-2xl bg-gradient-to-r from-[#7e22ce] to-[#c084fc] py-5 text-2xl font-bold text-white shadow-2xl transition duration-300 hover:scale-[1.02]"
            >
              Submit Review ✨
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] px-6 py-24 md:px-16"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-5xl font-bold">
            Connect with Khyati
          </h2>

          <p className="mb-14 text-2xl text-[#6b4d77]">
            Follow for daily tarot guidance, affirmations, healing energy &
            spiritual wisdom.
          </p>

          <div className="relative z-50 grid gap-8 md:grid-cols-3">
            <a
              href="https://instagram.com/the.tarot.girl_"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-[35px] bg-gradient-to-br from-pink-400 to-purple-500 p-10 text-left text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="mb-6 text-6xl">📸</div>
              <h3 className="mb-3 text-3xl font-bold">Instagram</h3>
              <p className="text-xl">@the.tarot.girl_</p>
            </a>

            <a
              href="https://maps.google.com/?q=Block,+Tarot+Readings+by+Khyati+Raj+Nagar+Extension,+Ghaziabad,+Uttar+Pradesh+201002"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-[35px] bg-gradient-to-br from-yellow-400 to-orange-500 p-10 text-left text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="mb-6 text-6xl">🗺️</div>
              <h3 className="mb-3 text-3xl font-bold">Location</h3>
              <p className="text-xl leading-relaxed">
                Tarot By Khyati
                
              </p>
            </a>

            <a
              href="https://wa.me/919910575591"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-[35px] bg-gradient-to-br from-green-400 to-green-600 p-10 text-left text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="mb-6 text-6xl">💬</div>
              <h3 className="mb-3 text-3xl font-bold">WhatsApp</h3>
              <p className="text-xl">+91 9910575591</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-[#d8b4fe] bg-gradient-to-r from-[#f3e8ff] via-[#fff7ed] to-[#f3e8ff] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] py-16 text-center backdrop-blur-md">
        <div className="absolute left-10 top-5 text-6xl opacity-30">
          🌙
        </div>

        <div className="absolute bottom-5 right-10 text-6xl opacity-30">
          ✨
        </div>

        <h3 className="mb-4 text-3xl font-bold">
          Tarot with Khyati
        </h3>

        <p className="text-lg text-[#6b4d77]">
          Let the cards guide your soul ✨
        </p>

        <div className="mt-6 flex justify-center gap-6 text-3xl">
          <span>🔮</span>
          <span>☾</span>
          <span>✨</span>
          <span>🪷</span>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #f5e9ff;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(#c084fc, #7e22ce);
          border-radius: 999px;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }

        @keyframes floatSparkle {
          0% {
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.7;
          }

          25% {
            transform: translateY(-18px) scale(1.15) rotate(8deg);
            opacity: 1;
          }

          50% {
            transform: translateY(-35px) scale(1.3) rotate(-8deg);
            opacity: 0.9;
          }

          75% {
            transform: translateY(-18px) scale(1.1) rotate(8deg);
            opacity: 1;
          }

          100% {
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.7;
          }
        }

        .animate-floatSparkle {
          animation: floatSparkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
