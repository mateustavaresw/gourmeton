import { FaQuoteLeft } from 'react-icons/fa6'
import depoimentos from '../data/depoimentos.json'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 px-4">
      <h2 className="font-titulo text-3xl font-semibold text-center text-carvao-900">Quem já pediu, aprova</h2>

      <div className="mt-12 grid gap-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {depoimentos.map((d) => (
          <div key={d.nome} className="rounded-xl bg-brasa-50 p-6 shadow">
            <FaQuoteLeft className="text-brasa-500 text-xl" />
            <p className="mt-4 text-carvao-900/80">{d.texto}</p>
            <div className="mt-4">
              <p className="font-semibold text-carvao-900">{d.nome}</p>
              <p className="text-sm text-carvao-900/60">{d.cidade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
