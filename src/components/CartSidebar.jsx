import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen } = useCart()
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-50"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-biker-dark border-l border-biker-gray z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-biker-gray">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-biker-orange" />
                <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
                <span className="bg-biker-orange text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-biker-gray rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
                  <p className="text-gray-400 mb-2">Tu carrito está vacío</p>
                  <Link
                    to="/tienda"
                    onClick={() => setIsCartOpen(false)}
                    className="text-biker-orange hover:text-biker-yellow transition-colors font-medium"
                  >
                    Ir a la tienda
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 bg-biker-gray rounded-xl p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-white text-sm mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-biker-orange font-bold mb-2">
                          ${item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 bg-biker-dark rounded-lg flex items-center justify-center text-white hover:bg-biker-orange transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-white font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 bg-biker-dark rounded-lg flex items-center justify-center text-white hover:bg-biker-orange transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-biker-gray p-6 space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Envío</span>
                  <span className="text-biker-orange">Calculado en checkout</span>
                </div>
                <div className="border-t border-biker-gray pt-4">
                  <div className="flex justify-between text-white font-bold text-xl">
                    <span>Total</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Terms and Conditions Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-500 rounded bg-biker-gray peer-checked:bg-biker-orange peer-checked:border-biker-orange transition-all flex items-center justify-center">
                      {acceptedTerms && <Check size={14} className="text-white" />}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Acepto los <Link to="/terminos-y-condiciones" onClick={() => setIsCartOpen(false)} className="text-biker-orange hover:text-biker-yellow underline">Términos y Condiciones</Link>
                  </span>
                </label>
                
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  disabled={!acceptedTerms}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                    acceptedTerms 
                      ? 'bg-gradient-to-r from-biker-orange to-biker-accent text-white hover:opacity-90 cursor-pointer' 
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Proceder al Pago
                  <ArrowRight size={20} />
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-gray-400 hover:text-white transition-colors py-2"
                >
                  Seguir comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar
