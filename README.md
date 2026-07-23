# 🚀 Kutlu Parti - Aday Tanıtım & Portfolyo Platformu
> **Candidate Presentation & Portfolio Platform**

[TR] Bu proje; **Kutlu Parti** adayları için dinamik, modern ve kurumsal kimliğe uygun kişiselleştirilmiş web siteleri oluşturmayı sağlayan React, Vite ve Tailwind CSS tabanlı bir yönetim ve vitrin platformudur.

[EN] This project is a React, Vite, and Tailwind CSS-based management and showcase platform designed to create dynamic, modern, and branded personalized websites for **Kutlu Parti** political candidates.

---

## 🇹🇷 Türkçe Documentation

### ✨ Öne Çıkan Özellikler

* **🏛️ Kutlu Parti Kurumsal Teması:** Gök mavisi ve beyaz tonlarıyla hazırlanan, sol üstte resmi parti logosunun yer aldığı ferah ve mobil uyumlu arayüz.
* **🔗 Dinamik URL Yapısı (Slug Engine):** Aday isimlerinden Türkçe karakterleri otomatik temizleyerek anında adaya özel, SEO dostu bağlantılar üretir (Örn: `/aday/ahmet-yilmaz`).
* **⚙️ Akıllı Yönetim Paneli (`/admin`):**
  * **➕ Dinamik Vaat & Galeri Modülü:** Sabit kısıtlamalar yerine `+` ve `🗑️` butonları ile sınırsız sayıda seçim vaadi/projesi ve saha görseli ekleme/silme imkanı.
  * **✏️ Düzenle Modu:** Mevcut aday verilerini forma çekerek güvenli güncelleme olanağı.
  * **🚀 Otomatik Link Üretimi:** Üretilen adaya özel web sitesi linkini anında kopyalama ve yeni sekmede önizleme.
* **📱 Sekmeli Vitrin Tasarımı (`/aday/:slug`):** Adayın profili, özgeçmişi, projeleri, fotoğraf galerisi ve iletişim bilgilerini şık sekmeler halinde sunan arayüz.
* **💾 Hibrit Veri Yönetimi:** Verilerin kesintisiz çalışması için LocalStorage ve Firebase Firestore entegrasyonu.

---

## 🇬🇧 English Documentation

### ✨ Key Features

* **🏛️ Kutlu Parti Brand Theme:** Fresh and mobile-responsive UI styled with sky blue & white tones, featuring the official party logo on the top left header.
* **🔗 Dynamic URL Engine (Slug Generator):** Converts candidate names into clean, SEO-friendly URLs by handling special Turkish characters (e.g., `/aday/ahmet-yilmaz`).
* **⚙️ Smart Admin Panel (`/admin`):**
  * **➕ Dynamic Campaign Promises & Gallery:** Unlimited additions and deletions (`+` / `🗑️`) for election promises, projects, and campaign photos instead of fixed limits.
  * **✏️ Edit Mode:** Pulls existing candidate data directly into the form for easy updating.
  * **🚀 Automated Link Generation:** Generates instant candidate website URLs with single-click copy and live preview options.
* **📱 Tabbed Showcase UI (`/aday/:slug`):** Displays candidate biography, election promises, gallery, and contact channels in clean, accessible tabs.
* **💾 Hybrid Data Persistence:** Seamless local testing and persistence powered by LocalStorage and Firebase Firestore.

---

## 🛠️ Teknolojiler / Built With

* **Core:** React, Vite
* **Styling:** Tailwind CSS, Responsive Design
* **Routing:** React Router DOM
* **Backend & Storage:** Firebase (Firestore / Hosting), LocalStorage

---

## 📂 Proje Yapısı / Project Structure

```text
src/
├── pages/          # Uygulama sayfaları / Pages (Home, Admin, AdayDetay)
├── App.jsx         # Routing ve State yönetimi / Routing & State Management
├── firebase.js     # Firebase konfigürasyonu / Firebase Config
└── main.jsx        # React başlangıç noktası / Entry Point
public/
└── logo.png        # Kutlu Parti logosu / Official Party Logo