import { User, MapPin, Phone, Mail, Package, Heart, Settings, LogOut } from 'lucide-react'

const Account = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
        Mi Cuenta
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-biker-dark border border-biker-gray rounded-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-biker-gradient rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Usuario</h2>
              <p className="text-gray-400">cliente@zonabiker.com.co</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={18} />
              <span>305 375 8049</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={18} />
              <span>cliente@zonabiker.com.co</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} />
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>

        {/* Account Options */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-biker-dark border border-biker-gray rounded-xl overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 hover:bg-biker-gray transition-colors text-left">
              <div className="w-10 h-10 bg-biker-orange20 rounded-lg flex items-center justify-center">
                <Package size={20} className="text-biker-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Mis Pedidos</h3>
                <p className="text-sm text-gray-400">Ver historial de compras</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 hover:bg-biker-gray transition-colors text-left border-t border-biker-gray">
              <div className="w-10 h-10 bg-biker-orange20 rounded-lg flex items-center justify-center">
                <Heart size={20} className="text-biker-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Lista de Deseos</h3>
                <p className="text-sm text-gray-400">Productos guardados</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 hover:bg-biker-gray transition-colors text-left border-t border-biker-gray">
              <div className="w-10 h-10 bg-biker-orange20 rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-biker-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Direcciones</h3>
                <p className="text-sm text-gray-400">Gestionar direcciones de envío</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 hover:bg-biker-gray transition-colors text-left border-t border-biker-gray">
              <div className="w-10 h-10 bg-biker-orange20 rounded-lg flex items-center justify-center">
                <Settings size={20} className="text-biker-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Configuración</h3>
                <p className="text-sm text-gray-400">Cambiar contraseña y datos</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 hover:bg-biker-gray transition-colors text-left border-t border-biker-gray">
              <div className="w-10 h-10 bg-biker-orange20 rounded-lg flex items-center justify-center">
                <LogOut size={20} className="text-biker-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Cerrar Sesión</h3>
                <p className="text-sm text-gray-400">Salir de tu cuenta</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
