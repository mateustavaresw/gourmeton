import { useState, useEffect } from 'react'
import CardPrato from './CardPrato'

const TIPOS = [
  { valor: 'chicken', rotulo: 'Frango' },
  { valor: 'beef', rotulo: 'Carne' },
  { valor: 'fish', rotulo: 'Peixe' },
  { valor: 'soup', rotulo: 'Sopa' },
  { valor: 'cake', rotulo: 'Sobremesa' }
]

async function buscarNaSpoonacular(tipo) {
  const chave = import.meta.env.VITE_SPOONACULAR_KEY
  if (!chave) throw new Error('Sem chave da Spoonacular')

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${tipo}&number=6&apiKey=${chave}`
  const resposta = await fetch(url)

  if (!resposta.ok) throw new Error('Falha na Spoonacular')

  const dados = await resposta.json()
  return dados.results.map((r) => ({
    id: r.id,
    titulo: r.title,
    imagem: r.image
  }))
}

async function buscarNaMealDB(tipo) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${tipo}`
  const resposta = await fetch(url)

  if (!resposta.ok) throw new Error('Falha na TheMealDB')

  const dados = await resposta.json()
  return (dados.meals || []).slice(0, 6).map((m) => ({
    id: m.idMeal,
    titulo: m.strMeal,
    imagem: m.strMealThumb
  }))
}

export default function Funcionalidades() {
  const [pratos, setPratos] = useState([])
  const [tipo, setTipo] = useState('chicken')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const buscarPratos = async () => {
      setCarregando(true)
      setErro('')
      try {
        let lista
        try {
          lista = await buscarNaSpoonacular(tipo)
        } catch {
          lista = await buscarNaMealDB(tipo)
        }
        setPratos(lista)
        if (lista.length === 0) setErro('Nenhum prato encontrado.')
      } catch {
        setPratos([])
        setErro('Não foi possível carregar os pratos agora.')
      } finally {
        setCarregando(false)
      }
    }

    buscarPratos()
  }, [tipo])

  return (
    <section id="funcionalidades" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center">Encontre o que você quer comer</h2>
      <p className="text-center text-gray-600 mt-2">
        Escolha um tipo de comida e veja pratos de verdade vindos da nossa API.
      </p>

      <div className="flex flex-wrap justify-center gap-2 my-8">
        {TIPOS.map((t) => (
          <button
            key={t.valor}
            onClick={() => setTipo(t.valor)}
            className={`px-4 py-2 rounded-full transition ${
              tipo === t.valor ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {t.rotulo}
          </button>
        ))}
      </div>

      {carregando && <p className="text-center">Carregando...</p>}
      {erro && <p className="text-center text-red-600">{erro}</p>}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {pratos.map((p) => (
          <CardPrato key={p.id} titulo={p.titulo} imagem={p.imagem} />
        ))}
      </div>
    </section>
  )
}