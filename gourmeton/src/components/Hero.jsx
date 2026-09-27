const PADRAO_PONTOS = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='4' cy='4' r='2' fill='%23F8E1CC' fill-opacity='0.35'/%3E%3C/svg%3E"

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brasa-700 to-carvao-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `url("${PADRAO_PONTOS}")` }} aria-hidden="true" />
      <div className="relative text-center text-brasa-50 px-4 max-w-2xl">
        <span className="uppercase tracking-widest text-sm text-brasa-300 font-medium">Feito por gente da sua região</span>
        <h1 className="mt-3 font-titulo text-4xl md:text-6xl font-semibold leading-tight">A comida do seu bairro, direto na sua porta</h1>
        <p className="mt-4 text-lg text-brasa-100">O Gourmeton conecta você aos restaurantes daqui perto sem taxa escondida, sem letra miúda.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#funcionalidades" className="bg-brasa-500 hover:bg-brasa-600 text-carvao-900 px-6 py-3 rounded-full font-semibold transition">Ver o cardápio de hoje</a>
          <a href="#sobre" className="border border-brasa-300 hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition">Como funciona</a>
        </div>
      </div>
    </section>
  )
}