// ===============================================
// PORTFOLYO VERİ KAYNAĞI (DATA.JS)
// GitHub: https://github.com/Ilayda828
// ===============================================

const defaultPortfolioData = {
    profileImage: "profile.jpeg",
    
    // ============ DENEYİMLER ============
    experiences: [
        {
            id: "exp-2",
            title: "Software Test Engineer Intern",
            titleTR: "Yazılım Test Mühendisi Stajyeri",
            company: "Kafein Technology Solutions",
            date: "July 2026 - August 2026",
            dateTR: "Temmuz 2026 - Ağustos 2026",
            location: "YTÜ-Davutpaşa Kampüsü",
            locationTR: "YTÜ-Davutpaşa Kampüsü",
            achievements: [
                {
                    en: "<strong>E2E Test Automation:</strong> Built scalable Python 3.11 + Playwright (POM) frameworks for enterprise Data Privacy and Dynamic Data Masking (DDM) platforms.",
                    tr: "<strong>Uçtan Uca Test Otomasyonu:</strong> Kurumsal Veri Gizliliği ve Dinamik Veri Maskeleme (DDM) platformları için Python 3.11 + Playwright (Page Object Model) mimarisiyle ölçeklenebilir test çatıları geliştirdim."
                },
                {
                    en: "<strong>Performance Engineering:</strong> Executed multi-threaded load tests with JMeter and concurrent.futures to validate system SLAs under Keycloak authentication.",
                    tr: "<strong>Performans Mühendisliği:</strong> Keycloak kimlik doğrulama altyapısı altında sistem SLA'lerini doğrulamak için JMeter ve concurrent.futures ile çok iş parçacıklı yük testleri koştum."
                },
                {
                    en: "<strong>Security & Network Resilience:</strong> Automated SQLi/XSS payload validations and simulated backend outages via Playwright network route interception (page.route()).",
                    tr: "<strong>Güvenlik & Ağ Dayanıklılığı:</strong> SQLi/XSS saldırı vektörlerinin doğrulamasını otomatize ettim; Playwright ağ yönlendirme kesişimleri (page.route()) ile arka ofis kesintilerini simüle ettim."
                },
                {
                    en: "<strong>QA Operations & Management:</strong> Structured manual and automated test execution, boundary analysis, and traceability reporting through Testmo.",
                    tr: "<strong>QA Operasyonları & Yönetim:</strong> Manuel ve otomatize test koşumlarını, sınır değer analizlerini ve izlenebilirlik raporlamalarını Testmo üzerinden yapılandırdım."
                },
                {
                    en: "<strong>Environment & Code Quality:</strong> Managed remote Linux environments via MobaXterm, eliminated process memory leaks, and maintained clean Git/MR workflows.",
                    tr: "<strong>Ortam & Kod Kalitesi:</strong> MobaXterm üzerinden uzak Linux ortamlarını yönettim, süreç bellek sızıntılarını giderdim ve temiz Git/MR iş akışları sürdürdüm."
                }
            ]
        },
        {
            id: "exp-1",
            title: "Computer Engineering Student Intern",
            titleTR: "Bilgisayar Mühendisliği Stajyeri",
            company: "Digital Garden Technology",
            date: "July 2025 - August 2025",
            dateTR: "Temmuz 2025 - Ağustos 2025",
            location: "Ataşehir, İstanbul, Türkiye",
            locationTR: "Ataşehir, İstanbul, Türkiye",
            achievements: [
                {
                    en: "Performed API testing using Swagger API and Postman.",
                    tr: "Swagger API ve Postman kullanarak kapsamlı API testleri gerçekleştirdim."
                },
                {
                    en: "Researched potential Chrome extensions for the project and developed prototypes using HTML, CSS, JavaScript, and JSON.",
                    tr: "Proje için Chrome eklenti mimarisini araştırdım; HTML, CSS, JavaScript ve JSON kullanarak çalışan prototipler geliştirdim."
                },
                {
                    en: "Worked on JWT token management and API integrations to support secure authentication flows.",
                    tr: "Güvenli kimlik doğrulama akışlarını desteklemek için JWT token yönetimi ve API entegrasyonları üzerinde çalıştım."
                },
                {
                    en: "Created feature mockups using Excalidraw and contributed to UI and frontend development processes.",
                    tr: "Excalidraw ile özellik taslakları hazırlayarak kullanıcı arayüzü ve ön yüz geliştirme süreçlerine katkı sağladım."
                },
                {
                    en: "Conducted research on Swift and Kotlin and performed initial experiments to explore using the Chrome extension within the mobile application.",
                    tr: "Swift ve Kotlin dillerini araştırarak Chrome eklentisinin mobil uygulama içerisinde çalıştırılmasına yönelik fizibilite deneyleri yaptım."
                },
                {
                    en: "Developed components in Java following OOP principles and adopted clean-code practices.",
                    tr: "Nesne yönelimli programlama (OOP) prensipleri ve temiz kod standartlarına uygun Java bileşenleri geliştirdim."
                },
                {
                    en: "Actively participated in Agile processes, including sprint planning, task tracking, and team communication.",
                    tr: "Sprint planlama, görev takibi ve ekip içi iletişim süreçleri dahil olmak üzere Agile/Scrum operasyonlarına aktif katılım sağladım."
                }
            ]
        }
    ],

    // ============ SERTİFİKALAR ============
    certificates: [
        {
            id: "cert-ai-agents",
            title: "AI Agent at Work (LangGraph, CrewAI)",
            titleTR: "AI Agent İş Başında (LangGraph, CrewAI)",
            organization: "Udemy",
            organizationTR: "Udemy",
            date: "Aug 2026",
            dateTR: "Ağu 2026",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-qa-genai",
            title: "Generative AI for QA & Test Engineers",
            titleTR: "QA/Test Mühendisleri için Generative AI",
            organization: "Udemy",
            organizationTR: "Udemy",
            date: "July 2026",
            dateTR: "Tem 2026",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-pg-leader",
            title: "Leader in YOU Masterclass Series",
            titleTR: "Leader in YOU Masterclass Series",
            organization: "Procter & Gamble",
            organizationTR: "Procter & Gamble",
            date: "May 2026",
            dateTR: "May 2026",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-intro-genai",
            title: "Introduction to Generative AI",
            titleTR: "Üretken Yapay Zekaya Giriş",
            organization: "BTK Academy",
            organizationTR: "BTK Akademi",
            date: "Feb 2026",
            dateTR: "Şub 2026",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-turkcell-web",
            title: "Web Programming (HTML, HTML5 & CSS, JavaScript)",
            titleTR: "Web Programlama (HTML, HTML5 & CSS, JavaScript)",
            organization: "Turkcell Future Coders",
            organizationTR: "Turkcell Geleceği Yazanlar",
            date: "Aug 2025",
            dateTR: "Ağu 2025",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-git-github",
            title: "Version Control: Git & GitHub",
            titleTR: "Versiyon Kontrolleri: Git ve GitHub",
            organization: "BTK Academy",
            organizationTR: "BTK Akademi",
            date: "2025",
            dateTR: "2025",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-aws-cloud",
            title: "Cloud Computing with AWS",
            titleTR: "AWS ile Bulut Bilişim",
            organization: "BTK Academy",
            organizationTR: "BTK Akademi",
            date: "July 2025",
            dateTR: "Tem 2025",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-isbank-data-ai",
            title: "İşbank ProSchool (Data & AI Class)",
            titleTR: "İş Bankası ProSchool (Data & AI Class)",
            organization: "Toptalent.co",
            organizationTR: "Toptalent.co",
            date: "May 2025",
            dateTR: "May 2025",
            credentialId: "50528",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-isbank-it",
            title: "İşbank ProSchool (IT Class)",
            titleTR: "İş Bankası ProSchool (IT Class)",
            organization: "Toptalent.co",
            organizationTR: "Toptalent.co",
            date: "May 2025",
            dateTR: "May 2025",
            credentialId: "50528",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-borusan",
            title: "Borusan Technology School",
            titleTR: "Borusan Teknoloji Okulu Sertifikası",
            organization: "Toptalent.co",
            organizationTR: "Toptalent.co",
            date: "May 2025",
            dateTR: "May 2025",
            credentialId: "43452",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-iot-security",
            title: "Internet of Things (IoT) and Security",
            titleTR: "Internet of Things (IoT) and Security",
            organization: "BTK Academy",
            organizationTR: "BTK Akademi",
            date: "Feb 2025",
            dateTR: "Şub 2025",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-eczacibasi",
            title: "Eczacıbaşı Future School",
            titleTR: "Eczacıbaşı Gelecek Okulu",
            organization: "Toptalent.co",
            organizationTR: "Toptalent.co",
            date: "Feb 2025",
            dateTR: "Şub 2025",
            credentialId: "61919",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        },
        {
            id: "cert-datacamp-22",
            title: "Boğaziçi DataCamp'22 Data Science Summit",
            titleTR: "Boğaziçi DataCamp'22 Veri Bilimi Zirvesi",
            organization: "Compec - Boğaziçi University",
            organizationTR: "Compec - Boğaziçi Üniversitesi Bilişim Kulübü",
            date: "Mar 2023",
            dateTR: "Mar 2023",
            credentialId: "72968730074900",
            link: "https://www.linkedin.com/in/ilayda-ilhan-8b1451284/details/certifications/"
        }
    ],

    // ============ PROJELER (FAVORİLER DAHİL) ============
    projects: [
        // -------------------------------------------------------------
        // 4. KAT (2026 - SENIOR / TEST OTOMASYONU / İLERİ DONANIM / WEB)
        // -------------------------------------------------------------
        {
            id: "proj-tarifevim",
            floor: 4,
            isFavorite: true, // Favori Proje
            title: "Tarif Evim - Smart Recipe Management App",
            titleTR: "Tarif Evim - Akıllı Tarif Yönetim Platformu",
            type: "Full-Stack Web App & AI",
            typeTR: "Full-Stack Web & AI",
            year: "Year 4 - 2026",
            yearTR: "4. Yıl - 2026",
            tags: ["React.js", "Node.js", "MongoDB", "Express", "RESTful API", "JWT", "AI Assistant"],
            description: {
                en: "Full-stack smart culinary and recipe social platform featuring interactive ingredient search, secure JWT auth, AI meal assistant, and dynamic meal planning.",
                tr: "Malzeme bazlı akıllı arama, JWT tabanlı güvenli kimlik doğrulama, yapay zeka asistanı ve tarif yönetimi sunan modern full-stack web platformu."
            },
            highlights: [
                { en: "Live production web app with domain deployment", tr: "Canlı yayında aktif çalışan web platformu (tarifevim.com.tr)" },
                { en: "Responsive UI with MongoDB aggregation pipeline", tr: "MongoDB aggregation pipeline kullanan RESTful backend ve modern arayüz" }
            ],
            github: "https://github.com/Ilayda828/Tarif-Evim",
            liveDemo: "https://www.tarifevim.com.tr/", // Canlı Site Linki
            image: ""
        },
        {
            id: "proj-saucedemo",
            floor: 4,
            title: "SauceDemo Playwright Automation Suite",
            titleTR: "SauceDemo Playwright Test Otomasyonu",
            type: "Test Automation & QA",
            typeTR: "Test Otomasyonu & QA",
            year: "Year 4 - 2026",
            yearTR: "4. Yıl - 2026",
            tags: ["Playwright", "TypeScript", "Python", "E2E Testing", "POM", "CI/CD"],
            description: {
                en: "End-to-end automated UI & functional testing framework engineered with Playwright following Page Object Model (POM) principles.",
                tr: "Page Object Model (POM) prensipleriyle geliştirilmiş, SauceDemo platformu için uçtan uca UI ve işlevsel test otomasyon paketi."
            },
            highlights: [
                { en: "Robust Page Object Model (POM) architecture", tr: "Modüler Page Object Model mimarisi" },
                { en: "Parallel cross-browser test execution & reporting", tr: "Çoklu tarayıcıda paralel test koşumu ve detaylı raporlama" }
            ],
            github: "https://github.com/Ilayda828/saucedemo_playwright",
            image: ""
        },
        {
            id: "proj-mips-7x",
            floor: 4,
            title: "MIPS-7X Extended Single Cycle Processor",
            titleTR: "MIPS-7X Genişletilmiş Tek Döngü İşlemci",
            type: "Processor Architecture",
            typeTR: "İşlemci Mimarisi & ISA",
            year: "Year 4 - 2026",
            yearTR: "4. Yıl - 2026",
            tags: ["Verilog", "Logisim", "Custom ISA", "MIPS", "ALU", "Datapath"],
            description: {
                en: "Engineered single-cycle processor with an extended custom instruction set architecture (ISA), complete datapath, and hardware control unit.",
                tr: "Özel genişletilmiş komut kümesine (ISA), tam donanım veri yoluna ve kontrol birimine sahip tek döngü MIPS işlemci mimarisi tasarımı."
            },
            highlights: [
                { en: "Extended instruction decoding with custom branch/arithmetic opcodes", tr: "Özel dallanma ve aritmetik komutlar için genişletilmiş komut çözücü" },
                { en: "Complete hardware simulation & verification in Logisim/Verilog", tr: "Logisim ve Verilog üzerinde donanımsal doğrulama ve benzetim" }
            ],
            github: "https://github.com/Ilayda828/MIPS-7X-Extended-Single-Cycle-Processor-with-Custom-Instruction-Set-",
            image: ""
        },
        {
            id: "proj-mips-assembly",
            floor: 4,
            title: "MIPS Assembly Projects Suite",
            titleTR: "MIPS Assembly Projeleri Paketi",
            type: "Low-Level Programming",
            typeTR: "Düşük Seviyeli Programlama",
            year: "Year 4 - 2026",
            yearTR: "4. Yıl - 2026",
            tags: ["Assembly", "MIPS", "MARS Simulator", "Memory Alignment", "Recursion"],
            description: {
                en: "Collection of low-level algorithms, recursive routines, and bitwise manipulations implemented directly in native MIPS assembly language.",
                tr: "MIPS assembly dilinde doğrudan donanım yazmaçları, yığın işaretçileri ve bellek adreslemeleri kullanılarak geliştirilmiş algoritmik çözümler paketi."
            },
            highlights: [
                { en: "Stack frame manipulation and optimized recursive procedures", tr: "Stack frame yönetimi ve optimize edilmiş özyinelemeli yordamlar" },
                { en: "Bitwise mathematical transformations & hardware-level I/O", tr: "Bit düzeyinde matematiksel dönüşümler ve donanım seviyesi G/Ç" }
            ],
            github: "https://github.com/Ilayda828/mips-assembly-projects-",
            image: ""
        },
        {
            id: "proj-18bit-processor",
            floor: 4,
            title: "18-Bit Processor Architecture Design",
            titleTR: "18-Bit İşlemci Mimarisi Tasarımı",
            type: "Hardware Architecture",
            typeTR: "Donanım Mimarisi",
            year: "Year 4 - 2026",
            yearTR: "4. Yıl - 2026",
            tags: ["Verilog", "Logisim", "ISA", "Digital Logic", "CPU"],
            description: {
                en: "Custom 18-bit microprocessor architecture featuring multi-cycle pipeline execution, dedicated ALU, register file, and control unit.",
                tr: "Özel komut kümesine sahip, çoklu döngülü boru hattı (pipeline) ve kayıt öbeği içeren 18-bit mikroişlemci donanım tasarımı."
            },
            highlights: [
                { en: "Custom 18-bit instruction decoder & ALU datapath", tr: "Özel 18-bit komut çözücü ve ALU veri yolu" }
            ],
            github: "https://github.com/Ilayda828/18-bit_processor_design",
            image: ""
        },

        // -------------------------------------------------------------
        // 3. KAT (2025 - RAG AI / İŞLETİM SİSTEMLERİ / KURUMSAL VT / GELİŞMİŞ ALGORİTMALAR)
        // -------------------------------------------------------------
        {
            id: "proj-rag-helpdesk",
            floor: 3,
            isFavorite: true, // Favori Proje
            title: "University HelpDesk RAG System",
            titleTR: "Üniversite HelpDesk RAG Sistemi",
            type: "AI & NLP Architecture",
            typeTR: "Yapay Zeka & RAG Mimarisi",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Python", "Java", "RAG", "TF-IDF", "MRR Metric", "NLP"],
            description: {
                en: "Intelligent QA system using Retrieval-Augmented Generation for university administrative queries with source citations and dual reranking.",
                tr: "Üniversite idari soruları için kaynak alıntılı, çift aşamalı yeniden sıralama algoritmalarına sahip RAG soru-cevap mimarisi."
            },
            highlights: [
                { en: "SimpleReranker & JaccardReranker precision algorithms", tr: "SimpleReranker ve JaccardReranker doğruluk algoritmaları" },
                { en: "18 comprehensive unit & integration test suites", tr: "18 kapsamlı birim ve entegrasyon test paketi" },
                { en: "Integrated TraceBus monitoring for real-time latency", tr: "Gerçek zamanlı gecikme ölçümü için TraceBus izleme sistemi" }
            ],
            github: "https://github.com/Ilayda828/RAG-University-HelpDesk",
            image: ""
        },
        {
            id: "proj-db-web",
            floor: 3,
            isFavorite: true, // Favori Proje
            title: "Enterprise Database Management Suite (DB-Web)",
            titleTR: "Kurumsal Veritabanı Yönetim Sistemi (DB-Web)",
            type: "Full Stack & DB",
            typeTR: "Full Stack & VT",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C#", "ASP.NET Core", "MSSQL", "T-SQL", "3NF", "Triggers"],
            description: {
                en: "Enterprise web application built on a 3NF normalized schema with stored procedures, audit triggers, and role-based access.",
                tr: "3NF normalize şema, saklı yordamlar, tetikleyiciler ve rol tabanlı ASP.NET Core paneli içeren kurumsal veritabanı platformu."
            },
            highlights: [
                { en: "Multi-role authentication (Admin, Employee, Customer)", tr: "Çoklu rol yetkilendirme sistemi" },
                { en: "Automated audit trailing and inventory monitoring", tr: "Otomatik denetim izi ve stok takip mekanizması" }
            ],
            github: "https://github.com/Ilayda828/DB-Web",
            image: ""
        },
        {
            id: "proj-operatingsystems",
            floor: 3,
            title: "Operating Systems Suite & Custom Unix Shell",
            titleTR: "İşletim Sistemleri Paketi & Özel Shell",
            type: "Systems",
            typeTR: "Sistem Programlama",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C", "POSIX", "Bash", "Multithreading", "Mutex", "Pipes"],
            description: {
                en: "System-level OS project suite featuring custom Unix shell with pipes, signal handling, and mutex synchronization in C.",
                tr: "Proses yönetimi, I/O yönlendirmeli özel Unix kabuğu, mutex kilitli thread senkronizasyonu ve Bash otomasyon serisi."
            },
            highlights: [
                { en: "I/O Redirection, pipe support and signal handling", tr: "Giriş/çıkış yönlendirme, pipe desteği ve sinyal yakalama" }
            ],
            github: "https://github.com/Ilayda828/OperatingSystems",
            image: ""
        },
        {
            id: "proj-cachesim",
            floor: 3,
            title: "CacheSim - Memory Hierarchy Simulator",
            titleTR: "L1/L2 Önbellek Simülatörü",
            type: "Architecture",
            typeTR: "Bellek & Mimari",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C", "Memory Architecture", "LRU/FIFO", "Trace Simulation"],
            description: {
                en: "Cycle-accurate cache simulator modeling L1/L2 cache hit/miss/eviction dynamics from memory access trace files.",
                tr: "Bellek erişim izlerini ayrıştırarak L1/L2 önbellek isabet, kaçırma ve tahliye dinamiklerini modelleyen C uygulaması."
            },
            highlights: [
                { en: "Configurable cache parameters and replacement policies", tr: "Yapılandırılabilir önbellek parametreleri ve yer değiştirme politikaları" }
            ],
            github: "https://github.com/Ilayda828/CacheSim",
            image: ""
        },
        {
            id: "proj-tspwp",
            floor: 3,
            title: "Penalized TSP Optimization (TSPwP)",
            titleTR: "Cezalı Gezgin Satıcı Problemi Optimizasyonu",
            type: "Algorithms",
            typeTR: "Algoritma Analizi",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C", "Graph Theory", "Dynamic Programming", "2-Opt Local Search"],
            description: {
                en: "Algorithmic solutions for the Traveling Salesman Problem with skip penalty costs using dynamic programming and local search.",
                tr: "Şehir atlama cezalı Gezgin Satıcı Problemi için dinamik programlama ve 2-opt yerel arama algoritmaları."
            },
            highlights: [
                { en: "Time-space tradeoff optimization against NP-hard scale", tr: "NP-zor ölçekte zaman ve bellek optimizasyonu" }
            ],
            github: "https://github.com/Ilayda828/TSPwP",
            image: ""
        },
        {
            id: "proj-findmajority",
            floor: 3,
            title: "FindMajority - Boyer-Moore Voting Implementation",
            titleTR: "FindMajority - Çoğunluk Elemanı Bulma Algoritması",
            type: "Algorithms",
            typeTR: "Algoritma Tasarımı",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C", "Boyer-Moore", "Streaming Algorithm", "O(N) Time"],
            description: {
                en: "Optimal linear-time majority element detection in data streams utilizing Boyer-Moore voting algorithm with O(1) auxiliary space in pure C.",
                tr: "Saf C dilinde veri akışlarında O(N) zaman ve O(1) bellek karmaşıklığıyla çoğunluk elemanını tespit eden optimal algoritma."
            },
            highlights: [
                { en: "Space-efficient streaming analysis without auxiliary hashing", tr: "Ekstra bellek kullanmadan akış tabanlı çoğunluk tespiti" }
            ],
            github: "https://github.com/Ilayda828/FindMajority",
            image: ""
        },
        {
            id: "proj-battleletters",
            floor: 3,
            title: "Battle of Letters",
            titleTR: "Harflerin Savaşı (Battle of Letters)",
            type: "Functional Programming & Game",
            typeTR: "Fonksiyonel Programlama & Oyun",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Haskell", "Functional Programming", "Recursion", "Pattern Matching", "Game State"],
            description: {
                en: "Turn-based strategic word battle engine implemented in Haskell using pure functional state manipulation and recursive patterns.",
                tr: "Haskell dilinde saf fonksiyonel durum yönetimi, özyineleme ve örüntü eşleştirme kullanılarak geliştirilmiş sıra tabanlı kelime strateji oyunu."
            },
            highlights: [
                { en: "Pure functional game loop without side-effects", tr: "Yan etkisiz (pure) fonksiyonel oyun döngüsü" }
            ],
            github: "https://github.com/Ilayda828/Battle_of_Letters",
            image: ""
        },
        {
            id: "proj-ftwa",
            floor: 3,
            title: "FTWA - File Transfer Web Assistant",
            titleTR: "FTWA - Dosya Transfer Web Asistanı",
            type: "Logic Programming & Network",
            typeTR: "Mantıksal Programlama & Ağ",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Prolog", "Logic Programming", "Inference Engine", "Knowledge Base", "Networking"],
            description: {
                en: "Knowledge-base driven file transfer reasoning and protocol verification assistant developed using Prolog's unification engine.",
                tr: "Prolog mantıksal programlama dili ve çıkarım motoru kullanılarak geliştirilmiş dosya transfer kural doğrulama ve yönetim asistanı."
            },
            highlights: [
                { en: "Rule-based deduction for network routing constraints", tr: "Ağ yönlendirme kısıtları için kural tabanlı mantıksal çıkarım" }
            ],
            github: "https://github.com/Ilayda828/FTWA",
            image: ""
        },
        {
            id: "proj-companymgmt",
            floor: 3,
            title: "Company Management System",
            titleTR: "Şirket Yönetim Sistemi",
            type: "OOP & Architecture",
            typeTR: "Nesne Yönelimli Mimari",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Java", "OOP", "Design Patterns", "Employee Tracking", "Payroll"],
            description: {
                en: "Object-oriented corporate hierarchy and payroll calculation platform implementing enterprise architectural patterns.",
                tr: "Kurumsal hiyerarşi, bordro hesaplama ve departman yönetimini OOP kalıplarıyla modelleyen Java uygulaması."
            },
            highlights: [
                { en: "Decoupled domain models adhering to SOLID principles", tr: "SOLID prensiplerine uygun katmanlı iş modelleri" }
            ],
            github: "https://github.com/Ilayda828/CompanyManagementSystem",
            image: ""
        },
        {
            id: "proj-librarymgmt",
            floor: 3,
            title: "Library Management System",
            titleTR: "Kütüphane Yönetim Sistemi",
            type: "Software Engineering",
            typeTR: "Yazılım Mühendisliği",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Java", "Database", "CRUD", "Cataloging"],
            description: {
                en: "Comprehensive digital library cataloging, lending cycle management, and member tracking software.",
                tr: "Kitap kataloglama, ödünç alma döngüsü ve üye takip işlemlerini yöneten masaüstü yazılımı."
            },
            highlights: [
                { en: "Fast indexing and transaction log validation", tr: "Hızlı indeksleme ve işlem kayıt doğrulaması" }
            ],
            github: "https://github.com/Ilayda828/LibraryManagementSystem",
            image: ""
        },
        {
            id: "proj-leaguefixture",
            floor: 3,
            title: "League Fixture Generator",
            titleTR: "Lig Fikstür Üretim Algoritması",
            type: "Combinatorics",
            typeTR: "Kombinatorik & Algoritma",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Java", "Round-Robin", "Combinatorics", "Sports Logic"],
            description: {
                en: "Fair tournament schedule generator applying round-robin rotation algorithms with home/away balance constraints.",
                tr: "İç saha/deplasman dengesini gözeten round-robin rotasyon algoritmalarıyla adil lig fikstürü üreten yazılım."
            },
            highlights: [
                { en: "Automatic pairing with odd/even team count support", tr: "Tek/çift takım sayılarını destekleyen otomatik eşleştirme" }
            ],
            github: "https://github.com/Ilayda828/LeagueFixture",
            image: ""
        },
        {
            id: "proj-sudoku",
            floor: 3,
            title: "Sudoku Game & Backtracking Solver",
            titleTR: "Sudoku Oyunu & Backtracking Çözücü",
            type: "Game Logic & AI",
            typeTR: "Oyun Mantığı & Algoritma",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["Python", "Backtracking", "Constraint Satisfaction", "GUI"],
            description: {
                en: "Interactive Sudoku puzzle interface backed by a recursive backtracking solver capable of resolving 9x9 grids instantly.",
                tr: "Recursive backtracking algoritmasıyla saniyeler içinde 9x9 tahtayı çözebilen interaktif Sudoku oyunu."
            },
            highlights: [
                { en: "Constraint satisfaction algorithm with difficulty grading", tr: "Kısıt tatmin algoritmaları ve zorluk seviyesi üretimi" }
            ],
            github: "https://github.com/Ilayda828/SudokuGame",
            image: ""
        },
        {
            id: "proj-stringanalyzer",
            floor: 3,
            title: "String Analyzer & Lexical Parser",
            titleTR: "Metin Analiz Edici & Sözcüksel Ayrıştırıcı",
            type: "Compilers & Theory",
            typeTR: "Derleyici Teorisi",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["C", "Lexical Analysis", "Pattern Matching", "Parsing"],
            description: {
                en: "Lexical tokenizer and string statistics parser calculating entropy, frequency distribution, and pattern counts.",
                tr: "Metinlerdeki frekans dağılımını, entropiyi ve örüntüleri hesaplayan sözcüksel ayrıştırıcı ve tokenleştirici."
            },
            highlights: [
                { en: "High-throughput token stream processing in C", tr: "C dilinde yüksek performanslı token akışı işleme" }
            ],
            github: "https://github.com/Ilayda828/StringAnalyzer",
            image: ""
        },
        {
            id: "proj-fivb",
            floor: 3,
            title: "2025 FIVB Tournament Tracker",
            titleTR: "2025 FIVB Turnuva Takip Sistemi",
            type: "Web & Analytics",
            typeTR: "Web & Veri Analitiği",
            year: "Year 3 - 2025",
            yearTR: "3. Yıl - 2025",
            tags: ["JavaScript", "HTML5", "CSS3", "Sports Analytics", "Live Stats"],
            description: {
                en: "Interactive sports dashboard displaying FIVB volleyball tournament standings, live bracket progressions, and stats.",
                tr: "Voleybol turnuva fikstürlerini, puan durumlarını ve maç istatistiklerini sunan interaktif spor paneli."
            },
            highlights: [
                { en: "Dynamic bracket visualization and real-time standings", tr: "Dinamik turnuva ağacı görselleştirmesi ve puan tablosu" }
            ],
            github: "https://github.com/Ilayda828/2025_FIVB",
            image: ""
        },

        // -------------------------------------------------------------
        // 2. KAT (2024 - VERİ YAPILARI / C DİLİ SİSTEMLER / OYUNLAR / BİT MATEMATİĞİ)
        // -------------------------------------------------------------
        {
            id: "proj-modsplaytree",
            floor: 2,
            title: "ModSplayTree - Self-Adjusting Search Tree",
            titleTR: "ModSplayTree - Kendini Dengeleyen Arama Ağacı",
            type: "Data Structures",
            typeTR: "Gelişmiş Veri Yapıları",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["C", "Splay Tree", "Tree Rotations", "Pointers", "Amortized Analysis"],
            description: {
                en: "Self-adjusting binary search tree in pure C optimizing frequent queries via Zig-Zig and Zig-Zag pointer tree rotations.",
                tr: "Saf C dilinde pointer rotasyonlarıyla sık erişilen düğümleri köke taşıyan, kendini dengeleyen ikili arama ağacı veri yapısı."
            },
            highlights: [
                { en: "Strict memory safety and amortized query optimizations in C", tr: "C dilinde sızıntısız bellek yönetimi ve optimize edilmiş rotasyonlar" }
            ],
            github: "https://github.com/Ilayda828/ModSplayTree",
            image: ""
        },
        {
            id: "proj-binaryconverter",
            floor: 2,
            title: "Binary Data Converter",
            titleTR: "İkili Sayı & Veri Dönüştürücü",
            type: "Bitwise Computing",
            typeTR: "Bit Düzeyinde Hesaplama",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["C", "Bitwise Operations", "IEEE-754", "Radix Conversion"],
            description: {
                en: "Low-level radix conversion tool transforming decimal, binary, octal, and hexadecimal values with IEEE-754 floating point decoding in C.",
                tr: "C dilinde ikili, sekizli, ondalık ve onaltılık tabanlar arasında dönüşüm yapan, IEEE-754 kayan nokta bit çözümleme aracı."
            },
            highlights: [
                { en: "Direct bitmasking and shift register operations in pure C", tr: "Saf C dilinde doğrudan bit maskeleme ve kaydırma işlemleri" }
            ],
            github: "https://github.com/Ilayda828/BinaryDataConverter",
            image: ""
        },
        {
            id: "proj-genericarray",
            floor: 2,
            title: "Generic Dynamic Array Implementation",
            titleTR: "Generic Dinamik Dizi Kütüphanesi",
            type: "Data Structures",
            typeTR: "Veri Yapıları & Generics",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["Java", "Generics", "Memory Management", "Collections"],
            description: {
                en: "Custom generic dynamic array container implemented in Java featuring automatic resizing, custom iterators, and bounds checking.",
                tr: "Java Generics altyapısı kullanılarak sıfırdan yazılmış, otomatik kapasite artıran ve sınır kontrolü yapan dinamik dizi koleksiyonu."
            },
            highlights: [
                { en: "Type-safe generic container with amortized O(1) append", tr: "Tip güvenli (type-safe) ve amortize O(1) ekleme zamanlı dinamik konteyner" }
            ],
            github: "https://github.com/Ilayda828/GenericDynamicArray",
            image: ""
        },
        {
            id: "proj-infinitemultiplier",
            floor: 2,
            title: "Infinite Digit Multiplier",
            titleTR: "Sonsuz Basamaklı Çarpma Motoru",
            type: "Arbitrary Precision",
            typeTR: "Büyük Sayı Aritmetiği",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["C", "BigInteger", "Arbitrary Precision", "Dynamic Memory", "Algorithms"],
            description: {
                en: "Arbitrary-precision BigInteger arithmetic engine in pure C multiplying arbitrarily large numbers exceeding standard CPU 64-bit limits.",
                tr: "Standart 64-bit donanım sınırlarını aşan devasa sayıları C dilinde dinamik bellek ve basamak dizileriyle çarpan aritmetik motoru."
            },
            highlights: [
                { en: "Digit-by-digit carry arithmetic with dynamic memory buffers", tr: "Dinamik bellek tamponlarıyla basamak basamak taşıma ve çarpma mantığı" }
            ],
            github: "https://github.com/Ilayda828/InfiniteDigitMultiplier",
            image: ""
        },
        {
            id: "proj-snakegame",
            floor: 2,
            title: "Snake Game - Arcade Engine",
            titleTR: "Yılan Oyunu - Arcade Motoru",
            type: "Arcade & Graphics",
            typeTR: "Arcade Oyunu & C++",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["C++", "OOP", "2D Graphics", "Collision Detection", "Game Loop"],
            description: {
                en: "Classic retro arcade Snake game developed in C++ with custom game loop, coordinate collision detection, and score persistence.",
                tr: "C++ dilinde nesne yönelimli mimari, koordinat tabanlı çarpışma algılama ve FPS kontrollü oyun döngüsüyle geliştirilmiş retro 2D yılan oyunu."
            },
            highlights: [
                { en: "Frame-rate synchronized rendering and OOP game state", tr: "FPS senkronizasyonlu çizim motoru ve OOP oyun durumu yönetimi" }
            ],
            github: "https://github.com/Ilayda828/SnakeGame",
            image: ""
        },
        {
            id: "proj-linkedlist",
            floor: 2,
            title: "Doubly & Singly Linked List Suite",
            titleTR: "Bağlı Liste Veri Yapısı Paketi",
            type: "Data Structures",
            typeTR: "Veri Yapıları",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["C", "Pointers", "Memory Allocation", "Data Structures"],
            description: {
                en: "Comprehensive linked list library implementing insertion, deletion, sorting, and cycle detection from scratch in C.",
                tr: "Tek ve çift yönlü bağlı liste algoritmaları, döngü tespiti ve bellek tahsis yöntemlerini C'de sıfırdan uygulayan paket."
            },
            highlights: [
                { en: "No-leak dynamic heap memory management", tr: "Sızıntısız dinamik heap bellek yönetimi" }
            ],
            github: "https://github.com/Ilayda828/LinkedList",
            image: ""
        },
        {
            id: "proj-carpark",
            floor: 2,
            title: "Car Park Automated Management",
            titleTR: "Otomatik Otopark Yönetim Sistemi",
            type: "System Simulation",
            typeTR: "Sistem Simülasyonu",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["Java", "OOP", "Queue Simulation", "Fee Calculation"],
            description: {
                en: "Simulated smart parking lot software handling vehicle queuing, dynamic spot allocation, and fee processing.",
                tr: "Kuyruk simülasyonuyla araç giriş/çıkışlarını, dinamik park yeri tahsisini ve ücret hesaplamasını yöneten sistem."
            },
            highlights: [
                { en: "Queue and stack structures for vehicle slot routing", tr: "Araç yönlendirme için kuyruk ve yığın veri yapılarının entegrasyonu" }
            ],
            github: "https://github.com/Ilayda828/Car_Park",
            image: ""
        },
        {
            id: "proj-trafficcontrol",
            floor: 2,
            title: "Traffic Control Simulator",
            titleTR: "Trafik Kontrol Simülatörü",
            type: "Simulation",
            typeTR: "Modelleme & Simülasyon",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["Java", "Concurrency", "Queues", "State Machine"],
            description: {
                en: "Simulated multi-intersection traffic flow optimizer managing signal timings via stochastic vehicle queues.",
                tr: "Kavşaklardaki araç yoğunluğuna göre sinyal sürelerini optimize eden çoklu trafik akış simülasyonu."
            },
            highlights: [
                { en: "Finite State Machine (FSM) modeling for traffic lights", tr: "Trafik ışıkları için Sonlu Durum Makinesi (FSM) modeli" }
            ],
            github: "https://github.com/Ilayda828/TrafficControlSimulator",
            image: ""
        },
        {
            id: "proj-adventuregame",
            floor: 2,
            title: "Adventure Game - Text-Based RPG",
            titleTR: "Macera Oyunu - Metin Tabanlı RPG",
            type: "Game Logic",
            typeTR: "Oyun Geliştirme",
            year: "Year 2 - 2024",
            yearTR: "2. Yıl - 2024",
            tags: ["Java", "OOP", "Game Loops", "Inheritance", "Inventory"],
            description: {
                en: "Modular text RPG incorporating hero classes, combat mechanics, loot drop algorithms, and inventory management.",
                tr: "Karakter sınıfları, canavar dövüş mekanikleri ve envanter sistemini OOP prensipleriyle uygulayan metin tabanlı RPG oyunu."
            },
            highlights: [
                { en: "Polymorphic battle and inventory item hierarchy", tr: "Polimorfik savaş ve envanter eşya hiyerarşisi" }
            ],
            github: "https://github.com/Ilayda828/AdventureGame",
            image: ""
        },

        // -------------------------------------------------------------
        // 1. KAT (2023 - BİLGİSAYAR BİLİMİ TEMELLERİ / PROGRAMLAMA PARADİGMALARI)
        // -------------------------------------------------------------
        {
            id: "proj-progparadigms",
            floor: 1,
            title: "Programming Languages Paradigms & Grammar Suite",
            titleTR: "Programlama Dilleri Paradigmaları & Gramer Paketi",
            type: "Language Theory",
            typeTR: "Dil Teorisi & Temeller",
            year: "Year 1 - 2023",
            yearTR: "1. Yıl - 2023",
            tags: ["C", "Grammar", "Syntax Trees", "Recursion", "Paradigms"],
            description: {
                en: "Foundational computer science implementations exploring lexical structure, syntax parsing, and recursion mechanics.",
                tr: "Bilgisayar mühendisliği temellerinde sözdizimi ayrıştırma, özyineleme mekanikleri ve dil teorisi üzerine geliştirilmiş temel çalışmalar."
            },
            highlights: [
                { en: "Structural recursive evaluation of expression trees", tr: "İfade ağaçlarının yapısal özyinelemeli değerlendirmesi" }
            ],
            github: "https://github.com/Ilayda828",
            image: ""
        }
    ]
};

window.portfolioData = defaultPortfolioData;