import { useCart } from '../context/CartContext'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="text-biker-gray mx-auto mb-4" />
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-400 mb-6">
          ¡Agrega productos para comenzar tu compra!
        </p>
        <Link
          to="/tienda"
          className="inline-flex items-center gap-2 px-6 py-3 bg-biker-gradient text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          Ir a la Tienda
          <ArrowRight size={20} />
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
        Carrito de Compras
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-biker-dark border border-biker-gray rounded-xl p-4 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-biker-orange font-bold mb-3">
                  ${item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-biker-gray rounded-lg flex items-center justify-center text-white hover:bg-biker-orange transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-white font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-biker-gray rounded-lg flex items-center justify-center text-white hover:bg-biker-orange transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-400 transition-colors font-medium"
          >
            Vaciar carrito
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-biker-dark border border-biker-gray rounded-xl p-6 h-fit sticky top-24">
          <h2 className="text-xl font-display font-bold text-white mb-4">
            Resumen del Pedido
          </h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Envío</span>
              <span className="text-biker-orange">Calculado en checkout</span>
            </div>
            <div className="border-t border-biker-gray pt-3">
              <div className="flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group mb-4">
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
              Acepto los <Link to="/terminos-y-condiciones" className="text-biker-orange hover:text-biker-yellow underline">Términos y Condiciones</Link>
            </span>
          </label>

          <Link
            to="/checkout"
            disabled={!acceptedTerms}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${
              acceptedTerms 
                ? 'bg-biker-gradient text-white hover:opacity-90 cursor-pointer' 
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceder al Pago
            <ArrowRight size={20} />
          </Link>

          <div className="mt-4 text-center text-sm text-gray-400">
            <p>💳 Paga a crédito disponible</p>
            <p>🚚 Envíos a todo Colombia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
