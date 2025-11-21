import { motion } from "framer-motion";
import { CupSoda, Coffee, Bean, Timer, Sparkles } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Artisanal Brews",
    desc: "Hand-crafted espresso & pour-overs with glossy crema and cinematic aromas.",
  },
  {
    icon: CupSoda,
    title: "Nitro & Cold Brew",
    desc: "Silky, nitrogen-infused textures with frosted blue undertones.",
  },
  {
    icon: Bean,
    title: "Curated Beans",
    desc: "Single-origin selections roasted to vivid, energetic perfection.",
  },
  {
    icon: Timer,
    title: "Fast & Fresh",
    desc: "Premium service with studio-lighting presentation—always on time.",
  },
];

export default function Services() {
  return (
    <section className="relative py-20">
      {/* Pure white section replacing caramel */}
      <div className="absolute inset-0 bg-white" />
      {/* floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-yellow-300/50 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 w-52 h-52 bg-blue-300/40 rounded-full blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Our Services</h2>
          <p className="mt-3 text-blue-800/70">High-contrast, glossy, and futuristic—balanced for modern café branding.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-yellow-100 to-white border border-yellow-200 shadow-[0_15px_45px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl" />
              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_rgba(37,99,235,0.5)]">
                <it.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-blue-900">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-900/70">{it.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-blue-700 font-semibold">
                Learn more <Sparkles className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
