export default function CardPrato({ titulo, imagem }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white border border-brasa-100">
      <img src={imagem} alt={titulo} className="w-full h-48 object-cover" />
      <h3 className="p-4 font-semibold text-carvao-900">{titulo}</h3>
    </div>
  )
}