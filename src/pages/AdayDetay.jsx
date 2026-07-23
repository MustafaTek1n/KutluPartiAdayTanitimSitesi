import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

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
      <div className="min-h-screen bg-sky-900 text-white flex items-center justify-center p-6 text-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl max-w-md">
          <h2 className="text-2xl font-bold mb-2">Aday Bilgisi Bulunamadı!</h2>
          <p className="text-sky-100 text-sm mb-6">Aradığınız adaya ait profil henüz oluşturulmamış veya silinmiş olabilir.</p>
          <Link to="/" className="bg-white text-sky-800 font-bold px-6 py-2.5 rounded-xl hover:bg-sky-50 transition shadow-md inline-block">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-sky-100 text-slate-800 font-sans pb-16">
      
      {/* 1. ÜST HEADER / PARTİ BANNERİ (KUTLU PARTİ KURUMSAL RENKLERİ & LOGO) */}
      <header className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 border-b border-sky-300 pt-10 pb-10 px-6 relative overflow-hidden shadow-lg">
        {/* Arka plan parlama efekti */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Sol Kısım: LOGO + AD SOYAD + UNVAN */}
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            
            {/* KUTLU PARTİ LOGOSU */}
            <img 
              src="/logo.png" 
              alt="Kutlu Parti Logo" 
              className="w-20 h-20 md:w-30 md:h-30 object-contain rounded-2xl bg-white p-1.5 shadow-xl border-2 border-sky-200 shrink-0"
              onError={(e) => {
                // public/logo.png bulunamazsa geçici ikon gösterir
                e.target.onerror = null;
                e.target.src = "https://cdn-icons-png.flaticon.com/512/3917/3917705.png";
              }}
            />

            {/* Ad, Unvan ve Rozet */}
            <div>
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[11px] font-extrabold px-3.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block shadow-sm">
                Kutlu Parti Resmi Aday Portalı
              </span>
              
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                {aktifAday.ad || '[AD SOYAD]'}
              </h1>
              
              <p className="text-sky-100 font-bold text-base md:text-lg mt-1">
                {aktifAday.unvan || '[UNVAN]'}
              </p>

              {aktifAday.slogan && (
                <p className="text-sky-50 italic text-sm mt-1.5 opacity-90">
                  "{aktifAday.slogan}"
                </p>
              )}
            </div>

          </div>

          {/* Profil Fotoğrafı */}
          <div className="relative shrink-0">
            <img 
              src={aktifAday.foto || "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"} 
              alt={aktifAday.ad} 
              className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover border-4 border-white shadow-2xl bg-white"
            />
          </div>

        </div>
      </header>

      {/* 2. MENÜ / NAVİGASYON */}
      <nav className="bg-white border-b border-sky-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-center overflow-x-auto text-sm font-bold">
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
                  ? 'border-sky-600 text-sky-700 bg-sky-50/80' 
                  : 'border-transparent text-slate-600 hover:text-sky-600 hover:bg-slate-50'
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
            <section className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md">
              <h2 className="text-2xl font-black text-sky-700 mb-4 border-b border-sky-100 pb-3">Milletimize Mesaj</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{aktifAday.mesaj || "Adayın mesajı bu alanda sergilenecektir."}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
                <h3 className="text-xl font-bold text-sky-600 mb-2">📍 Bölge Bilgisi</h3>
                <p className="text-slate-700 font-medium">{aktifAday.unvan || "Seçim Bölgesi"}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">💬 İletişim Kanalları</h3>
                <p className="text-slate-600 text-sm leading-relaxed">WhatsApp ve sosyal medya hesapları üzerinden doğrudan erişim sağlayabilirsiniz.</p>
              </div>
            </div>
          </div>
        )}

        {/* BİYOGRAFİ SEKMESİ */}
        {aktifSekme === 'biyografi' && (
          <section className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md">
            <h2 className="text-2xl font-black text-sky-700 mb-4 border-b border-sky-100 pb-3">Adayın Biyografisi</h2>
            <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
              {aktifAday.biyografi || "Biyografi henüz eklenmedi."}
            </p>
          </section>
        )}

        {/* PROJELER VE VAATLER SEKMESİ */}
        {aktifSekme === 'projeler' && (
          <section className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md">
            <h2 className="text-2xl font-black text-sky-700 mb-6 border-b border-sky-100 pb-3">Seçim Vaatleri ve Projeler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[aktifAday.vaat1, aktifAday.vaat2, aktifAday.vaat3, aktifAday.vaat4].filter(Boolean).map((vaat, idx) => (
                <div key={idx} className="bg-sky-50/60 p-5 rounded-xl border border-sky-100 flex items-start gap-3 shadow-sm">
                  <span className="bg-sky-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                  <p className="text-slate-800 font-semibold">{vaat}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GALERİ SEKMESİ */}
        {aktifSekme === 'galeri' && (
          <section className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md">
            <h2 className="text-2xl font-black text-sky-700 mb-6 border-b border-sky-100 pb-3">Fotoğraf Galerisi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[aktifAday.foto, aktifAday.foto2, aktifAday.foto3].filter(Boolean).map((img, idx) => (
                <img key={idx} src={img} alt="Galeri Foto" className="w-full h-48 object-cover rounded-xl border border-sky-200 hover:scale-105 transition shadow-sm" />
              ))}
            </div>
          </section>
        )}

        {/* İLETİŞİM SEKMESİ */}
        {aktifSekme === 'iletisim' && (
          <section className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md text-center max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-black text-sky-700">Aday İletişim Sayfası</h2>
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
              {aktifAday.twitter && <a href={aktifAday.twitter} target="_blank" rel="noreferrer" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-sm font-bold shadow-md">X (Twitter)</a>}
              {aktifAday.instagram && <a href={aktifAday.instagram} target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white py-3 rounded-xl text-sm font-bold shadow-md">Instagram</a>}
            </div>
          </section>
        )}

      </main>

    </div>
  )
}