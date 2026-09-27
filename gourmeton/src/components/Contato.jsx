import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  const enviarFormulario = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contato" className="py-20 px-4 bg-brasa-50">
      <h2 className="font-titulo text-3xl font-semibold text-center text-carvao-900">Fale com a gente</h2>
      <p className="text-center text-carvao-900/70 mt-2">
        Dúvidas, sugestões ou parcerias: manda uma mensagem que a gente responde rapidinho.
      </p>

      <div className="mt-12 grid gap-10 max-w-4xl mx-auto sm:grid-cols-2">
        <form onSubmit={enviarFormulario} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-carvao-900">Nome</label>
            <input
              id="nome"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-brasa-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brasa-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-carvao-900">E-mail</label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-brasa-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brasa-500"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-carvao-900">Mensagem</label>
            <textarea
              id="mensagem"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-brasa-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brasa-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brasa-600 hover:bg-brasa-700 text-white font-semibold py-3 transition"
          >
            Enviar mensagem
          </button>

          {enviado && (
            <p className="text-center text-oliva-600 font-medium">Mensagem enviada! Em breve retornamos.</p>
          )}
        </form>

        <div className="space-y-4 text-carvao-900">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-brasa-600" />
            contato@gourmeton.com
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-brasa-600" />
            (11) 4000-0000
          </p>
          <p className="flex items-center gap-3">
            <FaLocationDot className="text-brasa-600" />
            São Paulo, SP
          </p>
        </div>
      </div>
    </section>
  )
}
