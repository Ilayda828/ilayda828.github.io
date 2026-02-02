// script.js

// Particles.js Configuration
if (window.innerWidth > 768) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00d4ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

// Language Switcher Configuration
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

const translations = {
    en: {
        nav: ['About', 'Experience', 'Projects', 'Skills', 'Certificates'],
        hero: {
            title: 'İLAYDA İLHAN',
            subtitle: 'Computer Engineering Student | Full Stack & System Developer',
            tagline: 'Building scalable web applications and high-performance system software. Passionate about AI integration and distributed computing.'
        },
        sections: {
            about: 'About Me',
            aboutDesc: 'Computer engineering student with a strong foundation in theoretical computer science and practical software development',
            experience: 'Professional Experience',
            experienceDesc: 'Practical application of computer science principles in real-world development environments',
            projects: 'Research & Academic Projects',
            projectsDesc: 'Comprehensive portfolio demonstrating technical depth across multiple computer science domains',
            skills: 'Technical Proficiencies',
            skillsDesc: 'Comprehensive skill set spanning multiple domains of computer science',
            certificates: 'Certifications & Professional Development',
            certificatesDesc: 'Continuous learning through industry-recognized training programs',
            contact: 'Get In Touch',
            contactDesc: 'Interested in collaborating or have questions? I\'d love to hear from you!'
        },
        stats: ['Academic Projects', 'Programming Languages', 'Professional Certifications', 'Years of Experience'],
        buttons: {
            viewProjects: 'View Research & Projects',
            github: 'GitHub Profile',
            viewSource: 'View Source Code'
        },
        footer: {
            tagline: 'Computer Engineering Student at Marmara University<br>Passionate about advancing software engineering through innovative solutions'
        },
        // Expanded Translations for About, Experience, Projects
        content: {
            about_p1: "I am a third-year Computer Engineering student at Marmara University, specializing in artificial intelligence, system-level programming, and high-performance computing. My academic journey has been marked by deep engagement with both theoretical foundations and practical implementations across various domains of computer science.",
            about_p2: "Through rigorous coursework and hands-on projects, I have developed expertise in building scalable systems—from low-level cache simulators and custom operating system shells to sophisticated RAG-based AI assistants. My work demonstrates proficiency in multiple programming paradigms, including object-oriented, functional, and logic programming.",
            research_highlight: "I am particularly interested in the intersection of artificial intelligence and scientific computing. My recent work on Retrieval-Augmented Generation systems and experience with database optimization has strengthened my interest in developing intelligent systems that can process and analyze large-scale scientific data efficiently.",
            about_p3: "During my internship at Digital Garden Technology, I contributed to cross-platform development initiatives, API architecture design, and mobile integration research. This experience reinforced my commitment to writing clean, maintainable code and collaborating effectively in agile development environments.",
            about_p4: "I am seeking opportunities to apply my technical skills in research-oriented environments where I can contribute to cutting-edge projects in distributed systems, AI applications, or scientific computing infrastructure.",
            
            // Job Descriptions
            job_api: "API Architecture & Security: Conducted comprehensive API testing using industry-standard tools (Swagger, Postman). Implemented and validated JWT-based authentication systems to ensure secure data transmission across distributed services. Developed automated testing suites for RESTful APIs.",
            job_cross: "Cross-Platform Development Research: Led research initiative on browser extension architecture and implementation. Developed functional prototypes using HTML5, CSS3, and modern JavaScript (ES6+). Investigated cross-platform compatibility challenges and solutions.",
            job_mobile: "Mobile Integration R&D: Conducted feasibility analysis for mobile platform integration using Swift (iOS) and Kotlin (Android). Evaluated architectural patterns for cross-platform code sharing and platform-specific optimizations. Prepared technical documentation for mobile development roadmap.",
            job_se: "Software Engineering Best Practices: Implemented core application components in Java following SOLID principles and Gang of Four design patterns. Participated in code reviews focusing on maintainability, scalability, and performance optimization.",
            job_agile: "Agile Development Methodology: Actively contributed to Scrum ceremonies including sprint planning, daily standups, retrospectives, and demos. Managed tasks using Jira and collaborated with cross-functional teams to deliver features within sprint commitments.",

            // Project 1: RAG
            proj_rag_desc: "Developed an intelligent question-answering system using Retrieval-Augmented Generation architecture for university administrative queries. The system processes document corpora and provides accurate answers with source citations.",
            
            // Project 2: Database
            proj_db_desc: "Collaborated with industry partner to design and implement comprehensive database solution. Developed normalized schema with complex constraints and full-stack web application for data management.",
            
            // Project 3: OS
            proj_os_desc: "Comprehensive OS project series demonstrating deep understanding of system-level programming concepts including process management, synchronization, and shell implementation.",

            // Project 4: Cache
            proj_cache_desc: "Built comprehensive cache simulator modeling L1/L2 cache behavior including hit/miss/eviction tracking. Processes memory access traces and RAM images to simulate real processor cache operations.",

            // Project 5: Bomb
            proj_bomb_desc: "Reverse engineered multi-phase binary executable using objdump, GDB, and assembly analysis. Successfully defused all phases by analyzing machine code and understanding program control flow.",
            
            // Project 6: Processor
            proj_proc_desc: "Designed custom instruction set architecture and implemented complete datapath. Created visual simulation in Logisim and hardware description in Verilog.",

            // Project 7: TSP
            proj_tsp_desc: "Developed algorithmic solutions for Traveling Salesman Problem variant with city penalties. Implemented multiple optimization strategies to minimize combined tour length and skip penalties.",

            // Project 8: Simulation
            proj_sim_desc: "Created complex simulation models for various systems using discrete event simulation methodology. Applied queuing theory and statistical analysis to optimize system performance.",

            // Project 9: Functional
            proj_func_desc: "Explored functional and logic programming paradigms through practical applications. Developed interactive game in Haskell and genealogy system in Prolog."
        }
    },
    tr: {
        nav: ['Hakkımda', 'Deneyim', 'Projeler', 'Yetenekler', 'Sertifikalar'],
        hero: {
            title: 'İLAYDA İLHAN',
            subtitle: 'Bilgisayar Mühendisliği Öğrencisi | Full Stack & Sistem Geliştiricisi',
            tagline: 'Ölçeklenebilir web uygulamaları ve yüksek performanslı sistem yazılımları geliştiriyorum. AI entegrasyonu ve dağıtık sistemlere tutkuyla bağlıyım.'
        },
        sections: {
            about: 'Hakkımda',
            aboutDesc: 'Teorik bilgisayar bilimi ve pratik yazılım geliştirme konularında güçlü temellere sahip bilgisayar mühendisliği öğrencisi',
            experience: 'Profesyonel Deneyim',
            experienceDesc: 'Bilgisayar bilimi prensiplerinin gerçek dünya geliştirme ortamlarında pratik uygulanması',
            projects: 'Araştırma & Akademik Projeler',
            projectsDesc: 'Bilgisayar biliminin birçok alanında teknik derinliği gösteren kapsamlı portföy',
            skills: 'Teknik Yetkinlikler',
            skillsDesc: 'Bilgisayar biliminin birçok alanını kapsayan kapsamlı beceri seti',
            certificates: 'Sertifikalar & Profesyonel Gelişim',
            certificatesDesc: 'Sektör tarafından tanınan eğitim programları ile sürekli öğrenme',
            contact: 'İletişime Geçin',
            contactDesc: 'İşbirliği yapmak mı istiyorsunuz veya sorularınız mı var? Sizden haber almayı çok isterim!'
        },
        stats: ['Akademik Proje', 'Programlama Dili', 'Profesyonel Sertifika', 'Yıllık Deneyim'],
        buttons: {
            viewProjects: 'Araştırma ve Projelerim',
            github: 'GitHub Profilim',
            viewSource: 'Kaynak Kodu Görüntüle'
        },
        footer: {
            tagline: 'Marmara Üniversitesi Bilgisayar Mühendisliği Öğrencisi<br>Yenilikçi çözümlerle yazılım mühendisliğini ilerletmeye tutkuyla bağlıyım'
        },
        content: {
            about_p1: "Marmara Üniversitesi'nde üçüncü sınıf Bilgisayar Mühendisliği öğrencisiyim; yapay zeka, sistem düzeyinde programlama ve yüksek başarımlı hesaplama konularında uzmanlaşıyorum. Akademik yolculuğum, bilgisayar biliminin çeşitli alanlarında hem teorik temellerle hem de pratik uygulamalarla derinlemesine ilgilenerek şekillendi.",
            about_p2: "Zorlu dersler ve uygulamalı projeler sayesinde, düşük seviyeli önbellek simülatörleri ve özel işletim sistemi kabuklarından (shell), gelişmiş RAG tabanlı yapay zeka asistanlarına kadar ölçeklenebilir sistemler kurma konusunda uzmanlık kazandım. Çalışmalarım; nesne yönelimli, fonksiyonel ve mantık programlama dahil olmak üzere birden fazla programlama paradigmasındaki yetkinliğimi göstermektedir.",
            research_highlight: "Özellikle yapay zeka ve bilimsel hesaplamanın kesişimiyle ilgileniyorum. Erişim-Artırılmış Üretim (RAG) sistemleri üzerine yaptığım son çalışmalar ve veritabanı optimizasyonu konusundaki deneyimim, büyük ölçekli bilimsel verileri verimli bir şekilde işleyip analiz edebilen akıllı sistemler geliştirme konusundaki ilgimi pekiştirdi.",
            about_p3: "Digital Garden Technology'deki stajım sırasında, çapraz platform geliştirme girişimlerine, API mimarisi tasarımına ve mobil entegrasyon araştırmalarına katkıda bulundum. Bu deneyim, temiz, sürdürülebilir kod yazma ve çevik (agile) geliştirme ortamlarında etkili bir şekilde işbirliği yapma konusundaki kararlılığımı güçlendirdi.",
            about_p4: "Dağıtık sistemler, yapay zeka uygulamaları veya bilimsel hesaplama altyapısındaki en son projelere katkıda bulunabileceğim, araştırma odaklı ortamlarda teknik becerilerimi uygulama fırsatları arıyorum.",
            
            // Job Descriptions
            job_api: "API Mimarisi & Güvenlik: Endüstri standardı araçlar (Swagger, Postman) kullanarak kapsamlı API testleri gerçekleştirdim. Dağıtık servisler arasında güvenli veri iletimini sağlamak için JWT tabanlı kimlik doğrulama sistemlerini uyguladım ve doğruladım. RESTful API'ler için otomatik test setleri geliştirdim.",
            job_cross: "Çapraz Platform Geliştirme Araştırması: Tarayıcı eklentisi mimarisi ve uygulaması üzerine araştırma girişimine liderlik ettim. HTML5, CSS3 ve modern JavaScript (ES6+) kullanarak işlevsel prototipler geliştirdim. Çapraz platform uyumluluk zorluklarını ve çözümlerini araştırdım.",
            job_mobile: "Mobil Entegrasyon Ar-Ge: Swift (iOS) ve Kotlin (Android) kullanarak mobil platform entegrasyonu için fizibilite analizi yaptım. Çapraz platform kod paylaşımı ve platforma özgü optimizasyonlar için mimari modelleri değerlendirdim. Mobil geliştirme yol haritası için teknik dokümantasyon hazırladım.",
            job_se: "Yazılım Mühendisliği En İyi Uygulamaları: Temel uygulama bileşenlerini SOLID prensiplerini ve Gang of Four tasarım kalıplarını izleyerek Java'da uyguladım. Sürdürülebilirlik, ölçeklenebilirlik ve performans optimizasyonuna odaklanan kod incelemelerine katıldım.",
            job_agile: "Çevik Geliştirme Metodolojisi: Sprint planlama, günlük toplantılar (daily standups), retrospektifler ve demolar dahil olmak üzere Scrum seremonilerine aktif olarak katkıda bulundum. Görevleri Jira kullanarak yönettim ve sprint taahhütleri dahilinde özellikler sunmak için çok işlevli ekiplerle işbirliği yaptım.",

            // Project Descriptions
            proj_rag_desc: "Üniversite idari sorguları için Erişim-Artırılmış Üretim (RAG) mimarisini kullanarak akıllı bir soru-cevap sistemi geliştirdim. Sistem, belge yığınlarını işleyerek kaynak atıflarıyla birlikte doğru cevaplar sunar.",
            proj_db_desc: "Kapsamlı bir veritabanı çözümü tasarlamak ve uygulamak için endüstri ortağıyla işbirliği yaptım. Karmaşık kısıtlamalara sahip normalize edilmiş şema ve veri yönetimi için tam yığın (full-stack) web uygulaması geliştirdim.",
            proj_os_desc: "Süreç yönetimi, senkronizasyon ve kabuk (shell) uygulaması dahil olmak üzere sistem düzeyinde programlama kavramlarının derinlemesine anlaşıldığını gösteren kapsamlı İşletim Sistemleri proje serisi.",
            proj_cache_desc: "L1/L2 önbellek davranışlarını (isabet/ıskalama/tahliye takibi dahil) modelleyen kapsamlı bir önbellek simülatörü geliştirdim. Gerçek işlemci önbellek operasyonlarını simüle etmek için bellek erişim izlerini ve RAM görüntülerini işler.",
            proj_bomb_desc: "Objdump, GDB ve assembly analizi kullanarak çok aşamalı ikili yürütülebilir dosyayı tersine mühendislikle inceledim. Makine kodunu analiz ederek ve program kontrol akışını anlayarak tüm aşamaları başarıyla etkisiz hale getirdim.",
            proj_proc_desc: "Özel komut seti mimarisi (ISA) tasarladım ve tam veri yolunu uyguladım. Logisim'de görsel simülasyon ve Verilog'da donanım tanımı oluşturdum.",
            proj_tsp_desc: "Şehir cezaları içeren Gezgin Satıcı Problemi varyantı için algoritmik çözümler geliştirdim. Birleşik tur uzunluğunu ve atlama cezalarını en aza indirmek için çoklu optimizasyon stratejileri uyguladım.",
            proj_sim_desc: "Ayrık olay simülasyon metodolojisini kullanarak çeşitli sistemler için karmaşık simülasyon modelleri oluşturdum. Sistem performansını optimize etmek için kuyruk teorisi ve istatistiksel analiz uyguladım.",
            proj_func_desc: "Pratik uygulamalar aracılığıyla fonksiyonel ve mantık programlama paradigmalarını keşfettim. Haskell'de etkileşimli bir oyun ve Prolog'da soy ağacı sistemi geliştirdim."
        }
    }
};

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        updateLanguage();
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, i) => {
        if (i < t.nav.length) link.textContent = t.nav[i];
    });

    // Update hero section
    document.querySelector('.hero .subtitle').textContent = t.hero.subtitle;
    document.querySelector('.hero .tagline').textContent = t.hero.tagline;

    // Update section headers
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const id = section.id;
        const h2 = section.querySelector('h2');
        const desc = section.querySelector('.section-description');
        
        if (id === 'about' && h2) h2.textContent = t.sections.about;
        if (id === 'about' && desc) desc.textContent = t.sections.aboutDesc;
        if (id === 'experience' && h2) h2.textContent = t.sections.experience;
        if (id === 'experience' && desc) desc.textContent = t.sections.experienceDesc;
        if (id === 'projects' && h2) h2.textContent = t.sections.projects;
        if (id === 'projects' && desc) desc.textContent = t.sections.projectsDesc;
        if (id === 'skills' && h2) h2.textContent = t.sections.skills;
        if (id === 'skills' && desc) desc.textContent = t.sections.skillsDesc;
        if (id === 'certificates' && h2) h2.textContent = t.sections.certificates;
        if (id === 'certificates' && desc) desc.textContent = t.sections.certificatesDesc;
    });

    // Update stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels.forEach((label, i) => {
        if (i < t.stats.length) label.textContent = t.stats[i];
    });

    // Update contact section
    const contactH3 = document.querySelector('.contact-form-section h3');
    const contactP = document.querySelector('.contact-form-section p');
    if (contactH3) contactH3.textContent = t.sections.contact;
    if (contactP) contactP.textContent = t.sections.contactDesc;

    // Update buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].textContent = t.buttons.viewProjects;
    if (ctaButtons[1]) ctaButtons[1].textContent = t.buttons.github;

    // Update project buttons
    document.querySelectorAll('.project-btn-primary').forEach(btn => {
        btn.textContent = t.buttons.viewSource;
    });

    // Update footer
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.innerHTML = t.footer.tagline;

    // *** FIX: Update Content via data-i18n attributes ***
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t.content && t.content[key]) {
            element.textContent = t.content[key];
        }
    });
}

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.createElement('div');
mobileToggle.className = 'mobile-menu-toggle';
mobileToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.nav-container').appendChild(mobileToggle);

mobileToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Typing Animation
const subtitle = document.querySelector('.hero .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.classList.add('typing-text');
    
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            subtitle.classList.remove('typing-text');
        }
    }
    setTimeout(typeWriter, 500);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Stats Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseFloat(text);
                stat.textContent = '0';
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    parallaxElements.forEach((el, index) => {
        const speed = index === 0 ? 0.5 : -0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Project Card 3D Tilt Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Skill Category Hover Effect
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    category.addEventListener('mousemove', (e) => {
        const rect = category.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        category.style.setProperty('--mouse-x', `${x}px`);
        category.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add random delays to fade-in elements
document.querySelectorAll('.fade-in').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
});

// Console Easter Egg
console.log('%c👋 Hello, Tech Recruiter!', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cLooking for a passionate Computer Engineering student?', 'color: #00ff88; font-size: 16px;');
console.log('%cLet\'s connect: ilayda.ilhan0@gmail.com', 'color: #8b5cf6; font-size: 14px;');
console.log('%c🚀 This website features: Particles.js, Smooth Animations, Modern Design, and Devicon!', 'color: #ff006e; font-size: 12px;');
console.log('%c💡 Pro Tip: Check out my GitHub repos - they have detailed README files!', 'color: #00d4ff; font-size: 12px;');
