import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import AdayDetay from './pages/AdayDetay'

export default function App() {
  // TARAYICI HAFIZASINDAN KAYITLI ADAYLARI ÇEKİYORUZ (Sayfa yenilense de kalır)
  const [adaylar, setAdaylar] = useState(() => {
    const kayitliData = localStorage.getItem('kutlu_adaylar')
    return kayitliData ? JSON.parse(kayitliData) : {}
  })

  // ADAYLAR HER GÜNCELLENDİĞİNDE HAFIZAYA KAYDET
  useEffect(() => {
    localStorage.setItem('kutlu_adaylar', JSON.stringify(adaylar))
  }, [adaylar])

  // ÖRNEK VİTRİN ADAY VERİSİ
  const defaultAday = {
    ad: '[AD SOYAD GELECEK]',
    unvan: '[İL / İLÇE VEYA BÖLGE ADAYLIĞI UNVANI]',
    slogan: '"Sizin Sloganınız / Seçim Mottolarınız Buraya Gelecek"',
    mesaj: 'Admin panelinden yazacağınız mesajınız bu alanda görünür.',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
    biyografi: 'Aday özgeçmiş detayları bu alanda yer alacaktır.',
    vaat1: 'Örnek Bölge Projesi 1',
    vaat2: 'Örnek Bölge Projesi 2'
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdayDetay adayVerisi={defaultAday} />} />
        <Route path="/aday" element={<AdayDetay adayVerisi={defaultAday} />} />
        <Route path="/aday/:slug" element={<AdayDetay adaylar={adaylar} defaultAday={defaultAday} />} />
        <Route path="/admin" element={<Admin setAdaylar={setAdaylar} adaylar={adaylar} />} />
      </Routes>
    </Router>
  )
}