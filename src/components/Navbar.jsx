import { Menu, Coffee, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-white/60 blur-sm" />
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(59,130,246,0.45)]">
              <Coffee className="w-6 h-6 drop-shadow" />
            </div>
          </div>
          <div className="leading-tight select-none">
            <p className="text-xl font-extrabold tracking-tight text-blue-900">FLAMES Café</p>
            <p className="text-xs text-blue-700/70 -mt-0.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> futuristic coffee lab
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {[
            { label: "Menu" },
            { label: "About" },
            { label: "Services" },
            { label: "Contact" },
          ].map((item, i) => (
            <motion.button
              key={item.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-full text-blue-900/80 hover:text-blue-900 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 shadow-[0_10px_30px_rgba(37,99,235,0.5)]"
          >
            Order Now
            <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-100 transition-opacity" style={{ maskImage: "linear-gradient(60deg, transparent 40%, white 50%, transparent 60%)" }} />
          </motion.button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/70 text-blue-900 shadow-sm backdrop-blur">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
