import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { CreditCard, Truck, Shield, Check, Lock, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Datos de departamentos y ciudades de Colombia
const colombiaData = {
  "Amazonas": ["Leticia", "Puerto Nariño", "El Encanto"],
  "Antioquia": ["Medellín", "Envigado", "Bello", "Itagüí", "Rionegro", "Apartadó", "Turbo"],
  "Arauca": ["Arauca", "Arauquita", "Saravena"],
  "Archipiélago de San Andrés, Providencia y Santa Catalina": ["San Andrés", "Providencia"],
  "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Baranoa"],
  "Bogotá": ["Bogotá"],
  "Bolívar": ["Cartagena", "Magangué", "Turbaco", "Arjona"],
  "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá"],
  "Caldas": ["Manizales", "La Dorada", "Chinchiná"],
  "Caquetá": ["Florencia", "San Vicente del Caguán"],
  "Casanare": ["Yopal", "Villanueva", "Paz de Ariporo"],
  "Cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada"],
  "Cesar": ["Valledupar", "Aguachica", "Codazzi"],
  "Chocó": ["Quibdó", "Nuquí", "Bahía Solano"],
  "Córdoba": ["Montería", "Lorica", "Cereté", "Sahagún"],
  "Cundinamarca": ["Soacha", "Girardot", "Facatativá", "Zipaquirá", "Chía", "Cajicá"],
  "Guainía": ["Inírida"],
  "Guaviare": ["San José del Guaviare"],
  "Huila": ["Neiva", "Pitalito", "La Plata"],
  "La Guajira": ["Riohacha", "Maicao", "Uribia"],
  "Magdalena": ["Santa Marta", "Ciénaga", "Fundación"],
  "Meta": ["Villavicencio", "Granada", "Villarrica"],
  "Nariño": ["Pasto", "Ipiales", "Tumaco"],
  "Norte de Santander": ["Cúcuta", "Ocaña", "Villa del Rosario"],
  "Putumayo": ["Mocoa", "Puerto Asís", "Puerto Guzmán"],
  "Quindío": ["Armenia", "Calarcá", "Salento", "Montenegro"],
  "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal"],
  "San Andrés y Providencia": ["San Andrés", "Providencia"],
  "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barichara"],
  "Sucre": ["Sincelejo", "Corozal", "Tolú"],
  "Tolima": ["Ibagué", "Espinal", "Melgar", "Girardot"],
  "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Buga"],
  "Vaupés": ["Mitú"],
  "Vichada": ["Puerto Carreño"]
}

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [useBillingAddress, setUseBillingAddress] = useState('same')
  const [selectedBillingDepartment, setSelectedBillingDepartment] = useState('')
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    documentType: '',
    documentNumber: '',
    country: 'Colombia',
    address: '',
    neighborhood: '',
    city: '',
    department: '',
    phone: '',
    whatsapp: '',
    paymentMethod: 'bancolombia',
    billingFirstName: '',
    billingLastName: '',
    billingDocumentType: '',
    billingDocumentNumber: '',
    billingCountry: 'Colombia',
    billingAddress: '',
    billingNeighborhood: '',
    billingDepartment: '',
    billingCity: '',
    billingPhone: '',
    billingWhatsapp: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDepartmentChange = (e) => {
    const department = e.target.value
    setSelectedDepartment(department)
    setFormData({
      ...formData,
      department: department,
      city: '' // Reset city when department changes
    })
  }

  const handleCityChange = (e) => {
    setFormData({
      ...formData,
      city: e.target.value
    })
  }

  const getCities = () => {
    return selectedDepartment ? colombiaData[selectedDepartment] || [] : []
  }

  const handleBillingInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBillingDepartmentChange = (e) => {
    const department = e.target.value
    setSelectedBillingDepartment(department)
    setFormData({
      ...formData,
      billingDepartment: department,
      billingCity: ''
    })
  }

  const handleBillingCityChange = (e) => {
    setFormData({
      ...formData,
      billingCity: e.target.value
    })
  }

  const getBillingCities = () => {
    return selectedBillingDepartment ? colombiaData[selectedBillingDepartment] || [] : []
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with a real payment gateway
    alert('¡Pedido realizado con éxito! Gracias por tu compra.')
    clearCart()
    navigate('/')
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          No hay productos en el carrito
        </h2>
        <Link to="/tienda" className="text-biker-orange hover:text-biker-yellow transition-colors">
          Ir a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.avif" alt="ZONABIKER" className="h-10 w-auto" />
        </Link>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-2xl font-bold text-biker-orange">${cartTotal.toLocaleString()}</p>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
        Pantalla de Pago
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Login Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-biker-dark border border-biker-gray rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <User size={20} className="text-biker-orange" />
                  ¿Ya tienes cuenta?
                </h2>
              </div>
              <Link 
                to="/cuenta" 
                className="inline-flex items-center gap-2 text-biker-orange hover:text-biker-yellow transition-colors font-medium"
              >
                Iniciar sesión
              </Link>
            </motion.div>

            {/* Shipping Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-biker-dark border border-biker-gray rounded-xl p-6"
            >
              <h2 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Truck size={24} className="text-biker-orange" />
                Información de Despacho
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Ingresa tu dirección de envío para ver los métodos disponibles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="Tu apellido"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Tipo de documento</label>
                  <select
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                  >
                    <option value="">Seleccionar</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PP">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Número de documento</label>
                  <input
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="123456789"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">País</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="Colombia"
                    disabled
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Dirección de envío</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="Calle 123 #45-67"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Barrio</label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="Nombre del barrio"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Departamento</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleDepartmentChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                  >
                    <option value="">Seleccionar departamento</option>
                    {Object.keys(colombiaData).sort().map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Ciudad</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleCityChange}
                    required
                    disabled={!selectedDepartment}
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {selectedDepartment ? 'Seleccionar ciudad' : 'Selecciona departamento primero'}
                    </option>
                    {getCities().map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Número de teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="305 375 8049"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Número de WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                    placeholder="305 375 8049"
                  />
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-biker-dark border border-biker-gray rounded-xl p-6"
            >
              <h2 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard size={24} className="text-biker-orange" />
                ¿Cómo quieres pagar?
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bancolombia"
                    checked={formData.paymentMethod === 'bancolombia'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Bancolombia</span>
                      <span className="text-xs text-biker-orange bg-orange-500/20 px-2 py-1 rounded-full">Redirige</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Serás redirigido a la página de Bancolombia</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cards"
                    checked={formData.paymentMethod === 'cards'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Tarjetas</span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">VISA</span>
                        <span className="bg-orange-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">MC</span>
                        <span className="bg-blue-800 text-white px-1.5 py-0.5 rounded text-xs font-bold">DC</span>
                        <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">PSE</span>
                        <span className="bg-gray-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">+5</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Visa, Mastercard, DinersClub, Credencial, PSE (Todos los Bancos)</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="supay"
                    checked={formData.paymentMethod === 'supay'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Crédito Su+Pay</span>
                      <span className="text-xs text-green-500 bg-green-500/20 px-2 py-1 rounded-full">Crédito</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Crédito de consumo inmediato</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="sistecredito"
                    checked={formData.paymentMethod === 'sistecredito'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Crédito Sistecredito</span>
                      <span className="text-xs text-purple-500 bg-purple-500/20 px-2 py-1 rounded-full">Crédito</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Financiación hasta 36 meses</p>
                  </div>
                </label>
              </div>
            </motion.div>

            {/* Billing Address */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-biker-dark border border-biker-gray rounded-xl p-6"
            >
              <h2 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard size={24} className="text-biker-orange" />
                Dirección de facturación
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="billingAddress"
                    value="same"
                    checked={useBillingAddress === 'same'}
                    onChange={(e) => setUseBillingAddress(e.target.value)}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <span className="text-white font-medium">La misma dirección de envío</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-biker-black border border-biker-gray rounded-lg cursor-pointer hover:border-biker-orange transition-colors">
                  <input
                    type="radio"
                    name="billingAddress"
                    value="different"
                    checked={useBillingAddress === 'different'}
                    onChange={(e) => setUseBillingAddress(e.target.value)}
                    className="w-5 h-5 text-biker-orange"
                  />
                  <span className="text-white font-medium">Usar una dirección de facturación distinta</span>
                </label>
              </div>

              {/* Billing Address Form */}
              {useBillingAddress === 'different' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-biker-gray"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 mb-2">Nombre</label>
                      <input
                        type="text"
                        name="billingFirstName"
                        value={formData.billingFirstName}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Apellido</label>
                      <input
                        type="text"
                        name="billingLastName"
                        value={formData.billingLastName}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="Apellido"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Tipo de documento</label>
                      <select
                        name="billingDocumentType"
                        value={formData.billingDocumentType}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                      >
                        <option value="">Seleccionar</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="PP">Pasaporte</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Número de documento</label>
                      <input
                        type="text"
                        name="billingDocumentNumber"
                        value={formData.billingDocumentNumber}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="123456789"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">País</label>
                      <input
                        type="text"
                        name="billingCountry"
                        value={formData.billingCountry}
                        onChange={handleBillingInputChange}
                        disabled
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange disabled:opacity-50"
                        placeholder="Colombia"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-400 mb-2">Dirección</label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="Calle 123 #45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Barrio</label>
                      <input
                        type="text"
                        name="billingNeighborhood"
                        value={formData.billingNeighborhood}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="Barrio"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Departamento</label>
                      <select
                        name="billingDepartment"
                        value={formData.billingDepartment}
                        onChange={handleBillingDepartmentChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                      >
                        <option value="">Seleccionar departamento</option>
                        {Object.keys(colombiaData).sort().map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Ciudad</label>
                      <select
                        name="billingCity"
                        value={formData.billingCity}
                        onChange={handleBillingCityChange}
                        disabled={!selectedBillingDepartment}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {selectedBillingDepartment ? 'Seleccionar ciudad' : 'Selecciona departamento primero'}
                        </option>
                        {getBillingCities().map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="billingPhone"
                        value={formData.billingPhone}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="305 375 8049"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        name="billingWhatsapp"
                        value={formData.billingWhatsapp}
                        onChange={handleBillingInputChange}
                        className="w-full px-4 py-3 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
                        placeholder="305 375 8049"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-biker-gradient text-white py-4 rounded-xl font-bold hover:shadow-glow transition-all flex items-center justify-center gap-2 premium-border"
            >
              <Lock size={20} />
              Completar Pedido
            </motion.button>
          </form>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/politica-reembolso" className="hover:text-biker-orange transition-colors">Política de reembolso</Link>
            <Link to="/politica-envio" className="hover:text-biker-orange transition-colors">Envío</Link>
            <Link to="/politica-privacidad" className="hover:text-biker-orange transition-colors">Política de privacidad</Link>
            <Link to="/terminos" className="hover:text-biker-orange transition-colors">Términos del servicio</Link>
            <Link to="/contacto" className="hover:text-biker-orange transition-colors">Contacto</Link>
          </div>
        </div>

        {/* Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-biker-dark border border-biker-gray rounded-xl p-6 h-fit sticky top-24"
        >
          <h2 className="text-xl font-display font-bold text-white mb-4">
            Resumen del Pedido
          </h2>
          
          {/* Cart Items */}
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-gray-400">Cantidad: {item.quantity}</p>
                  <p className="text-sm text-biker-orange font-medium">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Section */}
          <div className="border-t border-biker-gray pt-4 mb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Código de descuento"
                className="flex-1 px-4 py-2 bg-biker-black border border-biker-gray rounded-lg text-white focus:outline-none focus:border-biker-orange"
              />
              <button className="px-4 py-2 bg-biker-orange text-white rounded-lg font-medium hover:bg-biker-accent transition-colors">
                Aplicar
              </button>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="border-t border-biker-gray pt-4 space-y-3">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Descuento</span>
              <span className="text-biker-orange">$0</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Envío</span>
              <span className="text-biker-orange">Calculado en el siguiente paso</span>
            </div>
            <div className="border-t border-biker-gray pt-3">
              <div className="flex justify-between text-white font-bold text-xl">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-4 p-4 bg-biker-orange/10 rounded-lg border border-biker-orange/30">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Lock size={16} className="text-biker-orange" />
              <span>Tu compra está protegida con garantía de 15 días</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout
