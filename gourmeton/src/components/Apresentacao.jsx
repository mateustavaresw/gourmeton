import { FaUtensils, FaCartShopping, FaMotorcycle } from 'react-icons/fa6'

const passos = [
  { icone: <FaUtensils />, titulo: 'Escolha o prato', texto: 'Filtre por tipo de comida no nosso cardápio ao vivo.' },
  { icone: <FaCartShopping />, titulo: 'Peça em 2 cliques', texto: 'Sem cadastro complicado, sem taxa escondida.' },
  { icone: <FaMotorcycle />, titulo: 'Acompanhe a entrega', texto: 'Direto do restaurante parceiro até a sua porta.' },
]

export default function Apresentacao() {
  return (
    <section id="sobre" className="py-20 px-4 bg-brasa-50">
      <h2 className="font-titulo text-3xl font-semibold text-center mb-16">Como funciona</h2>
      <div className="relative max-w-4xl mx-auto grid gap-10 sm:grid-cols-3">
        <div className="hidden sm:block absolute top-6 left-0 right-0 border-t-2 border-dashed border-brasa-300" />
        {passos.map((p, i) => (
          <PassoTimeline key={p.titulo} numero={i + 1} {...p} />
        ))}
      </div>
    </section>
  )
}
function PassoTimeline({ numero, icone, titulo, texto }) {
  return (
    <div className="relative text-center">
      <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-brasa-600 text-white flex items-center justify-center text-lg font-titulo font-semibold">{numero}</div>
      <div className="text-3xl text-brasa-600 flex justify-center mt-4">{icone}</div>
      <h3 className="text-xl font-semibold mt-2">{titulo}</h3>
      <p className="text-carvao-900/70 mt-2">{texto}</p>
    </div>
  )
}