export default function BreezeMaxHomepage() {
  const scents = [
    {
      name: 'Midnight Ice',
      color: 'from-blue-700 to-cyan-400',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Tropical Rush',
      color: 'from-yellow-500 to-orange-500',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Vanilla Luxe',
      color: 'from-yellow-100 to-amber-300',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Black Cherry',
      color: 'from-pink-700 to-red-500',
      image:
        'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Fresh Linen',
      color: 'from-sky-400 to-blue-500',
      image:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ocean Mist',
      color: 'from-cyan-400 to-blue-400',
      image:
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,0.25),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,80,255,0.18),transparent_40%)]" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-14 py-6 border-b border-white/10 backdrop-blur-sm">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Breeze<span className="text-yellow-400">Max</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-10 text-sm tracking-wide text-white/80">
          <a href="#" className="hover:text-cyan-400 transition">HOME</a>
          <a href="#" className="hover:text-cyan-400 transition">SCENTS</a>
          <a href="#" className="hover:text-cyan-400 transition">WHOLESALE</a>
          <a href="#" className="hover:text-cyan-400 transition">ABOUT</a>
          <a href="#" className="hover:text-cyan-400 transition">CONTACT</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-6 md:px-14 py-16 md:py-24">
        <div>
          <div className="inline-flex border border-cyan-500/40 bg-cyan-500/10 rounded-full px-4 py-2 text-xs tracking-[0.25em] text-cyan-300 mb-8">
            LONG LASTING • PREMIUM QUALITY
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            LUXURY
            <br />
            <span className="text-cyan-400">FRESHENERS</span>
          </h2>

          <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
            Premium automotive fragrances engineered for drivers who expect
            style, atmosphere, and long-lasting freshness.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-[0_0_35px_rgba(0,255,255,0.35)]">
              SHOP SCENTS
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition font-semibold bg-white/5 backdrop-blur-md">
              WHOLESALE
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              'LONG LASTING',
              'PREMIUM OILS',
              'RETAIL READY',
              'LUXURY DESIGN',
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md text-center text-xs tracking-wider text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Product */}
        <div className="relative flex justify-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/30 blur-[120px]" />

          <div className="relative bg-gradient-to-b from-blue-900 to-black border border-cyan-400/20 rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(0,140,255,0.35)] max-w-md">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              alt="Cool Breeze"
              className="h-[700px] w-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-cyan-300 tracking-[0.3em] text-xs mb-3">
                BREEZEMAX SIGNATURE SCENT
              </p>

              <h3 className="text-5xl font-black leading-none">
                COOL
                <br />
                BREEZE
              </h3>

              <p className="text-white/70 mt-3">CRISP • CLEAN • OCEANIC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Scents */}
      <section className="relative z-10 px-6 md:px-14 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-cyan-300 tracking-[0.3em] text-xs mb-3">
              CHOOSE YOUR VIBE
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              SIGNATURE SCENTS
            </h2>
          </div>

          <button className="hidden md:block px-6 py-3 border border-white/20 rounded-xl bg-white/5 hover:border-cyan-400 transition">
            VIEW ALL
          </button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
          {scents.map((scent) => (
            <div
              key={scent.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-500"
            >
              <div
                className={`absolute inset-0 opacity-30 bg-gradient-to-b ${scent.color}`}
              />

              <img
                src={scent.image}
                alt={scent.name}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-black text-2xl leading-tight">
                  {scent.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative z-10 px-6 md:px-14 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop"
            className="h-full w-full object-cover opacity-70"
            alt="Luxury car interior"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        <div>
          <p className="text-cyan-300 tracking-[0.3em] text-xs mb-4">
            ENGINEERED TO LAST
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-none">
            LONG LASTING
            <br />
            PERFORMANCE
          </h2>

          <p className="mt-8 text-white/70 leading-relaxed max-w-xl text-lg">
            BreezeMax fragrances are crafted with premium oils designed to
            deliver bold, consistent freshness through every drive.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-12">
            {[
              ['60+', 'DAYS'],
              ['PREMIUM', 'FRAGRANCE OILS'],
              ['RETAIL', 'READY'],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <h3 className="text-3xl font-black text-cyan-400">{title}</h3>
                <p className="text-xs tracking-[0.25em] text-white/60 mt-2">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="relative z-10 px-6 md:px-14 pb-24">
        <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-blue-950 via-black to-cyan-950 p-10 md:p-16 shadow-[0_0_80px_rgba(0,140,255,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_30%)]" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-300 tracking-[0.3em] text-xs mb-5">
              WHOLESALE READY
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              BUILT FOR
              <br />
              MAJOR RETAIL
            </h2>

            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl">
              Designed for convenience stores, automotive retailers, gas
              stations, and distributors looking for premium shelf presence.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-[0_0_35px_rgba(0,255,255,0.35)]">
                CONTACT WHOLESALE
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition font-semibold bg-white/5 backdrop-blur-md">
                VIEW CATALOG
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
      }

