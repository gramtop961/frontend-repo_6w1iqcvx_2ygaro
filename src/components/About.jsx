import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-20">
      {/* Warm yellow replacing dark sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-200" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(50%_50%_at_20%_0%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(40%_50%_at_100%_80%, rgba(59,130,246,0.12), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/70 backdrop-blur border border-white/60 shadow-[0_18px_50px_rgba(0,0,0,0.1)]"
        >
          <h3 className="text-3xl font-extrabold text-blue-900">About FLAMES Café</h3>
          <p className="mt-4 text-blue-900/80">
            A premium coffee experience designed with glossy reflections, liquid textures, and cinematic lighting. Our space blends futuristic UI/UX with artisanal craft.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Origins", value: "12+" },
              { label: "Roasts", value: "30+" },
              { label: "Awards", value: "8x" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-white/60 shadow-sm">
                <p className="text-2xl font-extrabold text-blue-900">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-blue-800/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-80 rounded-[32px] overflow-hidden border border-white/60 shadow-[0_25px_70px_rgba(37,99,235,0.35)] bg-white"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/40 to-white/20 rounded-[40px] blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=1600&auto=format&fit=crop"
            alt="Barista pour"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
