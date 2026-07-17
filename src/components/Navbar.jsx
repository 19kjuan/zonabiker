import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingCart, User, Search, Phone, Heart, MapPin, CreditCard, Zap, Shield, ChevronDown, Truck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Cascos', path: '/cascos' },
    { name: 'Llantas', path: '/llantas' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Ofertas', path: '/ofertas' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-biker-dark/95 backdrop-blur-md border-b border-biker-gray sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-biker-black to-biker-dark py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-gray-400">
            <a href="tel:+573053758049" className="flex items-center gap-2 hover:text-biker-orange transition-colors group">
              <Phone size={16} className="group-hover:scale-110 transition-transform" />
              <span>305 375 8049</span>
            </a>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-biker-orange" />
              <span>Envíos a todo Colombia</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={16} className="text-biker-orange" />
              <span>Paga a crédito</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cuenta" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
              <User size={16} className="group-hover:scale-110 transition-transform" />
              <span>Mi Cuenta</span>
            </Link>
            <Link to="/carrito" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
              <Heart size={16} className="group-hover:scale-110 transition-transform" />
              <span>Deseos</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-biker-gray rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.avif" alt="ZONABIKER" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isActive(item.path)
                    ? 'text-biker-orange bg-biker-orange/10 border border-biker-orange/30'
                    : 'text-gray-300 hover:text-white hover:bg-biker-gray'
                }`}
              >
                {item.name}
                {isActive(item.path) && <ChevronDown size={16} />}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:flex items-center gap-2 text-gray-400 hover:text-biker-orange transition-colors p-2 hover:bg-biker-gray rounded-lg">
              <Search size={20} />
            </button>
            <Link
              to="/cuenta"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-biker-orange transition-colors p-2 hover:bg-biker-gray rounded-lg"
            >
              <User size={20} />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-400 hover:text-biker-orange transition-colors hover:bg-biker-gray rounded-lg"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-biker-orange to-biker-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-biker-dark border-t border-biker-gray overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-biker-orange bg-biker-orange/10 border border-biker-orange/30'
                      : 'text-gray-300 hover:text-white hover:bg-biker-gray'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/cuenta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-biker-gray transition-all"
              >
                <User size={20} />
                <span>Mi Cuenta</span>
              </Link>
              <Link
                to="/carrito"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-biker-gray transition-all"
              >
                <Heart size={20} />
                <span>Lista de Deseos</span>
              </Link>
              <a
                href="tel:+573053758049"
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-biker-gray transition-all"
              >
                <Phone size={20} />
                <span>305 375 8049</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
