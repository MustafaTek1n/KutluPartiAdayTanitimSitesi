import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kutlu-teal-50 via-white to-kutlu-teal-100 text-kutlu-ink-800 flex flex-col justify-between font-sans">
      
      {/* --- UST MENU / NAVBAR --- */}
      <header className="bg-white/80 backdrop-blur-md border-b border-kutlu-teal-200 sticky top-0 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Sol Üst: Kutlu Parti Logo & İsim */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Kutlu Parti Logo" 
              className="w-11 h-11 object-contain rounded-full border-2 border-kutlu-teal-400 p-0.5 shadow-md"
              onError={(e) => {
                // Logo bulunamazsa varsayılan ikon gösterir
                e.target.onerror = null;
                e.target.src = "https://cdn-icons-png.flaticon.com/512/3917/3917705.png";
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-kutlu-ink-900 leading-none">
                KUTLU <span className="text-kutlu-teal-600">PARTİ</span>
              </span>
              <span className="text-[11px] text-kutlu-teal-700 font-bold tracking-widest uppercase mt-1">
                Aday Tanıtım Portalı
              </span>
            </div>
          </div>

          {/* Sağ Üst: Yönetim Paneli Butonu */}
          <Link 
            to="/admin" 
            className="bg-kutlu-teal-600 hover:bg-kutlu-teal-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-md shadow-kutlu-teal-600/20 transition-all duration-200 flex items-center gap-2"
          >
            <span>Yönetim Paneli</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

        </div>
      </header>

      {/* --- HERO / ANA TANITIM ALANI --- */}
      <main className="max-w-5xl mx-auto px-6 py-16 text-center flex-1 flex flex-col items-center justify-center">
        
        <div className="inline-flex items-center gap-2 bg-kutlu-teal-100 text-kutlu-teal-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-kutlu-teal-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-kutlu-teal-500 animate-pulse"></span>
          Resmi Aday Profil & Portfolyo Platformu
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-kutlu-ink-900 tracking-tight leading-tight mb-6">
          Geleceğin Kadroları <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kutlu-teal-600 to-kutlu-teal-700">
            Kutlu Parti
          </span> Çatısı Altında Buluşuyor
        </h1>

        <p className="text-lg md:text-xl text-kutlu-ink-600 max-w-2xl mb-10 leading-relaxed">
          Milletimize hizmet yolunda adaylarımızın özgeçmişlerini, projelerini ve vizyonlarını şeffaf bir şekilde inceleyebilirsiniz.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link 
            to="/aday" 
            className="bg-white border-2 border-kutlu-teal-500 text-kutlu-teal-700 hover:bg-kutlu-teal-50 font-bold px-8 py-3.5 rounded-xl shadow-sm transition-all duration-200 text-center"
          >
            Örnek Aday Sayfasını Gör
          </Link>
          <Link 
            to="/admin" 
            className="bg-kutlu-teal-500 hover:bg-kutlu-teal-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-kutlu-teal-500/30 transition-all duration-200 text-center"
          >
            Aday Kaydı & Düzenleme
          </Link>
        </div>

      </main>

      {/* --- FOOTER / ALT BILGI --- */}
      <footer className="bg-white border-t border-kutlu-teal-100 py-6 text-center text-sm text-kutlu-ink-500">
        <p>© {new Date().getFullYear()} Kutlu Parti. Tüm hakları saklıdır.</p>
      </footer>

    </div>
  );
}