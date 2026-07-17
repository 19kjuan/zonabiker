import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Filter, Shield, Star, Award, Zap, ChevronDown, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const helmets = [
  {
    id: 1,
    name: 'Casco MT Thunder 4 R SV Waves B2',
    price: 450000,
    originalPrice: 520000,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    new: true,
    brand: 'MT'
  },
  {
    id: 2,
    name: 'Casco Airoh Spark 2 Dart Rojo',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop',
    new: true,
    brand: 'Airoh'
  },
  {
    id: 3,
    name: 'Casco MT Stinger 2 Rocket A7',
    price: 520000,
    originalPrice: 580000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    brand: 'MT'
  },
  {
    id: 4,
    name: 'Casco Airoh Jet Kombakt',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop',
    brand: 'Airoh'
  },
  {
    id: 5,
    name: 'Casco MT Streetfighter SV',
    price: 480000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    brand: 'MT'
  },
  {
    id: 6,
    name: 'Casco Airoh Spark 2 Chrono',
    price: 360000,
    originalPrice: 400000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop',
    brand: 'Airoh'
  },
  {
    id: 7,
    name: 'Casco MT Plus Kre+S',
    price: 550000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    brand: 'MT'
  },
  {
    id: 8,
    name: 'Casco MT Atom 2SV',
    price: 490000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    new: true,
    brand: 'MT'
  }
]

const Cascos = () => {
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const brands = ['all', 'MT', 'Airoh', 'Shoei', 'AGV']

  const filteredHelmets = helmets.filter(helmet => 
    selectedBrand === 'all' || helmet.brand === selectedBrand
  )

  const sortedHelmets = [...filteredHelmets].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <img 
          src="/banner-pagina.webp" 
          alt="Cascos" 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-biker-orange" />
                <span className="text-biker-orange font-semibold">Protección Certificada</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Cascos Profesionales
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Encuentra el casco perfecto para tu protección y estilo. Marcas líderes con certificación internacional.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-biker-yellow fill-current" />
                  <span className="text-white font-medium">Certificación DOT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-biker-orange" />
                  <span className="text-white font-medium">Mejores Marcas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          Catálogo de Cascos
        </h2>
        <p className="text-gray-400">
          {filteredHelmets.length} productos disponibles
        </p>
      </div>

      {/* Filters */}
      <div className="bg-biker-dark border border-biker-gray rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar cascos..."
                className="w-full pl-10 pr-4 py-3 bg-biker-gray border border-biker-gray rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-biker-orange transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-biker-orange" />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-biker-gray border border-biker-gray text-white px-4 py-3 rounded-xl focus:outline-none focus:border-biker-orange appearance-none cursor-pointer"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'Todas las marcas' : brand}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-12 text-gray-400 pointer-events-none" />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-biker-gray border border-biker-gray text-white px-4 py-3 rounded-xl focus:outline-none focus:border-biker-orange appearance-none cursor-pointer"
          >
            <option value="featured">Más relevantes</option>
            <option value="price-low">Precio: menor a mayor</option>
            <option value="price-high">Precio: mayor a menor</option>
            <option value="name">Alfabéticamente</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {sortedHelmets.map((helmet, index) => (
          <motion.div
            key={helmet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard product={helmet} />
          </motion.div>
        ))}
      </div>

      {sortedHelmets.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No se encontraron cascos con estos filtros</p>
          <button
            onClick={() => setSelectedBrand('all')}
            className="mt-4 text-biker-orange hover:text-biker-yellow transition-colors font-medium"
          >
            Ver todos los cascos
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Cascos
