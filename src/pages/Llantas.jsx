import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Filter, Zap, Award, Shield, ChevronDown, Search, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const tires = [
  {
    id: 1,
    name: 'Llanta Pirelli Angel GT II',
    price: 680000,
    originalPrice: 750000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Pirelli'
  },
  {
    id: 2,
    name: 'Llanta Michelin Road 5',
    price: 720000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Michelin'
  },
  {
    id: 3,
    name: 'Llanta Bridgestone Battlax',
    price: 650000,
    originalPrice: 700000,
    discount: 7,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Bridgestone'
  },
  {
    id: 4,
    name: 'Llanta Metzeler Sportec',
    price: 690000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Metzeler'
  },
  {
    id: 5,
    name: 'Llanta Dunlop Sportmax',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Dunlop'
  },
  {
    id: 6,
    name: 'Llanta IRC Road Winner',
    price: 420000,
    originalPrice: 480000,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'IRC'
  },
  {
    id: 7,
    name: 'Llanta Pirelli Diablo Rosso',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    new: true,
    brand: 'Pirelli'
  },
  {
    id: 8,
    name: 'Llanta Michelin Pilot Power',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
    brand: 'Michelin'
  }
]

const Llantas = () => {
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const brands = ['all', 'Pirelli', 'Michelin', 'Bridgestone', 'Metzeler', 'Dunlop', 'IRC']

  const filteredTires = tires.filter(tire => 
    selectedBrand === 'all' || tire.brand === selectedBrand
  )

  const sortedTires = [...filteredTires].sort((a, b) => {
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
          src="/banner-llantas.webp" 
          alt="Llantas" 
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
                <Zap className="w-6 h-6 text-biker-orange" />
                <span className="text-biker-orange font-semibold">Alto Rendimiento</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Llantas Premium
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Compra aquí las llantas para tu moto a crédito sin cuota inicial. Las mejores marcas: Pirelli, Michelin, Bridgestone y más.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-biker-orange" />
                  <span className="text-white font-medium">Garantía Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-biker-orange" />
                  <span className="text-white font-medium">Envío Gratis</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          Catálogo de Llantas
        </h2>
        <p className="text-gray-400">
          {filteredTires.length} productos disponibles
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
                placeholder="Buscar llantas..."
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
        {sortedTires.map((tire, index) => (
          <motion.div
            key={tire.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard product={tire} />
          </motion.div>
        ))}
      </div>

      {sortedTires.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Zap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No se encontraron llantas con estos filtros</p>
          <button
            onClick={() => setSelectedBrand('all')}
            className="mt-4 text-biker-orange hover:text-biker-yellow transition-colors font-medium"
          >
            Ver todas las llantas
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Llantas
