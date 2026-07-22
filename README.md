# 🚀 Aday Tanıtım & Portfolyo Platformu

Bu proje; adaylar için dinamik, modern ve kişiselleştirilmiş web siteleri oluşturmayı sağlayan React, Vite ve Firebase tabanlı bir yönetim ve vitrin platformudur.

---

## ✨ Öne Çıkan Özellikler

* **Dinamik URL Yapısı (Slug Engine):** Aday isimlerinden Türkçe karakterleri temizleyerek anında adaya özel, SEO dostu bağlantılar üretir (Örn: `/aday/ahmet-yilmaz`).
* **Akıllı Yönetim Paneli (`/admin`):**
  * **➕ Yeni Aday Ekle:** Formu ve düzenleme modunu sıfırlayarak hızlıca yeni kayıt açar.
  * **✏️ Düzenle Modu:** Mevcut aday verilerini forma çekerek güvenli güncelleme olanağı sunar.
  * **🔗 Otomatik Link Üretimi:** Tek tıkla adaya gönderilecek özel linki kopyalama imkanı.
* **Sekmeli Vitrin Tasarımı (`/aday/:slug`):** Adayın profili, projeleri, deneyimleri ve iletişim bilgilerini şık sekmeler halinde sunan mobil uyumlu arayüz.
* **Hibrit Veri Yönetimi:** Verilerin kaybolmaması için LocalStorage ve Firebase Firestore entegrasyonu.

---

## 🛠️ Teknolojiler ve Kütüphaneler

* **Core:** React, Vite
* **Routing:** React Router DOM
* **Backend & Database:** Firebase (Firestore / Hosting)
* **Styling:** CSS3 / Modern Responsive Design

---

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

```bash
# 1. Depoyu klonlayın
git clone <repo-url>

# 2. Proje dizinine gidin
cd KutluPartiAdayTanitimSitesi

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirici sunucusunu başlatın
npm run dev


src/
├── components/     # Ortak UI bileşenleri (Hero, Header vb.)
├── pages/          # Uygulama sayfaları (Home, Admin, AdayDetay)
├── App.jsx         # Ana yönlendirme (Routing) ve State yönetimi
├── firebase.js     # Firebase bağlantı konfigürasyonu
└── main.jsx        # React başlangıç noktası

