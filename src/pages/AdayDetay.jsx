import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AdayDetay({ adayVerisi, adaylar, defaultAday }) {
  const [aktifSekme, setAktifSekme] = useState('anasayfa')
  const { slug } = useParams() // URL'deki aday kodunu yakalar (Örn: ahmet-yilmaz)

  // 1. EĞER URL'DE BİR SLUG VARSA VE ADAYLAR LİSTESİNDE BULUNUYORSA O ADAYI AL
  // 2. YOKSA GELEN adayVerisi VEYA defaultAday VERİSİNİ KULLAN
  let aktifAday = defaultAday || adayVerisi

  if (slug && adaylar && adaylar[slug]) {
    aktifAday = adaylar[slug]
  }

  // Eğer hiçbir veri yoksa sayfanın patlamasını engeller
  if (!aktifAday) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold">Aday Bilgisi Bulunamadı!</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      
      {/* 1. ÜST HEADER / PARTİ BANNERİ */}
      <header className="bg-gradient-to-r from-red-950 via-slate-900 to-blue-950 border-b border-slate-800 pt-12 pb-8 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="bg-red-600 text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block shadow-lg">
              Kutlu Parti Resmi Aday Portalı
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{aktifAday.ad || '[AD SOYAD]'}</h1>
            <p className="text-blue-400 font-semibold text-lg mt-1">{aktifAday.unvan || '[UNVAN]'}</p>
            {aktifAday.slogan && <p className="text-slate-300 italic text-sm mt-2">{aktifAday.slogan}</p>}
          </div>

          {/* Profil Fotoğrafı */}
          <img 
            src={aktifAday.foto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"} 
            alt={aktifAday.ad} 
            className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover border-4 border-slate-800 shadow-2xl"
          />
        </div>
      </header>

      {/* 2. MENÜ / NAVİGASYON */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 shadow-xl">
        <div className="max-w-5xl mx-auto flex justify-center overflow-x-auto text-sm font-semibold">
          {[
            { id: 'anasayfa', etiket: '🏠 Ana Sayfa' },
            { id: 'biyografi', etiket: '📜 Özgeçmiş' },
            { id: 'projeler', etiket: '🎯 Projeler & Vaatler' },
            { id: 'galeri', etiket: '🖼️ Galeri' },
            { id: 'iletisim', etiket: '📞 İletişim' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setAktifSekme(item.id)}
              className={`px-6 py-4 whitespace-nowrap transition border-b-2 ${
                aktifSekme === item.id 
                  ? 'border-red-500 text-red-400 bg-slate-800/50' 
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              {item.etiket}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. DİNAMİK SEKMELER */}
      <main className="max-w-5xl mx-auto px-6 mt-8">
        
        {/* ANA SAYFA SEKMESİ */}
        {aktifSekme === 'anasayfa' && (
          <div className="space-y-8">
            <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Milletimize Mesaj</h2>
              <p className="text-slate-300 text-lg leading-relaxed">{aktifAday.mesaj || "Adayın mesajı bu alanda sergilenecektir."}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-blue-400 mb-3">📍 Bölge Bilgisi</h3>
                <p className="text-slate-300">{aktifAday.unvan || "Seçim Bölgesi"}</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">💬 İletişim Kanalları</h3>
                <p className="text-slate-300">WhatsApp ve sosyal medya hesapları üzerinden seçmenleriniz doğrudan size ulaşabilir.</p>
              </div>
            </div>
          </div>
        )}

        {/* BİYOGRAFİ SEKMESİ */}
        {aktifSekme === 'biyografi' && (
          <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-b border-slate-800 pb-3">Adayın Biyografisi</h2>
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
              {aktifAday.biyografi || "Biyografi eklenmedi."}
            </p>
          </section>
        )}

        {/* PROJELER VE VAATLER SEKMESİ */}
        {aktifSekme === 'projeler' && (
          <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-red-500 mb-6 border-b border-slate-800 pb-3">Seçim Vaatleri ve Projeler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[aktifAday.vaat1, aktifAday.vaat2, aktifAday.vaat3, aktifAday.vaat4].filter(Boolean).map((vaat, idx) => (
                <div key={idx} className="bg-slate-800/70 p-5 rounded-xl border border-slate-700/60 flex items-start gap-3">
                  <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                  <p className="text-slate-200 font-medium">{vaat}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GALERİ SEKMESİ */}
        {aktifSekme === 'galeri' && (
          <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 border-b border-slate-800 pb-3">Fotoğraf Galerisi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[aktifAday.foto, aktifAday.foto2, aktifAday.foto3].filter(Boolean).map((img, idx) => (
                <img key={idx} src={img} alt="Galeri Foto" className="w-full h-48 object-cover rounded-xl border border-slate-700 hover:scale-105 transition" />
              ))}
            </div>
          </section>
        )}

        {/* İLETİŞİM SEKMESİ */}
        {aktifSekme === 'iletisim' && (
          <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl text-center max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-emerald-400">Aday İletişim Sayfası</h2>
            {aktifAday.whatsapp && (
              <a 
                href={`https://wa.me/${aktifAday.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                className="block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg transition text-lg"
              >
                💬 WhatsApp İletişim Hattı
              </a>
            )}
            <div className="flex justify-center gap-4">
              {aktifAday.twitter && <a href={aktifAday.twitter} target="_blank" rel="noreferrer" className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl border border-slate-700 text-sm font-semibold">X (Twitter)</a>}
              {aktifAday.instagram && <a href={aktifAday.instagram} target="_blank" rel="noreferrer" className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl border border-slate-700 text-sm font-semibold">Instagram</a>}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Siz de Kutlu Parti Aday Tanıtım Sitenizi Oluşturmak İster Misiniz?</h3>
          <p className="text-slate-400 text-sm mb-4">Medya ve iletişim ekibimizle iletişime geçerek kendinize özel web sitenizi dakikalar içinde hazırlatabilirsiniz.</p>
          <a 
            href="https://wa.me/905550002323" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg"
          >
            📞 Medya Ekibiyle İletişime Geçin
          </a>
        </footer>

      </main>

    </div>
  )
}   