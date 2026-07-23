import React, { useState } from 'react'

export default function Admin({ setAdaylar, adaylar }) {
  const [panelSekme, setPanelSekme] = useState('genel')
  const [uretilenLink, setUretilenLink] = useState('')
  const [duzenlenenSlug, setDuzenlenenSlug] = useState(null) // Düzenleme modunu takip eder

  // Dinamik Vaatler ve Galeri Dizileri
  const [vaatler, setVaatler] = useState([''])
  const [galeri, setGaleri] = useState([''])

  const [form, setForm] = useState({
    ad: '',
    unvan: '',
    slogan: '',
    mesaj: '',
    foto: '',
    biyografi: '',
    whatsapp: '',
    twitter: '',
    instagram: ''
  })

  // VAAT FONKSİYONLARI
  const vaatEkle = () => setVaatler([...vaatler, ''])
  const vaatSil = (index) => setVaatler(vaatler.filter((_, i) => i !== index))
  const vaatDegis = (index, val) => {
    const yeni = [...vaatler]
    yeni[index] = val
    setVaatler(yeni)
  }

  // GALERİ FONKSİYONLARI
  const fotoEkle = () => setGaleri([...galeri, ''])
  const fotoSil = (index) => setGaleri(galeri.filter((_, i) => i !== index))
  const fotoDegis = (index, val) => {
    const yeni = [...galeri]
    yeni[index] = val
    setGaleri(yeni)
  }

  // URL Uyumlu Slug Üretici
  const slugUret = (metin) => {
    return metin
      .toLowerCase()
      .trim()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // YENİ SİTE ÜRET / GÜNCELLE
  const siteKaydet = () => {
    if (!form.ad) {
      alert("Lütfen Aday Ad Soyad alanını doldurun!")
      return
    }

    const slug = duzenlenenSlug || slugUret(form.ad)

    const kaydedilecekAday = {
      ...form,
      vaatler: vaatler.filter(v => v.trim() !== ''),
      galeri: galeri.filter(g => g.trim() !== '')
    }

    setAdaylar(prev => ({
      ...prev,
      [slug]: kaydedilecekAday
    }))

    const tamLink = `${window.location.origin}/aday/${slug}`
    setUretilenLink(tamLink)
    
    if (duzenlenenSlug) {
      alert(`✅ ${form.ad} isimli adayın web sitesi başarıyla güncellendi!`)
    }
  }

  // VAR OLAN ADAYI DÜZENLEME MODUNA ALIR
  const adayDuzenle = (slug) => {
    const aday = adaylar[slug]
    if (aday) {
      setForm(aday)
      
      // Eski vaat1/2/3 yapısı varsa da destekler, yoksa vaatler dizisini alır
      if (aday.vaatler && aday.vaatler.length > 0) {
        setVaatler(aday.vaatler)
      } else {
        const eskiVaatler = [aday.vaat1, aday.vaat2, aday.vaat3, aday.vaat4].filter(Boolean)
        setVaatler(eskiVaatler.length > 0 ? eskiVaatler : [''])
      }

      // Galeri dizisini yükler
      if (aday.galeri && aday.galeri.length > 0) {
        setGaleri(aday.galeri)
      } else {
        const eskiGaleri = [aday.foto2, aday.foto3].filter(Boolean)
        setGaleri(eskiGaleri.length > 0 ? eskiGaleri : [''])
      }

      setDuzenlenenSlug(slug)
      setPanelSekme('genel')
      setUretilenLink(`${window.location.origin}/aday/${slug}`)
    }
  }

  // ADAYI SİL
  const adaySil = (slug) => {
    if (window.confirm("Bu adayın web sitesini silmek istediğinize emin misiniz?")) {
      setAdaylar(prev => {
        const yeniObj = { ...prev }
        delete yeniObj[slug]
        return yeniObj
      })
      if (duzenlenenSlug === slug) formSifirla()
    }
  }

  // FORMU SIFIRLA (YENİ ADAY EKLERKEN)
  const formSifirla = () => {
    setDuzenlenenSlug(null)
    setUretilenLink('')
    setVaatler([''])
    setGaleri([''])
    setForm({
      ad: '', unvan: '', slogan: '', mesaj: '', foto: '',
      biyografi: '', whatsapp: '', twitter: '', instagram: ''
    })
    setPanelSekme('genel')
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col md:flex-row">
      
      {/* SOL MENÜ */}
      <aside className="w-full md:w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2">
            🏛️ Kutlu Parti Admin
          </h2>
          
          <button 
            type="button" 
            onClick={formSifirla}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold p-3 rounded-xl mb-4 transition text-sm flex items-center justify-center gap-2"
          >
            ➕ Formu Sıfırla
          </button>

          <nav className="space-y-2">
            {[
              { id: 'genel', etiket: '👤 Genel Bilgiler' },
              { id: 'biyografi', etiket: '📜 Biyografi & Mesaj' },
              { id: 'projeler', etiket: '🎯 Projeler & Vaatler' },
              { id: 'galeri', etiket: '🖼️ Fotoğraf Galerisi' },
              { id: 'iletisim', etiket: '📞 İletişim & Sosyal' },
              { id: 'liste', etiket: `📂 Üretilen Siteler (${Object.keys(adaylar || {}).length})` },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setPanelSekme(s.id)}
                className={`w-full text-left p-3 rounded-xl font-medium transition ${
                  panelSekme === s.id ? 'bg-red-600 text-white' : 'text-slate-400 hover:bg-slate-700/50'
                }`}
              >
                {s.etiket}
              </button>
            ))}
          </nav>
        </div>

        {/* KAYDET / GÜNCELLE BUTONU */}
        <button 
          type="button"
          onClick={siteKaydet} 
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg mt-6 cursor-pointer"
        >
          {duzenlenenSlug ? '💾 Değişiklikleri Kaydet' : '🚀 Web Sitesini Üret'}
        </button>
      </aside>

      {/* SAĞ İÇERİK */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* DÜZENLEME MODU BİLDİRİMİ */}
          {duzenlenenSlug && (
            <div className="bg-amber-950/80 border border-amber-500 p-4 rounded-xl flex items-center justify-between text-amber-300 text-sm">
              <span>✏️ Şu an <strong>"{form.ad}"</strong> adayın web sitesini düzenliyorsunuz.</span>
              <button onClick={formSifirla} className="bg-amber-800 hover:bg-amber-700 text-white text-xs px-3 py-1.5 rounded-lg">İptal Et</button>
            </div>
          )}

          {/* BAŞARILI BİLDİRİM KUTUSU */}
          {uretilenLink && (
            <div className="bg-emerald-950/80 border-2 border-emerald-500 p-6 rounded-2xl shadow-2xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">🎉 Web Sitesi Yayında!</h3>
              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-xl border border-slate-700">
                <input type="text" readOnly value={uretilenLink} className="w-full bg-transparent text-emerald-300 font-mono text-sm focus:outline-none" />
                <a href={uretilenLink} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg whitespace-nowrap">
                  Yeni Sekmede Aç ↗
                </a>
              </div>
            </div>
          )}

          {/* 📂 ÜRETİLEN SİTELER LİSTESİ SEKMESİ */}
          {panelSekme === 'liste' && (
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-3">Sistemdeki Aday Web Siteleri</h3>
              
              {Object.keys(adaylar || {}).length === 0 ? (
                <p className="text-slate-400 text-sm">Henüz kayıtlı bir aday web sitesi yok.</p>
              ) : (
                <div className="space-y-3">
                  {Object.keys(adaylar).map((slug) => (
                    <div key={slug} className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-white text-lg">{adaylar[slug].ad}</h4>
                        <p className="text-xs text-blue-400">{adaylar[slug].unvan}</p>
                        <span className="text-xs text-slate-500 font-mono mt-1 block">/aday/{slug}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <a href={`/aday/${slug}`} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg border border-slate-600">
                          Görüntüle ↗
                        </a>
                        <button onClick={() => adayDuzenle(slug)} className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-lg">
                          ✏️ Düzenle
                        </button>
                        <button onClick={() => adaySil(slug)} className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-lg">
                          🗑️ Sil
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* DOLDURMA FORMU (Diğer Sekmeler) */}
          {panelSekme !== 'liste' && (
            <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="space-y-6">
                
                {/* 1. GENEL BİLGİLER */}
                {panelSekme === 'genel' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-red-400 border-b border-slate-700 pb-2">Aday Temel Bilgileri</h3>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Aday Ad Soyad *</label>
                      <input type="text" name="ad" value={form.ad} onChange={handleChange} placeholder="Örn: Ahmet Yılmaz" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Unvan / Seçim Bölgesi *</label>
                      <input type="text" name="unvan" value={form.unvan} onChange={handleChange} placeholder="İzmir 1. Sıra Milletvekili Adayı" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Seçim Sloganı</label>
                      <input type="text" name="slogan" value={form.slogan} onChange={handleChange} placeholder="Gelecek Gençlikle Yükseliyor!" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Profil Fotoğraf Linki (URL)</label>
                      <input type="url" name="foto" value={form.foto} onChange={handleChange} placeholder="https://..." className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    </div>
                  </div>
                )}

                {/* 2. BİYOGRAFİ & MESAJ */}
                {panelSekme === 'biyografi' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-400 border-b border-slate-700 pb-2">Biyografi & Aday Mesajı</h3>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Milletimize Mesaj</label>
                      <textarea rows="3" name="mesaj" value={form.mesaj} onChange={handleChange} placeholder="Adayın ilk karşılama mesajı..." className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white"></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Detaylı Özgeçmiş / Biyografi</label>
                      <textarea rows="6" name="biyografi" value={form.biyografi} onChange={handleChange} placeholder="Adayın özgeçmiş detayları..." className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white"></textarea>
                    </div>
                  </div>
                )}

                {/* 3. PROJELER & VAATLER (DİNAMİK + BUTONLU) */}
                {panelSekme === 'projeler' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <h3 className="text-xl font-bold text-emerald-400">Proje & Vaat Modülü</h3>
                      <button
                        type="button"
                        onClick={vaatEkle}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                      >
                        + Yeni Vaat Ekle
                      </button>
                    </div>

                    {vaatler.map((v, i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          type="text"
                          value={v}
                          onChange={(e) => vaatDegis(i, e.target.value)}
                          placeholder={`${i + 1}. Proje / Vaat`}
                          className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white"
                        />
                        {vaatler.length > 1 && (
                          <button
                            type="button"
                            onClick={() => vaatSil(i)}
                            className="bg-slate-700 hover:bg-red-900/50 text-red-400 border border-slate-600 px-3.5 rounded-xl font-bold transition"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. FOTOĞRAF GALERİSİ (DİNAMİK + BUTONLU) */}
                {panelSekme === 'galeri' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <h3 className="text-xl font-bold text-amber-400">Saha & Etkinlik Fotoğrafları</h3>
                      <button
                        type="button"
                        onClick={fotoEkle}
                        className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                      >
                        + Görsel Linki Ekle
                      </button>
                    </div>

                    {galeri.map((g, i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          type="url"
                          value={g}
                          onChange={(e) => fotoDegis(i, e.target.value)}
                          placeholder={`Saha Görseli ${i + 1} (URL)`}
                          className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white"
                        />
                        {galeri.length > 1 && (
                          <button
                            type="button"
                            onClick={() => fotoSil(i)}
                            className="bg-slate-700 hover:bg-red-900/50 text-red-400 border border-slate-600 px-3.5 rounded-xl font-bold transition"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. İLETİŞİM & SOSYAL */}
                {panelSekme === 'iletisim' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-purple-400 border-b border-slate-700 pb-2">İletişim Kanalları</h3>
                    <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp Numarası" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    <input type="text" name="twitter" value={form.twitter} onChange={handleChange} placeholder="Twitter (X) Linki" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                    <input type="text" name="instagram" value={form.instagram} onChange={handleChange} placeholder="Instagram Linki" className="w-full p-3 bg-slate-700 rounded-xl border border-slate-600 text-white" />
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  )
}