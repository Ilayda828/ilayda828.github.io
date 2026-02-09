// ===============================================
// PORTFOLYO VERİ YAPISI - DATA.JS
// ===============================================

const portfolioData = {
    // ============ DENEYİMLER ============
    experiences: [
        {
            id: 'exp-1',
            title: 'Computer Engineering Intern',
            titleTR: 'Bilgisayar Mühendisliği Stajyeri',
            company: 'Digital Garden Technology',
            date: 'July 2025 - August 2025',
            dateTR: 'Temmuz 2025 - Ağustos 2025',
            type: 'internship',
            achievements: [
                {
                    en: '<strong>API Architecture & Security:</strong> Conducted comprehensive API testing using industry-standard tools (Swagger, Postman). Implemented and validated JWT-based authentication systems to ensure secure data transmission across distributed services. Developed automated testing suites for RESTful APIs.',
                    tr: '<strong>API Mimarisi & Güvenlik:</strong> Endüstri standardı araçlarla (Swagger, Postman) kapsamlı API testleri gerçekleştirdim. Dağıtık servisler arasında güvenli veri iletimi sağlamak için JWT tabanlı kimlik doğrulama sistemleri uyguladım ve doğruladım.'
                },
                {
                    en: '<strong>Cross-Platform Development Research:</strong> Led research initiative on browser extension architecture and implementation. Developed functional prototypes using HTML5, CSS3, and modern JavaScript (ES6+). Investigated cross-platform compatibility challenges and solutions.',
                    tr: '<strong>Çapraz Platform Geliştirme Araştırması:</strong> Tarayıcı eklentisi mimarisi ve uygulaması üzerine araştırma girişimini yönettim. HTML5, CSS3 ve modern JavaScript (ES6+) kullanarak fonksiyonel prototipler geliştirdim.'
                },
                {
                    en: '<strong>Mobile Integration R&D:</strong> Conducted feasibility analysis for mobile platform integration using Swift (iOS) and Kotlin (Android). Evaluated architectural patterns for cross-platform code sharing and platform-specific optimizations.',
                    tr: '<strong>Mobil Entegrasyon Ar-Ge:</strong> Swift (iOS) ve Kotlin (Android) kullanarak mobil platform entegrasyonu için fizibilite analizi gerçekleştirdim. Çapraz platform kod paylaşımı için mimari modelleri değerlendirdim.'
                },
                {
                    en: '<strong>Software Engineering Best Practices:</strong> Implemented core application components in Java following SOLID principles and Gang of Four design patterns. Participated in code reviews focusing on maintainability, scalability, and performance optimization.',
                    tr: '<strong>Yazılım Mühendisliği En İyi Uygulamaları:</strong> SOLID prensipleri ve Gang of Four tasarım kalıplarını takip ederek Java\'da temel uygulama bileşenleri geliştirdim. Sürdürülebilirlik, ölçeklenebilirlik ve performans optimizasyonuna odaklanan kod incelemelerine katıldım.'
                },
                {
                    en: '<strong>Agile Development Methodology:</strong> Actively contributed to Scrum ceremonies including sprint planning, daily standups, retrospectives, and demos. Managed tasks using Jira and collaborated with cross-functional teams to deliver features within sprint commitments.',
                    tr: '<strong>Çevik Geliştirme Metodolojisi:</strong> Sprint planlama, günlük standuplar, retrospektifler ve demolar dahil Scrum seremonilerine aktif olarak katkıda bulundum. Jira kullanarak görevleri yönettim ve sprint taahhütleri dahilinde özellikler sunmak için çapraz fonksiyonel ekiplerle işbirliği yaptım.'
                }
            ]
        }
    ],

    // ============ SERTİFİKALAR ============
    certificates: [
        {
            id: 'cert-1',
            title: 'Borusan Technology School',
            titleTR: 'Borusan Teknoloji Okulu',
            organization: 'Toptalent.co - Corporate Technology Training',
            organizationTR: 'Toptalent.co - Kurumsal Teknoloji Eğitimi',
            date: 'May 2025',
            dateTR: 'Mayıs 2025',
            image: '', // Sertifika görsel linki
            pdfLink: '', // PDF linki 
            category: 'technology'
        },
        {
            id: 'cert-2',
            title: 'İşbank ProSchool - Data & AI Class',
            titleTR: 'İşbank ProSchool - Veri & AI Sınıfı',
            organization: 'Toptalent.co - Advanced AI & Data Science',
            organizationTR: 'Toptalent.co - İleri Düzey AI & Veri Bilimi',
            date: 'May 2025',
            dateTR: 'Mayıs 2025',
            image: '',
            pdfLink: '',
            category: 'ai'
        },
        {
            id: 'cert-3',
            title: 'İşbank ProSchool - IT Class',
            titleTR: 'İşbank ProSchool - IT Sınıfı',
            organization: 'Toptalent.co - Enterprise IT Systems',
            organizationTR: 'Toptalent.co - Kurumsal IT Sistemleri',
            date: 'May 2025',
            dateTR: 'Mayıs 2025',
            image: '',
            pdfLink: '',
            category: 'it'
        },
        {
            id: 'cert-4',
            title: 'Eczacıbaşı Future School',
            titleTR: 'Eczacıbaşı Geleceğin Okulu',
            organization: 'Toptalent.co - Innovation & Technology',
            organizationTR: 'Toptalent.co - İnovasyon & Teknoloji',
            date: 'Feb 2025',
            dateTR: 'Şubat 2025',
            image: '',
            pdfLink: '',
            category: 'technology'
        },
        {
            id: 'cert-5',
            title: 'IoT & Security Fundamentals',
            titleTR: 'IoT & Güvenlik Temelleri',
            organization: 'BTK Academy - Cybersecurity Training',
            organizationTR: 'BTK Akademi - Siber Güvenlik Eğitimi',
            date: 'Feb 2025',
            dateTR: 'Şubat 2025',
            image: '',
            pdfLink: '',
            category: 'security'
        },
        {
            id: 'cert-6',
            title: 'AWS Cloud Computing',
            titleTR: 'AWS Bulut Bilişim',
            organization: 'BTK Academy - Cloud Infrastructure',
            organizationTR: 'BTK Akademi - Bulut Altyapısı',
            date: 'July 2025',
            dateTR: 'Temmuz 2025',
            image: '',
            pdfLink: '',
            category: 'cloud'
        },
        {
            id: 'cert-7',
            title: 'Web Programming (HTML5, CSS3, JavaScript)',
            titleTR: 'Web Programlama (HTML5, CSS3, JavaScript)',
            organization: 'Turkcell Future Coders Program',
            organizationTR: 'Turkcell Geleceği Yazanlar Programı',
            date: 'Aug 2025',
            dateTR: 'Ağustos 2025',
            image: '',
            pdfLink: '',
            category: 'web'
        },
        {
            id: 'cert-8',
            title: 'Boğaziçi DataCamp\'22 - Data Science Summit',
            titleTR: 'Boğaziçi DataCamp\'22 - Veri Bilimi Zirvesi',
            organization: 'Boğaziçi University Computer Engineering',
            organizationTR: 'Boğaziçi Üniversitesi Bilgisayar Mühendisliği',
            date: 'Mar 2023',
            dateTR: 'Mart 2023',
            image: '',
            pdfLink: '',
            category: 'data-science'
        }
        {
    id: 'cert-1770638810510',
    title: 'An introduction to generative artificial intelligence',
    titleTR: 'Üretken Yapay Zekaya Giriş',
    organization: 'BTK Academy',
    organizationTR: 'BTK Akademi',
    date: 'Feb 2026',
    dateTR: 'Şubat 2026',
    image: 'file:///Users/ilayda/Downloads/%C3%9Cretken_Yapay_Zek%C3%A2ya_Giri%C5%9F_Sertifika.pdf',
    pdfLink: '',
    category: 'ai'
},
    ],

    // ============ PROJELER ============
    projects: [
        {
            id: 'proj-1',
            title: 'University HelpDesk RAG System',
            titleTR: 'Üniversite HelpDesk RAG Sistemi',
            type: 'Featured',
            typeTR: 'Öne Çıkan',
            year: 'Year 3 - 2025',
            yearTR: '3. Yıl - 2025',
            course: 'Object-Oriented Software Design',
            courseTR: 'Nesne Yönelimli Yazılım Tasarımı',
            tags: ['Python', 'Java', 'NLP', 'RAG', 'TF-IDF'],
            description: {
                en: 'Developed an intelligent question-answering system using Retrieval-Augmented Generation architecture for university administrative queries. The system processes document corpora and provides accurate answers with source citations.',
                tr: 'Üniversite idari sorguları için Retrieval-Augmented Generation mimarisi kullanarak akıllı bir soru-cevap sistemi geliştirdim. Sistem doküman korpuslarını işler ve kaynak alıntılarıyla doğru cevaplar sağlar.'
            },
            highlights: {
                title: { en: 'Technical Achievements:', tr: 'Teknik Başarılar:' },
                items: [
                    { en: 'Implemented dual reranking algorithms (SimpleReranker, JaccardReranker) for precision optimization', tr: 'Hassasiyet optimizasyonu için ikili yeniden sıralama algoritmaları (SimpleReranker, JaccardReranker) uygulandı' },
                    { en: 'Built modular architecture with 18 comprehensive test suites (unit & integration)', tr: '18 kapsamlı test paketi (birim & entegrasyon) ile modüler mimari oluşturuldu' },
                    { en: 'Integrated TraceBus monitoring system for real-time performance analysis', tr: 'Gerçek zamanlı performans analizi için TraceBus izleme sistemi entegre edildi' },
                    { en: 'Achieved measurable accuracy improvements using MRR metrics', tr: 'MRR metrikleri kullanılarak ölçülebilir doğruluk iyileştirmeleri sağlandı' }
                ]
            },
            github: 'https://github.com/Ilayda828/RAG-University-HelpDesk',
            screenshots: []
        },
        {
            id: 'proj-2',
            title: 'Operating Systems Suite (Process Scheduler & Memory Simulator)',
            titleTR: 'İşletim Sistemleri Paketi (İşlem Zamanlayıcı & Bellek Simülatörü)',
            type: 'Academic',
            typeTR: 'Akademik',
            year: 'Year 3 - 2024',
            yearTR: '3. Yıl - 2024',
            course: 'Operating Systems',
            courseTR: 'İşletim Sistemleri',
            tags: ['Java', 'OS', 'Scheduling', 'Memory Management'],
            description: {
                en: 'Comprehensive operating system simulation implementing CPU scheduling algorithms and virtual memory management systems.',
                tr: 'CPU zamanlama algoritmaları ve sanal bellek yönetim sistemlerini uygulayan kapsamlı işletim sistemi simülasyonu.'
            },
            highlights: {
                title: { en: 'Technical Implementation:', tr: 'Teknik Uygulama:' },
                items: [
                    { en: 'Multiple scheduling algorithms: Priority, Round-Robin, FCFS, SJF', tr: 'Çoklu zamanlama algoritmaları: Öncelik, Round-Robin, FCFS, SJF' },
                    { en: 'Virtual memory simulation with paging and TLB', tr: 'Sayfalama ve TLB ile sanal bellek simülasyonu' },
                    { en: 'Page replacement algorithms: FIFO, LRU, Optimal', tr: 'Sayfa değiştirme algoritmaları: FIFO, LRU, Optimal' },
                    { en: 'Performance metrics and comparative analysis', tr: 'Performans metrikleri ve karşılaştırmalı analiz' }
                ]
            },
            github: 'https://github.com/Ilayda828/OperatingSystems',
            screenshots: []
        },
        {
            id: 'proj-3',
            title: 'High-Performance Cache Simulator',
            titleTR: 'Yüksek Performanslı Önbellek Simülatörü',
            type: 'Academic',
            typeTR: 'Akademik',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Computer Organization',
            courseTR: 'Bilgisayar Organizasyonu',
            tags: ['C', 'Cache', 'Memory Hierarchy', 'Performance'],
            description: {
                en: 'Built a cycle-accurate cache simulator in C to analyze memory hierarchy performance with configurable parameters.',
                tr: 'Yapılandırılabilir parametrelerle bellek hiyerarşisi performansını analiz etmek için C dilinde döngü-doğru önbellek simülatörü oluşturdum.'
            },
            highlights: {
                title: { en: 'Key Features:', tr: 'Ana Özellikler:' },
                items: [
                    { en: 'Support for direct-mapped, set-associative, and fully-associative caches', tr: 'Doğrudan eşlemeli, küme-ilişkili ve tamamen-ilişkili önbellekler için destek' },
                    { en: 'LRU and FIFO replacement policies', tr: 'LRU ve FIFO değiştirme politikaları' },
                    { en: 'Hit/miss rate analysis with detailed statistics', tr: 'Ayrıntılı istatistiklerle isabet/kaçırma oranı analizi' },
                    { en: 'Memory trace file parsing and validation', tr: 'Bellek izleme dosyası ayrıştırma ve doğrulama' }
                ]
            },
            github: 'https://github.com/Ilayda828/CacheSim',
            screenshots: []
        },
        {
            id: 'proj-4',
            title: 'Binary Bomb Lab - Reverse Engineering Challenge',
            titleTR: 'Binary Bomb Lab - Tersine Mühendislik Meydan Okuması',
            type: 'Security',
            typeTR: 'Güvenlik',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Computer Organization',
            courseTR: 'Bilgisayar Organizasyonu',
            tags: ['Assembly', 'x86-64', 'Reverse Engineering', 'GDB'],
            description: {
                en: 'Defused a series of binary bombs through reverse engineering x86-64 assembly code and low-level debugging.',
                tr: 'x86-64 assembly kodunu tersine mühendislik ve düşük seviyeli hata ayıklama ile bir dizi binary bomb etkisiz hale getirdim.'
            },
            highlights: {
                title: { en: 'Skills Applied:', tr: 'Uygulanan Beceriler:' },
                items: [
                    { en: 'Advanced GDB debugging techniques', tr: 'Gelişmiş GDB hata ayıklama teknikleri' },
                    { en: 'Reading and understanding x86-64 assembly', tr: 'x86-64 assembly okuma ve anlama' },
                    { en: 'Stack frame analysis and function call conventions', tr: 'Stack frame analizi ve fonksiyon çağrı konvansiyonları' },
                    { en: 'Pattern recognition in compiled code', tr: 'Derlenmiş kodda örüntü tanıma' }
                ]
            },
            github: '',
            screenshots: []
        },
        {
            id: 'proj-5',
            title: '18-bit Custom Instruction Set Architecture',
            titleTR: '18-bit Özel Komut Kümesi Mimarisi',
            type: 'Hardware',
            typeTR: 'Donanım',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Computer Organization',
            courseTR: 'Bilgisayar Organizasyonu',
            tags: ['Logisim', 'Digital Design', 'ISA', 'CPU Architecture'],
            description: {
                en: 'Designed and implemented a complete 18-bit processor with custom ISA including ALU, control unit, and memory interface.',
                tr: 'ALU, kontrol birimi ve bellek arayüzü içeren özel ISA ile tam bir 18-bit işlemci tasarladım ve uyguladım.'
            },
            highlights: {
                title: { en: 'Architecture Components:', tr: 'Mimari Bileşenler:' },
                items: [
                    { en: 'Custom instruction set with 16+ operations', tr: '16+ işlemle özel komut kümesi' },
                    { en: 'Multi-cycle datapath with pipeline stages', tr: 'Boru hattı aşamaları ile çoklu döngü veri yolu' },
                    { en: 'Register file, ALU, and control logic design', tr: 'Kayıt dosyası, ALU ve kontrol mantığı tasarımı' },
                    { en: 'Comprehensive test programs and benchmarks', tr: 'Kapsamlı test programları ve benchmark\'lar' }
                ]
            },
            github: 'https://github.com/Ilayda828/18-bit_processor_design',
            screenshots: []
        },
        {
            id: 'proj-6',
            title: 'TSP with Penalties & Time Windows',
            titleTR: 'Cezalı & Zaman Pencereli Gezgin Satıcı Problemi',
            type: 'Optimization',
            typeTR: 'Optimizasyon',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Algorithm Analysis',
            courseTR: 'Algoritma Analizi',
            tags: ['Python', 'Optimization', 'Heuristics', 'Graph Theory'],
            description: {
                en: 'Developed heuristic solutions for the Traveling Salesman Problem with penalty costs and time window constraints.',
                tr: 'Ceza maliyetleri ve zaman penceresi kısıtlamaları ile Gezgin Satıcı Problemi için sezgisel çözümler geliştirdim.'
            },
            highlights: {
                title: { en: 'Algorithmic Approach:', tr: 'Algoritmik Yaklaşım:' },
                items: [
                    { en: 'Greedy nearest neighbor with penalty optimization', tr: 'Ceza optimizasyonu ile açgözlü en yakın komşu' },
                    { en: '2-opt and 3-opt local search improvements', tr: '2-opt ve 3-opt yerel arama iyileştirmeleri' },
                    { en: 'Time window feasibility checking', tr: 'Zaman penceresi fizibilite kontrolü' },
                    { en: 'Performance comparison across multiple datasets', tr: 'Birden fazla veri kümesinde performans karşılaştırması' }
                ]
            },
            github: 'https://github.com/Ilayda828/TSPwP',
            screenshots: []
        },
        {
            id: 'proj-7',
            title: 'MIPS Processor Simulation in Verilog',
            titleTR: 'Verilog\'da MIPS İşlemci Simülasyonu',
            type: 'Hardware',
            typeTR: 'Donanım',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Computer Organization',
            courseTR: 'Bilgisayar Organizasyonu',
            tags: ['Verilog', 'MIPS', 'HDL', 'Digital Logic'],
            description: {
                en: 'Implemented a functional MIPS processor simulator with support for core instruction set and pipelined execution.',
                tr: 'Temel komut kümesi ve boru hattı yürütmesi desteği ile işlevsel bir MIPS işlemci simülatörü uyguladım.'
            },
            highlights: {
                title: { en: 'Implementation Details:', tr: 'Uygulama Detayları:' },
                items: [
                    { en: 'Support for R-type, I-type, and J-type instructions', tr: 'R-tipi, I-tipi ve J-tipi komutlar için destek' },
                    { en: 'Hazard detection and forwarding logic', tr: 'Tehlike algılama ve yönlendirme mantığı' },
                    { en: 'Memory hierarchy with instruction and data caches', tr: 'Komut ve veri önbellekleri ile bellek hiyerarşisi' },
                    { en: 'Testbench development and waveform analysis', tr: 'Test tezgahı geliştirme ve dalga formu analizi' }
                ]
            },
            github: '',
            screenshots: []
        },
        {
            id: 'proj-8',
            title: 'Functional Programming Calculator & Interpreter',
            titleTR: 'Fonksiyonel Programlama Hesap Makinesi & Yorumlayıcı',
            type: 'Academic',
            typeTR: 'Akademik',
            year: 'Year 2 - 2024',
            yearTR: '2. Yıl - 2024',
            course: 'Programming Languages',
            courseTR: 'Programlama Dilleri',
            tags: ['Haskell', 'Functional Programming', 'Parsers', 'Lambda Calculus'],
            description: {
                en: 'Built an expression evaluator and mini-interpreter in Haskell demonstrating functional programming paradigms.',
                tr: 'Fonksiyonel programlama paradigmalarını gösteren Haskell dilinde bir ifade değerlendirici ve mini-yorumlayıcı oluşturdum.'
            },
            highlights: {
                title: { en: 'Functional Concepts:', tr: 'Fonksiyonel Kavramlar:' },
                items: [
                    { en: 'Pure functions and immutable data structures', tr: 'Saf fonksiyonlar ve değiştirilemez veri yapıları' },
                    { en: 'Higher-order functions and recursion', tr: 'Üst düzey fonksiyonlar ve özyineleme' },
                    { en: 'Parser combinators for expression parsing', tr: 'İfade ayrıştırma için ayrıştırıcı kombinatörleri' },
                    { en: 'Type inference and pattern matching', tr: 'Tip çıkarımı ve örüntü eşleştirme' }
                ]
            },
            github: '',
            screenshots: []
        },
        {
            id: 'proj-9',
            title: 'University Database Management System',
            titleTR: 'Üniversite Veritabanı Yönetim Sistemi',
            type: 'Web Application',
            typeTR: 'Web Uygulaması',
            year: 'Year 3 - 2025',
            yearTR: '3. Yıl - 2025',
            course: 'Database Management Systems',
            courseTR: 'Veritabanı Yönetim Sistemleri',
            tags: ['C#', 'SQL Server', 'ASP.NET', 'Database Design'],
            description: {
                en: 'Comprehensive university management system with role-based access for students, instructors, and administrators.',
                tr: 'Öğrenciler, eğitmenler ve yöneticiler için rol tabanlı erişime sahip kapsamlı üniversite yönetim sistemi.'
            },
            highlights: {
                title: { en: 'System Features:', tr: 'Sistem Özellikleri:' },
                items: [
                    { en: 'Normalized database schema (3NF) with 15+ tables', tr: 'Normalize edilmiş veritabanı şeması (3NF) ile 15+ tablo' },
                    { en: 'Stored procedures and triggers for business logic', tr: 'İş mantığı için saklı yordamlar ve tetikleyiciler' },
                    { en: 'Student enrollment, grade management, course scheduling', tr: 'Öğrenci kaydı, not yönetimi, ders programlama' },
                    { en: 'Admin panel for data management and reporting', tr: 'Veri yönetimi ve raporlama için yönetici paneli' }
                ]
            },
            github: 'https://github.com/Ilayda828',
            screenshots: ['db-login.jpg', 'db-customer.jpg', 'db-admin.jpg']
        }
        // Diğer projeler benzer şekilde eklenebilir...
    ]
};

// Veriyi global olarak kullanılabilir yap
if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}
