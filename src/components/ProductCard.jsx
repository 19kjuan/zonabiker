import { ShoppingCart, Heart, Star, Zap, Truck, Shield } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="bg-gradient-to-br from-biker-dark to-biker-gray rounded-2xl overflow-hidden border border-biker-gray group hover:border-biker-orange/50 hover:shadow-glow transition-all duration-500"
    >
      <div className="relative aspect-square bg-biker-gray overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {product.discount && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-biker-accent to-biker-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-glow"
            >
              -{product.discount}%
            </motion.span>
          )}
          {product.new && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-biker-yellow text-biker-black px-3 py-1 rounded-full text-xs font-bold shadow-glow"
            >
              NUEVO
            </motion.span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isLiked ? 'bg-red-500 text-white' : 'glass-effect text-white hover:bg-red-500'
            }`}
          >
            <Heart size={18} className={isLiked ? 'fill-current' : ''} />
          </motion.button>
        </div>

        {/* Quick Add Button on Hover */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-biker-gradient text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-glow z-10"
        >
          <ShoppingCart size={18} />
          Agregar al Carrito
        </motion.button>
      </div>

      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={i < 4 ? 'text-biker-yellow fill-current' : 'text-gray-600'} />
          ))}
          <span className="text-gray-400 text-xs ml-1">(4.5)</span>
        </div>

        <h3 className="font-semibold text-white mb-3 line-clamp-2 h-12 group-hover:text-biker-orange transition-colors">
          {product.name}
        </h3>
        
        {/* Features Icons */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-biker-orange transition-colors">
            <Truck size={12} />
            <span>Envío</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-biker-orange transition-colors">
            <Shield size={12} />
            <span>Garantía</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-biker-orange font-bold text-xl">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-biker-gradient text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all premium-border"
        >
          <ShoppingCart size={20} />
          Agregar
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard
