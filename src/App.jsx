import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CartSidebar from './components/CartSidebar'
import Home from './pages/Home'
import Cascos from './pages/Cascos'
import Llantas from './pages/Llantas'
import Tienda from './pages/Tienda'
import Ofertas from './pages/Ofertas'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-biker-black">
          <Navbar />
          <CartSidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cascos" element={<Cascos />} />
              <Route path="/llantas" element={<Llantas />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/cuenta" element={<Account />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
