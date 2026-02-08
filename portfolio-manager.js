// ===============================================
// PORTFOLYO DİNAMİK İÇERİK YÖNETİMİ
// ===============================================
// NOT: Bu sürümde sadece Modal ve Admin Panel özellikleri aktif
// İçerik (experiences, certificates, projects) HTML'de statik kalıyor

class PortfolioManager {
    constructor() {
        this.currentLang = 'en';
        this.data = window.portfolioData || {};
        this.init();
    }

    init() {
        // Sayfa yüklendiğinde sadece modal ve admin paneli başlat
        document.addEventListener('DOMContentLoaded', () => {
            this.setupCertificateClickHandlers(); // Mevcut HTML sertifikalara tıklama özelliği ekle
            this.setupModal();
            this.checkAdminMode();
        });
    }

    // ============ SERTİFİKA TIKLAMA ÖZELLİĞİ ============
    setupCertificateClickHandlers() {
        // Mevcut HTML'deki tüm certificate-item'lara tıklama ekle
        const certItems = document.querySelectorAll('.certificate-item');
        certItems.forEach((item, index) => {
            // Her sertifika için görüntüle butonu ekle
            const certContent = item.querySelector('.cert-content');
            if (certContent && this.data.certificates && this.data.certificates[index]) {
                const cert = this.data.certificates[index];
                if (cert.image || cert.pdfLink) {
                    const viewBtnText = this.currentLang === 'tr' ? 'Sertifikayı Görüntüle' : 'View Certificate';
                    const btn = document.createElement('button');
                    btn.className = 'cert-view-btn';
                    btn.innerHTML = `📄 ${viewBtnText}`;
                    btn.dataset.certId = cert.id;
                    btn.addEventListener('click', () => this.openCertificateModal(cert.id));
                    certContent.appendChild(btn);
                }
            }
        });
    }

    // ============ MODAL YÖNETİMİ ============
    setupModal() {
        // Modal HTML'i body'ye ekle
        if (!document.getElementById('certificate-modal')) {
            const modalHTML = `
                <div id="certificate-modal" class="cert-modal">
                    <div class="cert-modal-content">
                        <span class="cert-modal-close">&times;</span>
                        <div class="cert-modal-body">
                            <img id="cert-modal-image" src="" alt="Certificate">
                            <iframe id="cert-modal-pdf" src="" style="display:none;"></iframe>
                            <div id="cert-modal-placeholder" class="cert-placeholder">
                                <p>📄 Sertifika görseli henüz yüklenmedi</p>
                                <small>data.js dosyasında bu sertifika için image veya pdfLink ekleyin</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        // Modal kapat butonları
        const modal = document.getElementById('certificate-modal');
        const closeBtn = document.querySelector('.cert-modal-close');

        if (closeBtn) {
            closeBtn.onclick = () => this.closeModal();
        }
        
        window.onclick = (e) => {
            if (e.target === modal) this.closeModal();
        };

        // ESC tuşu ile kapat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    setupCertificateButtons() {
        document.querySelectorAll('.cert-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const certId = e.target.dataset.certId;
                this.openCertificateModal(certId);
            });
        });
    }

    openCertificateModal(certId) {
        const cert = this.data.certificates.find(c => c.id === certId);
        if (!cert) return;

        const modal = document.getElementById('certificate-modal');
        const img = document.getElementById('cert-modal-image');
        const pdf = document.getElementById('cert-modal-pdf');
        const placeholder = document.getElementById('cert-modal-placeholder');

        // İçeriği sıfırla
        img.style.display = 'none';
        pdf.style.display = 'none';
        placeholder.style.display = 'none';

        if (cert.pdfLink) {
            pdf.src = cert.pdfLink;
            pdf.style.display = 'block';
        } else if (cert.image) {
            img.src = cert.image;
            img.alt = cert.title;
            img.style.display = 'block';
        } else {
            placeholder.style.display = 'flex';
        }

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Arka planı scroll etme
    }

    closeModal() {
        const modal = document.getElementById('certificate-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ============ ADMİN PANEL ============
    checkAdminMode() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true') {
            this.showAdminPanel();
        }
    }

    showAdminPanel() {
        if (document.getElementById('admin-panel')) return;

        const adminHTML = `
            <div id="admin-panel" class="admin-panel">
                <div class="admin-container">
                    <h2>🔧 İçerik Yönetimi Paneli</h2>
                    <p class="admin-info">Bu panel sadece geliştirme amaçlıdır. Oluşturulan JSON kodunu <code>data.js</code> dosyanıza ekleyin.</p>
                    
                    <div class="admin-tabs">
                        <button class="admin-tab active" data-tab="experience">Deneyim Ekle</button>
                        <button class="admin-tab" data-tab="certificate">Sertifika Ekle</button>
                        <button class="admin-tab" data-tab="project">Proje Ekle</button>
                    </div>

                    <div id="admin-content">
                        ${this.getExperienceForm()}
                    </div>

                    <div class="admin-output">
                        <h3>📋 Oluşturulan JSON Kodu:</h3>
                        <textarea id="admin-json-output" readonly></textarea>
                        <button id="admin-copy-btn" class="admin-btn">📋 Kopyala</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', adminHTML);
        this.setupAdminEvents();
    }

    setupAdminEvents() {
        // Tab değiştirme
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                
                const tabType = e.target.dataset.tab;
                const content = document.getElementById('admin-content');
                
                if (tabType === 'experience') content.innerHTML = this.getExperienceForm();
                else if (tabType === 'certificate') content.innerHTML = this.getCertificateForm();
                else if (tabType === 'project') content.innerHTML = this.getProjectForm();
                
                this.setupFormSubmit();
            });
        });

        this.setupFormSubmit();

        // Kopyala butonu
        document.getElementById('admin-copy-btn').addEventListener('click', () => {
            const textarea = document.getElementById('admin-json-output');
            textarea.select();
            document.execCommand('copy');
            alert('✅ JSON kodu kopyalandı!');
        });
    }

    setupFormSubmit() {
        const form = document.querySelector('.admin-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const activeTab = document.querySelector('.admin-tab.active').dataset.tab;
                
                let jsonOutput = '';
                if (activeTab === 'experience') jsonOutput = this.generateExperienceJSON(formData);
                else if (activeTab === 'certificate') jsonOutput = this.generateCertificateJSON(formData);
                else if (activeTab === 'project') jsonOutput = this.generateProjectJSON(formData);
                
                document.getElementById('admin-json-output').value = jsonOutput;
            });
        }
    }

    getExperienceForm() {
        return `
            <form class="admin-form">
                <div class="admin-field">
                    <label>Pozisyon (EN):</label>
                    <input type="text" name="title" required>
                </div>
                <div class="admin-field">
                    <label>Pozisyon (TR):</label>
                    <input type="text" name="titleTR" required>
                </div>
                <div class="admin-field">
                    <label>Şirket:</label>
                    <input type="text" name="company" required>
                </div>
                <div class="admin-field">
                    <label>Tarih (EN):</label>
                    <input type="text" name="date" placeholder="July 2025 - August 2025" required>
                </div>
                <div class="admin-field">
                    <label>Tarih (TR):</label>
                    <input type="text" name="dateTR" placeholder="Temmuz 2025 - Ağustos 2025" required>
                </div>
                <div class="admin-field">
                    <label>Başarılar (Her satır bir başarı - EN|TR ile ayırın):</label>
                    <textarea name="achievements" rows="5" placeholder="API Testing|API Testleri"></textarea>
                </div>
                <button type="submit" class="admin-btn">🚀 JSON Oluştur</button>
            </form>
        `;
    }

    getCertificateForm() {
        return `
            <form class="admin-form">
                <div class="admin-field">
                    <label>Sertifika Adı (EN):</label>
                    <input type="text" name="title" required>
                </div>
                <div class="admin-field">
                    <label>Sertifika Adı (TR):</label>
                    <input type="text" name="titleTR" required>
                </div>
                <div class="admin-field">
                    <label>Kurum (EN):</label>
                    <input type="text" name="organization" required>
                </div>
                <div class="admin-field">
                    <label>Kurum (TR):</label>
                    <input type="text" name="organizationTR" required>
                </div>
                <div class="admin-field">
                    <label>Tarih (EN):</label>
                    <input type="text" name="date" placeholder="May 2025" required>
                </div>
                <div class="admin-field">
                    <label>Tarih (TR):</label>
                    <input type="text" name="dateTR" placeholder="Mayıs 2025" required>
                </div>
                <div class="admin-field">
                    <label>Görsel/PDF Linki:</label>
                    <input type="url" name="image" placeholder="https://...">
                </div>
                <div class="admin-field">
                    <label>Kategori:</label>
                    <select name="category">
                        <option value="technology">Technology</option>
                        <option value="ai">AI</option>
                        <option value="security">Security</option>
                        <option value="cloud">Cloud</option>
                        <option value="web">Web</option>
                        <option value="data-science">Data Science</option>
                    </select>
                </div>
                <button type="submit" class="admin-btn">🚀 JSON Oluştur</button>
            </form>
        `;
    }

    getProjectForm() {
        return `
            <form class="admin-form">
                <div class="admin-field">
                    <label>Proje Adı (EN):</label>
                    <input type="text" name="title" required>
                </div>
                <div class="admin-field">
                    <label>Proje Adı (TR):</label>
                    <input type="text" name="titleTR" required>
                </div>
                <div class="admin-field">
                    <label>GitHub Linki:</label>
                    <input type="url" name="github" placeholder="https://github.com/...">
                </div>
                <div class="admin-field">
                    <label>Etiketler (virgülle ayırın):</label>
                    <input type="text" name="tags" placeholder="Python, Java, NLP">
                </div>
                <button type="submit" class="admin-btn">🚀 JSON Oluştur</button>
            </form>
        `;
    }

    generateExperienceJSON(formData) {
        const achievements = formData.get('achievements').split('\n').filter(a => a.trim());
        const achievementsArray = achievements.map(a => {
            const [en, tr] = a.split('|').map(s => s.trim());
            return `        { en: '${en}', tr: '${tr || en}' }`;
        }).join(',\n');

        return `{
    id: 'exp-${Date.now()}',
    title: '${formData.get('title')}',
    titleTR: '${formData.get('titleTR')}',
    company: '${formData.get('company')}',
    date: '${formData.get('date')}',
    dateTR: '${formData.get('dateTR')}',
    type: 'internship',
    achievements: [
${achievementsArray}
    ]
},`;
    }

    generateCertificateJSON(formData) {
        return `{
    id: 'cert-${Date.now()}',
    title: '${formData.get('title')}',
    titleTR: '${formData.get('titleTR')}',
    organization: '${formData.get('organization')}',
    organizationTR: '${formData.get('organizationTR')}',
    date: '${formData.get('date')}',
    dateTR: '${formData.get('dateTR')}',
    image: '${formData.get('image')}',
    pdfLink: '',
    category: '${formData.get('category')}'
},`;
    }

    generateProjectJSON(formData) {
        const tags = formData.get('tags').split(',').map(t => `'${t.trim()}'`).join(', ');
        return `{
    id: 'proj-${Date.now()}',
    title: '${formData.get('title')}',
    titleTR: '${formData.get('titleTR')}',
    tags: [${tags}],
    github: '${formData.get('github')}'
},`;
    }

    // Dil değiştirme için (şu an sadece buton dili günceller)
    setLanguage(lang) {
        this.currentLang = lang;
        // Sertifika butonlarının dilini güncelle
        const certBtns = document.querySelectorAll('.cert-view-btn');
        const btnText = lang === 'tr' ? 'Sertifikayı Görüntüle' : 'View Certificate';
        certBtns.forEach(btn => {
            btn.innerHTML = `📄 ${btnText}`;
        });
    }
}

// Portfolyo yöneticisini başlat
const portfolioManager = new PortfolioManager();

// Global erişim için
window.portfolioManager = portfolioManager;
