import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm yellow background replacing dark/black sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300" />

      {/* Floating glossy shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/60 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300/40 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-72 bg-gradient-to-t from-yellow-400/60 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900"
          >
            Blue-brewed energy.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700">FLAMES coffee</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-5 text-lg text-blue-800/80"
          >
            Premium, glossy, and futuristic—crafted with cinematic lighting, smooth liquid textures, and bold minimal typography.
          </motion.p>

          <div className="mt-8 flex items-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 shadow-[0_12px_35px_rgba(37,99,235,0.55)]"
            >
              Explore Menu
              <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-100 transition-opacity" style={{ maskImage: "linear-gradient(60deg, transparent 40%, white 50%, transparent 60%)" }} />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-semibold text-blue-900 bg-white/80 backdrop-blur border border-blue-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_rgba(0,0,0,0.08)]"
            >
              Book a Table
            </motion.button>
          </div>

          {/* Floating glossy card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 p-4 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-[0_12px_30px_rgba(0,0,0,0.1)] max-w-md"
          >
            <p className="text-blue-900 font-semibold">Signature Roast · Ultra-smooth crema · 3D-enhanced pours</p>
          </motion.div>
        </div>

        {/* 3D coffee splash visual (fallback glossy illustration if Spline fails) */}
        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/40 to-white/20 rounded-[40px] blur-2xl" />
          <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/60 shadow-[0_25px_70px_rgba(37,99,235,0.35)] bg-white">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(100%_60% at 0% 0%, rgba(29,78,216,0.12), transparent 60%), radial-gradient(80%_60% at 100% 100%, rgba(29,78,216,0.12), transparent 60%)" }} />
            <div className="absolute -top-16 -right-10 w-72 h-72 bg-blue-400/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-yellow-300/60 rounded-full blur-3xl" />
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/8b2n13s1nQm1oQvE/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      {/* liquid gloss highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-yellow-300 to-transparent" />
    </section>
  );
}
