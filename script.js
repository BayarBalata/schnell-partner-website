const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  en: {
    metaTitle: "SCHNELL Lubricants Germany | High Performance Lubricants & Additives",
    "language.selector": "Language selector",
    "nav.toggle": "Open navigation",
    "nav.about": "About Schnell",
    "nav.products": "Products",
    "nav.oilFinder": "Oil Finder",
    "nav.markets": "Markets",
    "nav.agents": "Agents",
    "nav.contact": "Contact",
    "nav.support": "Partner Support",
    "hero.eyebrow": "German lubricants, additives and car care systems",
    "hero.title1": "SCHNELL",
    "hero.title2": "Performance",
    "hero.title3": "3 in 1",
    "hero.copy": "A performance-led lubricant and additive brand built around speed, precision, quality control, and worldwide distribution support.",
    "hero.primary": "View Product Range",
    "hero.secondary": "Contact Distributor",
    "hero.panel.label": "Featured system",
    "hero.panel.title": "Motor flush + injector fuel treatment + motor treatment",
    "hero.panel.copy": "Designed to support cleaner internals, restored response, and a more consistent service experience.",
    "metrics.countries": "countries with distribution partners",
    "metrics.quality": "quality management positioning",
    "metrics.germany.value": "Germany",
    "metrics.germany": "production and engineering identity",
    "metrics.support": "support center emphasis",
    "about.eyebrow": "Business position",
    "about.title": "Built for workshops, distributors, fleets and performance-focused drivers.",
    "about.copy1": "SCHNELL, meaning “fast” in German, positions itself around automotive speed, precision and consistent manufacturing quality. The public business story highlights founder Klaus Bosshammer, German production, Asian sales headquarters, operations in the UAE and Philippines, and a partner network across more than 80 countries.",
    "about.copy2": "The brand’s commercial advantage is a broad aftermarket catalog: additives, spray-can products, engine oils, gear oils, coolants, brake fluids, racing, marine, motorcycle, industrial and OEM solutions.",
    "about.proof1": "German engineering",
    "about.proof2": "Virgin base oil positioning",
    "about.proof3": "Global partner network",
    "about.promise.label": "Brand promise",
    "about.promise.title": "Quality. Performance. Protection.",
    "products.eyebrow": "SCHNELL product range",
    "products.title": "One catalog for automotive, commercial and industrial lubrication needs.",
    "products.filters": "Product filters",
    "catalog.eyebrow": "Detailed product catalog",
    "catalog.title": "Browse the SCHNELL range product by product.",
    "catalog.copy": "Use the segment filters, then open each family to review available product names before confirming availability for Iraq.",
    "catalog.filters": "Catalog filters",
    "catalog.families": "Product families",
    "catalog.products": "Products",
    "catalog.filter.all": "All lines",
    "catalog.filter.lubricants": "Lubricants",
    "catalog.filter.additives": "Additives",
    "catalog.filter.fluids": "Fluids",
    "catalog.filter.specialty": "Specialty",
    "catalog.filter.oem": "OEM",
    "catalog.items": "products",
    "catalog.source": "Based on SCHNELL public product pages. Confirm packaging, specifications, TDS and SDS before selling.",
    "filters.all": "All",
    "filters.automotive": "Automotive",
    "filters.commercial": "Commercial",
    "filters.specialty": "Specialty",
    "product.1.title": "Performance Additives",
    "product.1.copy": "Fuel, engine and service additives for workshops and performance-minded drivers.",
    "product.2.title": "Passenger Car Lubricants",
    "product.2.copy": "Engine oil solutions for modern passenger vehicles and everyday service programs.",
    "product.3.title": "Transmission & Gear Oils",
    "product.3.copy": "Lubrication for gearboxes, transmissions and driveline protection.",
    "product.4.title": "Performance Coolants",
    "product.4.copy": "Cooling products for heat management, corrosion resistance and system reliability.",
    "product.5.title": "Performance Brake Fluids",
    "product.5.copy": "Brake fluid range for confident braking response and service consistency.",
    "product.6.title": "Car Care Kit Products",
    "product.6.copy": "Care and maintenance products for retail, garages and detailing-oriented sellers.",
    "product.7.title": "Commercial Lubricants",
    "product.7.copy": "Lubricants for trucks, heavy service environments and fleet maintenance.",
    "product.8.title": "Industry Oils",
    "product.8.copy": "Industrial oil options for machinery, equipment and production settings.",
    "product.9.title": "Marine Lubricants",
    "product.9.copy": "Marine-focused lubrication for demanding operating conditions near water.",
    "product.10.title": "Motorcycle Oils",
    "product.10.copy": "Motorcycle lubricants and additives for two-wheel performance and reliability.",
    "product.11.title": "Racing Lubricants",
    "product.11.copy": "High-load lubricants aligned with SCHNELL’s fast, performance-led brand identity.",
    "product.12.title": "OEM Solutions",
    "product.12.copy": "Private-label and original-equipment programs for regional partners and suppliers.",
    "oil.eyebrow": "Oil finder",
    "oil.title": "Select your vehicle to find a suitable SCHNELL oil.",
    "oil.copy": "Choose the vehicle brand, model, year and trim. The current recommendations are sample data and must be replaced with verified application data before production use.",
    "oil.brand": "Car brand",
    "oil.model": "Model",
    "oil.year": "Year",
    "oil.trim": "Trim / engine",
    "oil.button": "Show recommendation",
    "oil.placeholder.brand": "Select brand",
    "oil.placeholder.model": "Select model",
    "oil.placeholder.year": "Select year",
    "oil.placeholder.trim": "Select trim",
    "oil.result.label": "Recommendation",
    "oil.empty.title": "Select a full vehicle profile.",
    "oil.empty.copy": "The suggested oil type will appear here after you choose brand, model, year and trim.",
    "oil.result.vehicle": "Vehicle",
    "oil.result.oil": "Oil type",
    "oil.result.product": "Suggested product",
    "oil.result.spec": "Specification",
    "oil.result.capacity": "Approx. capacity",
    "oil.result.interval": "Service interval",
    "oil.warning": "Sample recommendation only. Always verify viscosity, specification and capacity against the vehicle owner’s manual or official SCHNELL application data.",
    "markets.eyebrow": "Why choose product of Germany?",
    "markets.title": "Consistent quality for every region.",
    "markets.copy": "The strongest market message is consistency: the same quality, performance and protection across countries. That matters for distributors because it makes the offer easier to sell, support and train across workshop networks.",
    "markets.feature1.title": "Quality assurance",
    "markets.feature1.copy": "Built around strict quality control and standards-led production.",
    "markets.feature2.title": "Eco responsibility",
    "markets.feature2.copy": "Formulations positioned around lower impact and efficient operation.",
    "markets.feature3.title": "Advanced formulations",
    "markets.feature3.copy": "Research-led product development for modern vehicles and machinery.",
    "markets.feature4.title": "Distributor ready",
    "markets.feature4.copy": "A catalog broad enough for garages, fleets, industry and retail channels.",
    "system.eyebrow": "Service story",
    "system.title": "Performance 3 in 1 keeps the workshop conversation simple.",
    "system.step1.title": "Motor Flush",
    "system.step1.copy": "Starts with internal cleaning during the oil-change workflow.",
    "system.step2.title": "Injector Fuel Treatment",
    "system.step2.copy": "Targets fuel-system cleanliness and combustion consistency.",
    "system.step3.title": "Motor Treatment",
    "system.step3.copy": "Completes the service package with performance and protection positioning.",
    "agents.eyebrow": "Iraq agent network",
    "agents.title": "Find available SCHNELL agents across Iraq.",
    "agents.copy": "This preview uses mock agent data for Erbil, Duhok, Mosul and Baghdad. Replace it with verified names, phone numbers and exact addresses before publishing.",
    "agents.filters": "Agent city filters",
    "agents.filter.all": "All cities",
    "agents.city.erbil": "Erbil",
    "agents.city.duhok": "Duhok",
    "agents.city.mosul": "Mosul",
    "agents.city.baghdad": "Baghdad",
    "agents.map": "Map of SCHNELL agents in Iraq",
    "agents.list": "Agent list",
    "agents.list.title": "Mock agent directory",
    "agents.disclaimer": "Map pins are mock locations for planning only.",
    "agents.mock": "Mock data",
    "agents.phone": "Phone pending",
    "agents.type": "Authorized agent",
    "agents.address": "Address",
    "contact.eyebrow": "Get in touch",
    "contact.title": "Technical support, distribution and partnership inquiries.",
    "contact.address.germany": "Heinrich-Hertz-Strasse 11, 34123 Kassel, Germany",
    "contact.address.iraq": "Kurdistan Region, Duhok, Iraq distributor",
    "social.label": "Social media",
    "social.title": "Follow our official pages",
    "social.facebook": "Facebook",
    "social.instagram": "Instagram",
    "social.facebook.aria": "Facebook page",
    "social.instagram.aria": "Instagram page",
    "social.note": "Follow us on Facebook and Instagram.",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.submit": "Submit Inquiry",
    "footer.copy": "High-performance lubricants, additives and car care products with German manufacturing identity and global distribution reach.",
    "footer.link1": "Air-Con Treatment",
    "footer.link2": "Car Care Kit",
    "footer.link3": "Commercial Lubricants",
    "footer.link4": "Marine Lubricants",
    "footer.link5": "OEM Solutions",
    "footer.rights": "© 2026 SCHNELL Lubricants. Partner-ready concept site."
  },
  ar: {
    metaTitle: "زيوت SCHNELL الألمانية | زيوت وإضافات عالية الأداء",
    "language.selector": "اختيار اللغة",
    "nav.toggle": "فتح القائمة",
    "nav.about": "عن شنيل",
    "nav.products": "المنتجات",
    "nav.oilFinder": "اختيار الزيت",
    "nav.markets": "الأسواق",
    "nav.agents": "الوكلاء",
    "nav.contact": "اتصل بنا",
    "nav.support": "دعم الشركاء",
    "hero.eyebrow": "زيوت ألمانية وإضافات وأنظمة عناية بالسيارات",
    "hero.title1": "SCHNELL",
    "hero.title2": "أداء عال",
    "hero.title3": "3 في 1",
    "hero.copy": "علامة زيوت وإضافات تقودها فكرة الأداء، وتقوم على السرعة والدقة وضبط الجودة ودعم التوزيع العالمي.",
    "hero.primary": "عرض المنتجات",
    "hero.secondary": "اتصل بالموزع",
    "hero.panel.label": "النظام المميز",
    "hero.panel.title": "تنظيف المحرك + معالجة وقود البخاخات + حماية المحرك",
    "hero.panel.copy": "مصمم لدعم نظافة الأجزاء الداخلية، واستعادة الاستجابة، وتقديم تجربة خدمة أكثر ثباتا.",
    "metrics.countries": "دولة مع شركاء توزيع",
    "metrics.quality": "تموضع قائم على إدارة الجودة",
    "metrics.germany.value": "ألمانيا",
    "metrics.germany": "هوية إنتاج وهندسة",
    "metrics.support": "تركيز على مركز الدعم",
    "about.eyebrow": "الموقع التجاري",
    "about.title": "مصممة للورش والموزعين والأساطيل والسائقين الباحثين عن الأداء.",
    "about.copy1": "تتمحور SCHNELL، ومعناها “سريع” بالألمانية، حول سرعة السيارات والدقة وجودة التصنيع المستمرة. وتبرز قصة العلامة مؤسسها كلاوس بوسهامر، والإنتاج الألماني، ومقر المبيعات الآسيوي، والعمليات في الإمارات والفلبين، وشبكة شركاء في أكثر من 80 دولة.",
    "about.copy2": "ميزة العلامة التجارية هي كتالوج واسع لسوق ما بعد البيع: إضافات، منتجات بخاخ تقنية، زيوت محركات، زيوت تروس، سوائل تبريد، سوائل فرامل، منتجات سباق، بحرية، دراجات نارية، صناعية وحلول OEM.",
    "about.proof1": "هندسة ألمانية",
    "about.proof2": "تموضع بزيوت أساس بكر",
    "about.proof3": "شبكة شركاء عالمية",
    "about.promise.label": "وعد العلامة",
    "about.promise.title": "جودة. أداء. حماية.",
    "products.eyebrow": "مجموعة منتجات SCHNELL",
    "products.title": "كتالوج واحد لاحتياجات زيوت السيارات والتجاري والصناعي.",
    "products.filters": "فلاتر المنتجات",
    "catalog.eyebrow": "كتالوج منتجات مفصل",
    "catalog.title": "تصفح مجموعة SCHNELL منتجا بمنتج.",
    "catalog.copy": "استخدم فلاتر القطاعات، ثم افتح كل عائلة لمراجعة أسماء المنتجات المتاحة قبل تأكيد توفرها في العراق.",
    "catalog.filters": "فلاتر الكتالوج",
    "catalog.families": "عائلات المنتجات",
    "catalog.products": "المنتجات",
    "catalog.filter.all": "كل الخطوط",
    "catalog.filter.lubricants": "الزيوت",
    "catalog.filter.additives": "الإضافات",
    "catalog.filter.fluids": "السوائل",
    "catalog.filter.specialty": "متخصص",
    "catalog.filter.oem": "OEM",
    "catalog.items": "منتجات",
    "catalog.source": "استنادا إلى صفحات منتجات SCHNELL العامة. تأكد من العبوات والمواصفات وملفات TDS وSDS قبل البيع.",
    "filters.all": "الكل",
    "filters.automotive": "السيارات",
    "filters.commercial": "تجاري",
    "filters.specialty": "متخصص",
    "product.1.title": "إضافات الأداء",
    "product.1.copy": "إضافات الوقود والمحرك والخدمة للورش والسائقين المهتمين بالأداء.",
    "product.2.title": "زيوت سيارات الركاب",
    "product.2.copy": "حلول زيوت محركات للمركبات الحديثة وبرامج الخدمة اليومية.",
    "product.3.title": "زيوت ناقل الحركة والتروس",
    "product.3.copy": "تزييت لصناديق التروس وناقل الحركة وحماية منظومة الدفع.",
    "product.4.title": "سوائل تبريد الأداء",
    "product.4.copy": "منتجات تبريد لإدارة الحرارة ومقاومة التآكل واعتمادية النظام.",
    "product.5.title": "سوائل فرامل الأداء",
    "product.5.copy": "مجموعة سوائل فرامل لاستجابة واثقة وثبات في الخدمة.",
    "product.6.title": "منتجات عناية السيارات",
    "product.6.copy": "منتجات عناية وصيانة للتجزئة والورش والبائعين المهتمين بالتلميع.",
    "product.7.title": "زيوت تجارية",
    "product.7.copy": "زيوت للشاحنات وبيئات الخدمة الثقيلة وصيانة الأساطيل.",
    "product.8.title": "زيوت صناعية",
    "product.8.copy": "خيارات زيوت صناعية للآلات والمعدات ومواقع الإنتاج.",
    "product.9.title": "زيوت بحرية",
    "product.9.copy": "زيوت مخصصة للقطاع البحري وظروف التشغيل القاسية قرب الماء.",
    "product.10.title": "زيوت الدراجات النارية",
    "product.10.copy": "زيوت وإضافات للدراجات النارية من أجل الأداء والاعتمادية.",
    "product.11.title": "زيوت السباق",
    "product.11.copy": "زيوت للأحمال العالية منسجمة مع هوية SCHNELL السريعة والموجهة للأداء.",
    "product.12.title": "حلول OEM",
    "product.12.copy": "برامج للعلامات الخاصة والمعدات الأصلية للشركاء والموردين الإقليميين.",
    "oil.eyebrow": "اختيار الزيت",
    "oil.title": "اختر مركبتك لمعرفة زيت SCHNELL المناسب.",
    "oil.copy": "اختر العلامة والموديل والسنة والفئة. التوصيات الحالية بيانات تجريبية ويجب استبدالها ببيانات تطبيقات مؤكدة قبل الاستخدام الفعلي.",
    "oil.brand": "علامة السيارة",
    "oil.model": "الموديل",
    "oil.year": "السنة",
    "oil.trim": "الفئة / المحرك",
    "oil.button": "عرض التوصية",
    "oil.placeholder.brand": "اختر العلامة",
    "oil.placeholder.model": "اختر الموديل",
    "oil.placeholder.year": "اختر السنة",
    "oil.placeholder.trim": "اختر الفئة",
    "oil.result.label": "التوصية",
    "oil.empty.title": "اختر بيانات المركبة كاملة.",
    "oil.empty.copy": "سيظهر نوع الزيت المقترح بعد اختيار العلامة والموديل والسنة والفئة.",
    "oil.result.vehicle": "المركبة",
    "oil.result.oil": "نوع الزيت",
    "oil.result.product": "المنتج المقترح",
    "oil.result.spec": "المواصفة",
    "oil.result.capacity": "السعة التقريبية",
    "oil.result.interval": "فترة الخدمة",
    "oil.warning": "توصية تجريبية فقط. تحقق دائما من اللزوجة والمواصفة والسعة من دليل مالك المركبة أو بيانات تطبيقات SCHNELL الرسمية.",
    "markets.eyebrow": "لماذا اختيار منتج من ألمانيا؟",
    "markets.title": "جودة ثابتة لكل منطقة.",
    "markets.copy": "أقوى رسالة سوقية هي الثبات: نفس الجودة والأداء والحماية في مختلف الدول. وهذا مهم للموزعين لأنه يجعل العرض أسهل في البيع والدعم والتدريب داخل شبكات الورش.",
    "markets.feature1.title": "ضمان الجودة",
    "markets.feature1.copy": "مرتكزة على ضبط جودة صارم وإنتاج قائم على المعايير.",
    "markets.feature2.title": "مسؤولية بيئية",
    "markets.feature2.copy": "تركيبات متموضعة حول أثر أقل وتشغيل أكثر كفاءة.",
    "markets.feature3.title": "تركيبات متقدمة",
    "markets.feature3.copy": "تطوير منتجات قائم على البحث للمركبات والآلات الحديثة.",
    "markets.feature4.title": "جاهزة للموزعين",
    "markets.feature4.copy": "كتالوج واسع يكفي للورش والأساطيل والصناعة وقنوات التجزئة.",
    "system.eyebrow": "قصة الخدمة",
    "system.title": "نظام الأداء 3 في 1 يجعل حديث الورشة بسيطا.",
    "system.step1.title": "تنظيف المحرك",
    "system.step1.copy": "يبدأ بتنظيف داخلي ضمن عملية تغيير الزيت.",
    "system.step2.title": "معالجة وقود البخاخات",
    "system.step2.copy": "يستهدف نظافة نظام الوقود وثبات الاحتراق.",
    "system.step3.title": "معالجة المحرك",
    "system.step3.copy": "يكمل حزمة الخدمة بتموضع الأداء والحماية.",
    "agents.eyebrow": "شبكة وكلاء العراق",
    "agents.title": "اعثر على وكلاء SCHNELL المتاحين في العراق.",
    "agents.copy": "يستخدم هذا العرض بيانات وهمية للوكلاء في أربيل ودهوك والموصل وبغداد. استبدلها بالأسماء وأرقام الهاتف والعناوين الدقيقة بعد التحقق منها قبل النشر.",
    "agents.filters": "فلاتر مدن الوكلاء",
    "agents.filter.all": "كل المدن",
    "agents.city.erbil": "أربيل",
    "agents.city.duhok": "دهوك",
    "agents.city.mosul": "الموصل",
    "agents.city.baghdad": "بغداد",
    "agents.map": "خريطة وكلاء SCHNELL في العراق",
    "agents.list": "قائمة الوكلاء",
    "agents.list.title": "دليل وكلاء تجريبي",
    "agents.disclaimer": "دبابيس الخريطة مواقع وهمية للتخطيط فقط.",
    "agents.mock": "بيانات وهمية",
    "agents.phone": "الهاتف قيد الإضافة",
    "agents.type": "وكيل معتمد",
    "agents.address": "العنوان",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "الدعم الفني والتوزيع واستفسارات الشراكة.",
    "contact.address.germany": "Heinrich-Hertz-Strasse 11, 34123 Kassel, Germany",
    "contact.address.iraq": "إقليم كردستان، دهوك، موزع العراق",
    "social.label": "وسائل التواصل الاجتماعي",
    "social.title": "تابع صفحاتنا الرسمية",
    "social.facebook": "فيسبوك",
    "social.instagram": "إنستغرام",
    "social.facebook.aria": "صفحة فيسبوك",
    "social.instagram.aria": "صفحة إنستغرام",
    "social.note": "تابعنا على فيسبوك وإنستغرام.",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.subject": "الموضوع",
    "form.message": "الرسالة",
    "form.submit": "إرسال الاستفسار",
    "footer.copy": "زيوت وإضافات ومنتجات عناية سيارات عالية الأداء بهوية تصنيع ألمانية وانتشار توزيع عالمي.",
    "footer.link1": "معالجة المكيف",
    "footer.link2": "عدة عناية السيارات",
    "footer.link3": "زيوت تجارية",
    "footer.link4": "زيوت بحرية",
    "footer.link5": "حلول OEM",
    "footer.rights": "© 2026 زيوت SCHNELL. موقع تجريبي جاهز للشراكة."
  },
  ku: {
    metaTitle: "ڕۆنەکانی SCHNELLی ئەڵمانی | ڕۆن و زیادکراوی کارایی بەرز",
    "language.selector": "هەڵبژاردنی زمان",
    "nav.toggle": "کردنەوەی مێنیو",
    "nav.about": "دەربارەی شنێل",
    "nav.products": "بەرهەمەکان",
    "nav.oilFinder": "دۆزەری ڕۆن",
    "nav.markets": "بازاڕەکان",
    "nav.agents": "نوێنەرەکان",
    "nav.contact": "پەیوەندی",
    "nav.support": "پشتگیری هاوبەشان",
    "hero.eyebrow": "ڕۆنی ئەڵمانی، زیادکراو و سیستەمی چاودێری ئۆتۆمبێل",
    "hero.title1": "SCHNELL",
    "hero.title2": "کارایی بەرز",
    "hero.title3": "3 لە 1",
    "hero.copy": "براندێکی ڕۆن و زیادکراوە کە لەسەر کارایی، خێرایی، وردی، کۆنترۆڵی کوالێتی و پشتگیری دابەشکردنی جیهانی بنیات نراوە.",
    "hero.primary": "بینینی بەرهەمەکان",
    "hero.secondary": "پەیوەندی بە دابەشکەر",
    "hero.panel.label": "سیستەمی تایبەت",
    "hero.panel.title": "شۆردنی ماتۆڕ + چارەسەری سووتەمەنی ئینجێکتەر + چارەسەری ماتۆڕ",
    "hero.panel.copy": "دیزاین کراوە بۆ پاکی ناوەوەی ماتۆڕ، گەڕاندنەوەی وەڵامدانەوە و ئەزموونی خزمەتگوزاری جێگیرتر.",
    "metrics.countries": "وڵات بە هاوبەشی دابەشکردن",
    "metrics.quality": "جێگیرکردنی بەڕێوەبردنی کوالێتی",
    "metrics.germany.value": "ئەڵمانیا",
    "metrics.germany": "ناسنامەی بەرهەمهێنان و ئەندازیاری",
    "metrics.support": "گرنگیدان بە ناوەندی پشتگیری",
    "about.eyebrow": "شوێنی بازرگانی",
    "about.title": "بۆ وەرکشۆپ، دابەشکەر، فلیت و شۆفێرانی گرنگیدەر بە کارایی.",
    "about.copy1": "SCHNELL کە بە ئەڵمانی واتە “خێرا”، خۆی لەسەر خێرایی ئۆتۆمبێل، وردی و کوالێتی بەرهەمهێنانی جێگیر دادەنێت. چیرۆکی گشتی براندەکە دامەزرێنەر Klaus Bosshammer، بەرهەمهێنانی ئەڵمانی، سەرۆکایەتی فرۆشی ئاسیا، کارەکان لە ئیمارات و فلیپین، و تۆڕی هاوبەشان لە زیاتر لە 80 وڵات پیشان دەدات.",
    "about.copy2": "هێزی بازرگانی براندەکە کاتالۆگێکی فراوانی دوای فرۆشتنە: زیادکراوەکان، بەرهەمە تەکنیکییەکانی سپرەی، ڕۆنی ماتۆڕ، ڕۆنی گیربۆکس، سووتاندنەوەی ساردکەرەوە، فلویدی برێک، ڕیسینگ، دەریایی، پاسکیل، پیشەسازی و چارەسەری OEM.",
    "about.proof1": "ئەندازیاری ئەڵمانی",
    "about.proof2": "جێگیرکردن بە ڕۆنی بنەڕەتی پاک",
    "about.proof3": "تۆڕی هاوبەشی جیهانی",
    "about.promise.label": "بەڵێنی براند",
    "about.promise.title": "کوالێتی. کارایی. پاراستن.",
    "products.eyebrow": "ڕێزی بەرهەمەکانی SCHNELL",
    "products.title": "یەک کاتالۆگ بۆ پێداویستی ڕۆنی ئۆتۆمبێل، بازرگانی و پیشەسازی.",
    "products.filters": "فلتەری بەرهەمەکان",
    "catalog.eyebrow": "کاتالۆگی وردی بەرهەم",
    "catalog.title": "ڕێزی SCHNELL بە بەرهەم بە بەرهەم بگەڕێ.",
    "catalog.copy": "فلتەری بوارەکان بەکاربهێنە، پاشان هەر خێزانێک بکەرەوە بۆ بینینی ناوی بەرهەمەکان پێش پشتڕاستکردنەوەی بەردەستبوون لە عێراق.",
    "catalog.filters": "فلتەری کاتالۆگ",
    "catalog.families": "خێزانی بەرهەمەکان",
    "catalog.products": "بەرهەمەکان",
    "catalog.filter.all": "هەموو ڕیزەکان",
    "catalog.filter.lubricants": "ڕۆنەکان",
    "catalog.filter.additives": "زیادکراوەکان",
    "catalog.filter.fluids": "فلویدەکان",
    "catalog.filter.specialty": "تایبەت",
    "catalog.filter.oem": "OEM",
    "catalog.items": "بەرهەم",
    "catalog.source": "پشت بە لاپەڕە گشتییەکانی بەرهەمی SCHNELL دەبەستێت. پێش فرۆشتن پاکێج، ستاندارد، TDS و SDS پشتڕاست بکەرەوە.",
    "filters.all": "هەموو",
    "filters.automotive": "ئۆتۆمبێل",
    "filters.commercial": "بازرگانی",
    "filters.specialty": "تایبەتمەند",
    "product.1.title": "زیادکراوی کارایی",
    "product.1.copy": "زیادکراوی سووتەمەنی، ماتۆڕ و خزمەتگوزاری بۆ وەرکشۆپ و شۆفێرانی گرنگیدەر بە کارایی.",
    "product.2.title": "ڕۆنی ئۆتۆمبێلی سواری",
    "product.2.copy": "چارەسەری ڕۆنی ماتۆڕ بۆ ئۆتۆمبێلی نوێ و پرۆگرامی خزمەتگوزاری ڕۆژانە.",
    "product.3.title": "ڕۆنی گیربۆکس و تروس",
    "product.3.copy": "ڕۆنکاری بۆ گیربۆکس، گواستنەوە و پاراستنی سیستەمی جوڵان.",
    "product.4.title": "ساردکەرەوەی کارایی",
    "product.4.copy": "بەرهەمی ساردکردنەوە بۆ کۆنترۆڵی گەرمی، بەرگری لە زەنگ و متمانەی سیستەم.",
    "product.5.title": "فلویدی برێکی کارایی",
    "product.5.copy": "ڕێزی فلویدی برێک بۆ وەڵامدانەوەی متمانەپێکراو و خزمەتگوزاری جێگیر.",
    "product.6.title": "کیتی چاودێری ئۆتۆمبێل",
    "product.6.copy": "بەرهەمی چاودێری و چاکسازی بۆ فرۆشی تاک، گەراج و فرۆشیاری گرنگیدەر بە پاککاری.",
    "product.7.title": "ڕۆنی بازرگانی",
    "product.7.copy": "ڕۆن بۆ بارهەڵگر، ژینگەی کاری قورس و چاکسازی فلیت.",
    "product.8.title": "ڕۆنی پیشەسازی",
    "product.8.copy": "هەڵبژاردەی ڕۆنی پیشەسازی بۆ ئامێر، کەرەستە و شوێنی بەرهەمهێنان.",
    "product.9.title": "ڕۆنی دەریایی",
    "product.9.copy": "ڕۆنکاری دەریایی بۆ دۆخی کاری قورس لە نزیکی ئاو.",
    "product.10.title": "ڕۆنی پاسکیل",
    "product.10.copy": "ڕۆن و زیادکراوی پاسکیل بۆ کارایی و متمانەپێکراوی دوو تایەر.",
    "product.11.title": "ڕۆنی ڕیسینگ",
    "product.11.copy": "ڕۆنی بارقورس کە لەگەڵ ناسنامەی خێرا و کاراییی SCHNELL دەگونجێت.",
    "product.12.title": "چارەسەری OEM",
    "product.12.copy": "پرۆگرامەکانی براندی تایبەت و کەرەستەی بنەڕەتی بۆ هاوبەش و دابینکەری ناوچەیی.",
    "oil.eyebrow": "دۆزەری ڕۆن",
    "oil.title": "ئۆتۆمبێلەکەت هەڵبژێرە بۆ دۆزینەوەی ڕۆنی گونجاوی SCHNELL.",
    "oil.copy": "براند، مۆدێل، ساڵ و جۆری ماتۆڕ هەڵبژێرە. پێشنیارەکانی ئێستا داتای نمونەییە و پێش بەکارهێنانی ڕاستەقینە دەبێت بە داتای پشتڕاستکراوەی ئەپلیکەیشن بگۆڕدرێت.",
    "oil.brand": "براندی ئۆتۆمبێل",
    "oil.model": "مۆدێل",
    "oil.year": "ساڵ",
    "oil.trim": "جۆر / ماتۆڕ",
    "oil.button": "پیشاندانی پێشنیار",
    "oil.placeholder.brand": "براند هەڵبژێرە",
    "oil.placeholder.model": "مۆدێل هەڵبژێرە",
    "oil.placeholder.year": "ساڵ هەڵبژێرە",
    "oil.placeholder.trim": "جۆر هەڵبژێرە",
    "oil.result.label": "پێشنیار",
    "oil.empty.title": "زانیاری تەواوی ئۆتۆمبێل هەڵبژێرە.",
    "oil.empty.copy": "دوای هەڵبژاردنی براند، مۆدێل، ساڵ و جۆر، جۆری ڕۆنی پێشنیارکراو لێرە دەردەکەوێت.",
    "oil.result.vehicle": "ئۆتۆمبێل",
    "oil.result.oil": "جۆری ڕۆن",
    "oil.result.product": "بەرهەمی پێشنیارکراو",
    "oil.result.spec": "ستاندارد",
    "oil.result.capacity": "قەبارەی نزیکەیی",
    "oil.result.interval": "ماوەی خزمەتگوزاری",
    "oil.warning": "ئەمە تەنها پێشنیاری نمونەییە. هەمیشە ڕەقی، ستاندارد و قەبارە لە دەفتەری ئۆتۆمبێل یان داتای فەرمی SCHNELL پشتڕاست بکەوە.",
    "markets.eyebrow": "بۆچی بەرهەمی ئەڵمانی هەڵبژێرین؟",
    "markets.title": "کوالێتی جێگیر بۆ هەموو ناوچەیەک.",
    "markets.copy": "بەهێزترین پەیامی بازاڕ جێگیرییە: هەمان کوالێتی، کارایی و پاراستن لە نێوان وڵاتەکان. ئەمە بۆ دابەشکەران گرنگە چونکە فرۆشتن، پشتگیری و ڕاهێنان لە تۆڕی وەرکشۆپەکان ئاسانتر دەکات.",
    "markets.feature1.title": "دڵنیایی کوالێتی",
    "markets.feature1.copy": "لەسەر کۆنترۆڵی کوالێتی توند و بەرهەمهێنانی ستاندارد بنیات نراوە.",
    "markets.feature2.title": "بەرپرسیارێتی ژینگەیی",
    "markets.feature2.copy": "فۆرمولەکان بۆ کاریگەری کەمتر و کارکردنی کاراتر جێگیرکراون.",
    "markets.feature3.title": "فۆرمولەی پێشکەوتوو",
    "markets.feature3.copy": "گەشەپێدانی بەرهەم بە پشتبەستن بە توێژینەوە بۆ ئۆتۆمبێل و ئامێری نوێ.",
    "markets.feature4.title": "ئامادە بۆ دابەشکەر",
    "markets.feature4.copy": "کاتالۆگێکی فراوان بۆ گەراج، فلیت، پیشەسازی و کەناڵی فرۆشی تاک.",
    "system.eyebrow": "چیرۆکی خزمەتگوزاری",
    "system.title": "سیستەمی کارایی 3 لە 1 گفتوگۆی وەرکشۆپ ئاسان دەکات.",
    "system.step1.title": "شۆردنی ماتۆڕ",
    "system.step1.copy": "بە پاککردنەوەی ناوەوە لە کاتی گۆڕینی ڕۆن دەست پێدەکات.",
    "system.step2.title": "چارەسەری سووتەمەنی ئینجێکتەر",
    "system.step2.copy": "پاکی سیستەمی سووتەمەنی و جێگیری سووتان نیشان دەدات.",
    "system.step3.title": "چارەسەری ماتۆڕ",
    "system.step3.copy": "پاکێجی خزمەتگوزاری بە ناساندنی کارایی و پاراستن تەواو دەکات.",
    "agents.eyebrow": "تۆڕی نوێنەرانی عێراق",
    "agents.title": "نوێنەرەکانی SCHNELL لە عێراق بدۆزەوە.",
    "agents.copy": "ئەم پێشبینینە داتای ساختە بۆ نوێنەرانی هەولێر، دهۆک، مووسڵ و بەغدا بەکاردەهێنێت. پێش بڵاوکردنەوە بیگۆڕە بە ناو، ژمارەی تەلەفۆن و ناونیشانی ڕاستەقینە و پشتڕاستکراوە.",
    "agents.filters": "فلتەری شاری نوێنەرەکان",
    "agents.filter.all": "هەموو شارەکان",
    "agents.city.erbil": "هەولێر",
    "agents.city.duhok": "دهۆک",
    "agents.city.mosul": "مووسڵ",
    "agents.city.baghdad": "بەغدا",
    "agents.map": "نەخشەی نوێنەرانی SCHNELL لە عێراق",
    "agents.list": "لیستی نوێنەرەکان",
    "agents.list.title": "ڕێبەری نوێنەری ساختە",
    "agents.disclaimer": "خاڵەکانی نەخشە شوێنی ساختەن بۆ پلاندانان تەنها.",
    "agents.mock": "داتای ساختە",
    "agents.phone": "تەلەفۆن دواتر زیاد دەکرێت",
    "agents.type": "نوێنەری پەسەندکراو",
    "agents.address": "ناونیشان",
    "contact.eyebrow": "پەیوەندیمان پێوە بکە",
    "contact.title": "پشتگیری تەکنیکی، دابەشکردن و پرسیاری هاوبەشی.",
    "contact.address.germany": "Heinrich-Hertz-Strasse 11, 34123 Kassel, Germany",
    "contact.address.iraq": "هەرێمی کوردستان، دهۆک، دابەشکەری عێراق",
    "social.label": "سۆشیال میدیا",
    "social.title": "پەیڕەوی لاپەڕە فەرمییەکانمان بکە",
    "social.facebook": "فەیسبووک",
    "social.instagram": "ئینستاگرام",
    "social.facebook.aria": "لاپەڕەی فەیسبووک",
    "social.instagram.aria": "لاپەڕەی ئینستاگرام",
    "social.note": "لە فەیسبووک و ئینستاگرام پەیڕەومان بکە.",
    "form.name": "ناو",
    "form.email": "ئیمەیڵ",
    "form.subject": "بابەت",
    "form.message": "پەیام",
    "form.submit": "ناردنی پرسیار",
    "footer.copy": "ڕۆن، زیادکراو و بەرهەمی چاودێری ئۆتۆمبێلی کارایی بەرز بە ناسنامەی بەرهەمهێنانی ئەڵمانی و گەیشتنی دابەشکردنی جیهانی.",
    "footer.link1": "چارەسەری ئەیرکۆن",
    "footer.link2": "کیتی چاودێری ئۆتۆمبێل",
    "footer.link3": "ڕۆنی بازرگانی",
    "footer.link4": "ڕۆنی دەریایی",
    "footer.link5": "چارەسەری OEM",
    "footer.rights": "© 2026 ڕۆنەکانی SCHNELL. ماڵپەڕی کۆنسێپتی ئامادە بۆ هاوبەشی."
  }
};

const languageMeta = {
  en: { lang: "en", dir: "ltr" },
  ar: { lang: "ar", dir: "rtl" },
  ku: { lang: "ckb", dir: "rtl" }
};

let currentLanguage = "en";
let activeAgentCity = "all";
let agentMap;
let agentLayer;
let activeAgentId;
let activeCatalogSegment = "all";
let activeCatalogSlug = "passenger-car-lubricants";
let productImageLibrary = {};
const agentMarkers = new Map();

const agentSeeds = [
  ["erbil", "Ankawa Main Road", 36.228, 43.994],
  ["erbil", "100 Meter Road", 36.207, 44.042],
  ["erbil", "60 Meter Road", 36.190, 44.010],
  ["erbil", "Kirkuk Road", 36.166, 44.055],
  ["erbil", "Gulan Street", 36.217, 44.021],
  ["erbil", "Bakhtiary", 36.195, 44.063],
  ["erbil", "Italian City", 36.235, 44.028],
  ["erbil", "Ainkawa Industrial Area", 36.240, 43.981],
  ["erbil", "Makhmur Road", 36.154, 44.004],
  ["erbil", "Koya Road", 36.187, 44.090],
  ["erbil", "Family Mall Area", 36.205, 44.076],
  ["erbil", "Empire Business District", 36.219, 44.006],
  ["erbil", "Baharka Road", 36.256, 44.028],
  ["erbil", "Qushtapa Road", 36.105, 44.014],
  ["duhok", "Main Bazaar", 36.862, 42.986],
  ["duhok", "Zakho Road", 36.887, 42.968],
  ["duhok", "Industrial Area", 36.848, 42.956],
  ["duhok", "Dream City", 36.874, 43.014],
  ["duhok", "Mazi Quarter", 36.855, 43.003],
  ["duhok", "Barzan Road", 36.894, 43.033],
  ["duhok", "Sumel Road", 36.828, 42.928],
  ["duhok", "Nohadra District", 36.879, 42.996],
  ["duhok", "University Road", 36.866, 43.026],
  ["duhok", "Zirka Quarter", 36.842, 42.987],
  ["duhok", "Malta Road", 36.897, 42.994],
  ["duhok", "Shindokha Area", 36.851, 43.019],
  ["duhok", "Azadi Hospital Road", 36.872, 42.963],
  ["mosul", "East Mosul Service Area", 36.367, 43.167],
  ["mosul", "University District", 36.355, 43.143],
  ["mosul", "Al-Majmoua", 36.379, 43.156],
  ["mosul", "Al-Zuhur", 36.386, 43.181],
  ["mosul", "Al-Muthanna", 36.351, 43.181],
  ["mosul", "Al-Noor", 36.340, 43.185],
  ["mosul", "Right Bank Industrial", 36.330, 43.096],
  ["mosul", "Al-Dawasa", 36.337, 43.128],
  ["mosul", "Al-Karama", 36.363, 43.205],
  ["mosul", "Mosul-Erbil Road", 36.391, 43.238],
  ["mosul", "Al-Arabi", 36.371, 43.124],
  ["mosul", "Al-Rashidiya", 36.406, 43.116],
  ["baghdad", "Karrada", 33.302, 44.428],
  ["baghdad", "Mansour", 33.315, 44.340],
  ["baghdad", "Al-Jadriya", 33.281, 44.377],
  ["baghdad", "Dora", 33.258, 44.391],
  ["baghdad", "Sadr City", 33.382, 44.478],
  ["baghdad", "Al-Sinaa Street", 33.309, 44.446],
  ["baghdad", "Kadhimiya", 33.379, 44.340],
  ["baghdad", "Al-Amiriya", 33.305, 44.298],
  ["baghdad", "Palestine Street", 33.332, 44.455],
  ["baghdad", "Al-Bayaa", 33.276, 44.335],
  ["baghdad", "Al-Shaab", 33.397, 44.420]
];

const agents = agentSeeds.map(([city, area, lat, lng], index) => ({
  id: index + 1,
  city,
  area,
  lat,
  lng
}));

const productCatalog = [
  {
    slug: "passenger-car-lubricants",
    segment: "lubricants",
    image: "assets/products/passenger-car-lubricants.jpg",
    name: {
      en: "Passenger Car Lubricants",
      ar: "زيوت سيارات الركاب",
      ku: "ڕۆنی ئۆتۆمبێلی سواری"
    },
    copy: {
      en: "Synthetic and mineral engine oils covering low-viscosity hybrid oils, modern 5W grades and higher-load performance needs.",
      ar: "زيوت محركات صناعية ومعدنية تغطي زيوت الهجين منخفضة اللزوجة، ودرجات 5W الحديثة، واحتياجات الأداء العالي.",
      ku: "ڕۆنی ماتۆڕی سینسەتیک و مەعدەنی بۆ ڕۆنی هایبریدی ڕەقی کەم، پلەکانی 5Wی نوێ و پێداویستی کارایی بەرز."
    },
    products: [
      "Synthotec SAE 0W-20", "Synthosis SAE 0W-20", "Synthoplus SAE 0W-20",
      "Synthotec LV II SAE 0W-30", "Triton C2 SAE 0W-30", "Triton C3 SAE 0W-40",
      "Ultimate SAE 0W-30", "Ultimate II SAE 0W-40", "Hybrid SAE 0W-16",
      "Synth SAE 5W-20", "Synthlight SAE 5W-20", "Ultimate II SAE 5W-30",
      "DPF SAE 5W-30", "MAX SAE 5W-30", "DLS SAE 5W-30",
      "Triton C1 SAE 5W-30", "Triton C2 SAE 5W-30", "Triton C4 SAE 5W-30",
      "Eco Tech FO SAE 5W-30", "Ultimate II SAE 5W-40", "DPF II SAE 5W-40",
      "Evotec SAE 5W-40 D", "HC Plus SAE 5W-40 HD", "Ultimate II SAE 5W-50",
      "Ubergreen SAE 5W-50", "Syntholube Ultimate SAE 10W-60", "Synthor SAE 10W-30",
      "Ultimate LL SAE 10W-40", "Ultimate TS SAE 10W-40", "SuperTurbo SAE 15W-50",
      "Syntholube Performanz SAE 15W-50", "Ultra HD 15W40", "Super Turbo SAE 15W-40", "SuperTurbo SAE 20W-50"
    ]
  },
  {
    slug: "commercial-lubricants",
    segment: "lubricants",
    image: "assets/products/commercial-lubricants.jpg",
    name: {
      en: "Commercial Lubricants",
      ar: "زيوت تجارية",
      ku: "ڕۆنی بازرگانی"
    },
    copy: {
      en: "Heavy-duty oils for trucks, fleets, diesel service and high-hour commercial maintenance.",
      ar: "زيوت خدمة شاقة للشاحنات والأساطيل وخدمة الديزل والصيانة التجارية عالية التشغيل.",
      ku: "ڕۆنی کاری قورس بۆ بارهەڵگر، فلیت، خزمەتی دیزڵ و چاکسازی بازرگانی درێژخایەن."
    },
    products: [
      "Turbo HD SAE 60", "Turbo HD SAE 50", "Turbo HD SAE 40", "Turbo HD SAE 30",
      "Eco Boost SAE 20W-50", "Truck Optima SAE 20W-50", "Turbo Fleet SAE 15W-40",
      "Ultimate II SAE 15W-40", "Multilite LA SAE 15W-40"
    ]
  },
  {
    slug: "transmission-gear-oils",
    segment: "lubricants",
    image: "assets/products/transmission-gear-oils.jpg",
    name: {
      en: "Transmission & Gear Oils",
      ar: "زيوت ناقل الحركة والتروس",
      ku: "ڕۆنی گیربۆکس و تروس"
    },
    copy: {
      en: "Automatic transmission, CVT, DSG and driveline products for gearbox service programs.",
      ar: "منتجات ناقل الحركة الأوتوماتيكي وCVT وDSG ومنظومة الدفع لبرامج خدمة الجير.",
      ku: "بەرهەمی گواستنەوەی ئۆتۆماتیک، CVT، DSG و سیستەمی جوڵان بۆ خزمەتی گیربۆکس."
    },
    products: ["ZHM", "CHF", "ATF 9-SPEED", "ATF 7-SPEED Blue Edition", "ATF 7-SPEED", "ATF 6-SPEED", "CVT-ATF", "ATF DSG II", "ATF Ultimate"]
  },
  {
    slug: "performance-additives",
    segment: "additives",
    image: "assets/products/performance-additives.jpg",
    name: {
      en: "Performance Additives",
      ar: "إضافات الأداء",
      ku: "زیادکراوی کارایی"
    },
    copy: {
      en: "Fuel, engine and transmission additives for service counters and performance-focused workshops.",
      ar: "إضافات للوقود والمحرك وناقل الحركة لمراكز الخدمة والورش التي تركز على الأداء.",
      ku: "زیادکراوی سووتەمەنی، ماتۆڕ و گواستنەوە بۆ ناوەندی خزمەتگوزاری و وەرکشۆپی گرنگیدەر بە کارایی."
    },
    products: ["Racing Octane Booster", "Engine Decarbonizers", "Automatic Transmission Flush", "Speed Additives", "CVT Additive"]
  },
  {
    slug: "performance-3-in-1-system",
    segment: "additives",
    image: "assets/products/performance-3-in-1-system.jpg",
    name: {
      en: "Performance 3 in 1 System",
      ar: "نظام الأداء 3 في 1",
      ku: "سیستەمی کارایی 3 لە 1"
    },
    copy: {
      en: "A workshop-friendly package built around engine flushing, injector cleaning and motor treatment.",
      ar: "حزمة مناسبة للورش مبنية حول تنظيف المحرك وتنظيف البخاخات ومعالجة المحرك.",
      ku: "پاکێجێکی گونجاو بۆ وەرکشۆپ لەسەر شۆردنی ماتۆڕ، پاککردنەوەی ئینجێکتەر و چارەسەری ماتۆڕ."
    },
    products: ["Motor Treatment", "Injektor Fuel Treatment", "Motor Flush"]
  },
  {
    slug: "air-con-treatment",
    segment: "specialty",
    image: "assets/products/air-con-treatment.jpg",
    name: {
      en: "Air-Con Treatment",
      ar: "معالجة المكيف",
      ku: "چارەسەری ئەیرکۆن"
    },
    copy: {
      en: "Cabin and A/C hygiene products for detailing, service bays and retail maintenance packs.",
      ar: "منتجات نظافة المقصورة والمكيف للتلميع ومراكز الخدمة وباقات الصيانة بالتجزئة.",
      ku: "بەرهەمی پاکی کابین و ئەیرکۆن بۆ پاککاری، ناوەندی خزمەت و پاکێجی فرۆشی تاک."
    },
    products: ["Room Disinfection", "Schnell AC Fresh"]
  },
  {
    slug: "car-care-kit",
    segment: "specialty",
    image: "assets/products/car-care-kit-products.jpg",
    name: {
      en: "Car Care Kit Products",
      ar: "منتجات عناية السيارات",
      ku: "کیتی چاودێری ئۆتۆمبێل"
    },
    copy: {
      en: "Retail-ready car care and maintenance items for workshops and accessory counters.",
      ar: "منتجات عناية وصيانة جاهزة للتجزئة للورش ونقاط بيع الإكسسوارات.",
      ku: "بەرهەمی چاودێری و چاکسازی ئامادەی فرۆشی تاک بۆ وەرکشۆپ و شوێنی فرۆشی ئێکسسوارات."
    },
    products: ["Gear & Differential Treatment"]
  },
  {
    slug: "motor-cycle-additives",
    segment: "additives",
    image: "assets/products/motor-cycle-additives.jpg",
    name: {
      en: "Motor Cycle Additives",
      ar: "إضافات الدراجات النارية",
      ku: "زیادکراوی پاسکیل"
    },
    copy: {
      en: "Compact service products for motorcycle engine cleaning, fuel-system care and motor protection.",
      ar: "منتجات خدمة للدراجات النارية لتنظيف المحرك والعناية بنظام الوقود وحماية المحرك.",
      ku: "بەرهەمی خزمەتی بچووک بۆ پاککردنەوەی ماتۆڕی پاسکیل، چاودێری سیستەمی سووتەمەنی و پاراستنی ماتۆڕ."
    },
    products: ["Motor Treatment", "Injektor Fuel Treatment", "Motor Flush"]
  },
  {
    slug: "performance-coolants",
    segment: "fluids",
    image: "assets/products/performance-coolants.jpg",
    name: {
      en: "Performance Coolants",
      ar: "سوائل تبريد الأداء",
      ku: "ساردکەرەوەی کارایی"
    },
    copy: {
      en: "Longlife coolant variants for heat management, corrosion control and workshop replacement programs.",
      ar: "أنواع سوائل تبريد طويلة العمر لإدارة الحرارة ومقاومة التآكل وبرامج الاستبدال في الورش.",
      ku: "جۆرەکانی ساردکەرەوەی درێژخایەن بۆ کۆنترۆڵی گەرمی، بەرگری زەنگ و پرۆگرامی گۆڕین لە وەرکشۆپ."
    },
    products: ["Longlife Coolant 439", "Longlife Coolant 438", "Longlife Coolant 437 Purple Edition", "Longlife Coolant 436 Blue Edition", "Longlife Coolant 435"]
  },
  {
    slug: "performance-brake-fluids",
    segment: "fluids",
    image: "assets/products/performance-brake-fluids.jpg",
    name: {
      en: "Performance Brake Fluids",
      ar: "سوائل فرامل الأداء",
      ku: "فلویدی برێکی کارایی"
    },
    copy: {
      en: "Brake fluids for regular service and higher-temperature performance positioning.",
      ar: "سوائل فرامل للخدمة الدورية وتموضع الأداء في درجات الحرارة الأعلى.",
      ku: "فلویدی برێک بۆ خزمەتی ئاسایی و کارایی لە پلەی گەرمی بەرزتر."
    },
    products: ["Brake Fluid DOT 4 LV", "Brake Fluid Racing DOT 4.1", "Brake Fluid Racing DOT 4"]
  },
  {
    slug: "marine-lubricants",
    segment: "lubricants",
    image: "assets/products/marine-lubricants.jpg",
    name: {
      en: "Marine Lubricants",
      ar: "زيوت بحرية",
      ku: "ڕۆنی دەریایی"
    },
    copy: {
      en: "Marine engine and gear oils for coastal, boat-service and hard-working wet environments.",
      ar: "زيوت محركات وتروس بحرية للبيئات الساحلية وخدمة القوارب والعمل قرب الماء.",
      ku: "ڕۆنی ماتۆڕ و گیربۆکسی دەریایی بۆ دۆخی کەناری، خزمەتی بەلەم و کاری نزیکی ئاو."
    },
    products: ["Sea Master SAE 20W-50", "Sea Force SAE 15W-50", "Sea Marlin SAE 10W-30", "Sea Optima SAE 15W-40", "Eco Marine SAE 20W-40", "Marine Gear Oil"]
  },
  {
    slug: "motor-cycle-lubricants",
    segment: "lubricants",
    image: "assets/products/motor-cycle-lubricants.jpg",
    name: {
      en: "Motor Cycle Lubricants",
      ar: "زيوت تشحيم الدراجات النارية",
      ku: "ڕۆنی پاسکیل"
    },
    copy: {
      en: "Motorcycle lubricants for everyday service and high-load two-wheel applications.",
      ar: "زيوت دراجات نارية للخدمة اليومية وتطبيقات الدراجات ذات الأحمال العالية.",
      ku: "ڕۆنی پاسکیل بۆ خزمەتی ڕۆژانە و کاری قورسی دوو تایەر."
    },
    products: ["400 Series SAE 10W-40", "1000 Series SAE 15W-50", "Syntho Ultimate Xtreme SAE 10W-60"]
  },
  {
    slug: "motor-cycle-oils",
    segment: "lubricants",
    image: "assets/products/motor-cycle-oils.jpg",
    name: {
      en: "Motor Cycle Oils",
      ar: "زيوت الدراجات النارية",
      ku: "ڕۆنی ماتۆڕی پاسکیل"
    },
    copy: {
      en: "Motorcycle engine oil grades from mainstream service viscosities to extreme-performance products.",
      ar: "درجات زيوت محركات الدراجات من لزوجات الخدمة العامة إلى منتجات الأداء العالي جدا.",
      ku: "پلەکانی ڕۆنی ماتۆڕی پاسکیل لە ڕەقی خزمەتی گشتیەوە تا بەرهەمی کارایی زۆر بەرز."
    },
    products: ["500 Series SAE 15W-50", "Syntholite SAE 15W-50", "Syntho Ultimate SAE 10W-50", "Syntholite SAE 10W-40", "Synthomax Xtreme SAE 5W-60"]
  },
  {
    slug: "racing-lubricants",
    segment: "specialty",
    image: "assets/products/racing-lubricants.jpg",
    name: {
      en: "Racing Lubricants",
      ar: "زيوت السباق",
      ku: "ڕۆنی ڕیسینگ"
    },
    copy: {
      en: "Performance-led racing oils for high-load, enthusiast and motorsport-style positioning.",
      ar: "زيوت سباق موجهة للأداء للأحمال العالية والسائقين المهتمين بالسيارات وطابع رياضة المحركات.",
      ku: "ڕۆنی ڕیسینگ بۆ کارایی، باری قورس، ئارەزوومەندان و شێوازی مۆتۆرسپۆرت."
    },
    products: ["Turbo Racing", "Racing SAE 10W-60"]
  },
  {
    slug: "industry-oils",
    segment: "lubricants",
    image: "assets/products/industry-oils.jpg",
    name: {
      en: "Industry Oils",
      ar: "زيوت صناعية",
      ku: "ڕۆنی پیشەسازی"
    },
    copy: {
      en: "Industrial lubrication options for gear systems, compressors and machinery maintenance programs.",
      ar: "خيارات زيوت صناعية لأنظمة التروس والضواغط وبرامج صيانة الآلات.",
      ku: "هەڵبژاردەی ڕۆنی پیشەسازی بۆ سیستەمی تروس، کۆمپریسەر و پرۆگرامی چاکسازی ئامێر."
    },
    products: ["SCHNELL CLP Gear Oil", "Industrial Gear Oils", "Full Synthetic Ashless Compressor Oil"]
  },
  {
    slug: "oem-solutions",
    segment: "oem",
    image: "assets/products/oem-solutions.jpg",
    name: {
      en: "OEM Solutions",
      ar: "حلول OEM",
      ku: "چارەسەری OEM"
    },
    copy: {
      en: "Partner, private-label and supply programs for distributors that need market-specific product presentation.",
      ar: "برامج شراكة وعلامة خاصة وتوريد للموزعين الذين يحتاجون إلى عرض منتجات مناسب للسوق.",
      ku: "پرۆگرامی هاوبەشی، براندی تایبەت و دابینکردن بۆ دابەشکەران کە پێویستیان بە نیشاندانی بەرهەمی گونجاوی بازاڕ هەیە."
    },
    products: ["Private-label oil programs", "OEM supply support", "Distributor packaging support"]
  }
];

const getText = (key) => translations[currentLanguage]?.[key] || translations.en[key] || key;

function getLocalized(value) {
  if (!value || typeof value !== "object") return value || "";
  return value[currentLanguage] || value.en || "";
}

function getVisibleCatalogFamilies() {
  return productCatalog.filter((family) => activeCatalogSegment === "all" || family.segment === activeCatalogSegment);
}

function getCatalogProducts(family) {
  const sourceProducts = productImageLibrary[family.slug];
  if (Array.isArray(sourceProducts) && sourceProducts.length) return sourceProducts;
  return family.products.map((name) => ({
    name,
    image: family.image
  }));
}

function loadProductImageLibrary() {
  if (!document.querySelector("#catalog-products")) return;

  fetch("assets/product-items/product-items.json")
    .then((response) => {
      if (!response.ok) throw new Error("Product image data unavailable");
      return response.json();
    })
    .then((data) => {
      productImageLibrary = data || {};
      renderProductCatalog(activeCatalogSegment, activeCatalogSlug);
    })
    .catch(() => {});
}

function renderProductCatalog(segment = activeCatalogSegment, slug = activeCatalogSlug) {
  activeCatalogSegment = segment;

  const familyList = document.querySelector("#catalog-family-list");
  const productList = document.querySelector("#catalog-products");
  const title = document.querySelector("#catalog-title");
  const copy = document.querySelector("#catalog-copy");
  const count = document.querySelector("#catalog-count");
  if (!familyList || !productList || !title || !copy || !count) return;

  document.querySelectorAll(".catalog-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.catalogFilter === activeCatalogSegment);
  });

  const visibleFamilies = getVisibleCatalogFamilies();
  const activeFamily = visibleFamilies.find((family) => family.slug === slug) || visibleFamilies[0] || productCatalog[0];
  activeCatalogSlug = activeFamily.slug;

  familyList.innerHTML = "";
  visibleFamilies.forEach((family) => {
    const familyProducts = getCatalogProducts(family);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "catalog-family";
    button.dataset.catalogSlug = family.slug;
    button.classList.toggle("active", family.slug === activeCatalogSlug);
    button.innerHTML = `
      <img src="${family.image}" alt="" loading="lazy">
      <span>${String(familyProducts.length).padStart(2, "0")}</span>
      <strong>${getLocalized(family.name)}</strong>
      <small>${getText(`catalog.filter.${family.segment}`)}</small>
    `;
    button.addEventListener("click", () => renderProductCatalog(activeCatalogSegment, family.slug));
    familyList.appendChild(button);
  });

  title.textContent = getLocalized(activeFamily.name);
  copy.textContent = getLocalized(activeFamily.copy);
  const activeProducts = getCatalogProducts(activeFamily);
  count.textContent = `${activeProducts.length} ${getText("catalog.items")}`;
  productList.innerHTML = "";

  activeProducts.forEach((product, index) => {
    const item = document.createElement("article");
    item.className = "catalog-product";
    item.innerHTML = `
      <div class="catalog-product-image">
        <img src="${product.image || activeFamily.image}" alt="${product.name}" loading="lazy">
      </div>
      <span>${String(index + 1).padStart(2, "0")}</span>
      <small>${getLocalized(activeFamily.name)}</small>
      <strong>${product.name}</strong>
    `;
    productList.appendChild(item);
  });
}

const oilCatalog = [
  {
    brand: "Toyota",
    model: "Corolla",
    years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    trim: "1.8L Petrol",
    oil: "0W-20 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 0W-20",
    spec: "API SP / ILSAC GF-6",
    capacity: "4.2 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Toyota",
    model: "Camry",
    years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    trim: "2.5L Petrol",
    oil: "0W-20 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 0W-20",
    spec: "API SP / ILSAC GF-6",
    capacity: "4.5 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Toyota",
    model: "Land Cruiser",
    years: ["2016", "2017", "2018", "2019", "2020", "2021"],
    trim: "5.7L V8 Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SN/SP",
    capacity: "7.5 L",
    interval: "7,000-10,000 km"
  },
  {
    brand: "Toyota",
    model: "Hilux",
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    trim: "2.8L Diesel",
    oil: "5W-30 Synthetic Diesel",
    product: "SCHNELL Commercial Lubricant 5W-30",
    spec: "ACEA C3 / API CK-4",
    capacity: "7.5 L",
    interval: "7,000-10,000 km"
  },
  {
    brand: "Hyundai",
    model: "Elantra",
    years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    trim: "2.0L Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SP / ILSAC GF-6",
    capacity: "4.0 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Hyundai",
    model: "Tucson",
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    trim: "2.4L Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SN/SP",
    capacity: "4.8 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Kia",
    model: "Sportage",
    years: ["2017", "2018", "2019", "2020", "2021", "2022"],
    trim: "2.0L Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SN/SP",
    capacity: "4.5 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Nissan",
    model: "Patrol",
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    trim: "5.6L V8 Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SN/SP",
    capacity: "6.9 L",
    interval: "7,000-10,000 km"
  },
  {
    brand: "Nissan",
    model: "Sunny",
    years: ["2017", "2018", "2019", "2020", "2021", "2022"],
    trim: "1.5L Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SP / ILSAC GF-6",
    capacity: "3.3 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "BMW",
    model: "3 Series",
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    trim: "2.0L Turbo Petrol",
    oil: "5W-40 Full Synthetic",
    product: "SCHNELL Performance Lubricant 5W-40",
    spec: "ACEA A3/B4",
    capacity: "5.2 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Mercedes-Benz",
    model: "C-Class",
    years: ["2016", "2017", "2018", "2019", "2020", "2021"],
    trim: "2.0L Turbo Petrol",
    oil: "5W-40 Full Synthetic",
    product: "SCHNELL Performance Lubricant 5W-40",
    spec: "ACEA A3/B4",
    capacity: "6.0 L",
    interval: "8,000-10,000 km"
  },
  {
    brand: "Chevrolet",
    model: "Tahoe",
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    trim: "5.3L V8 Petrol",
    oil: "5W-30 Full Synthetic",
    product: "SCHNELL Passenger Car Lubricant 5W-30",
    spec: "API SP",
    capacity: "7.6 L",
    interval: "7,000-10,000 km"
  }
];

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
}

function setSelectOptions(select, placeholder, values, selectedValue = "") {
  if (!select) return "";
  select.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  select.appendChild(placeholderOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  const nextValue = values.includes(selectedValue) ? selectedValue : "";
  select.value = nextValue;
  select.disabled = values.length === 0;
  return nextValue;
}

function getOilRecord(brand, model, year, trim) {
  return oilCatalog.find((record) => (
    record.brand === brand &&
    record.model === model &&
    record.trim === trim &&
    record.years.includes(year)
  ));
}

function renderOilResult(record) {
  const result = document.querySelector("#oil-result");
  if (!result) return;

  if (!record) {
    result.innerHTML = `
      <span>${getText("oil.result.label")}</span>
      <h3>${getText("oil.empty.title")}</h3>
      <p>${getText("oil.empty.copy")}</p>
    `;
    return;
  }

  result.innerHTML = `
    <span>${getText("oil.result.label")}</span>
    <h3>${record.oil}</h3>
    <p>${record.brand} ${record.model} · ${record.trim}</p>
    <div class="oil-result-grid">
      <div><small>${getText("oil.result.vehicle")}</small><strong>${record.brand} ${record.model}</strong></div>
      <div><small>${getText("oil.result.product")}</small><strong>${record.product}</strong></div>
      <div><small>${getText("oil.result.spec")}</small><strong>${record.spec}</strong></div>
      <div><small>${getText("oil.result.capacity")}</small><strong>${record.capacity}</strong></div>
      <div><small>${getText("oil.result.interval")}</small><strong>${record.interval}</strong></div>
    </div>
    <p class="oil-warning">${getText("oil.warning")}</p>
  `;
}

function renderOilFinder(resetFrom = "") {
  const brandSelect = document.querySelector("#oil-brand");
  const modelSelect = document.querySelector("#oil-model");
  const yearSelect = document.querySelector("#oil-year");
  const trimSelect = document.querySelector("#oil-trim");
  const findButton = document.querySelector("#oil-find-button");
  if (!brandSelect || !modelSelect || !yearSelect || !trimSelect || !findButton) return;

  let brand = resetFrom === "brand" ? "" : brandSelect.value;
  let model = resetFrom === "brand" || resetFrom === "model" ? "" : modelSelect.value;
  let year = resetFrom === "brand" || resetFrom === "model" || resetFrom === "year" ? "" : yearSelect.value;
  let trim = resetFrom ? "" : trimSelect.value;

  const brands = uniqueSorted(oilCatalog.map((record) => record.brand));
  brand = setSelectOptions(brandSelect, getText("oil.placeholder.brand"), brands, brand);

  const models = uniqueSorted(oilCatalog.filter((record) => record.brand === brand).map((record) => record.model));
  model = setSelectOptions(modelSelect, getText("oil.placeholder.model"), models, model);

  const years = uniqueSorted(oilCatalog
    .filter((record) => record.brand === brand && record.model === model)
    .flatMap((record) => record.years));
  year = setSelectOptions(yearSelect, getText("oil.placeholder.year"), years, year);

  const trims = uniqueSorted(oilCatalog
    .filter((record) => record.brand === brand && record.model === model && record.years.includes(year))
    .map((record) => record.trim));
  trim = setSelectOptions(trimSelect, getText("oil.placeholder.trim"), trims, trim);

  const record = getOilRecord(brand, model, year, trim);
  findButton.disabled = !record;
  renderOilResult(record);
}

function getAgentName(agent) {
  return `${getText("agents.type")} ${String(agent.id).padStart(2, "0")}`;
}

function getAgentAddress(agent) {
  return `${agent.area}, ${getText(`agents.city.${agent.city}`)}`;
}

function getAgentPopup(agent) {
  return `
    <div class="agent-popup">
      <strong>${getAgentName(agent)}</strong>
      <span>${getText(`agents.city.${agent.city}`)}</span>
      <span>${getText("agents.address")}: ${getAgentAddress(agent)}</span>
      <span>${getText("agents.phone")}</span>
      <span>${getText("agents.mock")}</span>
    </div>
  `;
}

function initializeAgentMap() {
  const mapElement = document.querySelector("#agent-map");
  if (!mapElement || agentMap) return;

  if (!window.L) {
    mapElement.textContent = getText("agents.disclaimer");
    return;
  }

  agentMap = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([35.45, 43.9], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(agentMap);

  agentLayer = L.layerGroup().addTo(agentMap);
}

function setActiveAgent(agentId) {
  activeAgentId = agentId;
  document.querySelectorAll(".agent-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.agentId) === agentId);
  });

  agentMarkers.forEach((marker, id) => {
    const element = marker.getElement();
    const pin = element?.querySelector(".agent-marker");
    if (pin) pin.classList.toggle("active", id === agentId);
  });
}

function renderAgents(city = activeAgentCity) {
  activeAgentCity = city;
  const listElement = document.querySelector("#agent-list");
  const countElement = document.querySelector("#agent-count");
  if (!listElement || !countElement) return;

  initializeAgentMap();

  const visibleAgents = agents.filter((agent) => city === "all" || agent.city === city);
  countElement.textContent = String(visibleAgents.length);
  listElement.innerHTML = "";

  document.querySelectorAll(".agent-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.agentFilter === city);
  });

  if (agentLayer) {
    agentLayer.clearLayers();
    agentMarkers.clear();
  }

  visibleAgents.forEach((agent) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "agent-card";
    card.dataset.agentId = String(agent.id);
    card.innerHTML = `
      <strong>${getAgentName(agent)}</strong>
      <span>${getText(`agents.city.${agent.city}`)} · ${agent.area}</span>
      <span>${getText("agents.address")}: ${getAgentAddress(agent)}</span>
      <small>${getText("agents.mock")}</small>
    `;
    card.addEventListener("click", () => {
      setActiveAgent(agent.id);
      const marker = agentMarkers.get(agent.id);
      if (marker && agentMap) {
        agentMap.setView([agent.lat, agent.lng], Math.max(agentMap.getZoom(), 12), { animate: true });
        marker.openPopup();
      }
    });
    listElement.appendChild(card);

    if (agentLayer && window.L) {
      const marker = L.marker([agent.lat, agent.lng], {
        icon: L.divIcon({
          className: "",
          html: `<span class="agent-marker">${agent.id}</span>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14]
        })
      }).bindPopup(getAgentPopup(agent));
      marker.on("click", () => setActiveAgent(agent.id));
      marker.addTo(agentLayer);
      agentMarkers.set(agent.id, marker);
    }
  });

  if (agentMap && visibleAgents.length) {
    const bounds = L.latLngBounds(visibleAgents.map((agent) => [agent.lat, agent.lng]));
    agentMap.invalidateSize();
    agentMap.fitBounds(bounds, { padding: [36, 36], maxZoom: city === "all" ? 7 : 12 });
  }

  setActiveAgent(visibleAgents[0]?.id);
}

document.documentElement.classList.add("js-enabled");

const applyLanguage = (language) => {
  const activeLanguage = translations[language] ? language : "en";
  const dictionary = translations[activeLanguage];
  const meta = languageMeta[activeLanguage];
  currentLanguage = activeLanguage;

  document.documentElement.lang = meta.lang;
  document.documentElement.dir = meta.dir;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("schnell-language", activeLanguage);
  renderProductCatalog(activeCatalogSegment, activeCatalogSlug);
  renderOilFinder();
  renderAgents(activeAgentCity);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
applyLanguage(requestedLanguage || localStorage.getItem("schnell-language") || "en");
loadProductImageLibrary();

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  const linkPage = link.getAttribute("href")?.split("#")[0] || "";
  link.classList.toggle("active", linkPage === currentPage);
});

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.setTimeout(() => {
  document.querySelectorAll(".reveal:not(.in-view)").forEach((element) => {
    element.classList.add("in-view");
  });
}, 1200);

const counter = document.querySelector("[data-count]");
let counterStarted = false;

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || counterStarted) return;
      counterStarted = true;

      const target = Number(counter.dataset.count);
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.round(target * eased)}+`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 }
);

if (counter) counterObserver.observe(counter);

const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const catalogFilterButtons = document.querySelectorAll(".catalog-filter");
const agentFilterButtons = document.querySelectorAll(".agent-filter");
const oilBrandSelect = document.querySelector("#oil-brand");
const oilModelSelect = document.querySelector("#oil-model");
const oilYearSelect = document.querySelector("#oil-year");
const oilTrimSelect = document.querySelector("#oil-trim");
const oilFindButton = document.querySelector("#oil-find-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

catalogFilterButtons.forEach((button) => {
  button.addEventListener("click", () => renderProductCatalog(button.dataset.catalogFilter || "all"));
});

agentFilterButtons.forEach((button) => {
  button.addEventListener("click", () => renderAgents(button.dataset.agentFilter || "all"));
});

oilBrandSelect?.addEventListener("change", () => renderOilFinder("model"));
oilModelSelect?.addEventListener("change", () => renderOilFinder("year"));
oilYearSelect?.addEventListener("change", () => renderOilFinder("trim"));
oilTrimSelect?.addEventListener("change", () => renderOilFinder());
oilFindButton?.addEventListener("click", () => renderOilFinder());

document.querySelectorAll("[data-social-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

if (window.lucide) {
  window.lucide.createIcons();
}
