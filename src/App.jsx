import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      {/* Background framing – warm yellow instead of dark */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-yellow-200 via-yellow-200/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-yellow-100 to-transparent" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <About />

      {/* CTA Strip */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-200" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-3xl p-8 md:p-12 bg-white/70 backdrop-blur border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight">Taste the FLAMES Blue signature.</h3>
              <p className="mt-2 text-blue-900/70">Glossy reflections, smooth gradients, and studio-lit detail in every cup.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 shadow-[0_12px_35px_rgba(37,99,235,0.55)]">
                Reserve Now
                <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-100 transition-opacity" style={{ maskImage: "linear-gradient(60deg, transparent 40%, white 50%, transparent 60%)" }} />
              </button>
              <button className="px-6 py-3 rounded-full font-semibold text-blue-900 bg-white/80 backdrop-blur border border-blue-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_rgba(0,0,0,0.08)]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
