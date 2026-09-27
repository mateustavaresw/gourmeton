import { useEffect, useState } from 'react'
import { FaUtensils, FaBars, FaXmark } from 'react-icons/fa6'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#sobre', rotulo: 'Como funciona' },
  { href: '#funcionalidades', rotulo: 'Cardápio' },
  { href: '#depoimentos', rotulo: 'Depoimentos' },
  { href: '#contato', rotulo: 'Contato' }
]

export default function Navbar() {
  const [rolado, setRolado] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 20)
    aoRolar()
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const corTexto = rolado || menuAberto ? 'text-carvao-900' : 'text-brasa-50'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        rolado || menuAberto ? 'bg-brasa-50/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className={`flex items-center gap-2 font-titulo text-xl font-semibold ${corTexto}`}>
          <FaUtensils className="text-brasa-500" />
          GourmetOn
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`font-medium transition hover:text-brasa-500 ${corTexto}`}>
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          className={`text-2xl md:hidden ${corTexto}`}
        >
          {menuAberto ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {menuAberto && (
        <ul className="flex flex-col gap-4 bg-brasa-50 px-4 pb-6 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuAberto(false)}
                className="block font-medium text-carvao-900 transition hover:text-brasa-500"
              >
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
