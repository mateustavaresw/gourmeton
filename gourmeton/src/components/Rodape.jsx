import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa6'

const redes = [
  {
    nome: 'Instagram',
    url: 'https://www.instagram.com',
    icone: FaInstagram
  },
  {
    nome: 'Facebook',
    url: 'https://www.facebook.com',
    icone: FaFacebook
  },
  {
    nome: 'X',
    url: 'https://x.com',
    icone: FaXTwitter
  }
]

export default function Rodape() {
  const ano = new Date().getFullYear()

  const emBreve = (e) => {
    e.preventDefault()
    alert('Página em construção.')
  }

  return (
    <footer className="bg-carvao-900 text-brasa-50 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

        {/* Contato */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            GourmetOn
          </h2>

          <div className="space-y-3 text-brasa-100">
            <p className="flex items-center gap-2">
              <FaEnvelope />
              contato@gourmeton.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone />
              (11) 4000-0000
            </p>
          </div>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Siga a gente
          </h3>

          <div className="flex gap-4">
            {redes.map((r) => {
              const Icone = r.icone

              return (
                <a
                  key={r.nome}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nome}
                  className="text-2xl transition hover:scale-110 hover:text-brasa-300"
                >
                  <Icone />
                </a>
              )
            })}
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Institucional
          </h3>

          <div className="flex flex-col gap-2">
            <a
              href="#"
              onClick={emBreve}
              className="transition hover:text-brasa-300"
            >
              Termos de uso
            </a>

            <a
              href="#"
              onClick={emBreve}
              className="transition hover:text-brasa-300"
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </div>

      {/* Informações finais */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-brasa-700 pt-6 text-center text-sm text-brasa-100">

        <p className="mb-2">
          Criado por Mateus, Enzo, José, Rafael e Donas — projeto de Engenharia de Software.
        </p>

        <p>
          © {ano} GourmetOn. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}