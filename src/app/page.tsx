
'use client';

import { useEffect, useState, useRef } from 'react';
import type { FormEvent } from 'react';

function HeroldReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement('iframe');

    
iframe.srcdoc = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          background: transparent;
          overflow: auto;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div id="herold-ratings"></div>

      <script src="https://www.herold.at/meinherold/getReviewsWidget.do?sid=2122682&type=XS"><\/script>

      <script>
        const colorHerold = () => {
          const elements = [...document.querySelectorAll('body *')];

          const matches = elements
            .filter(el => el.children.length === 0 &&
              el.textContent.trim().startsWith('TTOM Innsbruck'));

          if (matches.length > 0) {
            const band = matches[0].parentElement;

            band.style.backgroundColor = '#FFD500';
            band.style.color = '#30383b';
            band.style.width = '100%';
            band.style.boxSizing = 'border-box';
            band.style.padding = '4px 6px';
band.style.fontSize = '13px';
band.style.lineHeight = '1.2';
band.style.fontWeight = 'bold';

            return true;
          }

          return false;
        };

        const observer = new MutationObserver(() => {
          if (colorHerold()) observer.disconnect();
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        setTimeout(colorHerold, 500);
        setTimeout(colorHerold, 1500);
        setTimeout(() => observer.disconnect(), 8000);
      <\/script>
    </body>
  </html>
`;


    iframe.style.width = '100%';
    iframe.style.height = '260px';
    iframe.style.border = '0';
    iframe.style.background = 'transparent';

    container.appendChild(iframe);

    return () => {
      iframe.remove();
    };
  }, []);

  return <div ref={containerRef} className="w-full" />;
}

type Language = 'de' | 'ro';

const translations = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      gallery: 'Galerie',
      contact: 'Kontakt',
    },
    hero: {
      title: 'TTOM Innsbruck – Umzüge, Spedition & Entrümpelungen',
      subtitle:
        'Zuverlässige Umzüge, Möbeltransporte, Gütertransporte und professionelle Entrümpelungen. Wir sind in Innsbruck, Tirol und nach Vereinbarung in ganz Österreich für Sie da.',
      call: 'Jetzt anrufen',
      services: 'Unsere Dienstleistungen',
    },
    about: {
      title: 'Über TTOM Innsbruck',
      text:
        'Wir sind ein zuverlässiges und pünktliches Team in Innsbruck. Unsere Leistungen umfassen Umzüge, Spedition, Güter- und Möbeltransporte sowie den sicheren Transport schwerer und sperriger Gegenstände. Außerdem übernehmen wir Entrümpelungen von Kellern, Untergeschossen, Dachböden und Wohnungen. Auf Wunsch bieten wir auch geprüfte gebrauchte Elektrogeräte an. Kontaktieren Sie uns für ein unverbindliches Angebot.',
    },
    services: {
      title: 'Transportlösungen & Dienstleistungen',
      moving: 'Umzüge & Möbeltransporte',
      movingItems: [
        'Wohnungs- und Hausumzüge',
        'Möbeltransporte',
        'Transport von Elektrogeräten',
        'Haushaltstransporte',
        'Möbelabholung und Lieferung',
      ],
      freight: 'Spedition & Gütertransporte',
      freightItems: [
        'Gütertransporte',
        'Waren- und Stückguttransporte',
        'Transport von Haushaltsgegenständen',
        'Abholung und Zustellung',
        'Transport nach Vereinbarung',
      ],
      clearing: 'Entrümpelungen & Räumungen',
      clearingItems: [
        'Kellerentrümpelungen',
        'Räumung von Untergeschossen',
        'Dachbodenräumungen',
        'Wohnungs- und Haushaltsräumungen',
        'Abtransport von nicht mehr benötigten Gegenständen',
      ],
      heavy: 'Schwertransporte',
      heavyItems: [
        'Kühlschränke',
        'Waschmaschinen',
        'Sofas und Schränke',
        'Schwere Möbel',
        'Sperrige Haushaltsgeräte',
      ],
      appliances: 'Gebrauchte Elektrogeräte',
      applianceItems: [
        'Geprüfte Kühlschränke',
        'Waschmaschinen',
        'Herde und Öfen',
        'Weitere Haushaltsgeräte',
        'Lieferung nach Vereinbarung',
      ],
      why: 'Warum TTOM wählen?',
      whyItems: [
        'Faire und transparente Preise',
        'Zuverlässigkeit und Pünktlichkeit',
        'Schneller und sicherer Transport',
        'Sorgfältiger Umgang mit Gegenständen',
        'Flexible Terminvereinbarung',
      ],
 whyDescriptions: [
  'Transparente und faire Angebote.',
  'Wir legen Wert auf Pünktlichkeit.',
  'Sorgfältiger Umgang mit Ihren Gegenständen.',
  'Termine nach Vereinbarung.',
  'Wir nehmen uns Zeit für Ihre Wünsche.',
],
    },
    quote: {
  title: 'Angebot anfordern',
  subtitle: 'Füllen Sie das Formular aus. Wir melden uns bei Ihnen.',
  email: 'E-Mail',
  service: 'Gewünschte Dienstleistung',
  choose: 'Bitte auswählen',
  services: [
    'Umzüge & Möbeltransporte',
    'Spedition & Gütertransporte',
    'Entrümpelungen & Räumungen',
    'Schwertransporte',
    'Gebrauchte Elektrogeräte',
  ],
  pickup: 'Abholort',
  destination: 'Zielort',
  date: 'Wunschtermin',
  details: 'Weitere Informationen',
  placeholder: 'Beschreiben Sie Ihren Transport...',
  submit: 'Angebot anfordern',
},
    gallery: 'Galerie',
    currentImage: 'Aktuelles Bild',
    previous: 'Zurück',
    next: 'Weiter',
    reviews: 'Kundenbewertungen',
    contact: 'Kontaktieren Sie uns',
    address: 'Adresse',
    hours: 'Öffnungszeiten',
    days: 'Montag – Samstag: 08:00 – 17:00',
    formTitle: 'Nachricht senden',
    name: 'Name',
    phone: 'Telefon',
    message: 'Nachricht',
    send: 'Nachricht senden',
    sent: 'Nachricht gesendet!',
    error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    footer: 'Schneller und sicherer Transport. Umzüge ohne Stress.',
    links: 'Links',
    rights: 'Alle Rechte vorbehalten.',
  },

  ro: {
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      about: 'Despre noi',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    hero: {
      title: 'TTOM Innsbruck – Mutări, Transport și Debarasări',
      subtitle:
        'Mutări, transport de mobilă și marfă, servicii de expediție și debarasări profesionale. Suntem disponibili în Innsbruck, Tirol și, la cerere, în toată Austria.',
      call: 'Sună acum',
      services: 'Serviciile noastre',
    },
    about: {
      title: 'Despre TTOM Innsbruck',
      text:
        'Suntem o echipă serioasă și punctuală din Innsbruck. Oferim servicii de mutări, expediții, transport de marfă și mobilier, precum și transportul obiectelor grele și voluminoase. Ne ocupăm și de debarasarea pivnițelor, subsolurilor, podurilor și locuințelor. De asemenea, oferim electrocasnice second-hand verificate, la cerere. Contactează-ne pentru o ofertă fără obligații.',
    },
    services: {
      title: 'Soluții de transport și servicii',
      moving: 'Mutări și transport mobilier',
      movingItems: [
        'Mutări de apartamente și case',
        'Transport mobilier',
        'Transport electrocasnice',
        'Transport obiecte casnice',
        'Ridicare și livrare mobilier',
      ],
      freight: 'Spediție și transport marfă',
      freightItems: [
        'Transport de marfă',
        'Transport de bunuri și colete',
        'Transport obiecte casnice',
        'Ridicare și livrare',
        'Transport la cerere',
      ],
      clearing: 'Debarasări și evacuări',
      clearingItems: [
        'Debarasare pivnițe',
        'Debarasare subsoluri',
        'Debarasare poduri',
        'Debarasare apartamente și locuințe',
        'Evacuarea obiectelor de care nu mai ai nevoie',
      ],
      heavy: 'Transport obiecte grele',
      heavyItems: [
        'Frigidere',
        'Mașini de spălat',
        'Canapele și dulapuri',
        'Mobilier greu',
        'Electrocasnice voluminoase',
      ],
      appliances: 'Electrocasnice second-hand',
      applianceItems: [
        'Frigidere verificate',
        'Mașini de spălat',
        'Aragazuri și cuptoare',
        'Alte aparate electrocasnice',
        'Livrare la cerere',
      ],
      why: 'De ce să alegi TTOM?',
      whyItems: [
        'Prețuri corecte și transparente',
        'Seriozitate și punctualitate',
        'Transport rapid și sigur',
        'Manipularea atentă a obiectelor',
        'Programări flexibile',
      ],
      whyDescriptions: [
  'Oferte transparente și prețuri corecte.',
  'Punem accent pe punctualitate și seriozitate.',
  'Manipulăm cu grijă bunurile dumneavoastră.',
  'Programări flexibile, la înțelegere.',
  'Acordăm atenție dorințelor și nevoilor dumneavoastră.',
],
    },
    quote: {
  title: 'Solicită o ofertă',
  subtitle: 'Completează formularul și te vom contacta.',
  email: 'E-mail',
  service: 'Serviciul dorit',
  choose: 'Alege serviciul',
  services: [
    'Mutări și transport mobilier',
    'Expediții și transport marfă',
    'Debarasări și evacuări',
    'Transport obiecte grele',
    'Electrocasnice second-hand',
  ],
  pickup: 'Locul de preluare',
  destination: 'Destinația',
  date: 'Data dorită',
  details: 'Informații suplimentare',
  placeholder: 'Descrie transportul de care ai nevoie...',
  submit: 'Solicită o oferta',
},
    gallery: 'Galerie',
    currentImage: 'Imaginea curentă',
    previous: 'Anterior',
    next: 'Următor',
    reviews: 'Recenzii clienți',
    contact: 'Contactează-ne',
    address: 'Adresă',
    hours: 'Program',
    days: 'Luni – Sâmbătă: 08:00 – 17:00',
    formTitle: 'Trimite un mesaj',
    name: 'Nume',
    phone: 'Telefon',
    message: 'Mesaj',
    send: 'Trimite mesaj',
    sent: 'Mesaj trimis!',
    error: 'Mesajul nu a putut fi trimis. Încearcă din nou.',
    footer: 'Transport rapid și sigur. Mutări fără stres.',
    links: 'Link-uri',
    rights: 'Toate drepturile rezervate.',
  },
};

const galleryImages = [
  '/poza1.webp',
  '/poza2.webp',
  '/poza3.webp',
  '/poza7.webp',
];

const serviceCards = [
  {
    key: 'moving',
    image: '/duba.webp',
    alt: 'Umzüge und Möbeltransporte',
  },
  {
    key: 'freight',
    image: '/poza04.jpeg',
    alt: 'Spedition und Gütertransporte',
  },
  {
    key: 'clearing',
    image: '/debarasari-beci.jpg',
    alt: 'Entrümpelung von Kellern und Untergeschossen',
  },
  {
    key: 'heavy',
    image: '/mobilier-greu.jpg',
    alt: 'Transport schwerer Gegenstände',
  },
  {
    key: 'appliances',
    image: '/masina de spalat.png',
    alt: 'Gebrauchte Elektrogeräte',
  },
];


function WhyUsCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-100px)',
        transition: 'opacity 800ms ease, transform 800ms ease',
        transitionDelay: `${index * 250}ms`,
      }}
      className="bg-black/50 backdrop-blur-md border border-green-500/30 rounded-2xl p-7 text-center shadow-xl hover:border-green-400 hover:-translate-y-1 transition-colors duration-300"
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-600/20 border border-green-500 flex items-center justify-center">
        <span className="text-4xl font-bold text-green-400">
          {icon}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </article>
  );
}



export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [sending, setSending] = useState(false);
    const [showGoogleMap, setShowGoogleMap] = useState(false);

  const t = translations[currentLang];

  // Referința caruselului de servicii
  const servicesTrackRef = useRef<HTMLDivElement>(null);

  // Funcția pentru butoanele caruselului
  const scrollServices = (direction: number) => {
    const track = servicesTrackRef.current;
    if (!track) return;

    const card = track.querySelector('article');
    if (!card) return;

    const gap = 24;
    const distance = card.getBoundingClientRect().width + gap;

    if (
      direction === 1 &&
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 10
    ) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({
        left: direction * distance,
        behavior: 'smooth',
      });
    }
  };

  // Galerie: schimbarea automată a imaginilor
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Servicii: derularea automată a caruselului
  useEffect(() => {
    const interval = setInterval(() => {
      scrollServices(1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);


async function handleContact(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    email: (form.elements.namedItem('email') as HTMLInputElement).value,
    service: (form.elements.namedItem('service') as HTMLSelectElement).value,
    pickup: (form.elements.namedItem('pickup') as HTMLInputElement).value,
    destination: (form.elements.namedItem('destination') as HTMLInputElement).value,
    date: (form.elements.namedItem('date') as HTMLInputElement).value,
    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
  };

  setSending(true);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || 'Contact request failed');
    }

    alert(t.sent);
    form.reset();

  } catch (error) {
    console.error('Contact form error:', error);
    alert(t.error);

  } finally {
    setSending(false);
  }
}


  return (
    <main className="min-h-screen text-black">
      <header className="shadow-lg border-b-3 border-color-green">
        <div className="max-w-8xl mx-auto px-3 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <a href="#home" className="text-3xl font-bold text-white font-serif">
              TTOM <span className="text-green-500">INNSBRUCK</span>
            </a>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-lg font-semibold text-white">
                <a href="#home">{t.nav.home}</a>
                <a href="#services">{t.nav.services}</a>
                <a href="#about">{t.nav.about}</a>
                <a href="#gallery">{t.nav.gallery}</a>
                <a href="#contact">{t.nav.contact}</a>
              </nav>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentLang('ro')}
                  aria-pressed={currentLang === 'ro'}
                  className={`px-3 py-1 rounded-full text-sm ${
                    currentLang === 'ro' ? 'bg-green-700 text-white' : 'bg-green-500'
                  }`}
                >
                  RO
                </button>
                <button
                  onClick={() => setCurrentLang('de')}
                  aria-pressed={currentLang === 'de'}
                  className={`px-3 py-1 rounded-full text-sm ${
                    currentLang === 'de' ? 'bg-green-700 text-white' : 'bg-green-500'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="pt-20 pb-16 px-6 bg-picture bg-center"
        style={{ backgroundImage: 'url(/poza01.jpg)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 px-4 leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: 'white',
              WebkitTextStroke: '2px #144d2a',
              textShadow: '0 0 10px #238649, 0 0 30px #135c2f',
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 font-bold px-3"
            style={{
              color: 'white',
              textShadow: '0 1px 4px #000',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+436605056709"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              ☎ {t.hero.call}
            </a>
            <a
              href="#services"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              ➜ {t.hero.services}
            </a>
          </div>
        </div>
      </section>

     
<section id="about" className="max-w-6xl mx-auto py-10 px-4">
<div className="flex flex-col items-center mb-12">
  <div className="inline-block">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-white">
      {t.about.title}
    </h2>

    <div className="green-animated-line mt-4" />
  </div>
</div>

  <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-center text-white">
    {t.about.text}
  </p>
</section>


<section id="services" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col items-center mb-12">
  <div className="inline-block">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-white">
      {t.services.title}
    </h2>

    <div className="green-animated-line mt-4" />
  </div>
</div>


    {/* CONTROALE CARUSEL */}
    <div className="flex justify-end gap-3 mb-6">
      <button
        type="button"
        onClick={() => scrollServices(-1)}
        aria-label="Serviciul anterior"
        className="w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white text-2xl hover:bg-yellow-400 hover:text-black transition"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollServices(1)}
        aria-label="Serviciul următor"
        className="w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white text-2xl hover:bg-yellow-400 hover:text-black transition"
      >
        ›
      </button>
    </div>

    {/* CARUSEL */}
    <div
      ref={servicesTrackRef}
     className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {serviceCards.map((card) => {
        const title = t.services[card.key as keyof typeof t.services] as string;

        const itemsKey =
          card.key === 'appliances'
            ? 'applianceItems'
            : `${card.key}Items`;

        const items = t.services[
          itemsKey as keyof typeof t.services
        ] as string[];

        return (
          <article
            key={card.key}
            className="group flex-shrink-0 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] snap-start bg-black/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-yellow-400/60 hover:shadow-yellow-400/10 transition-all duration-500 flex flex-col"
          >
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-7 flex flex-col flex-grow">
  <div className="min-h-[75px] flex items-center justify-center mb-6">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center">
      <span className="inline-block">
        {title}
        <span className="block w-full h-1 bg-white rounded-full mt-3" />
      </span>
    </h3>
  </div>

  <ul className="text-white/90 font-medium space-y-4 w-full flex-grow">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="text-white font-bold">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
          </article>
        );
      })}
    </div>

  </div>
</section>

<section id="why-us" className="py-16 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col items-center mb-12">
  <div className="inline-block">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-white">
      {t.services.why}
    </h2>

    <div className="green-animated-line mt-4" />
  </div>
</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      
{[
  { icon: '€', index: 0 },
  { icon: '✓', index: 1 },
  { icon: '↗', index: 2 },
  { icon: '◷', index: 3 },
  { icon: '♡', index: 4 },
].map((item) => (
  <WhyUsCard
    key={item.index}
    icon={item.icon}
    title={t.services.whyItems[item.index]}
    description={t.services.whyDescriptions[item.index]}
    index={item.index}
  />
))}


    </div>
  </div>
</section>
      

     



{/* GOOGLE & HEROLD REVIEWS SECTION */}
<section
  id="reviews"
  className="py-10 px-4 sm:px-6 bg-gray-900"
>
  <div className="max-w-5xl mx-auto">

    {/* TITLU */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center text-white mb-2">
      {currentLang === 'de'
        ? 'Kundenbewertungen'
        : 'Recenzii clienți'}
    </h2>

    <p className="text-center text-gray-400 text-sm sm:text-base mb-8">
      {currentLang === 'de'
        ? 'Ihre Meinung ist uns wichtig!'
        : 'Părerea dumneavoastră contează pentru noi!'}
    </p>

    {/* DOUA CARDURI */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* GOOGLE CARD */}
      <div className="bg-gray-800/80 border border-gray-700 rounded-3xl shadow-2xl p-5 sm:p-7 text-center">

        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="text-3xl font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>

        <div className="text-5xl sm:text-6xl font-extrabold text-white mb-3">
          5,0
          <span className="text-2xl text-gray-400"> / 5,0</span>
        </div>

        <div className="text-yellow-400 text-4xl tracking-widest mb-3">
          ★★★★★
        </div>

        <p className="text-gray-300 text-base sm:text-lg mb-8">
          {currentLang === 'de'
            ? '7 Rezensionen auf Google'
            : '7 recenzii pe Google'}
        </p>

        <a
          href="https://www.google.com/maps/place/TTOM+Innsbruck+%7C+Umzugsunternehmen+%26+Transporte/@47.2686631,11.4111764,17z/data=!4m8!3m7!1s0x479d69005da55cf1:0x286aec45be586d7e!8m2!3d47.2686595!4d11.4137567!9m1!1b1!16s%2Fg%2F11_1qcqpbp?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base px-5 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {currentLang === 'de'
            ? 'Alle Google-Bewertungen ansehen'
            : 'Vezi toate recenziile Google'}
          <span className="text-xl">↗</span>
        </a>

      </div>

      {/* HEROLD CARD */}
      <div className="bg-gray-800/80 border border-gray-700 rounded-3xl shadow-2xl p-5 sm:p-7 text-center">

        <div className="text-3xl font-extrabold text-white mb-5">
          herold<span className="text-green-500">.at</span>
        </div>

        <p className="text-gray-300 text-base sm:text-lg mb-6">
          {currentLang === 'de'
            ? 'Bewertungen auf Herold'
            : 'Recenzii pe Herold'}
        </p>

        <div className="min-h-[90px] flex items-center justify-center overflow-hidden">
          <HeroldReviews />
        </div>

      </div>

    </div>

    {/* MESAJ FINAL */}
    <p className="text-center text-gray-500 text-sm mt-7">
      {currentLang === 'de'
        ? 'Vielen Dank für Ihr Vertrauen in TTOM Innsbruck!'
        : 'Vă mulțumim pentru încrederea acordată TTOM Innsbruck!'}
    </p>

  </div>
</section>


      
<section
  id="contact"
  className="bg-cover bg-center py-10 px-6"
  style={{ backgroundImage: 'url(/poza8.png)' }}
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-10 text-center text-black">
  {t.contact}
</h2>
   
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

 



{/* SPALTE 1 - KARTE UND FIRMENDATEN */}
<div className="lg:col-span-1 bg-white/95 rounded-2xl shadow-xl border border-white/50 overflow-hidden flex flex-col">

  {/* GOOGLE MAPS KARTE */}
  <div className="w-full h-[280px]">
    <iframe
      title="TTOM Innsbruck - Standort"
      src="https://maps.google.com/maps?q=47.2686595,11.4137567&z=17&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0, display: 'block' }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>

  {/* FIRMENDATEN */}
  <div className="p-6 flex flex-col flex-grow">

    <h3 className="text-2xl font-bold text-gray-900 mb-3">
      TTOM Innsbruck
    </h3>

    <div className="flex items-start gap-3 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-600 flex-shrink-0 mt-1"
      >
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>

      <p className="text-gray-700 leading-relaxed">
        Egerdachstraße 34, 6020 Innsbruck, Österreich
      </p>
    </div>

    <p className="text-sm text-gray-500 mb-5">
      Standort unseres Lagers
    </p>

    {/* GOOGLE MAPS BUTTON */}
    <a
      href="https://www.google.com/maps/place/TTOM+Innsbruck+%7C+Umzugsunternehmen+%26+Transporte/@47.2686595,11.4137567,17z/data=!4m14!1m7!3m6!1s0x479d69005da55cf1:0x286aec45be586d7e!2sTTOM+Innsbruck+%7C+Umzugsunternehmen+%26+Transporte!8m2!3d47.2686595!4d11.4137567!16s%2Fg%2F11_1qcqpbp!3m5!1s0x479d69005da55cf1:0x286aec45be586d7e!8m2!3d47.2686595!4d11.4137567!16s%2Fg%2F11_1qcqpbp?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto w-full min-h-[58px] flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base transition-colors duration-300 rounded-xl"
    >
      In Google Maps öffnen
    </a>

    <p className="text-xs text-gray-500 text-center mt-3">
      Öffnen Sie unseren Standort in Google Maps und lassen Sie sich bequem eine Route anzeigen.
    </p>

  </div>
</div>



  {/* COLOANA 2 - INFORMATII CONTACT */}
  <div className="lg:col-span-1 bg-white/90 rounded-2xl shadow-xl border border-white/50 p-5 flex flex-col justify-center gap-7">
<h3 className="text-2xl font-extrabold text-gray-900 text-center border-b border-green-600 pb-3">
  {currentLang === 'de' ? 'Kontaktinformationen' : 'Informații de contact'}
</h3>
    <div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">
        📞 {t.phone}
      </h3>
      <a href="tel:+436605056709" className="text-green-800 font-bold text-lg">
        +43 660 5056709
      </a>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
  {currentLang === 'de'
    ? 'Rufen Sie uns an für ein Angebot oder weitere Informationen.'
    : 'Sună-ne pentru o ofertă sau informații suplimentare.'}
</p>
    </div>

    <div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">
        📍 {t.address}
      </h3>
      <p className="text-gray-800 font-semibold text-base">
        Egerdachstraße 34, 6020 Innsbruck
      </p>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
  {currentLang === 'de'
    ? 'Sie finden uns an unserem Standort in Innsbruck.'
    : 'Ne găsești la sediul nostru din Innsbruck.'}
</p>
    </div>

    <div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">
        ⏰ {t.hours}
      </h3>
      <p className="text-gray-800 font-semibold text-base">
        {t.days}
      </p>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
  {currentLang === 'de'
    ? 'Wir sind für Ihre Anfragen und Terminvereinbarungen erreichbar.'
    : 'Suntem disponibili pentru solicitările și programările tale.'}
</p>
    </div>

  </div>

  {/* COLOANA 3 - FORMULAR OFERTA */}
  <div className="lg:col-span-2 bg-white/95 p-5 md:p-6 rounded-2xl shadow-xl border border-gray-200">
    <form onSubmit={handleContact} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1">

      <h3 className="md:col-span-2 text-2xl font-bold mb-1 text-gray-900 text-center">
        {t.quote.title}
      </h3>

      <p className="md:col-span-2 text-gray-600 text-sm mb-4 text-center">
        {t.quote.subtitle}
      </p>

      <div className="mb-2">
        <label htmlFor="contact-name" className="block text-black mb-1 font-bold">
          {t.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-phone" className="block text-black mb-1 font-bold">
          {t.phone}
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-email" className="block text-black mb-1 font-bold">
          {t.quote.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-service" className="block text-black mb-1 font-bold">
          {t.quote.service}
        </label>
        <select
          id="contact-service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        >
          <option value="" disabled>{t.quote.choose}</option>
          {t.quote.services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="contact-pickup" className="block text-black mb-1 font-bold">
          {t.quote.pickup}
        </label>
        <input
          id="contact-pickup"
          name="pickup"
          type="text"
          required
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-destination" className="block text-black mb-1 font-bold">
          {t.quote.destination}
        </label>
        <input
          id="contact-destination"
          name="destination"
          type="text"
          required
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-date" className="block text-black mb-1 font-bold">
          {t.quote.date}
        </label>
        <input
          id="contact-date"
          name="date"
          type="date"
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contact-message" className="block text-black mb-1 font-bold">
          {t.quote.details}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          placeholder={t.quote.placeholder}
          className="w-full rounded-lg border border-gray-400 px-3 py-2 text-black"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="md:col-span-2 w-full mt-3 rounded-lg bg-green-700 hover:bg-green-800 px-5 py-2.5 text-white font-semibold text-base transition disabled:opacity-60"
      >
        {sending ? '...' : t.quote.submit}
      </button>

    </form>
  </div>

</div>

  </div>
</section>

      <a
        href="https://wa.me/436605056709?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Kontaktieren Sie TTOM über WhatsApp"
      >
        💬
      </a>

     
<footer className="text-white border-t-2 border-white/70 py-4 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

      <div>
        <h3 className="font-bold text-lg mb-1">
          TTOM Innsbruck
        </h3>
        <p className="text-gray-300 text-sm">
          🚐 {t.footer}
        </p>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">
          {t.links}
        </h3>
        <ul className="text-gray-300 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
          <li><a href="#home" className="hover:text-white transition">{t.nav.home}</a></li>
          <li><a href="#services" className="hover:text-white transition">{t.nav.services}</a></li>
          <li><a href="#about" className="hover:text-white transition">{t.nav.about}</a></li>
          <li><a href="#gallery" className="hover:text-white transition">{t.nav.gallery}</a></li>
          <li><a href="#contact" className="hover:text-white transition">{t.nav.contact}</a></li>
          <li><a href="/impressum" className="hover:text-green-400 transition">
            Impressum
          </a>
        </li>
        <li>
          <a href="/datenschutz" className="hover:text-green-400 transition">
            Datenschutz
  </a>
</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-gray-700 pt-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">

      <p>
        © {new Date().getFullYear()} TTOM Innsbruck – {t.rights}
      </p>

      <p className="font-medium">
        Made with ❤️ by <span className="text-white font-bold">Ramona</span>
      </p>

    </div>
  </div>
</footer>

    </main>
  );
}
