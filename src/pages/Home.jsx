import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, CreditCard, Star, Zap, Award, Clock, HeadphonesIcon, Flame, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'

const featuredProducts = [
  {
    id: 1,
    name: 'Casco MT Thunder 4 R SV Waves B2',
    price: 520000,
    originalPrice: 580000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    new: true
  },
  {
    id: 2,
    name: 'Casco Airoh Spark 2 Chrono Naranja',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=400&fit=crop',
    new: true
  },
  {
    id: 3,
    name: 'Intercomunicador DFR Vision Pro',
    price: 290000,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=400&fit=crop',
    new: true
  },
  {
    id: 4,
    name: 'Impermeable Givi Reflectivo',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84f39?w=400&h=400&fit=crop'
  }
]

const categories = [
  { name: 'Cascos', path: '/cascos', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
  { name: 'Llantas', path: '/llantas', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=300&fit=crop' },
  { name: 'Accesorios', path: '/tienda', image: 'https://images.unsplash.com/photo-1571415040724-6f7f88b8b6d6?w=400&h=300&fit=crop' },
  { name: 'Aceites', path: '/tienda', image: 'https://images.unsplash.com/photo-1635784063388-1ff609591d6e?w=400&h=300&fit=crop' },
  { name: 'Embellecimiento', path: '/tienda', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84f39?w=400&h=300&fit=crop' },
  { name: 'Ofertas', path: '/ofertas', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84f39?w=400&h=300&fit=crop' }
]

const features = [
  { icon: Shield, title: 'Garantía', description: '15 días hábiles', color: 'from-blue-500 to-blue-600' },
  { icon: Truck, title: 'Envíos', description: 'A todo Colombia', color: 'from-green-500 to-green-600' },
  { icon: CreditCard, title: 'Pagos', description: 'A crédito disponible', color: 'from-purple-500 to-purple-600' },
  { icon: Star, title: 'Calidad', description: 'Mejores marcas', color: 'from-yellow-500 to-yellow-600' },
  { icon: Zap, title: 'Rapidez', description: 'Entrega express', color: 'from-orange-500 to-orange-600' },
  { icon: HeadphonesIcon, title: 'Soporte', description: '24/7 disponible', color: 'from-pink-500 to-pink-600' }
]

const Home = () => {
  return (
    <div className="space-y-20 bg-white">
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,107,53,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full mb-6"
            >
              <Flame className="w-5 h-5 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">#1 Tienda de Motos en Colombia</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gray-900">VIVIMOS LA</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500">PASIÓN</span>
              <br />
              <span className="text-gray-900">POR LAS MOTOS</span>
              <span className="inline-block animate-float"> 🏍️</span>
            </h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Tu tienda especializada en <span className="text-orange-600 font-semibold">cascos</span>, <span className="text-orange-600 font-semibold">llantas</span> y <span className="text-orange-600 font-semibold">accesorios</span> de las mejores marcas. Calidad, seguridad y estilo para verdaderos moteros.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+5000</p>
                  <p className="text-gray-500 text-sm">Productos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+10000</p>
                  <p className="text-gray-500 text-sm">Clientes Felices</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-500 text-sm">Marcas</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/tienda"
                className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Ver Productos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ofertas"
                className="px-10 py-5 bg-white border-2 border-orange-300 text-gray-900 font-bold rounded-xl hover:bg-orange-50 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 text-orange-500" />
                Ofertas Flash
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/banner-pagina.webp" 
                alt="Motorcycle" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Envío Gratis</p>
                  <p className="text-xs text-gray-500">A todo Colombia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Modern Design */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más que una tienda, somos tu aliado en cada kilometraje
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 text-center group hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section - Modern Design */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu moto en un solo lugar
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={category.path}
                className="relative group overflow-hidden rounded-2xl aspect-square block bg-white shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-200 transition-colors text-center">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products - Modern Design */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-2">
              Productos Destacados
            </h2>
            <p className="text-gray-600">Los favoritos de nuestra comunidad</p>
          </motion.div>
          <Link
            to="/tienda"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-200 text-orange-700 font-semibold rounded-xl hover:bg-orange-200 transition-colors group"
          >
            Ver todos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Image Section - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 font-semibold text-sm">Entrega en 24-48 horas</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Equipamiento Profesional
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Descubre nuestra selección de equipamiento de alta calidad para moteros exigentes. Seguridad y estilo en cada producto.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Garantía de calidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Envíos seguros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Pago a crédito</span>
                </div>
              </div>
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 shadow-lg"
              >
                Ver Catálogo Completo
                <ChevronRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/banner-pagina-2.webp" 
                  alt="Motorcycle Gear" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">+15 Años</p>
                    <p className="text-xs text-gray-500">De experiencia</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <HeadphonesIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              ¿Necesitas Ayuda?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Nuestro equipo de expertos está listo para ayudarte a encontrar exactamente lo que necesitas para tu moto
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573053758049&text=Hola%2C+los+contacto+desde+su+tienda+virtual%2C+me+pueden+ayudar+en+algo%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
