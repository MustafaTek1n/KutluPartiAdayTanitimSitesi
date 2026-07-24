import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import AdayDetay from './pages/AdayDetay'

export default function App() {
  // Retrieve saved candidate data from LocalStorage on initial render
  const [adaylar, setAdaylar] = useState(() => {
    const kayitliData = localStorage.getItem('kutlu_adaylar')
    return kayitliData ? JSON.parse(kayitliData) : {}
  })

  // State to manage contact float modal visibility
  const [iletisimAcik, setIletisimAcik] = useState(false)

  // Synchronize candidate state with LocalStorage on updates
  useEffect(() => {
    localStorage.setItem('kutlu_adaylar', JSON.stringify(adaylar))
  }, [adaylar])

  // Fallback default candidate data structure
  const defaultAday = {
    ad: '[AD SOYAD GELECEK]',
    unvan: '[İL / İLÇE VEYA BÖLGE ADAYLIĞI UNVANI]',
    slogan: '"Sizin Sloganınız / Seçim Mottolarınız Buraya Gelecek"',
    mesaj: 'Admin panelinden yazacağınız mesajınız bu alanda görünür.',
    foto: '',
    biyografi: 'Aday özgeçmiş detayları bu alanda yer alacaktır.',
    vaat1: 'Örnek Bölge Projesi 1',
    vaat2: 'Örnek Bölge Projesi 2'
  }

  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<AdayDetay adayVerisi={defaultAday} />} />
          <Route path="/aday" element={<AdayDetay adayVerisi={defaultAday} />} />
          <Route path="/aday/:slug" element={<AdayDetay adaylar={adaylar} defaultAday={defaultAday} />} />
          <Route path="/admin" element={<Admin setAdaylar={setAdaylar} adaylar={adaylar} />} />
        </Routes>

        {/* Floating Contact Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          
          {/* Contact Form Modal */}
          {iletisimAcik && (
            <div className="mb-4 w-80 md:w-96 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✉️</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Bize Ulaşın</h4>
                    <p className="text-[10px] text-slate-400">Görüş ve taleplerinizi iletin</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIletisimAcik(false)}
                  className="text-slate-400 hover:text-white text-lg font-bold w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  
                  const form = e.target;
                  const formData = new FormData(form);
                  
                  // Retrieve API key securely from environment variables
                  const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
                  formData.append("access_key", apiKey);

                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });

                    const data = await response.json();

                    if (data.success) {
                      alert("Mesajınız başarıyla iletildi!");
                      form.reset();
                      setIletisimAcik(false);
                    } else {
                      alert("Bir hata oluştu: " + (data.message || "Lütfen API anahtarınızı kontrol edin."));
                    }
                  } catch (error) {
                    console.error("Web3Forms submission error:", error);
                    alert("Bağlantı hatası oluştu, lütfen tekrar deneyin.");
                  }
                }}
                className="space-y-3"
              >
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Adınız Soyadınız" 
                    className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="E-Posta Adresiniz" 
                    className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    required 
                    placeholder="Konu (Örn: Adaylık Hakkında)" 
                    className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    required 
                    rows="3" 
                    placeholder="Mesajınızı yazın..." 
                    className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white text-xs outline-none focus:border-sky-500 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2"
                >
                  📨 E-Posta Gönder
                </button>
              </form>
            </div>
          )}

          {/* Floating Toggle Button */}
          <button
            onClick={() => setIletisimAcik(!iletisimAcik)}
            className="w-14 h-14 bg-sky-600 hover:bg-sky-500 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-sky-400/30 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
            title="Bize Ulaşın"
          >
            {iletisimAcik ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">✉️</span>
            )}
            
            {/* Status indicator pulse dot */}
            {!iletisimAcik && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
            )}
          </button>

        </div>
      </div>
    </Router>
  )
}