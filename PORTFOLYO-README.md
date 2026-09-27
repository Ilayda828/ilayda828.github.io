# 🚀 Portfolyo Websitesi - Data-Driven Architecture

## 📋 İçindekiler
1. [Genel Bakış](#genel-bakış)
2. [Dosya Yapısı](#dosya-yapısı)
3. [Özellikler](#özellikler)
4. [Kurulum](#kurulum)
5. [İçerik Yönetimi](#içerik-yönetimi)
6. [Admin Paneli Kullanımı](#admin-paneli-kullanımı)
7. [Sertifika Modal Sistemi](#sertifika-modal-sistemi)
8. [Özelleştirme](#özelleştirme)

---

## 🎯 Genel Bakış

Bu portfolyo websitesi, **data-driven (veri odaklı)** bir mimari ile yeniden tasarlanmıştır. Tüm içerik JSON formatında tutulur ve dinamik olarak render edilir. Bu sayede:

- ✅ Koddan bağımsız içerik güncellemeleri
- ✅ Çift dilli (TR/EN) içerik desteği
- ✅ Modal ile sertifika görüntüleme
- ✅ Admin paneli ile yeni içerik ekleme simülasyonu
- ✅ Kolay bakım ve genişletilebilirlik

---

## 📂 Dosya Yapısı

```
Desktop/
│
├── <!DOCTYPE html>.css          # Ana HTML dosyası (tüm statik içerik)
├── data.js                      # İçerik verisi (JSON formatında)
├── portfolio-manager.js         # Dinamik içerik yönetimi
├── portfolio-styles-addon.css   # Modal ve admin panel stilleri
└── PORTFOLYO-README.md          # Bu dosya
```

### Dosya Açıklamaları

| Dosya | Açıklama |
|-------|----------|
| `<!DOCTYPE html>.css` | Ana HTML/CSS/JS dosyası. Statik layout ve temel JavaScript animasyonlarını içerir. |
| `data.js` | Tüm deneyimler, sertifikalar ve projelerin JSON formatındaki verisi. |
| `portfolio-manager.js` | `data.js`'deki verileri alıp HTML'e render eden JavaScript sınıfı. Modal ve admin paneli yönetir. |
| `portfolio-styles-addon.css` | Sertifika modal ve admin paneli için ek CSS stilleri. |

---

## ✨ Özellikler

### 1. **Data-Driven Architecture**
- Tüm içerik `data.js` dosyasında JSON formatında
- HTML'de hardcoded içerik yok
- Dinamik rendering ile performans

### 2. **Çift Dilli Destek**
- Türkçe ve İngilizce tam destek
- Her içerik için EN/TR alanları
- Dil değiştirici ile anında güncelleme

### 3. **Sertifika Modal Sistemi**
- Sertifikalara tıklandığında tam ekran modal açılır
- PDF ve resim görüntüleme desteği
- ESC tuşu ve dış tıklama ile kapatma

### 4. **Admin Paneli Simülasyonu**
- `?admin=true` URL parametresi ile erişim
- Form doldurarak yeni içerik JSON'u oluşturma
- Copy-paste ile `data.js`'e ekleme

### 5. **Modern Animasyonlar**
- Particles.js ağ animasyonu
- Scroll-based fade-in efektleri
- Gradient animasyonları
- 3D card tilt efektleri

---

## 🛠️ Kurulum

### Gereksinimler
- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (CDN kaynakları için)

### Adımlar

1. **Dosyaları aynı klasörde tutun:**
   ```
   Desktop/
   ├── <!DOCTYPE html>.css
   ├── data.js
   ├── portfolio-manager.js
   └── portfolio-styles-addon.css
   ```

2. **HTML dosyasını tarayıcıda açın:**
   - `<!DOCTYPE html>.css` dosyasına çift tıklayın
   - VEYA sağ tık → "Birlikte Aç" → Tarayıcı seçin

3. **Doğrulama:**
   - Sayfa yüklendiğinde deneyimler, sertifikalar ve projeler görünmeli
   - Dil değiştirici (TR/EN) çalışmalı
   - Sertifika kartlarında "Sertifikayı Görüntüle" butonu olmalı

---

## 📝 İçerik Yönetimi

### data.js Yapısı

`data.js` dosyası 3 ana bölüm içerir:

```javascript
const portfolioData = {
    experiences: [...],    // Deneyimler
    certificates: [...],   // Sertifikalar
    projects: [...]        // Projeler
};
```

---

### 1. Deneyim Ekleme

```javascript
{
    id: 'exp-2',  // Benzersiz ID
    title: 'Software Engineer Intern',
    titleTR: 'Yazılım Mühendisi Stajyeri',
    company: 'Tech Company Inc.',
    date: 'June 2025 - August 2025',
    dateTR: 'Haziran 2025 - Ağustos 2025',
    type: 'internship',
    achievements: [
        {
            en: '<strong>Backend Development:</strong> Developed RESTful APIs using Node.js',
            tr: '<strong>Backend Geliştirme:</strong> Node.js kullanarak RESTful API\'ler geliştirdim'
        },
        // Diğer başarılar...
    ]
}
```

**Önemli Noktalar:**
- `id` benzersiz olmalı (örn: `exp-1`, `exp-2`)
- `achievements` array içinde her başarı `en` ve `tr` alanlarına sahip
- HTML etiketleri kullanılabilir (`<strong>`, `<em>`)

---

### 2. Sertifika Ekleme

```javascript
{
    id: 'cert-9',
    title: 'AWS Certified Developer',
    titleTR: 'AWS Sertifikalı Geliştirici',
    organization: 'Amazon Web Services',
    organizationTR: 'Amazon Web Services',
    date: 'Jan 2025',
    dateTR: 'Ocak 2025',
    image: 'https://example.com/cert.jpg',  // Sertifika görseli URL
    pdfLink: '',  // PDF linki (opsiyonel)
    category: 'cloud'  // technology, ai, security, cloud, web, data-science
}
```

**Sertifika Görseli Ekleme:**
- `image` alanına direkt URL ekleyin (örn: Imgur, Google Drive public link)
- VEYA dosyayı aynı klasöre koyup `image: 'cert-aws.jpg'` şeklinde kullanın
- `pdfLink` kullanırsanız PDF viewer açılır

---

### 3. Proje Ekleme

```javascript
{
    id: 'proj-10',
    title: 'E-Commerce Platform',
    titleTR: 'E-Ticaret Platformu',
    type: 'Personal',
    typeTR: 'Kişisel',
    year: 'Year 4 - 2025',
    yearTR: '4. Yıl - 2025',
    course: 'Web Development',  // Opsiyonel
    courseTR: 'Web Geliştirme',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    description: {
        en: 'Full-stack e-commerce platform with payment integration',
        tr: 'Ödeme entegrasyonlu full-stack e-ticaret platformu'
    },
    highlights: {
        title: { en: 'Key Features:', tr: 'Ana Özellikler:' },
        items: [
            { 
                en: 'User authentication with JWT', 
                tr: 'JWT ile kullanıcı kimlik doğrulama' 
            },
            { 
                en: 'Shopping cart and checkout system', 
                tr: 'Alışveriş sepeti ve ödeme sistemi' 
            }
        ]
    },
    github: 'https://github.com/Ilayda828/ecommerce-platform',
    screenshots: ['shop-home.jpg', 'shop-cart.jpg']
}
```

**Önemli Noktalar:**
- `tags` dizisi proje teknolojilerini gösterir
- `highlights.items` her bir özellik için EN/TR açıklama içerir
- `github` linki olmadan da proje kartı oluşturulur

---

## 🔐 Admin Paneli Kullanımı

### Erişim

1. URL'nin sonuna `?admin=true` ekleyin:
   ```
   file:///Users/ilayda/Desktop/<!DOCTYPE%20html>.css?admin=true
   ```

2. Sayfa alt kısmında admin paneli görünecek.

### Kullanım

1. **Tab Seçimi:**
   - "Deneyim Ekle"
   - "Sertifika Ekle"
   - "Proje Ekle"

2. **Form Doldurma:**
   - Tüm alanları doldurun
   - EN ve TR versiyonlarını ekleyin
   - "🚀 JSON Oluştur" butonuna tıklayın

3. **JSON Kopyalama:**
   - Oluşturulan JSON kodu text area'da görünür
   - "📋 Kopyala" butonuna tıklayın
   - `data.js` dosyasını açın
   - İlgili array'e (experiences/certificates/projects) yapıştırın

### Örnek JSON Output

```javascript
{
    id: 'cert-1706543210123',
    title: 'Python Advanced Course',
    titleTR: 'Python İleri Seviye Kursu',
    organization: 'Coursera',
    organizationTR: 'Coursera',
    date: 'Jan 2025',
    dateTR: 'Ocak 2025',
    image: 'https://example.com/cert.jpg',
    pdfLink: '',
    category: 'technology'
},
```

**⚠️ Dikkat:** Admin paneli sadece JSON kodu oluşturur. Gerçek veritabanı olmadığı için manuel olarak `data.js`'e eklemeniz gerekir.

---

## 🖼️ Sertifika Modal Sistemi

### Nasıl Çalışır?

1. Sertifika kartında **"Sertifikayı Görüntüle"** butonu görünür (eğer `image` veya `pdfLink` varsa)
2. Butona tıklandığında tam ekran modal açılır
3. Sertifika görseli veya PDF görüntülenir
4. Modal kapatma yöntemleri:
   - ✕ butonuna tıklama
   - Modal dışına tıklama
   - ESC tuşuna basma

### Sertifika Görseli Ekleme Yöntemleri

#### 1. Online URL (Önerilen)

```javascript
image: 'https://i.imgur.com/abc123.jpg'
```

**Önerilen platformlar:**
- [Imgur](https://imgur.com) - Ücretsiz resim hosting
- Google Drive (public link)
- GitHub repository'niz

#### 2. Yerel Dosya

```javascript
image: 'certificates/aws-cert.jpg'
```

Dosya yapısı:
```
Desktop/
├── <!DOCTYPE html>.css
├── data.js
└── certificates/
    ├── aws-cert.jpg
    ├── python-cert.jpg
    └── ...
```

#### 3. PDF Dosyası

```javascript
pdfLink: 'certificates/aws-cert.pdf'
```

PDF viewer ile açılır (bazı tarayıcılarda indirilme gerekebilir).

---

## 🎨 Özelleştirme

### Renk Teması Değiştirme

`<!DOCTYPE html>.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
    --primary: #00d4ff;      /* Ana renk (Cyan) */
    --secondary: #00ff88;    /* İkinci renk (Green) */
    --accent: #ff006e;       /* Vurgu rengi (Pink) */
    --purple: #8b5cf6;       /* Mor */
    --dark: #0a0e27;         /* Arka plan */
}
```

### Particles.js Ayarları

`<!DOCTYPE html>.css` dosyasında `particlesJS` konfigürasyonunu bulun:

```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },  // Parçacık sayısı
        color: { value: '#00d4ff' },  // Parçacık rengi
        // ...
    }
});
```

### Modal Stil Düzenleme

`portfolio-styles-addon.css` dosyasında:

```css
.cert-modal-content {
    background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
    border: 2px solid var(--primary);
    border-radius: 15px;
    /* Özelleştirmeler buraya */
}
```

---

## 🚀 Gelişmiş Kullanım

### Yeni Proje Kategorisi Ekleme

1. `data.js` içinde yeni kategori ekleyin:
   ```javascript
   type: 'Open Source',
   typeTR: 'Açık Kaynak'
   ```

2. İsterseniz CSS'de kategori rengi tanımlayın:
   ```css
   .project-type[data-type="Open Source"] {
       background: linear-gradient(135deg, #ff6b6b, #ff8787);
   }
   ```

### İstatistik Sayaçlarını Güncelleme

`<!DOCTYPE html>.css` içinde Stats bölümünü bulun:

```html
<div class="stat-item fade-in">
    <div class="stat-number">25+</div>
    <div class="stat-label">Projects</div>
</div>
```

Sayıları güncelleyin (animasyon otomatik çalışır).

### Yeni Sosyal Medya Linkleri

Footer bölümüne yeni link ekleyin:

```html
<a href="https://twitter.com/username" target="_blank" class="social-link">
    <svg><!-- Twitter Icon SVG --></svg>
    Twitter
</a>
```

---

## 🐛 Sorun Giderme

### Problem: İçerik Görünmüyor

**Çözüm:**
1. Tarayıcı konsolunu açın (F12)
2. Hata mesajlarını kontrol edin
3. `data.js` dosyasının yüklendiğinden emin olun
4. `portfolio-manager.js` dosyasının yüklendiğinden emin olun

### Problem: Dil Değiştirme Çalışmıyor

**Çözüm:**
1. `<!DOCTYPE html>.css` dosyasında `translations` objesini kontrol edin
2. `updateLanguage()` fonksiyonuna `portfolioManager.setLanguage()` çağrısı eklendiğinden emin olun

### Problem: Sertifika Görseli Açılmıyor

**Çözüm:**
1. `data.js` içinde `image` veya `pdfLink` alanının dolu olduğunu kontrol edin
2. URL'nin doğru ve erişilebilir olduğundan emin olun
3. Tarayıcı konsolunda CORS hatası varsa, görseli başka platforma yükleyin

### Problem: Admin Paneli Görünmüyor

**Çözüm:**
1. URL'de `?admin=true` parametresi var mı kontrol edin
2. `portfolio-manager.js` dosyasının yüklendiğinden emin olun
3. Tarayıcı konsolunda JavaScript hataları var mı bakın

---

## 📚 Kaynaklar

- [Particles.js Documentation](https://vincentgarreau.com/particles.js/)
- [Devicon Icons](https://devicon.dev/)
- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📞 Destek

Sorularınız için:
- **Email:** ilayda.ilhan0@gmail.com
- **GitHub:** [@Ilayda828](https://github.com/Ilayda828)
- **LinkedIn:** [İlayda İlhan](https://linkedin.com/in/ilayda-ilhan8b1451284)

---

## 📄 Lisans

Bu proje MIT lisansı altındadır. İstediğiniz gibi kullanabilir ve değiştirebilirsiniz.

---

**Son Güncelleme:** Şubat 2025  
**Versiyon:** 2.0 - Data-Driven Architecture

---

## ✅ Checklist

Portfolyonuzu yayınlamadan önce:

- [ ] Tüm kişisel bilgiler güncellenmiş mi?
- [ ] GitHub linkleri doğru mu?
- [ ] Sertifika görselleri yüklenmiş mi?
- [ ] Proje açıklamaları anlamlı mı?
- [ ] TR ve EN çeviriler eksiksiz mi?
- [ ] Mobil görünüm test edilmiş mi?
- [ ] Tüm linkler çalışıyor mu?
- [ ] Tarayıcı konsolunda hata yok mu?

---

🎉 **Tebrikler!** Portfolyo websiteniz artık tamamen data-driven ve profesyonel bir yapıya sahip!
