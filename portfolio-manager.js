// ===============================================
// PORTFOLYO DİNAMİK İÇERİK YÖNETİMİ
// ===============================================

class PortfolioManager {
    constructor() {
        this.currentLang = 'en';
        this.data = window.portfolioData || {};
        this.init();
    }

    init() {
        // Sayfa yüklendiğinde içeriği render et
        document.addEventListener('DOMContentLoaded', () => {
            this.renderExperiences();
            this.renderCertificates();
            this.renderProjects();
            this.setupModal();
            this.checkAdminMode();
        });
    }

    // ============ DENEYİMLERİ RENDER ET ============
    renderExperiences() {
        const container = document.querySelector('.timeline');
        if (!container || !this.data.experiences) return;

        container.innerHTML = ''; // Mevcut içeriği temizle

        this.data.experiences.forEach(exp => {
            const experienceHTML = this.createExperienceCard(exp);
            container.innerHTML += experienceHTML;
        });
    }

    createExperienceCard(exp) {
        const title = this.currentLang === 'tr' ? (exp.titleTR || exp.title) : exp.title;
        const date = this.currentLang === 'tr' ? (exp.dateTR || exp.date) : exp.date;
        
        const achievementsHTML = exp.achievements.map(achievement => {
            const text = this.currentLang === 'tr' ? achievement.tr : achievement.en;
            return `<li>${text}</li>`;
        }).join('');

        return `
            <div class="timeline-item fade-in" data-id="${exp.id}">
                <div class="job-header">
                    <div>
                        <div class="job-title">${title}</div>
                        <div class="company">${exp.company}</div>
                    </div>
                    <div class="date">${date}</div>
                </div>
                <ul>
                    ${achievementsHTML}
                </ul>
            </div>
        `;
    }

    // ============ SERTİFİKALARI RENDER ET ============
    renderCertificates() {
        const container = document.querySelector('.certificates-grid');
        if (!container || !this.data.certificates) return;

        container.innerHTML = ''; // Mevcut içeriği temizle

        this.data.certificates.forEach(cert => {
            const certificateHTML = this.createCertificateCard(cert);
            container.innerHTML += certificateHTML;
        });

        // Sertifika butonlarına event listener ekle
        this.setupCertificateButtons();
    }

    createCertificateCard(cert) {
        const title = this.currentLang === 'tr' ? (cert.titleTR || cert.title) : cert.title;
        const org = this.currentLang === 'tr' ? (cert.organizationTR || cert.organization) : cert.organization;
        const date = this.currentLang === 'tr' ? (cert.dateTR || cert.date) : cert.date;
        const viewBtnText = this.currentLang === 'tr' ? 'Sertifikayı Görüntüle' : 'View Certificate';

        return `
            <div class="certificate-item fade-in" data-id="${cert.id}">
                <div class="cert-content">
                    <div class="cert-title">${title}</div>
                    <div class="cert-org">${org}</div>
                    ${cert.image || cert.pdfLink ? `
                        <button class="cert-view-btn" data-cert-id="${cert.id}">
                            📄 ${viewBtnText}
                        </button>
                    ` : ''}
                </div>
                <div class="cert-date">${date}</div>
            </div>
        `;
    }

    // ============ PROJELERİ RENDER ET ============
    renderProjects() {
        const container = document.querySelector('.projects-grid');
        if (!container || !this.data.projects) return;

        container.innerHTML = ''; // Mevcut içeriği temizle

        this.data.projects.forEach(proj => {
            const projectHTML = this.createProjectCard(proj);
            container.innerHTML += projectHTML;
        });
    }

    createProjectCard(proj) {
        const title = this.currentLang === 'tr' ? (proj.titleTR || proj.title) : proj.title;
        const type = this.currentLang === 'tr' ? (proj.typeTR || proj.type) : proj.type;
        const year = this.currentLang === 'tr' ? (proj.yearTR || proj.year) : proj.year;
        const course = this.currentLang === 'tr' ? (proj.courseTR || proj.course) : proj.course;
        const description = this.currentLang === 'tr' ? proj.description.tr : proj.description.en;
        const highlightsTitle = this.currentLang === 'tr' ? proj.highlights.title.tr : proj.highlights.title.en;
        const sourceBtnText = this.currentLang === 'tr' ? 'Kaynak Kodunu Görüntüle' : 'View Source Code';
        
        const tagsHTML = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        const highlightsHTML = proj.highlights.items.map(item => {
            const text = this.currentLang === 'tr' ? item.tr : item.en;
            return `<li>${text}</li>`;
        }).join('');

        return `
            <div class="project-card fade-in" data-id="${proj.id}">
                <div class="project-header">
                    <div class="project-meta">
                        <span class="project-type">${type}</span>
                        <span class="project-year">${year}</span>
                    </div>
                    <h3 class="project-title">${title}</h3>
                    ${course ? `<p class="project-course">${course}</p>` : ''}
                </div>
                <div class="project-body">
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-description">
                        ${description}
                    </div>
                    <div class="project-highlights">
                        <h4>${highlightsTitle}</h4>
                        <ul>
                            ${highlightsHTML}
                        </ul>
                    </div>
                </div>
                ${proj.github ? `
                    <div class="project-footer">
                        <a href="${proj.github}" target="_blank" class="project-btn">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            ${sourceBtnText}
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
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

        closeBtn.onclick = () => this.closeModal();
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

    // Dil değiştirme için
    setLanguage(lang) {
        this.currentLang = lang;
        this.renderExperiences();
        this.renderCertificates();
        this.renderProjects();
    }
}

// Portfolyo yöneticisini başlat
const portfolioManager = new PortfolioManager();

// Global erişim için
window.portfolioManager = portfolioManager;
