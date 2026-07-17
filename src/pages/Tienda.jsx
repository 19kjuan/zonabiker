import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Filter } from 'lucide-react'

const allProducts = [
  {
    id: 1,
    name: 'Casco MT Thunder 4 R SV',
    price: 450000,
    category: 'cascos',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Llanta Pirelli Angel GT',
    price: 680000,
    category: 'llantas',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Intercomunicador DFR Vision',
    price: 290000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Aceite Motul 7100 4T',
    price: 85000,
    category: 'aceites',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609591d6e?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Guantes Alpinestars',
    price: 180000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Chaqueta Textil',
    price: 450000,
    originalPrice: 520000,
    discount: 15,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84f39?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: 'Pastillas de Freno',
    price: 65000,
    category: 'repuestos',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Batería Litio',
    price: 320000,
    category: 'repuestos',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop'
  }
]

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'cascos', name: 'Cascos' },
  { id: 'llantas', name: 'Llantas' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'aceites', name: 'Aceites' },
  { id: 'repuestos', name: 'Repuestos' }
]

const Tienda = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Tienda
        </h1>
        <p className="text-gray-400">
          Explora todos nuestros productos para tu moto
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-biker-orange text-white'
                : 'bg-biker-dark text-gray-400 hover:text-white border border-biker-gray'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-biker-orange" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-biker-dark border border-biker-gray text-white px-4 py-2 rounded-lg focus:outline-none focus:border-biker-orange"
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
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No se encontraron productos en esta categoría</p>
        </div>
      )}
    </div>
  )
}

export default Tienda
