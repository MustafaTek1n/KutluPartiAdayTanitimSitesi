# 🚀 Kutlu Parti - Aday Tanıtım & Portfolyo Platformu
> **Candidate Presentation & Portfolio Showcase Platform**

[TR] Bu proje; **Kutlu Parti** adayları için dinamik, modern ve kurumsal kimliğe uygun kişiselleştirilmiş web siteleri oluşturmayı sağlayan React, Vite, Tailwind CSS ve Firebase tabanlı full-stack bir yönetim ve vitrin platformudur.

[EN] This project is a full-stack React, Vite, Tailwind CSS, and Firebase-based management and showcase platform designed to create dynamic, modern, and branded personalized web portals for **Kutlu Parti** political candidates.

---

## 🇹🇷 Türkçe Dokümantasyon

### ✨ Öne Çıkan Özellikler

* **🏠 Ana Karşılama Portalı (Landing Page):** Ziyaretçileri karşılayan, platformun amacını sunan ve hem Aday Vitrinlerine hem de Yönetim Paneline doğrudan erişim sağlayan merkezi ana sayfa.
* **🔒 Yönetici Kimlik Doğrulama (Admin Authentication):** `/admin` paneline yetkisiz erişimleri engelleyen, güvenli oturum açma (Auth Guard) mekanizması.
* **🏛️ Kutlu Parti Kurumsal Teması:** Gök mavisi ve beyaz tonlarıyla hazırlanan, sol üstte resmi parti logosunun yer aldığı ferah ve mobil uyumlu arayüz.
* **🔗 Dinamik URL Yapısı (Slug Engine):** Aday isimlerinden Türkçe karakterleri otomatik temizleyerek anında adaya özel, SEO dostu bağlantılar üretir (Örn: `/aday/ahmet-yilmaz`).
* **🖼️ Gelişmiş Fotoğraf Galerisi & CORS Koruması:** Dış kaynaklı görsellerin (Unsplash vb.) erişim engellerine takılmasını önleyen (`referrerPolicy`) ve dinamik dizi (array) yapısını destekleyen optimize edilmiş görsel galerisi.
* **✉️ İnteraktif İletişim & E-Posta Modülü:** Alt kısımda yer alan floating contact widget üzerinden Web3Forms API entegrasyonu ile ziyaretçilerin doğrudan e-posta göndermesini sağlar.
* **⚙️ Akıllı Yönetim Paneli (`/admin`):**
  * **➕ Dinamik Vaat & Galeri Modülü:** Sabit kısıtlamalar yerine `+` ve `🗑️` butonları ile sınırsız sayıda seçim vaadi/projesi ve saha görseli ekleme/silme imkanı.
  * **✏️ Düzenle Modu:** Mevcut aday verilerini forma çekerek güvenli güncelleme olanağı.
  * **🚀 Otomatik Link Üretimi:** Üretilen adaya özel web sitesi linkini anında kopyalama ve yeni sekmede önizleme.
* **📱 Sekmeli Vitrin Tasarımı (`/aday/:slug`):** Adayın profili, özgeçmişi, projeleri, fotoğraf galerisi ve iletişim bilgilerini şık sekmeler halinde sunan arayüz.
* **🔒 Güvenli Mimarisi (.env):** API anahtarlarının ve hassas verilerin `.env` değişkenleri ile korunması.
* **💾 Hibrit Veri Yönetimi:** Verilerin kesintisiz çalışması için LocalStorage ve Firebase Firestore entegrasyonu.

---

## 🇬🇧 English Documentation

### ✨ Key Features

* **🏠 Central Landing Page:** Welcoming entry portal that introduces the platform and seamlessly routes visitors to Candidate Showcases or the Admin Panel.
* **🔒 Admin Authentication Guard:** Secure login mechanism preventing unauthorized access to the `/admin` dashboard.
* **🏛️ Kutlu Parti Brand Theme:** Fresh and mobile-responsive UI styled with sky blue & white tones, featuring the official party logo on the top left header.
* **🔗 Dynamic URL Engine (Slug Generator):** Converts candidate names into clean, SEO-friendly URLs by handling special Turkish characters (e.g., `/aday/ahmet-yilmaz`).
* **🖼️ Advanced Gallery & Cross-Origin Protection:** Optimized photo gallery supporting dynamic image arrays with built-in Referrer/CORS protection for third-party image hosts.
* **✉️ Interactive Contact & Email Module:** Integrates Web3Forms API via a floating action widget, allowing visitors to send direct email messages to candidates.
* **⚙️ Smart Admin Panel (`/admin`):**
  * **➕ Dynamic Campaign Promises & Gallery:** Unlimited additions and deletions (`+` / `🗑️`) for election promises, projects, and campaign photos instead of fixed limits.
  * **✏️ Edit Mode:** Pulls existing candidate data directly into the form for easy updating.
  * **🚀 Automated Link Generation:** Generates instant candidate website URLs with single-click copy and live preview options.
* **📱 Tabbed Showcase UI (`/aday/:slug`):** Displays candidate biography, election promises, gallery, and contact channels in clean, accessible tabs.
* **🔒 Secure Environment Setup (.env):** Protects API keys and environment variables using Vite configuration.
* **💾 Hybrid Data Persistence:** Seamless local testing and persistence powered by LocalStorage and Firebase Firestore.

---

## 🛠️ Teknolojiler / Built With

* **Core Framework:** React, Vite
* **Routing & Security:** React Router DOM, Auth Guard Protection
* **Styling & Icons:** Tailwind CSS, Responsive UI Design
* **Form & Mail Services:** Web3Forms API, Environment Variables (`.env`)
* **Backend & Storage:** Firebase (Firestore / Auth / Hosting), LocalStorage

---

## 📂 Proje Yapısı / Project Structure

```text
src/
├── pages/          # Uygulama sayfaları / Pages (Home, Login, Admin, AdayDetay)
├── components/     # Bileşenler / Components (ContactWidget vb.)
├── App.jsx         # Routing, State & Auth Guard Yönetimi / Routing, State & Auth Management
├── firebase.js     # Firebase konfigürasyonu / Firebase Config
└── main.jsx        # React başlangıç noktası / Entry Point
public/
└── logo.png        # Kutlu Parti logosu / Official Party Logo
.env                # Ortam değişkenleri (Git-ignored) / Environment variables