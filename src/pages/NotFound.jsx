import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kutlu-ink-900 text-white flex items-center justify-center p-6 text-center">
      <div className="bg-kutlu-ink-800 border border-kutlu-ink-700 p-8 rounded-2xl shadow-2xl max-w-md">
        <Compass size={40} className="text-kutlu-teal-400 mx-auto mb-4" />
        <h1 className="text-3xl font-black mb-2">404</h1>
        <p className="text-kutlu-ink-300 text-sm mb-6">Aradığınız sayfa bulunamadı ya da kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="bg-kutlu-teal-600 hover:bg-kutlu-teal-500 text-white font-bold px-6 py-2.5 rounded-xl transition inline-block"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
}