import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, Twitter, Send, Shield, Truck, Clock, CreditCard, Award, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-biker-dark to-biker-black border-t border-biker-gray mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.avif" alt="ZONABIKER" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu tienda especializada en cascos, llantas y accesorios para motos. Calidad, seguridad y estilo para verdaderos moteros.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/zonabikerla21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-biker-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-biker-orange hover:bg-biker-orange/20 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/zonabikerb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-biker-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-biker-orange hover:bg-biker-orange/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@zonabikerb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-biker-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-biker-orange hover:bg-biker-orange/20 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.67-6.61V9.88a4.83 4.83 0 0 1 3.92 4.76v.05a4.83 4.83 0 0 1-4.83 4.83 4.83 4.83 0 0 1-4.83-4.83v-3.45h3.45v-2.44h-3.45V6.69z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-biker-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-biker-orange hover:bg-biker-orange/20 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/cascos" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cascos
                </Link>
              </li>
              <li>
                <Link to="/llantas" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Llantas
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Ofertas
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-4">Información</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/busqueda" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Búsqueda
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/politica-envio" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Política de envío
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-reembolso" className="text-gray-400 hover:text-biker-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-biker-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Política de reembolso
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-biker-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-biker-orange" />
                </div>
                <div>
                  <p className="text-white font-medium">Carrera 21 # 41-39</p>
                  <p className="text-sm">Bolivar Centro, Bucaramanga</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-biker-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-biker-orange" />
                </div>
                <div>
                  <p className="text-white font-medium">305 375 8049</p>
                  <p className="text-sm">WhatsApp disponible</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-biker-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-biker-orange" />
                </div>
                <div>
                  <p className="text-white font-medium">servicioalcliente.zonabiker@gmail.com</p>
                  <p className="text-sm">Respuesta en 24h</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-4">Boletín</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir ofertas exclusivas y novedades
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 px-4 py-3 bg-biker-gray border border-biker-gray rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-biker-orange transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-biker-orange to-biker-accent text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-biker-gray"
        >
          <div className="flex items-center gap-3 text-gray-400">
            <Shield className="w-6 h-6 text-biker-orange" />
            <span className="text-sm">Garantía 15 días</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Truck className="w-6 h-6 text-biker-orange" />
            <span className="text-sm">Envíos seguros</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Clock className="w-6 h-6 text-biker-orange" />
            <span className="text-sm">Entrega rápida</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <CreditCard className="w-6 h-6 text-biker-orange" />
            <span className="text-sm">Pago seguro</span>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-biker-gray"
        >
          <p className="text-center text-gray-400 text-sm mb-4">Métodos de Pago Aceptados</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">Visa</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">Mastercard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">Maestro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">American Express</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">PSE</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-biker-gray mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 ZonaBiker SAS. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/terminos" className="hover:text-biker-orange transition-colors">Términos y condiciones</Link>
            <Link to="/privacidad" className="hover:text-biker-orange transition-colors">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
