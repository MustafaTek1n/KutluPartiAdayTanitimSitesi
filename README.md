# 🚀 Kutlu Parti — Candidate Presentation & Portfolio Showcase Platform
> **Aday Tanıtım & Portfolyo Platformu**

[EN] A full-stack React, Vite, Tailwind CSS, and Firebase-based management and showcase platform designed to create dynamic, modern, and branded personalized web portals for **Kutlu Parti** political candidates.

[TR] Bu proje; **Kutlu Parti** adayları için dinamik, modern ve kurumsal kimliğe uygun kişiselleştirilmiş web siteleri oluşturmayı sağlayan React, Vite, Tailwind CSS ve Firebase tabanlı full-stack bir yönetim ve vitrin platformudur.

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Firestore%20%26%20Auth-FFA000?logo=firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-v4-0B5B4E)

---

## 🇬🇧 English Documentation

### ✨ Key Features

* **🏠 Central Landing Page:** A welcoming entry point that introduces the platform and routes visitors to either a sample candidate showcase or the admin login.
* **🔒 Real Admin Authentication:** The `/admin` dashboard is protected by Firebase Authentication (email/password) with session persistence, login error handling, and a working sign-out flow that clears the form.
* **🏛️ Kutlu Parti Brand Theme:** A custom Tailwind CSS v4 color palette (`kutlu-teal`, `kutlu-orange`, `kutlu-ink`) derived directly from the official party logo, replacing generic default colors.
* **🔗 Dynamic URL Engine (Slug Generator):** Converts candidate names into clean, SEO-friendly URLs (e.g., `/aday/ahmet-yilmaz`) and automatically resolves duplicate-name collisions by appending `-2`, `-3`, etc.
* **🖼️ Real-Time Photo Gallery:** Reads the candidate's `galeri` array from Firestore, automatically includes the profile photo, and gracefully displays a fallback message for broken image links instead of crashing.
* **✉️ Interactive Contact Module:** A floating contact widget integrated with the Web3Forms API, allowing visitors to send direct email messages to candidates. Hidden on admin-facing routes.
* **☎️ Smart WhatsApp Links:** Candidate phone numbers are automatically normalized (regardless of format entered — with country code, leading zero, spaces, or dashes) into valid `wa.me` links.
* **⚙️ Live Admin Panel (`/admin`):**
  * **➕ Dynamic Fields:** Unlimited add/remove controls for campaign promises and gallery images instead of fixed slots.
  * **✏️ Edit Mode:** Pulls existing candidate data into the form for quick, safe updates.
  * **🚀 Instant Link Generation:** One-click copy and live preview of each candidate's generated URL.
* **📱 Tabbed Candidate Page (`/aday/:slug`):** Displays biography, campaign promises, photo gallery, and contact details in clean, accessible tabs.
* **🏠 Real Candidate Directory:** The landing page pulls every registered candidate from Firestore and displays them as clickable photo cards — no longer just a static template preview.
* **🎨 Custom Icon Set:** All emoji have been replaced with `lucide-react` icons across the admin panel, candidate pages, and contact widget for a more professional, consistent look.
* **🚫 404 Page:** Unmatched routes render a branded not-found page instead of a blank screen.
* **🔗 Open Graph & Favicon:** Custom favicon (party logo), proper page title, and Open Graph/Twitter card meta tags so shared links show a real preview on WhatsApp, Instagram, and X.
* **🔥 Firestore-Backed Persistence:** All candidate data lives in Firebase Firestore and updates in real time across every visitor's browser via `onSnapshot` — no more browser-local-only data.
* **🔒 Rule-Based Security:** Firestore Security Rules allow public read access (so candidate pages stay visible to everyone) while restricting write/delete operations to authenticated admin sessions only.

---

## 🇹🇷 Türkçe Dokümantasyon

### ✨ Öne Çıkan Özellikler

* **🏠 Merkezi Karşılama Sayfası:** Platformu tanıtan ve ziyaretçileri örnek bir aday vitrinine veya yönetici girişine yönlendiren karşılama sayfası.
* **🔒 Gerçek Yönetici Girişi:** `/admin` paneli, Firebase Authentication (e-posta/şifre) ile korunur; oturum kalıcılığı, hatalı giriş uyarıları ve çıkışta formu temizleyen bir çıkış akışı içerir.
* **🏛️ Kutlu Parti Kurumsal Teması:** Resmi parti logosundan türetilen özel bir Tailwind CSS v4 renk paleti (`kutlu-teal`, `kutlu-orange`, `kutlu-ink`) — jenerik varsayılan renkler yerine.
* **🔗 Dinamik URL Yapısı (Slug Motoru):** Aday isimlerinden SEO dostu bağlantılar üretir (`/aday/ahmet-yilmaz`) ve aynı isimli adaylarda oluşan çakışmaları `-2`, `-3` ekleyerek otomatik çözer.
* **🖼️ Gerçek Zamanlı Fotoğraf Galerisi:** Firestore'daki `galeri` dizisini okur, profil fotoğrafını otomatik olarak dahil eder ve bozuk görsel bağlantılarında sayfayı çökertmek yerine kullanıcı dostu bir uyarı gösterir.
* **✉️ İnteraktif İletişim Modülü:** Web3Forms API ile entegre, ziyaretçilerin doğrudan e-posta göndermesini sağlayan floating contact widget. Yönetici sayfalarında otomatik olarak gizlenir.
* **☎️ Akıllı WhatsApp Bağlantıları:** Aday telefon numaraları hangi formatta girilirse girilsin (ülke kodlu, başında sıfırlı, boşluklu veya tireli) otomatik olarak geçerli `wa.me` linkine dönüştürülür.
* **⚙️ Canlı Yönetim Paneli (`/admin`):**
  * **➕ Dinamik Alanlar:** Sabit sayıda alan yerine seçim vaatleri ve galeri görselleri için sınırsız ekleme/silme imkânı.
  * **✏️ Düzenle Modu:** Mevcut aday verilerini forma çekerek hızlı ve güvenli güncelleme sağlar.
  * **🚀 Anında Link Üretimi:** Üretilen aday linkinin tek tıkla kopyalanması ve anlık önizlemesi.
* **📱 Sekmeli Aday Sayfası (`/aday/:slug`):** Özgeçmiş, seçim vaatleri, fotoğraf galerisi ve iletişim bilgilerini düzenli sekmeler halinde sunar.
* **🏠 Gerçek Aday Dizini:** Anasayfa, Firestore'daki tüm kayıtlı adayları çekip tıklanabilir fotoğraf kartları halinde gösterir — artık sadece statik şablon önizlemesi değil.
* **🎨 Özel İkon Seti:** Yönetim paneli, aday sayfaları ve iletişim widget'ındaki tüm emoji'ler `lucide-react` ikonlarıyla değiştirildi, daha profesyonel ve tutarlı bir görünüm.
* **🚫 404 Sayfası:** Eşleşmeyen adreslerde boş ekran yerine markaya uygun bir "sayfa bulunamadı" ekranı gösterilir.
* **🔗 Open Graph & Favicon:** Özel favicon (parti logosu), doğru sayfa başlığı ve Open Graph/Twitter kart etiketleri sayesinde WhatsApp, Instagram ve X'te paylaşılan linkler gerçek bir önizleme gösterir.
* **🔥 Firestore Tabanlı Kalıcılık:** Tüm aday verileri Firebase Firestore'da tutulur ve `onSnapshot` sayesinde her ziyaretçinin tarayıcısında gerçek zamanlı güncellenir — artık veri yalnızca tek bir tarayıcıda kalmaz.
* **🔒 Kural Tabanlı Güvenlik:** Firestore Güvenlik Kuralları herkese açık okumaya izin verirken (aday sayfaları herkese görünür kalır), yazma/silme işlemlerini yalnızca giriş yapmış yönetici oturumlarıyla sınırlar.

---

## 🛠️ Built With / Teknolojiler

| Layer / Katman | Technology / Teknoloji |
|---|---|
| Core Framework | React, Vite |
| Routing & Security | React Router DOM, Firebase Auth Guard |
| Styling | Tailwind CSS v4 (`@theme` custom palette) |
| Icons | lucide-react |
| Forms & Email | Web3Forms API |
| Backend & Storage | Firebase (Firestore + Authentication) |

---

## 📂 Project Structure / Proje Yapısı

```text
src/
├── pages/
│   ├── Home.jsx        # Landing page ("/")
│   ├── Admin.jsx        # Admin dashboard ("/admin", auth-protected)
│   ├── AdayDetay.jsx    # Candidate page ("/aday", "/aday/:slug")
│   └── NotFound.jsx     # 404 page (catch-all "*" route)
├── App.jsx              # Routing, Firestore listener, global state
├── firebase.js          # Firebase config + Firestore/Auth initialization
└── index.css            # Tailwind @theme brand color palette
public/
└── logo.png              # Official Kutlu Parti logo
.env                       # Environment variables (Git-ignored)
```

---

## ⚙️ Setup / Kurulum

```bash
# Clone the repository / Depoyu klonlayın
git clone https://github.com/MustafaTek1n/KutluPartiAdayTanitimSitesi.git
cd KutluPartiAdayTanitimSitesi

# Install dependencies / Bağımlılıkları kurun
npm install

# Start dev server / Geliştirme sunucusunu başlatın
npm run dev

# Production build / Üretim derlemesi
npm run build
```

### Environment Variables / Ortam Değişkenleri

Create a `.env` file in the project root / Proje kökünde bir `.env` dosyası oluşturun:

```
VITE_WEB3FORMS_KEY=your_web3forms_public_key
```

> This key is embedded in the client bundle by design — Web3Forms operates on a public-key model. / Bu anahtar tasarım gereği istemci paketine gömülür; Web3Forms public-key modeliyle çalışır.

---

## 🔥 Firebase Setup / Firebase Yapılandırması

1. Create a project at [Firebase Console](https://console.firebase.google.com) / [Firebase Console](https://console.firebase.google.com)'da yeni bir proje oluşturun
2. Enable **Firestore Database** under Build / **Build → Firestore Database**'i etkinleştirin
3. Enable **Email/Password** under Build → Authentication and create your admin account / **Build → Authentication**'dan e-posta/şifre sağlayıcısını açıp admin hesabınızı oluşturun
4. Copy your web app's `firebaseConfig` into `src/firebase.js` / Web uygulamanızın `firebaseConfig` bilgisini `src/firebase.js` içine yapıştırın

> Firebase client config values (`apiKey`, `projectId`, etc.) are not secrets — they're designed to be public. Real access control comes from the Firestore Rules below and Firebase Authentication. / Firebase istemci config değerleri gizli anahtar değildir, herkese açık olacak şekilde tasarlanmıştır. Gerçek erişim kontrolü aşağıdaki Firestore Rules ve Authentication ile sağlanır.

## 🔒 Firestore Security Rules / Firestore Güvenlik Kuralları

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /adaylar/{adayId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 🖼️ Image Hosting Notes / Görsel Yükleme Notları

Gallery and profile fields require a **direct image file link** — opening the link in a new tab should show only the image, nothing else. / Galeri ve profil alanları **doğrudan görsel dosyası linki** gerektirir — link yeni sekmede açıldığında yalnızca resmin kendisi görünmelidir.

✅ Recommended / Önerilen: [imgbb.com](https://imgbb.com), [imgur.com](https://imgur.com)
❌ Won't work / Çalışmaz: Google Drive share links, social media post links, any webpage link

---

## ⚠️ Known Limitations / Bilinen Sınırlamalar

- Designed for a single-admin scenario; no multi-role permission system / Tek admin senaryosu için tasarlanmıştır, çoklu rol yönetimi yoktur
- Firebase project runs on the free **Spark** plan quotas / Firebase projesi ücretsiz **Spark** planı kotalarına tabidir

## 🗺️ Roadmap / Yol Haritası

- [ ] Public deployment (Vercel) / Canlıya alma (Vercel)
- [ ] Direct image upload via Firebase Storage instead of external URL hosting / Harici URL yerine Firebase Storage üzerinden doğrudan görsel yükleme

---

<p align="center">Built for Kutlu Parti.</p>