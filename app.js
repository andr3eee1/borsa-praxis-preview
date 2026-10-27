/**
 * Borsa Praxis - Core Application Script
 * Injects shared header, footer, floating mobile buttons, and handles interactions.
 */

const CLINIC_INFO = {
  name: "Borsa Praxis",
  legalName: "SC Borsa Praxis SRL",
  tagline: "Cabinet de Medicină Dentară Timișoara",
  phone: "0730 327 079",
  phoneClean: "+40730327079",
  email: "contact@borsapraxis.ro",
  address: "Str. Ciprian Porumbescu Nr. 51, Ap. 1, Timișoara",
  googleMapsUrl: "https://maps.google.com/?q=Str.+Ciprian+Porumbescu+Nr.+51+Timisoara",
  facebookUrl: "https://www.facebook.com/BorsaPraxis",
  schedule: [
    { days: "Luni", hours: "14:30 - 20:30" },
    { days: "Marți", hours: "09:30 - 15:30" },
    { days: "Miercuri", hours: "14:30 - 20:30" },
    { days: "Joi", hours: "14:30 - 20:30" },
    { days: "Vineri", hours: "09:30 - 15:30" },
    { days: "Sâmbătă - Duminică", hours: "Închis (urgențe la telefon)" }
  ]
};

const SERVICES = [
  {
    id: "profilaxie",
    title: "Profilaxie & Igienizare",
    badge: "Prevenție",
    shortDesc: "Detartraj cu ultrasunete, periaj profesional și airflow pentru îndepărtarea completă a plăcii și petelor.",
    fullDesc: "Prevenirea bolilor dentare și parodontale prin tehnici moderne: detartraj ultrasonic atraumatic, periaj profesional, airflow pentru curățarea petelor de cafea/tutun și fluorizări.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    highlights: ["Detartraj ultrasonic fără durere", "Curățare airflow de pete", "Fluorizare protectoare", "Instructaj igienă personalizat"]
  },
  {
    id: "odontologie",
    title: "Odontologie & Tratament Carii",
    badge: "Fizionomie",
    shortDesc: "Tratarea cariilor dentare cu materiale compozite de ultimă generație, perfect adaptate nuanței dinților.",
    fullDesc: "Tratamentul minim invaziv al leziunilor carioase. Folosim obturații fizionomice de înaltă rezistență și estetică, redând dinților forma și funcționalitatea naturală.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>`,
    highlights: ["Materiale compozite estetice", "Tratament minim invaziv", "Anestezie locală computerizată", "Refacere anatomică impecabilă"]
  },
  {
    id: "endodontie",
    title: "Endodonție (Tratament de Canal)",
    badge: "Salvarea Dintelui",
    shortDesc: "Tratamente de canal avansate pentru salvarea dinților naturali afectați de infecții sau dureri acute.",
    fullDesc: "Extirparea pulpei coronare și radiculare afectate, sterilizarea atentă a canalelor și sigilarea tridimensională etanșă pentru prevenirea oricăror recidive.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
    highlights: ["Salvarea dintelui natural", "Proceduri fără disconfort", "Sigilare etanșă de durată", "Control radiologic imediat"]
  },
  {
    id: "pedodontie",
    title: "Pedodonție (Stomatologie Copii)",
    badge: "Pentru Copii",
    shortDesc: "Abordare prietenoasă și empatică pentru cei mici: tratamente la dinții de lapte, sigilări și fluorizări.",
    fullDesc: "Îngrijire blândă dedicată copiilor, de la prima vizită de acomodare până la sigilări de șanțuri, tratamente fără durere și prevenție timpurie a anomaliilor dentare.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    highlights: ["Acomodare fără frică", "Sigilări preventive de șanțuri", "Fluorizări aromate plăcute", "Răbdare și explicații jucăușe"]
  },
  {
    id: "protetica",
    title: "Protetică Dentară",
    badge: "Reabilitare Orală",
    shortDesc: "Coroane din zirconiu și ceramică integrală, punți dentare și proteze mobile pentru o dantură funcțională.",
    fullDesc: "Restabilirea completă a funcționalității masticatorii și estetice a aparatului dentomaxilar prin lucrări protetice fixe de mare precizie sau proteze mobile adaptate.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    highlights: ["Coroane din Zirconiu / Ceramică", "Punți dentare estetice", "Proteze scheletate moderne", "Adaptare anatomică perfectă"]
  },
  {
    id: "chirurgie",
    title: "Chirurgie Dento-Alveolară",
    badge: "Chirurgie Specializată",
    shortDesc: "Extracții dentare atraumatice, odontectomii, rezecții apicale și premolarizări realizate de medici chirurgi.",
    fullDesc: "Intervenții chirurgicale realizate cu anestezie de înaltă eficiență: extracții de molari incluși, rezecții, gingivectomii, chiuretaje și pregătirea terenului osos.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"/><path d="M16 16 8 8"/><path d="m18 10 4-4a2.83 2.83 0 1 0-4-4l-4 4"/></svg>`,
    highlights: ["Medici chirurgi specializați", "Extracții molari de minte", "Vindecare rapidă și sigură", "Confort maxim pe toată durata"]
  },
  {
    id: "ortodontie",
    title: "Ortodonție (Aparate Dentare)",
    badge: "Aliniere & Armonie",
    shortDesc: "Aparate dentare fixe și mobile pentru corectarea mușcăturii, alinierea dinților și armonia profilului facial.",
    fullDesc: "Diagnosticarea și tratamentul anomaliilor dento-maxilare de către Dr. Estella Breban. Alinierea dinților îmbunătățește funcția masticatorie și redă zâmbetul încrezător.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>`,
    highlights: ["Aparate fixe metalice & ceramice", "Aparate mobile pentru copii", "Corectarea ocluziei (mușcăturii)", "Monitorizare periodică atentă"]
  },
  {
    id: "implantologie",
    title: "Implantologie Dentară",
    badge: "Soluție Definitivă",
    shortDesc: "Rădăcini artificiale din titan pur sau zirconiu pentru înlocuirea dinților lipsă cu stabilitate maximă.",
    fullDesc: "Implantul dentar restabilește suportul natural pentru coroane și punți fără afectarea dinților vecini sănătoși. Tratament de lungă durată cu biocompatibilitate superioară.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 4.24-4.24"/><path d="M2 18h20"/><path d="M12 10a4 4 0 0 1 4 4v4H8v-4a4 4 0 0 1 4-4Z"/></svg>`,
    highlights: ["Titan și zirconiu biocompatibil", "Păstrează integritatea osului", "Aspect identic dintelui natural", "Garanția calității materialelor"]
  },
  {
    id: "parodontologie",
    title: "Parodontologie",
    badge: "Sănătatea Gingiilor",
    shortDesc: "Tratarea gingivitei și a bolii parodontale pentru salvarea țesuturilor de susținere ale dinților.",
    fullDesc: "Evaluare și tratamente specifice pentru afecțiunile gingivale și ale osului alveolar: chiuretaje parodontale, terapii antimicrobiene și stabilizarea mobilității dentare.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    highlights: ["Oprirea sângerărilor gingivale", "Chiuretaj subgingival fin", "Prevenirea pierderii dinților", "Recomandări de igienă acasă"]
  },
  {
    id: "radiologie",
    title: "Radiologie Digitală Intraorală",
    badge: "Tehnologie Carestream",
    shortDesc: "Aparat Carestream CS 2200 cu senzor digital RVG 6100. Doze de radiații cu 30% mai mici și rezoluție maximă.",
    fullDesc: "Diagnostic imediat și sigur în cadrul cabinetului. Senzorul digital RVG 6100 oferă imagini la rezoluție medicală superioară în câteva secunde, fără deplasări suplimentare.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
    highlights: ["Doze reduse de radiații cu 30%", "Diagnostic instantaneu în cabinet", "Carestream CS 2200 + RVG 6100", "Fără timp pierdut pe drum"]
  }
];

function initHeader() {
  const headerMount = document.getElementById("header-mount");
  if (!headerMount) return;

  const currentPage = document.body.getAttribute("data-page") || "home";

  headerMount.innerHTML = `
    <header class="site-header">
      <div class="top-announcement-bar">
        <div class="container announcement-content">
          <div class="announcement-item">
            <span class="icon-dot"></span>
            <span>Cabinet stomatologic în Timișoara din 2011 • Experiență medicală de peste 20 de ani</span>
          </div>
          <div class="announcement-contacts">
            <a href="tel:${CLINIC_INFO.phoneClean}" class="top-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${CLINIC_INFO.phone}</span>
            </a>
            <span class="divider">•</span>
            <span class="top-hours">Str. Ciprian Porumbescu 51</span>
          </div>
        </div>
      </div>
      <div class="main-header">
        <div class="container header-container">
          <a href="index.html" class="brand-logo" aria-label="Borsa Praxis - Acasă">
            <div class="logo-mark">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C6.5 2 4 6 4 10c0 4 2 8 4 12 1 2 2 2 3 0 .7-1.4 1-3 1-5 0 2 .3 3.6 1 5 1 2 2 2 3 0 2-4 4-8 4-12 0-4-2.5-8-8-8z"/>
              </svg>
            </div>
            <div class="logo-text">
              <span class="logo-title">BORSA PRAXIS</span>
              <span class="logo-subtitle">Medicină Dentară • Timișoara</span>
            </div>
          </a>

          <nav class="main-nav" id="main-nav" aria-label="Navigare principală">
            <ul class="nav-list">
              <li><a href="index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">Acasă</a></li>
              <li><a href="services.html" class="nav-link ${currentPage === 'services' ? 'active' : ''}">Servicii</a></li>
              <li><a href="portfolio.html" class="nav-link ${currentPage === 'portfolio' ? 'active' : ''}">Clinica & Echipa</a></li>
              <li><a href="contact.html" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
            </ul>
          </nav>

          <div class="header-actions">
            <a href="tel:${CLINIC_INFO.phoneClean}" class="header-phone-btn" title="Sună la clinică">
              <div class="phone-btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="phone-btn-text">
                <span class="phone-label">Programări Telefonice</span>
                <span class="phone-number">${CLINIC_INFO.phone}</span>
              </div>
            </a>
            <a href="contact.html#programare" class="btn btn-primary header-cta-btn">
              <span>Programează-te</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Deschide meniul de navigare" aria-expanded="false">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  // Mobile menu toggle logic
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("main-nav");
  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggleBtn.classList.toggle("active", isOpen);
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
}

function initFooter() {
  const footerMount = document.getElementById("footer-mount");
  if (!footerMount) return;

  const serviceLinks = SERVICES.slice(0, 6).map(s => 
    `<li><a href="services.html#${s.id}">${s.title}</a></li>`
  ).join("");

  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-content-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <div class="logo-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C6.5 2 4 6 4 10c0 4 2 8 4 12 1 2 2 2 3 0 .7-1.4 1-3 1-5 0 2 .3 3.6 1 5 1 2 2 2 3 0 2-4 4-8 4-12 0-4-2.5-8-8-8z"/>
              </svg>
            </div>
            <span class="footer-brand-name">${CLINIC_INFO.name}</span>
          </div>
          <p class="footer-desc">
            Cabinet de medicină dentară în Timișoara deschis în 2011, parte a companiei medicale înființate în 2003. Oferim tratamente complete, profilaxie riguroasă și tehnologie digitală de ultimă generație într-un ambient cald și empatic.
          </p>
          <div class="footer-rating-pill">
            <span class="stars">★★★★★</span>
            <span class="rating-val">4.9 / 5</span>
            <span class="rating-source">pe Google (~70 recenzii)</span>
          </div>
          <div class="footer-socials">
            <a href="${CLINIC_INFO.facebookUrl}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook Borsa Praxis">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Servicii Stomatologice</h4>
          <ul class="footer-links">
            ${serviceLinks}
            <li><a href="services.html" class="link-view-all">Toate cele 10 specialități →</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Program Cabinet</h4>
          <ul class="footer-schedule-list">
            <li><span>Luni:</span> <strong>14:30 - 20:30</strong></li>
            <li><span>Marți:</span> <strong>09:30 - 15:30</strong></li>
            <li><span>Miercuri:</span> <strong>14:30 - 20:30</strong></li>
            <li><span>Joi:</span> <strong>14:30 - 20:30</strong></li>
            <li><span>Vineri:</span> <strong>09:30 - 15:30</strong></li>
            <li><span>Sâmbătă - Duminică:</span> <em>Închis</em></li>
          </ul>
          <p class="schedule-note">* Programările se stabilesc în prealabil la numărul de telefon afișat.</p>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Contact & Locație</h4>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${CLINIC_INFO.address}</span>
          </div>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:${CLINIC_INFO.phoneClean}">${CLINIC_INFO.phone}</a>
          </div>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a href="mailto:${CLINIC_INFO.email}">${CLINIC_INFO.email}</a>
          </div>
          <div class="footer-cta-box">
            <a href="contact.html#programare" class="btn btn-primary btn-block">Cere o Programare</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container bottom-flex">
          <p>© 2026 ${CLINIC_INFO.legalName}. Toate drepturile rezervate. Timișoara, România.</p>
          <div class="bottom-links">
            <a href="index.html">Acasă</a>
            <span>•</span>
            <a href="services.html">Servicii</a>
            <span>•</span>
            <a href="portfolio.html">Clinică</a>
            <span>•</span>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initFloatingBar() {
  const mount = document.createElement("div");
  mount.className = "floating-mobile-bar";
  mount.innerHTML = `
    <a href="tel:${CLINIC_INFO.phoneClean}" class="floating-btn call-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Apelează</span>
    </a>
    <a href="https://wa.me/40730327079?text=Buna%20ziua,%20as%20dori%20o%20programare%20la%20Borsa%20Praxis" target="_blank" rel="noopener noreferrer" class="floating-btn whatsapp-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="contact.html#programare" class="floating-btn book-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>Programare</span>
    </a>
  `;
  document.body.appendChild(mount);
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

  elements.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute("data-counter-target"));
        const decimals = parseInt(el.getAttribute("data-counter-decimals") || "0", 10);
        const prefix = el.getAttribute("data-counter-prefix") || "";
        const suffix = el.getAttribute("data-counter-suffix") || "";
        const duration = 400;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const current = (progress * target).toFixed(decimals);
          el.textContent = `${prefix}${current}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(c => observer.observe(c));
}

function initAppointmentForms() {
  const forms = document.querySelectorAll("form.appointment-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn ? submitBtn.innerHTML : "";
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>Se trimite...</span>
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        // Show success notification
        let successBox = form.querySelector(".form-success-message");
        if (!successBox) {
          successBox = document.createElement("div");
          successBox.className = "form-success-message";
          form.prepend(successBox);
        }
        successBox.innerHTML = `
          <div class="success-box-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E948B" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <div>
              <strong>Solicitarea dumneavoastră a fost înregistrată!</strong>
              <p>Vă vom contacta telefonic în cel mai scurt timp pentru confirmarea programării la Borsa Praxis.</p>
            </div>
          </div>
        `;
        form.reset();
        successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 700);
    });
  });
}

function initGalleryModal() {
  const galleryItems = document.querySelectorAll(".gallery-card-clickable");
  if (!galleryItems.length) return;

  const modal = document.createElement("div");
  modal.className = "gallery-lightbox";
  modal.innerHTML = `
    <div class="lightbox-overlay"></div>
    <div class="lightbox-container">
      <button class="lightbox-close" aria-label="Închide">&times;</button>
      <img src="" alt="" class="lightbox-img" />
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const imgEl = modal.querySelector(".lightbox-img");
  const captionEl = modal.querySelector(".lightbox-caption");
  const closeBtn = modal.querySelector(".lightbox-close");
  const overlay = modal.querySelector(".lightbox-overlay");

  function closeModal() {
    modal.classList.remove("active");
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector(".gallery-info h4")?.textContent || "";
      const desc = item.querySelector(".gallery-info p")?.textContent || "";
      if (img) {
        imgEl.src = img.src;
        imgEl.alt = img.alt || "Imagine Borsa Praxis";
        captionEl.innerHTML = `<strong>${title}</strong>${desc ? ' - ' + desc : ''}`;
        modal.classList.add("active");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFooter();
  initFloatingBar();
  initScrollAnimations();
  initCounters();
  initAppointmentForms();
  initGalleryModal();
});
