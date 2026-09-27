// ===============================================
// PORTFOLIO CORE CONTROLLER & ANIMATION ENGINE
// ===============================================

class AnimationController {
    constructor() {
        this.typingInterval = null;
    }

    moveElevator(targetPos, isGoingUp, onCompleteCallback) {
        const elevatorCar = document.getElementById("elevator-car");
        const stage = document.getElementById("tower-stage");

        if (elevatorCar && window.gsap) {
            gsap.to(elevatorCar, {
                top: targetPos,
                duration: 0.65,
                ease: "power3.inOut"
            });
        }

        if (stage && window.gsap) {
            gsap.to(stage, {
                y: isGoingUp ? -35 : 35,
                opacity: 0,
                duration: 0.22,
                ease: "power2.in",
                onComplete: () => {
                    if (onCompleteCallback) onCompleteCallback();

                    gsap.fromTo(stage,
                        { y: isGoingUp ? 35 : -35, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
                    );
                }
            });
        } else if (onCompleteCallback) {
            onCompleteCallback();
        }
    }

    apply3DTilt() {
        document.querySelectorAll(".tilt-card").forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            });
        });
    }

    startTypingHero(phrases) {
        const el = document.getElementById("typing-hero");
        if (!el || !phrases.length) return;

        if (this.typingInterval) clearTimeout(this.typingInterval);

        let pIndex = 0;
        let cIndex = 0;
        let isDeleting = false;

        const loop = () => {
            const current = phrases[pIndex];
            el.textContent = isDeleting
                ? current.substring(0, cIndex--)
                : current.substring(0, cIndex++);

            let speed = isDeleting ? 30 : 65;

            if (!isDeleting && cIndex === current.length + 1) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && cIndex === 0) {
                isDeleting = false;
                pIndex = (pIndex + 1) % phrases.length;
                speed = 350;
            }

            this.typingInterval = setTimeout(loop, speed);
        };

        loop();
    }

    initScrollProgress() {
        const bar = document.getElementById("scroll-progress");
        if (!bar) return;

        window.addEventListener("scroll", () => {
            const top = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            bar.style.width = (top / height) * 100 + "%";
        });
    }
}


class PortfolioManager {
    constructor() {
        this.currentLang = "tr"; // Başlangıç dili Türkçe
        this.currentFloor = "favorites"; // Başlangıç: FAVORİLER
        this.animator = new AnimationController();

        this.translations = {
            en: {
                navAbout: "About",
                navExperience: "Experience",
                navTower: "Tower of Growth",
                navSkills: "Skills",
                navCertificates: "Certificates",
                navCapstone: "Capstone Project",
                heroBadge: "4th Year • Open to Engineering Opportunities",
                heroGreeting: "Hello, I am",
                avatarSubtitle: "Computer Engineering Senior",
                aboutBadge: "Profile & Engineering Vision",
                aboutTitle: "About Me",
                researchTitle: "Core Specializations & Focus",
                contactCardTitle: "Contact Information",
                contactEmailLabel: "Email",
                contactLocationLabel: "Location",
                contactLocation: "Istanbul, Turkey",
                contactEduLabel: "Education",
                contactUniv: "Marmara University",
                contactDept: "Computer Engineering (B.Sc.)",
                contactGrade: "Senior Year (2023 - 2027) • Expected: 2027",
                contactLinkedIn: "LinkedIn Profile",
                towerBadge: "Interactive Career Elevator",
                towerHeading: "Tower of Growth",
                towerDescription: "Click floor buttons; watch the mechanical elevator cabin glide and open the corresponding academic project vault with physics animations.",
                elevatorFloorLabel: "Current Floor",
                elevatorSpeedLabel: "Engine",
                tagFeatured: "FEATURED",
                floorFav: "★ Featured Projects",
                floor4: "Floor 4: Senior & Capstone",
                floor3: "Floor 3: RAG & Distributed Systems",
                floor2: "Floor 2: Systems Architecture & C",
                floor1: "Floor 1: Algorithms & Fundamentals",
                floorPrefix: "Floor",
                expBadge: "Career History",
                expHeading: "Professional Experience",
                skillsBadge: "Tech Stack",
                skillsHeading: "Technical Proficiencies",
                certBadge: "Credentials",
                certHeading: "Certificates & Training",
                capstoneBadge: "Senior Graduation Project • 2026 - 2027",
                capstoneHeading: "Senior Capstone Project",
                capstoneDescription: "End-to-end artificial intelligence and heterogeneous graph analytics system developed for credit card fraud detection as our graduation engineering project.",
                capstoneCategory: "Marmara University CSE • Graduation Thesis",
                capstoneP1: "Traditional fraud detection evaluates transactions individually based on amount, time, and location. However, organized fraud activities involve interconnected entities such as users, bank accounts, cards, devices, and IP addresses.",
                capstoneP2: "In this capstone project, we model financial transaction logs as a Heterogeneous Graph. Using GNN-based Graph Autoencoder architectures, we extract low-dimensional embeddings and perform link prediction to detect suspicious, coordinated fraud rings at an early stage.",
                capCol1Title: "01. Heterogeneous Graph",
                capCol1Desc: "Transforming transactional records into multi-entity graphs (User-Card-Device-IP-Merchant) to capture relational fraud patterns.",
                capCol2Title: "02. Graph Autoencoder",
                capCol2Desc: "Learning low-dimensional node embeddings with dynamic negative sampling to predict hidden suspicious links.",
                capCol3Title: "03. Interactive Visualizer",
                capCol3Desc: "Real-time investigation dashboard built with FastAPI, PostgreSQL, and Cytoscape.js for graph exploration.",
                sourceCodeBtn: "View Source Code",
                liveDemoBtn: "Live Website Demo",
                verifyLinkedInBtn: "Verify on LinkedIn",
                noProjectsFloor: "Elevator reached floor. No projects currently deployed here.",
                typingPhrases: [
                    "Computer Engineering Senior",
                    "RAG & Agentic AI Developer",
                    "Test Automation & Systems Engineer"
                ],
                aboutParagraphs: [
                    "I am a senior Computer Engineering student at Marmara University, building high-performance software across the entire computing stack—from low-level microprocessor architectures to intelligent AI agent pipelines.",
                    "Throughout my academic journey and enterprise internships (Kafein Technology Solutions, Digital Garden Technology), I have developed end-to-end test automation frameworks using Python and Playwright (POM), designed 18-bit and MIPS processors with custom instruction sets, and engineered production-grade RAG and full-stack platforms.",
                    "My current senior capstone research focuses on detecting organized financial fraud rings using Heterogeneous Graph Neural Networks (GNN) and Graph Autoencoders in PyTorch Geometric, bridging theoretical computer science with applied machine learning.",
                    "I am actively seeking software engineering, AI/data engineering, or test automation opportunities where I can contribute scalable, resilient, and well-tested solutions to high-impact projects."
                ]
            },
            tr: {
                navAbout: "Hakkımda",
                navExperience: "Deneyim",
                navTower: "Kariyer Kulesi",
                navSkills: "Yetenekler",
                navCertificates: "Sertifikalar",
                navCapstone: "Bitirme Projesi",
                heroBadge: "4. Sınıf • Mühendislik & Yazılım Fırsatlarına Açık",
                heroGreeting: "Merhaba, Ben",
                avatarSubtitle: "Bilgisayar Mühendisi Adayı",
                aboutBadge: "Profil & Mühendislik Vizyonu",
                aboutTitle: "Hakkımda",
                researchTitle: "Temel Uzmanlık & İlgi Alanları",
                contactCardTitle: "İletişim Bilgileri",
                contactEmailLabel: "E-Posta",
                contactLocationLabel: "Konum",
                contactLocation: "İstanbul, Türkiye",
                contactEduLabel: "Eğitim",
                contactUniv: "Marmara Üniversitesi",
                contactDept: "Bilgisayar Mühendisliği (Lisans)",
                contactGrade: "4. Sınıf (2023 - 2027) • Mezuniyet: 2027",
                contactLinkedIn: "LinkedIn Profili",
                towerBadge: "İnteraktif Kariyer Asansörü",
                towerHeading: "Akademi Kulesi",
                towerDescription: "Kat düğmelerine basın; asansör kabininin fiziksel olarak ilgili kata kaymasını ve döneme ait projelerin dinamik olarak açılmasını izleyin.",
                elevatorFloorLabel: "Mevcut Kat",
                elevatorSpeedLabel: "Motor",
                tagFeatured: "ÖNE ÇIKAN",
                floorFav: "★ Favori Projeler",
                floor4: "4. Kat: Senior & Bitirme Projesi",
                floor3: "3. Kat: RAG & Dağıtık Sistemler",
                floor2: "2. Kat: Sistem Mimarisi & C",
                floor1: "1. Kat: Algoritmalar & Temeller",
                floorPrefix: ". Kat",
                expBadge: "Kariyer Geçmişi",
                expHeading: "Profesyonel Deneyim",
                skillsBadge: "Yetkinlikler",
                skillsHeading: "Teknik Beceriler",
                certBadge: "Sertifikasyonlar",
                certHeading: "Sertifikalar & Eğitimler",
                capstoneBadge: "Bitirme Mühendislik Projesi • 2026 - 2027",
                capstoneHeading: "Bitirme Mühendislik Projesi",
                capstoneDescription: "Marmara Üniversitesi Bilgisayar Mühendisliği 2026–2027 akademik yılı bitirme projesi kapsamında geliştirdiğimiz uçtan uca yapay zeka ve çizge analiz sistemi.",
                capstoneCategory: "Marmara Üniversitesi Bilgisayar Mühendisliği • Bitirme Tezi",
                capstoneP1: "Geleneksel kredi kartı dolandırıcılığı tespit yöntemleri işlemleri tutar, zaman ve konum bazında tekil olarak değerlendirir. Ancak organize finansal suçlar; birden fazla müşteri, banka hesabı, kredi kartı, cihaz ve IP adresinin birbirine bağlandığı karmaşık ilişkiler içerir.",
                capstoneP2: "Bu projede, finansal verileri Heterojen Çizge (Heterogeneous Graph) yapısına dönüştürerek varlıklar arasındaki doğrudan ve dolaylı bağları modelliyoruz. Geliştirdiğimiz GNN tabanlı Çizge Otokodlayıcı (Graph Autoencoder) mimarisi ile düğüm gömmeleri (node embeddings) çıkarıyor ve bağlantı tahmini (link prediction) uygulayarak daha önce tespit edilmemiş gizli organize dolandırıcılık ağlarını saptıyoruz.",
                capCol1Title: "01. Heterojen Çizge Modelleme",
                capCol1Desc: "İşlem verilerini çoklu varlık (Kullanıcı-Kart-Cihaz-IP-İşyeri) düğümleri ve etkileşim kenarlarıyla zengin bir çizgeye dönüştürme.",
                capCol2Title: "02. Graph Autoencoder & GNN",
                capCol2Desc: "Düşük boyutlu düğüm gömmeleri (embeddings) ve negatif örneklemeli bağlantı tahmini ile gizli şüpheli ilişkileri tespit etme.",
                capCol3Title: "03. İnteraktif Ağ Analiz Paneli",
                capCol3Desc: "FastAPI backend'i, PostgreSQL ve Cytoscape.js entegrasyonu ile şüpheli ağları interaktif olarak görselleştirme.",
                sourceCodeBtn: "Kaynak Kodu İncele",
                liveDemoBtn: "Canlı Web Sitesi (tarifevim.com.tr)",
                verifyLinkedInBtn: "Sertifikayı Görüntüle",
                noProjectsFloor: "Bu kata henüz proje atanmadı.",
                typingPhrases: [
                    "Bilgisayar Mühendisi Adayı",
                    "RAG & Agentic AI Geliştiricisi",
                    "Test Otomasyon & Sistem Mühendisi"
                ],
                aboutParagraphs: [
                    "Marmara Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Düşük seviyeli mikroişlemci mimarilerinden yapay zeka (RAG & GNN) sistemlerine ve ölçeklenebilir backend çözümlerine kadar yazılımın tüm katmanlarında çalışıyorum.",
                    "Lisans eğitimim ve kurumsal staj deneyimlerim (Kafein Technology Solutions, Digital Garden Technology) boyunca; Python ve Playwright (POM) ile uçtan uca test otomasyon çatıları kurdum, özel komut kümelerine sahip 18-bit ve MIPS işlemciler modelledim ve kurumsal veritabanı platformları geliştirdim.",
                    "Şu anda bitirme mühendislik projem kapsamında, PyTorch Geometric kullanarak Heterojen Çizge Sinir Ağları (GNN) ve Çizge Otokodlayıcıları (Graph Autoencoders) ile organize kredi kartı dolandırıcılık ağlarının tespiti üzerine odaklanıyorum.",
                    "Sistem mühendisliği, yapay zeka/veri mühendisliği ve test otomasyonu alanlarında ölçeklenebilir, dayanıklı ve yüksek kaliteli çözümler üretebileceğim mühendislik rollerine aktif olarak açığım."
                ]
            }
        };

        this.data = window.portfolioData || {};
        this.init();
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.setupLanguage();
            this.setupElevatorControls();
            this.animator.initScrollProgress();
            this.updateStaticTranslations();
            this.renderAll();
        });
    }

    t(en, tr) {
        return this.currentLang === "tr" ? (tr || en || "") : (en || tr || "");
    }

    setupElevatorControls() {
        const floorButtons = document.querySelectorAll(".floor-btn");
        const floorDisplay = document.getElementById("current-floor-display");
        const arrow = document.getElementById("elevator-arrow");

        floorButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetFloor = btn.dataset.floor;
                const targetPos = btn.dataset.pos;
                const prevFloor = this.currentFloor;

                if (targetFloor === String(prevFloor)) return;

                floorButtons.forEach((b) => {
                    b.classList.remove("border-accentSky/40", "bg-accentSky/10", "border-accentAmber/40", "bg-accentAmber/10", "text-white");
                    b.classList.add("border-slateTheme-800", "bg-slateTheme-950/80", "text-slate-300");
                });

                if (targetFloor === "favorites") {
                    btn.classList.add("border-accentAmber/40", "bg-accentAmber/10", "text-white");
                } else {
                    btn.classList.add("border-accentSky/40", "bg-accentSky/10", "text-white");
                }
                btn.classList.remove("border-slateTheme-800", "bg-slateTheme-950/80", "text-slate-300");

                const isGoingUp = true;
                if (arrow) arrow.textContent = isGoingUp ? "▲" : "▼";

                if (floorDisplay) {
                    if (targetFloor === "favorites") {
                        floorDisplay.textContent = this.currentLang === "tr" ? "KAT: ★ FAVORİLER" : "FLOOR: ★ SPOTLIGHT";
                    } else {
                        floorDisplay.textContent = this.currentLang === "tr"
                            ? `KAT: ${targetFloor}. KAT`
                            : `FLOOR: ${targetFloor}`;
                    }
                }

                this.animator.moveElevator(targetPos, isGoingUp, () => {
                    this.currentFloor = targetFloor;
                    this.renderTowerProjects();
                });
            });
        });
    }

    setupLanguage() {
        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".lang-btn").forEach((b) => {
                    b.classList.remove("active", "text-slateTheme-950", "bg-accentSky");
                    b.classList.add("text-slate-400");
                });
                btn.classList.add("active", "text-slateTheme-950", "bg-accentSky");
                btn.classList.remove("text-slate-400");

                this.currentLang = btn.dataset.lang || "tr";
                this.updateStaticTranslations();
                this.renderAll();
            });
        });
    }

    updateStaticTranslations() {
        const dict = this.translations[this.currentLang];
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key]) el.textContent = dict[key];
        });

        const aboutBox = document.getElementById("about-content");
        if (aboutBox && dict.aboutParagraphs) {
            aboutBox.innerHTML = dict.aboutParagraphs.map((p) => `<p>${p}</p>`).join("");
        }

        const floorDisplay = document.getElementById("current-floor-display");
        if (floorDisplay) {
            if (this.currentFloor === "favorites") {
                floorDisplay.textContent = this.currentLang === "tr" ? "KAT: ★ FAVORİLER" : "FLOOR: ★ SPOTLIGHT";
            } else {
                floorDisplay.textContent = this.currentLang === "tr"
                    ? `KAT: ${this.currentFloor}. KAT`
                    : `FLOOR: ${this.currentFloor}`;
            }
        }

        this.animator.startTypingHero(dict.typingPhrases || []);
    }

    renderAvatar() {
        const img = document.getElementById("user-avatar");
        if (img) img.src = this.data.profileImage || "avatar.png";
    }

    renderAll() {
        this.renderAvatar();
        this.renderTowerProjects();
        this.renderExperience();
        this.renderSkills();
        this.renderCertificates();
        if (window.lucide) window.lucide.createIcons();
    }

    renderTowerProjects() {
        const stage = document.getElementById("tower-stage");
        if (!stage) return;

        let list = [];
        if (this.currentFloor === "favorites") {
            list = (this.data.projects || []).filter((p) => p.isFavorite === true);
        } else {
            const numFloor = parseInt(this.currentFloor);
            list = (this.data.projects || []).filter((p) => p.floor === numFloor);
        }

        if (!list.length) {
            stage.innerHTML = `
                <div class="p-16 text-center border border-dashed border-slateTheme-800 rounded-2xl">
                    <p class="text-slate-500 font-mono text-sm">${this.translations[this.currentLang].noProjectsFloor}</p>
                </div>
            `;
            return;
        }

        stage.innerHTML = list.map((p) => {
            const title = this.t(p.title, p.titleTR);
            const desc = this.t(p.description?.en, p.description?.tr);
            const type = this.t(p.type, p.typeTR);
            const year = this.t(p.year, p.yearTR);
            const tags = (p.tags || []).map((t) => `<span class="px-2.5 py-1 rounded-md bg-slateTheme-950 border border-slateTheme-800 text-[11px] font-mono text-accentSky font-semibold">${t}</span>`).join("");
            const highlights = (p.highlights || []).map((h) => `<li class="text-xs text-slate-400">${this.t(h.en, h.tr)}</li>`).join("");

            // Dil bazlı Kat Etiketi: Türkçe'de "2. Kat • Data Structures", İngilizce'de "Floor 2 • Data Structures"
            const floorBadgeText = p.isFavorite 
                ? (this.currentLang === "tr" ? "★ FAVORİ SPOTLIGHT" : "★ FEATURED SPOTLIGHT")
                : (this.currentLang === "tr" ? `${p.floor}. Kat • ${type}` : `Floor ${p.floor} • ${type}`);

            return `
                <div class="tilt-card p-6 sm:p-7 rounded-2xl bg-slateTheme-900 border ${p.isFavorite ? 'border-accentAmber/30' : 'border-slateTheme-800'} hover:border-accentSky/40 transition-all duration-300 shadow-xl space-y-5">
                    ${p.image ? `
                        <div class="w-full h-52 rounded-xl overflow-hidden border border-slateTheme-800 bg-slateTheme-950">
                            <img src="${p.image}" class="w-full h-full object-cover">
                        </div>
                    ` : ""}

                    <div class="flex items-center justify-between gap-2">
                        <span class="text-xs font-mono font-bold px-3 py-1 rounded-full ${p.isFavorite ? 'bg-accentAmber/10 text-accentAmber border border-accentAmber/25' : 'bg-accentSky/10 text-accentSky border border-accentSky/20'}">
                            ${floorBadgeText}
                        </span>
                        <span class="text-xs font-mono text-slate-500 font-bold">${year}</span>
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">${title}</h3>
                        <p class="text-slate-300 text-sm leading-relaxed">${desc}</p>
                    </div>

                    ${highlights ? `
                        <div class="p-4 rounded-xl bg-slateTheme-950 border border-slateTheme-800/80">
                            <div class="text-[11px] font-mono uppercase text-slate-500 mb-2 font-bold">${this.currentLang === "tr" ? "Teknik Öne Çıkanlar:" : "Technical Highlights:"}</div>
                            <ul class="space-y-1.5 list-disc list-inside">${highlights}</ul>
                        </div>
                    ` : ""}

                    <div class="pt-4 border-t border-slateTheme-800 flex flex-wrap items-center justify-between gap-4">
                        <div class="flex flex-wrap gap-1.5">${tags}</div>
                        <div class="flex items-center gap-3">
                            ${p.liveDemo ? `
                                <a href="${p.liveDemo}" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accentAmber text-slateTheme-950 text-xs font-bold hover:bg-amber-300 transition-all shadow-md">
                                    <i data-lucide="globe" class="w-3.5 h-3.5"></i> ${this.translations[this.currentLang].liveDemoBtn}
                                </a>
                            ` : ""}
                            ${p.github ? `
                                <a href="${p.github}" target="_blank" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slateTheme-950 border border-slateTheme-700 hover:border-accentSky text-xs font-bold text-white transition-all">
                                    <i data-lucide="github" class="w-3.5 h-3.5 text-accentSky"></i> ${this.translations[this.currentLang].sourceCodeBtn} →
                                </a>
                            ` : ""}
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        this.animator.apply3DTilt();
        if (window.lucide) window.lucide.createIcons();
    }

    renderExperience() {
        const timeline = document.querySelector(".timeline");
        if (!timeline) return;

        timeline.innerHTML = (this.data.experiences || []).map((exp) => {
            const title = this.t(exp.title, exp.titleTR);
            const date = this.t(exp.date, exp.dateTR);
            const location = this.t(exp.location, exp.locationTR);
            const achievements = (exp.achievements || []).map((a) => `<li class="text-slate-400 text-sm leading-relaxed">${this.t(a.en, a.tr)}</li>`).join("");

            return `
                <div class="p-6 sm:p-8 rounded-2xl bg-slateTheme-900 border border-slateTheme-800 relative pl-8 border-l-2 border-l-accentViolet shadow-lg">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 class="text-lg sm:text-xl font-bold text-white">${title}</h3>
                        <span class="text-xs font-mono px-3 py-1 rounded-full bg-accentViolet/10 text-accentViolet border border-accentViolet/20 font-semibold">${date}</span>
                    </div>
                    <div class="flex items-center gap-3 text-sm mb-4">
                        <span class="text-accentSky font-semibold">${exp.company}</span>
                        ${location ? `<span class="text-xs text-slate-500 font-mono flex items-center gap-1">• <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${location}</span>` : ""}
                    </div>
                    <ul class="space-y-2 list-disc list-inside">${achievements}</ul>
                </div>
            `;
        }).join("");

        if (window.lucide) window.lucide.createIcons();
    }

    renderSkills() {
        const container = document.getElementById("skills-container");
        if (!container) return;

        const skillGroups = [
            {
                icon: "code-2",
                title: this.currentLang === "tr" ? "Programlama Dilleri" : "Programming Languages",
                tags: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "Bash", "Assembly (MIPS/x86)", "Verilog", "Haskell", "Prolog"]
            },
            {
                icon: "database",
                title: this.currentLang === "tr" ? "Web & Veritabanı" : "Web & Databases",
                tags: ["React.js", "Node.js", "Express.js", "MongoDB", "ASP.NET Core", "MSSQL", "T-SQL", "REST APIs", "Swagger", "Postman", "JWT"]
            },
            {
                icon: "shield-check",
                title: this.currentLang === "tr" ? "Test Otomasyonu & QA" : "Test Automation & QA",
                tags: ["Playwright", "Pytest", "JMeter", "Testmo", "E2E Testing", "Performance Testing", "Page Object Model (POM)"]
            },
            {
                icon: "cpu",
                title: this.currentLang === "tr" ? "Sistem & Yapay Zeka" : "Systems & AI",
                tags: ["RAG Architecture", "Graph Neural Networks", "PyTorch Geometric", "POSIX APIs", "Memory Hierarchy", "Logisim Processor"]
            }
        ];

        container.innerHTML = skillGroups.map((g) => `
            <div class="p-6 rounded-2xl bg-slateTheme-900 border border-slateTheme-800 hover:border-accentEmerald/40 transition-all shadow-lg">
                <div class="h-11 w-11 rounded-xl bg-accentEmerald/10 border border-accentEmerald/20 flex items-center justify-center text-accentEmerald mb-5">
                    <i data-lucide="${g.icon}" class="w-5 h-5"></i>
                </div>
                <h3 class="text-base font-bold text-white mb-4">${g.title}</h3>
                <div class="flex flex-wrap gap-2">
                    ${g.tags.map((t) => `<span class="px-2.5 py-1 rounded-lg bg-slateTheme-950 border border-slateTheme-800 text-xs font-medium text-slate-300">${t}</span>`).join("")}
                </div>
            </div>
        `).join("");

        if (window.lucide) window.lucide.createIcons();
    }

    renderCertificates() {
        const container = document.querySelector(".certificates-grid");
        if (!container) return;

        container.innerHTML = (this.data.certificates || []).map((cert) => {
            const title = this.t(cert.title, cert.titleTR);
            const org = this.t(cert.organization, cert.organizationTR);
            const date = this.t(cert.date, cert.dateTR);
            const credId = cert.credentialId
                ? `<div class="text-[10px] text-slate-500 font-mono mt-1">${this.currentLang === "tr" ? "Kimlik: " : "ID: "}${cert.credentialId}</div>`
                : "";

            return `
                <div class="p-6 rounded-2xl bg-slateTheme-900 border border-slateTheme-800 hover:border-accentAmber/30 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group">
                    <div>
                        <div class="flex justify-between items-start mb-3">
                            <div class="h-9 w-9 rounded-xl bg-accentAmber/10 border border-accentAmber/20 flex items-center justify-center text-accentAmber group-hover:scale-105 transition-transform">
                                <i data-lucide="award" class="w-4 h-4"></i>
                            </div>
                            <span class="text-xs font-mono text-slate-500 font-bold">${date}</span>
                        </div>
                        <h3 class="font-bold text-white text-sm mb-1 group-hover:text-accentAmber transition-colors">${title}</h3>
                        <p class="text-xs text-slate-400 font-mono">${org}</p>
                        ${credId}
                    </div>

                    <div class="pt-4 mt-4 border-t border-slateTheme-800 flex items-center justify-between">
                        <a href="${cert.link}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-accentAmber hover:text-amber-300 transition-colors">
                            <span>${this.translations[this.currentLang].verifyLinkedInBtn}</span>
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join("");

        if (window.lucide) window.lucide.createIcons();
    }
}

const portfolioManager = new PortfolioManager();
window.portfolioManager = portfolioManager;