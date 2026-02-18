/* data.js - V11 (FULL EXPERIENCE TEXTS + LINKS + LOGOS) */

// --- BÖLÜM 1: PROJELER (PROJECTS) ---
const projectsData = [
    {
        id: "nasil-yani",
        title: "Nasıl Yani? Mobile App",
        category: "Mobile App • AI",
        folder: "nasil",
        descriptionTR: "Yapay zeka tabanlı ilişki ve iletişim tavsiyesi uygulaması.<br>• Yapay zeka destekli ilişki ve iletişim tavsiyeleri sunan mobil uygulamayı kurguladım ve tasarladım.<br>• Mevcut çözümleri analiz etmek ve pazardaki boşlukları belirlemek için rakip araştırması yaptım.<br>• Kullanıcı dostu bir deneyim sağlamak için tüm uygulama ekranlarını oluşturdum, özellikleri tanımladım ve uygulama sınırlarını belirledim.<br>• <strong>Kullanılan Araçlar:</strong> Figma, Kullanıcı Akışları, Özellik Önceliklendirme, Rakip Analizi, UX/UI Tasarımı, Prototipleme.",
        descriptionEN: "AI-Based Relationship & Communication Advice App.<br>• Conceptualized and designed a mobile app that provides AI-driven relationship and communication advice.<br>• Conducted competitor research to analyze existing solutions and identify gaps in the market.<br>• Created all app screens, defined features, and established app limitations to ensure a user-friendly experience.<br>• <strong>Key Tools:</strong> Figma, User Flows, Feature Prioritization, Competitor Analysis, UX/UI Design, Prototyping.",
        behance: "https://www.behance.net/gallery/230120531/Nasl-Yani-Mobile-App",
        media: Array.from({length: 5}, (_, i) => ({ type: "image", file: `nasil${i+1}.png` }))
    },
    {
        id: "guess-what",
        title: "Guess What Mobile Game",
        category: "Mobile Game • AI",
        folder: "gw",
        descriptionTR: "Yapay zeka tabanlı kelime tahmin oyunu.<br>• Arkadaşlarımdan gelen bir fikre dayanarak ekiple birlikte bir mobil oyun tasarladım.<br>• Neyin işe yarayıp neyin yaramadığını anlamak için benzer oyunları araştırdım.<br>• Oyunun öne çıkmasını sağlayacak özelliklere ve tasarıma karar verdim.<br>• Oyunun akışını görselleştirmek için wireframe'ler ve prototipler oluşturdum.<br>• <strong>Kullanılan Araçlar:</strong> Figma, Wireframing, Prototipleme, Rakip Araştırması, Kullanıcı Akışları.",
        descriptionEN: "AI-Based word guessing game.<br>• Designed a mobile game with a team based on an idea from my friends.<br>• Researched similar games to understand what works and what doesn’t.<br>• Decided on the game’s features and design to make it stand out.<br>• Created wireframes and prototypes to visualize the game’s flow.<br>• <strong>Key Tools:</strong> Figma, Wireframing, Prototyping, Competitor Research, User Flows.",
        behance: "https://www.behance.net/gallery/230124373/Guess-What-Mobile-Game",
        media: Array.from({length: 11}, (_, i) => ({ type: "image", file: `gw${i+1}.png` }))
    },
    {
        id: "kai-app",
        title: "KAI: AI Comic Book App",
        category: "Mobile App • AI",
        folder: "kai",
        descriptionTR: "Kişiye özel çizgi roman üreten yapay zeka uygulaması. Paywall tasarımı ve kullanıcı deneyimi iyileştirmeleri.",
        descriptionEN: "Mobile app generating personalized comic books using AI. Designed paywall screens and optimized user flows.",
        behance: "https://www.behance.net/gallery/243365817/KAI-AI-Comic-Book-App-Paywall-Design",
        media: [ { type: "video", file: "kaivideo.mp4" }, { type: "image", file: "kai1.jpg" }, { type: "image", file: "kai2.jpg" }, { type: "image", file: "kai3.jpg" }, { type: "image", file: "kai4.jpg" } ]
    },
    {
        id: "mobile-action",
        title: "Mobile Action Onboarding",
        category: "UX Research • Case Study",
        folder: "mobile-action",
        descriptionTR: "Kullanıcı hunilerini inceleyerek dönüşüm oranlarını artıran onboarding iyileştirmeleri.",
        descriptionEN: "Data-driven onboarding improvements based on funnel analysis to increase conversion rates.",
        behance: "https://www.behance.net/gallery/233902283/Mobile-Action-Onboarding-Case-Study",
        media: [ { type: "video", file: "mavideo.mp4" }, ...Array.from({length: 8}, (_, i) => ({ type: "image", file: `ma${i+1}.jpg` })) ]
    },
    {
        id: "hobby-doge",
        title: "Hobby Doge (Uni Project)",
        category: "Mobile App • Education",
        folder: "hd",
        descriptionTR: "Etkinlik oluşturma ve arkadaş edinme odaklı sosyal medya uygulaması.<br>• Sektör araştırması, kıyaslama (benchmarking) süreçlerini yönettim ve temel özellikleri belirledim.<br>• Sorunsuz bir deneyim sağlamak için kullanıcı akışları, UI/UX tasarımları ve wireframe'ler oluşturdum.<br>• Hem tasarım hem de geliştirme ekipleri için netlik sağlamak adına tam UI ve UX tasarımını yaptım.<br>• Nihai vizyonu iletmeye yardımcı olmak için prototipler geliştirdim.<br>• <strong>Kullanılan Araçlar:</strong> Figma, UI/UX Tasarımı, Wireframing, Prototipleme, Pazar Araştırması.",
        descriptionEN: "Social media application based on creating events and making friends.<br>• Led industry research, benchmarking, and defined key features.<br>• Created user flows, UI/UX designs, and wireframes to ensure a seamless experience.<br>• Designed the full UI and UX, ensuring clarity for both design and development teams.<br>• Developed prototypes to help communicate the final vision.<br>• <strong>Key Tools:</strong> Figma, UI/UX Design, Wireframing, Prototyping, Market Research.",
        behance: "https://www.behance.net/gallery/118481821/HobbyDoge-Mobile-Social-Media-App-Design",
        media: Array.from({length: 14}, (_, i) => ({ type: "image", file: `hd${i+1}.png` }))
    },
    {
        id: "probus",
        title: "Probus International",
        category: "Web Design • Framer",
        folder: "probus",
        descriptionTR: "Framer kullanılarak müşteri ihtiyaçlarına göre tasarlanmış, tamamen responsive web sitesi.<br>• Gereksinimleri anlamak için müşteri araştırması yaptım ve bunları tasarıma dönüştürdüm.<br>• Domain detaylarını özelleştirdim ve ürünü Framer araçlarını kullanarak yayına aldım.<br>• Cihazlar arasında sorunsuz bir deneyim sağlamak için mobil ve tablet uyumlu tasarımlar oluşturdum.<br>• <strong>Kullanılan Araçlar:</strong> Framer, Responsive Tasarım, Prototipleme, Web Tasarımı.",
        descriptionEN: "Designed a fully responsive website using Framer, tailored to the client’s needs.<br>• Conducted client research to understand requirements and translated them into design.<br>• Customized domain details and launched the product using Framer’s tools.<br>• Created mobile and tablet-friendly designs, ensuring a smooth experience across devices.<br>• <strong>Key Tools:</strong> Framer, Responsive Design, Prototyping, Web Design.",
        behance: "https://www.behance.net/gallery/197304863/probusinternationalcom",
        media: Array.from({length: 3}, (_, i) => ({ type: "image", file: `probus${i+1}.png` }))
    },
    {
        id: "health-wellness",
        title: "Health Wellness App",
        category: "UI/UX • Mobile",
        folder: "health-wellness",
        descriptionTR: "Sağlık ve zindelik takibi uygulaması.",
        descriptionEN: "Health and wellness tracking app interface.",
        behance: "https://www.behance.net/gallery/233375727/Health-Wellness-App",
        media: [{ type: "video", file: "hw.mp4" }, { type: "image", file: "hw1.webp" }, { type: "image", file: "hw2.webp" }]
    },
    {
        id: "interior-app",
        title: "Home Interior Design",
        category: "Restoration • Design",
        folder: "interior-app",
        descriptionTR: "Ev dekorasyon ve restorasyon uygulaması.",
        descriptionEN: "Home decoration and restoration app.",
        behance: "https://www.behance.net/gallery/233375057/Restoration-App",
        media: [{ type: "video", file: "r.mp4" }, { type: "image", file: "r1.png" }, { type: "image", file: "r2.png" }, { type: "image", file: "r3.png" }]
    },
    {
        id: "jotform-chatbot",
        title: "Jotform AI Chatbot",
        category: "AI Tools • Web",
        folder: "chat-bot",
        descriptionTR: "AI destekli chatbot arayüzü.",
        descriptionEN: "AI-powered chatbot interface.",
        behance: "https://www.behance.net/gallery/230647245/AI-Chat-Bot-for-Contact-Pages",
        media: [{ type: "video", file: "cb.mp4" }, ...Array.from({length: 4}, (_, i) => ({ type: "image", file: `cb${i+1}.png` }))]
    },
    {
        id: "form-agent",
        title: "Form Agent Landing",
        category: "Landing Page • AI",
        folder: "form-agent-landing",
        descriptionTR: "AI ajanları için landing page.",
        descriptionEN: "Landing page for AI agents.",
        behance: "https://www.behance.net/gallery/230646873/AI-Agent-Landing-Page-and-Interaction",
        media: [{ type: "video", file: "fal.mp4" }, { type: "image", file: "fal1.png" }]
    },
    {
        id: "contact-pages",
        title: "Contact Pages",
        category: "Web Design • UI",
        folder: "contact",
        descriptionTR: "Jotform için iletişim sayfaları.",
        descriptionEN: "Contact pages for Jotform.",
        behance: "https://www.behance.net/gallery/230646345/Contact-Pages-for-Jotform",
        media: [{ type: "image", file: "contact1.jpg" }, { type: "image", file: "contact2.jpg" }, { type: "image", file: "contact3.jpg" }]
    },
    {
        id: "mixed-listing",
        title: "Mixed Listing",
        category: "Dashboard • Redesign",
        folder: "mixed-listing",
        descriptionTR: "Veri listeleme ekranı yeniden tasarımı.",
        descriptionEN: "Data listing screen redesign.",
        behance: "https://www.behance.net/gallery/230645539/Mixed-Listing-Redesign-for-Jotform",
        media: Array.from({length: 13}, (_, i) => ({ type: "image", file: `mix${i+1}.png` }))
    },
    {
        id: "bug-tracking",
        title: "Bug Tracking Tool",
        category: "Internal Tool",
        folder: "bug-dashboard",
        descriptionTR: "Dahili hata takip aracı.",
        descriptionEN: "Internal bug tracking tool.",
        behance: "https://www.behance.net/gallery/230645361/Internal-Bug-Tracking-Tool-for-Jotform",
        media: Array.from({length: 9}, (_, i) => ({ type: "image", file: `cell${i+1}.png` }))
    },
    {
        id: "ticket-pages",
        title: "Ticket Pages",
        category: "Support System",
        folder: "L2-L3",
        descriptionTR: "Destek bileti yönetim sayfaları.",
        descriptionEN: "Support ticket management pages.",
        behance: "https://www.behance.net/gallery/230645227/L2-L3-Ticket-Pages-and-Details",
        media: Array.from({length: 6}, (_, i) => ({ type: "image", file: `l${i+1}.png` }))
    },
    {
        id: "staff-monitoring",
        title: "Staff Monitoring",
        category: "Dashboard",
        folder: "support-staff",
        descriptionTR: "Personel performans takip paneli.",
        descriptionEN: "Staff performance monitoring dashboard.",
        behance: "https://www.behance.net/gallery/230645083/Support-Staff-Monitoring-Dashboard",
        media: Array.from({length: 18}, (_, i) => ({ type: "image", file: `staff${i+1}.png` }))
    },
    {
        id: "admin-section",
        title: "Forum Admin",
        category: "Admin Panel",
        folder: "as",
        descriptionTR: "Forum yönetim paneli.",
        descriptionEN: "Forum admin panel.",
        behance: "https://www.behance.net/gallery/230644803/Admin-Section-on-Page",
        media: [{ type: "image", file: "as1.png" }, { type: "image", file: "as2.png" }]
    },
    {
        id: "enterprise-form",
        title: "Enterprise Form",
        category: "Enterprise • Web",
        folder: "enterprise-form",
        descriptionTR: "Kurumsal form tasarımları.",
        descriptionEN: "Enterprise form designs.",
        behance: "https://www.behance.net/gallery/230642467/Enterprise-Marketing-Elements-and-Pages",
        media: [{ type: "image", file: "ef1.png" }, { type: "image", file: "ef2.png" }, { type: "image", file: "ef3.png" }]
    },
    {
        id: "crm-dashboard",
        title: "CRM Dashboard",
        category: "Dashboard",
        folder: "crm",
        descriptionTR: "Müşteri ilişkileri yönetim paneli.",
        descriptionEN: "Customer relationship management dashboard.",
        behance: "https://www.behance.net/gallery/230642231/CRM-Dashboard-for-Jotform",
        media: Array.from({length: 8}, (_, i) => ({ type: "image", file: `crm${i+1}.png` }))
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        category: "Dashboard",
        folder: "cyber",
        descriptionTR: "Siber güvenlik ürün paneli.",
        descriptionEN: "Cyber security product dashboard.",
        behance: "https://www.behance.net/gallery/230470737/Cyber-Security-Product-Dashboard",
        media: Array.from({length: 3}, (_, i) => ({ type: "image", file: `cyber${i+1}.png` }))
    },
    {
        id: "customer-tool",
        title: "Customer Tool",
        category: "Internal Tool",
        folder: "customer",
        descriptionTR: "Müşteri destek aracı.",
        descriptionEN: "Customer support tool.",
        behance: "https://www.behance.net/gallery/194045935/Customer-Meeting-Tracker-Tool",
        media: [{ type: "image", file: "customer1.png" }, { type: "image", file: "customer2.png" }, { type: "image", file: "customer3.png" }]
    },
    {
        id: "jotform-enterprise",
        title: "Enterprise Branding",
        category: "Branding",
        folder: "ela",
        descriptionTR: "Kurumsal marka çalışmaları.",
        descriptionEN: "Corporate branding works.",
        behance: "https://www.behance.net/gallery/177047627/Jotform-Enterprise-Landing-Page-and-Branding",
        media: [{ type: "video", file: "ela.mp4" }, { type: "image", file: "ela.png" }]
    },
    {
        id: "tv-guard",
        title: "TV Guard",
        category: "E-Commerce",
        folder: "tv-guard",
        descriptionTR: "Mobil uyumlu e-ticaret sitesi.",
        descriptionEN: "Mobile responsive e-commerce site.",
        behance: "https://www.behance.net/gallery/244324175/TV-Guard-e-Commerce-Website-(Mobile-Responsive)",
        media: Array.from({length: 18}, (_, i) => ({ type: "image", file: `tv${i+1}.png` }))
    }
];

// --- 2. KİŞİSEL BİLGİLER ---
const aboutData = {
    name: "Burak Demirtaş",
    title: "Product Designer & Specialist",
    bioTR: "Dijital dünyada kullanıcı deneyimleri tasarlarken, fiziksel dünyada sınırları zorluyorum. 22+ Proje, 10 Ülke, Sayısız Zirve.",
    bioEN: "Crafting digital experiences in the studio, pushing limits in the wild. 22+ Projects, 10 Countries, Countless Peaks.",
    profileImage: "me.jpeg", 
    cvFile: "Burak Demirtas CV.pdf", 
    socials: {
        linkedin: "https://www.linkedin.com/in/mburakdemirtas/",
        behance: "https://www.behance.net/mburakdemirtas",
        email: "muburakdemirtas@gmail.com"
    },
    education: {
        school: "Hacettepe University",
        deptTR: "Bilgisayar Mühendisliği",
        deptEN: "Computer Science and Engineering",
        degree: "Bachelor's Degree",
        date: "Sept 2017 — Jun 2022",
        langInfo: "(100% English)",
        certLink: "https://drive.google.com/file/d/1WFvyF5r-km7OC6fXp7veuKtjVfqdWNA2/view"
    },
    volunteer: [
        {
            role: "President",
            org: "ACM Turkey",
            date: "Jun 2020 — Jun 2021",
            descTR: "Tüm Türkiye'deki ACM topluluklarını yöneten bu organizasyonda, diğer topluluklara Türkiye pazarında nasıl büyüyecekleri konusunda liderlik ettim ve danışmanlık verdim.",
            descEN: "In this organization, which manages all ACM communities across Turkiye, I oversaw and advised other communities on how to grow in the Turkish market."
        },
        {
            role: "Vice President",
            org: "ACM Hacettepe",
            date: "Jun 2018 — Jun 2021",
            descTR: "3.000+ üyeli topluluğu yönettim ve büyük ölçekli etkinlikleri koordine ettim. Bu deneyim, ekip koordinasyonu, operasyonel organizasyon ve dinamik ortamlarda hızlı, etkili karar verme yeteneklerimi güçlendirdi.",
            descEN: "Over a three-year period, I managed a community of 3,000+ members and coordinated large-scale events attracting tens of thousands of participants. This experience strengthened my abilities in team coordination, operational organization, and fast, effective decision-making in dynamic environments."
        }
    ],
    interests: ["🏂 Snowboard", "🥾 Trekking", "🌍 World Travel", "📸 Photography"],
    
    // EXPERIENCE (DETAYLI)
    experience: [
        {
            company: "Mobiversite",
            logo: "mobiversite.png",
            role: "Product Specialist",
            date: "Nov 2025 — Feb 2026",
            descTR: `<ul>
            <li>Geliştirme, tasarım ve pazarlama ekipleriyle yakın koordinasyon sağlayarak, fikir aşamasından canlı yayına kadar uçtan uca ürün yaşam döngüsünü sahiplendim.</li>
            <li>Rakip analizi, pazar araştırması, iş hedefleri ve maliyet kısıtlamalarına dayanarak ürün özelliklerini belirledim ve iş planlama kararlarına doğrudan katkıda bulundum.</li>
            <li>Onboarding, paywall ve gelir elde etme (monetization) ile ilgili ekranlarda A/B testleri tasarladım ve yönettim; sonuçları analiz ederek veriye dayalı ürün kararları aldım.</li>
            <li>Davranış kalıplarını anlamak, kayıp noktalarını belirlemek ve dönüşüm oranlarını optimize etmek için kullanıcı hunileri (funnels) oluşturdum ve analiz ettim.</li>
            <li>Anahtar kelime araştırması, yerelleştirme planlaması ve performans takibi dahil olmak üzere uygulama mağazası görünürlüğünü artırmak için ASO stratejilerine liderlik ettim.</li>
            <li>Freelance çevirmenlerle işbirliği yaparak ve çevirileri performans ve etkileşim metrikleri üzerinden doğrulayarak yerelleştirme süreçlerini yönettim.</li>
            <li>Temel uygulama işlevlerini desteklemek ve kullanıcı deneyimini iyileştirmek için AI promptları oluşturdum ve optimize ettim.</li>
            <li>Pazar trendlerini ve rakip reklam stratejilerini aktif olarak izledim, ürün yönünü ve gelir elde etme yaklaşımlarını buna göre uyarladım.</li>
            <li>Geliştirme öncesinde yeni özelliklerin ve uygulama fikirlerinin pazar büyüklüğünü, büyüme potansiyelini ve uygulanabilirliğini değerlendirmek için kullanıcı geri bildirimlerini ve pazar verilerini değerlendirdim.</li>
            <li>Hem mobil uygulamalar hem de web platformları için platform ve bölgesel gereksinimlere uygun yasal metinler hazırladım.</li>
            </ul>
            <p><strong>Sıfırdan Sorumlu Olduğum Uygulamalar:</strong> <a href="https://apps.apple.com/tr/app/kai-comic-maker-manga-manhwa/id6755991544?l" target="_blank">KAI iOS</a> - <a href="https://play.google.com/store/apps/details?id=com.ai.comic.book&hl" target="_blank">KAI Android</a> - <a href="https://apps.apple.com/tr/app/vinyl-value-scan-identify/id6755404792?l" target="_blank">Vinyl Value</a></p>
            <p><strong>Yayın Sonrası Sorumluluk:</strong> <a href="https://apps.apple.com/cy/app/irmo-yapay-zeka-video-foto/id6444157981?l" target="_blank">Irmo iOS</a> - <a href="https://play.google.com/store/apps/details?id=com.irmo.ai.art.generator&hl" target="_blank">Irmo Android</a></p>`,
            
            descEN: `<ul>
            <li>Took ownership of the end-to-end product lifecycle, from idea generation to live release, coordinating closely with development, design, and marketing teams.</li>
            <li>Defined product features based on competitor analysis, market research, business goals, and cost constraints, contributing directly to business planning decisions.</li>
            <li>Designed and managed A/B tests across onboarding, paywall, and monetization-related screens, analyzing results and driving data-informed product decisions.</li>
            <li>Built and analyzed user funnels to understand behavior patterns, identify drop-offs, and optimize conversion rates.</li>
            <li>Led ASO strategies to improve app store visibility, including keyword research, localization planning, and performance tracking.</li>
            <li>Managed localization processes by collaborating with freelance translators and validating translations through performance and engagement metrics.</li>
            <li>Created and optimized AI prompts to support core app functionalities and improve user experience.</li>
            <li>Actively monitored market trends and competitor advertising strategies, adapting product direction and monetization approaches accordingly.</li>
            <li>Evaluated user feedback and market data to assess market size, growth potential, and feasibility of new features and app ideas before development.</li>
            <li>Prepared legal texts for both mobile applications and web platforms in compliance with platform and regional requirements.</li>
            </ul>
            <p><strong>Responsible apps created from scratch:</strong> <a href="https://apps.apple.com/tr/app/kai-comic-maker-manga-manhwa/id6755991544?l" target="_blank">KAI iOS</a> - <a href="https://play.google.com/store/apps/details?id=com.ai.comic.book&hl" target="_blank">KAI Android</a> - <a href="https://apps.apple.com/tr/app/vinyl-value-scan-identify/id6755404792?l" target="_blank">Vinyl Value</a></p>
            <p><strong>Post-development responsibility:</strong> <a href="https://apps.apple.com/cy/app/irmo-yapay-zeka-video-foto/id6444157981?l" target="_blank">Irmo iOS</a> - <a href="https://play.google.com/store/apps/details?id=com.irmo.ai.art.generator&hl" target="_blank">Irmo Android</a></p>`
        },
        {
            company: "Brandefense",
            logo: "brandefense.webp",
            role: "Product Designer",
            date: "Sept 2024 — Aug 2025",
            descTR: `<ul>
            <li>Veri sızıntısı ve tehdit tespiti için siber güvenlik platformlarının tasarımına katkıda bulundum.</li>
            <li>Kritik güvenlik verilerini görüntülemek için sezgisel yönetici panelleri ve dashboardlar oluşturdum.</li>
            <li>Araçlar arasında UI tutarlılığını sağlamak için modüler bir tasarım sistemi kurdum ve sürdürdüm.</li>
            <li>UX'i teknik ihtiyaçlarla uyumlu hale getirmek için geliştiriciler ve analistlerle işbirliği yaptım.</li>
            <li>UX denetimlerine katılarak sorunları belirledim ve iyileştirmeler önerdim.</li>
            </ul>`,
            descEN: `<ul>
            <li>Contributed to designing cybersecurity platforms for data leak and threat detection.</li>
            <li>Created intuitive admin panels and dashboards to display critical security data.</li>
            <li>Built and maintained a modular design system to ensure UI consistency across tools.</li>
            <li>Collaborated with developers and analysts to align UX with technical needs.</li>
            <li>Participated in UX audits, identifying issues and suggesting improvements.</li>
            </ul>`
        },
        {
            company: "Jotform",
            logo: "jotform.png",
            role: "Jr. Product Designer",
            date: "Oct 2022 — Sept 2024",
            descTR: `<ul>
            <li>Veri görselleştirme, dashboardlar, dahili araçlar, tasarım sistemleri, landing page'ler ve pazarlama görselleri gibi geniş bir ürün yelpazesi tasarladım ve katkıda bulundum.</li>
            <li>Frontend geliştiricilerle yakın işbirliği içinde çalıştım ve sorunsuz entegrasyon sağlamak için bileşen kütüphaneleriyle uygulamalı olarak çalıştım.</li>
            <li>Rekabet analizi yaptım ve ürünün erken aşamalarında özellik tanımlamasına yardımcı oldum.</li>
            </ul>`,
            descEN: `<ul>
            <li>Designed and contributed to a wide range of product areas such as data visualizations, dashboards and internal tools, design systems, landing pages and marketing visuals.</li>
            <li>Collaborated closely with frontend developers and worked hands-on with component libraries to ensure seamless integration.</li>
            <li>Conducted competitive analysis and assisted in feature definition during the product’s early stages.</li>
            </ul>`
        },
        {
            company: "Jotform",
            logo: "jotform.png",
            role: "Product Designer Intern",
            date: "Jun 2022 — Aug 2022",
            descTR: `<ul>
            <li>Fikirden interaktif prototipe kadar yeni bir ürünü baştan sona tasarladım.</li>
            <li>Pratik ve etkili tasarımlar oluşturmak için kullanıcı ihtiyaçlarına ve sektör gereksinimlerine odaklandım.</li>
            <li>Süreç boyunca şirketin tasarım sistemini ve marka yönergelerini takip ettim.</li>
            <li>Ekip iletişimini geliştirmek için ürün yöneticileri ve geliştiricilerle yakın çalıştım.</li>
            </ul>`,
            descEN: `<ul>
            <li>Designed a new product from start to finish, from idea to interactive prototype.</li>
            <li>Focused on user needs and industry requirements to create practical and effective designs.</li>
            <li>Followed the company’s design system and brand guidelines throughout the process.</li>
            <li>Worked closely with product managers and developers to improve team communication.</li>
            </ul>`
        },
        {
            company: "Pixofun",
            logo: "pixofun.png",
            role: "UI & UX Designer Intern",
            date: "Jul 2021 — Sept 2021",
            descTR: `<ul>
            <li>Sosyal medya gönderileri, şirket duyuruları, video kurgu, UI/UX tasarımı ve Unity Aracı ile oyun geliştirme üzerinde çalıştım.</li>
            <li>Hızlı tempolu bir ortamda deneyim kazandım, çoklu görev yapma ve tasarım uyumluluğumu geliştirdim.</li>
            </ul>`,
            descEN: `<ul>
            <li>Worked on social media posts, company announcements, video editing, UI/UX design, and game development with Unity Tool.</li>
            <li>Gained experience in a fast-paced environment, improving multitasking and design adaptability.</li>
            </ul>`
        },
        {
            company: "Netax",
            logo: "netax.png",
            role: "Software Developer Intern",
            date: "Aug 2020 — Oct 2020",
            descTR: "<ul><li>Yazılım geliştirme süreçlerine destek sağladım.</li></ul>",
            descEN: "<ul><li>Supported software development processes.</li></ul>"
        }
    ],
    // Life Galeri aynı
    lifeGallery: [
        ...Array.from({length: 10}, (_, i) => ({ type: "image", file: `tr${i+1}.jpeg`, category: "Trekking", caption: "Trekking" })),
        ...Array.from({length: 7}, (_, i) => ({ type: "video", file: `trv${i+1}.mp4`, category: "Trekking", caption: "Nature" })),
        ...Array.from({length: 3}, (_, i) => ({ type: "image", file: `sb${i+1}.jpeg`, category: "Snowboard", caption: "Snowboard" })),
        { type: "video", file: "sbv1.mp4", category: "Snowboard", caption: "Snowboard Run" },
        ...Array.from({length: 7}, (_, i) => ({ type: "image", file: `h${i+1}.jpeg`, category: "Netherlands", caption: "Netherlands" })),
        ...Array.from({length: 6}, (_, i) => ({ type: "image", file: `i${i+1}.jpeg`, category: "Italy", caption: "Italy" })),
        ...Array.from({length: 2}, (_, i) => ({ type: "video", file: `iv${i+1}.mp4`, category: "Italy", caption: "Italy Vibes" })),
        ...Array.from({length: 6}, (_, i) => ({ type: "image", file: `is${i+1}.jpeg`, category: "Switzerland", caption: "Switzerland" })),
        ...Array.from({length: 3}, (_, i) => ({ type: "video", file: `isv${i+1}.mp4`, category: "Switzerland", caption: "Swiss Video" })),
        ...Array.from({length: 2}, (_, i) => ({ type: "image", file: `m${i+1}.jpeg`, category: "Monaco", caption: "Monaco" })),
        ...Array.from({length: 2}, (_, i) => ({ type: "video", file: `mv${i+1}.mp4`, category: "Monaco", caption: "Monte Carlo" })),
        ...Array.from({length: 12}, (_, i) => ({ type: "image", file: `n${i+1}.jpeg`, category: "France", caption: "Nice" })),
        ...Array.from({length: 18}, (_, i) => ({ type: "image", file: `p${i+1}.jpeg`, category: "France", caption: "Paris" })),
        ...Array.from({length: 19}, (_, i) => ({ type: "image", file: `sır${i+1}.jpeg`, category: "Serbia", caption: "Belgrade" })),
        ...Array.from({length: 6}, (_, i) => ({ type: "image", file: `kos${i+1}.jpeg`, category: "Kosovo", caption: "Kosovo" })),
        ...Array.from({length: 15}, (_, i) => ({ type: "image", file: `kar${i+1}.jpeg`, category: "Montenegro", caption: "Montenegro" })),
        ...Array.from({length: 11}, (_, i) => ({ type: "video", file: `karv${i+1}.mp4`, category: "Montenegro", caption: "Montenegro Video" }))
    ]
};