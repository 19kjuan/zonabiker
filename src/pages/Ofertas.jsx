import ProductCard from '../components/ProductCard'

const deals = [
  {
    id: 1,
    name: 'Casco MT Thunder 4 R SV Waves B2',
    price: 450000,
    originalPrice: 520000,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    new: true
  },
  {
    id: 2,
    name: 'Llanta Pirelli Angel GT II',
    price: 680000,
    originalPrice: 750000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Chaqueta Textil',
    price: 450000,
    originalPrice: 520000,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84f39?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Guantes Alpinestars',
    price: 150000,
    originalPrice: 180000,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Casco Airoh Spark 2 Dart',
    price: 340000,
    originalPrice: 380000,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Intercomunicador DFR Vision',
    price: 250000,
    originalPrice: 290000,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: 'Llanta IRC Road Winner',
    price: 420000,
    originalPrice: 480000,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Aceite Motul 7100 4T',
    price: 72000,
    originalPrice: 85000,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609591d6e?w=400&h=400&fit=crop'
  }
]

const Ofertas = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Ofertas Especiales
        </h1>
        <p className="text-gray-400">
          Aprovecha los mejores descuentos en productos para tu moto
        </p>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-biker-accent to-biker-orange rounded-xl p-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          ¡HASTA 20% DE DESCUENTO!
        </h2>
        <p className="text-white/80">
          En productos seleccionados por tiempo limitado
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {deals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No hay ofertas disponibles en este momento</p>
        </div>
      )}
    </div>
  )
}

export default Ofertas
