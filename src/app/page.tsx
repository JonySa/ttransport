
'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';


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
      title: 'Über TTOM',
      text:
        'Wir sind ein zuverlässiges und pünktliches Team in Innsbruck. Unsere Leistungen umfassen Umzüge, Spedition, Güter- und Möbeltransporte sowie den sicheren Transport schwerer und sperriger Gegenstände. Außerdem übernehmen wir Entrümpelungen von Kellern, Untergeschossen, Dachböden und Wohnungen. Auf Wunsch bieten wir auch geprüfte gebrauchte Elektrogeräte an. Kontaktieren Sie uns für ein unverbindliches Angebot.',
    },
    services: {
      title: 'Unsere Dienstleistungen',
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
      title: 'Despre TTOM',
      text:
        'Suntem o echipă serioasă și punctuală din Innsbruck. Oferim servicii de mutări, expediții, transport de marfă și mobilier, precum și transportul obiectelor grele și voluminoase. Ne ocupăm și de debarasarea pivnițelor, subsolurilor, podurilor și locuințelor. De asemenea, oferim electrocasnice second-hand verificate, la cerere. Contactează-ne pentru o ofertă fără obligații.',
    },
    services: {
      title: 'Serviciile noastre',
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
    image: '/poza9.png',
    alt: 'Entrümpelung von Kellern und Untergeschossen',
  },
  {
    key: 'heavy',
    image: '/masina de spalat.png',
    alt: 'Transport schwerer Gegenstände',
  },
  {
    key: 'appliances',
    image: '/masina de spalat.png',
    alt: 'Gebrauchte Elektrogeräte',
  },
];

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [sending, setSending] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

async function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Contact request failed');

      alert(t.sent);
      form.reset();
    } catch {
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
        <h2 className="text-4xl font-bold mb-8 text-white text-center">
          {t.about.title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-center text-white">
          {t.about.text}
        </p>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            {t.services.title}
          </h2>

   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center"
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center min-h-[90px] flex items-center">
                    {title}
                  </h3>

                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-[250px] object-cover rounded-2xl shadow-xl mb-6"
                  />

                  <ul className="text-white font-bold space-y-4 w-full">
                    {items.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}

            <article className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center min-h-[90px] flex items-center">
                {t.services.why}
              </h3>
              <img
                src="/poza9.png"
                alt="Warum TTOM wählen"
                className="w-full h-[250px] object-cover rounded-2xl shadow-xl mb-6"
              />
              <ul className="text-white font-bold space-y-4 w-full">
                {t.services.whyItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            {t.gallery}
          </h2>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div className="h-96 md:h-[520px]">
              <img
                src={galleryImages[galleryIndex]}
                alt={`TTOM Innsbruck – ${t.gallery} ${galleryIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Bild ${index + 1}`}
                  aria-pressed={galleryIndex === index}
                  onClick={() => setGalleryIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                    galleryIndex === index ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-white">
            <p>
              {t.currentImage} {galleryIndex + 1}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setGalleryIndex(
                    (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                  )
                }
                className="rounded-full bg-blue-600 px-5 py-2 text-white"
              >
                ◀ {t.previous}
              </button>
              <button
                onClick={() =>
                  setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
                }
                className="rounded-full bg-blue-600 px-5 py-2 text-white"
              >
                {t.next} ▶
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
            {t.reviews} ★★★★★
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ['Sehr professionell und schnell. Ich empfehle mit Vertrauen!', 'Jhon'],
              ['Der Umzug war problemlos und zu einem guten Preis.', 'Ella'],
              ['Ich empfehle es uneingeschränkt.', 'Dan'],
            ].map(([review, author]) => (
              <article key={author} className="bg-white rounded-3xl p-8 shadow-lg">
                <p className="text-gray-700 italic text-lg">"{review} ★★★★★"</p>
                <p className="text-gray-600 mt-4 font-semibold">- {author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-cover bg-center py-10 px-6"
        style={{ backgroundImage: 'url(/poza8.png)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">
            {t.contact}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">📞 {t.phone}</h3>
                <a
                  href="tel:+436605056709"
                  className="text-black font-bold text-xl"
                >
                  +43 660 5056709
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">📍 {t.address}</h3>
                <p className="text-black font-bold text-xl">
                  Egerdachstraße 34, 6020 Innsbruck
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">⏰ {t.hours}</h3>
                <p className="text-black font-bold text-xl">{t.days}</p>
              </div>
            </div>

            <div className="bg-white/90 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleContact}>
                <h3 className="text-3xl font-bold mb-4">{t.formTitle}</h3>

                <div className="mb-4">
                  <label htmlFor="contact-name" className="block text-black text-lg mb-2 font-bold">
                    {t.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-400 px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-phone" className="block text-black text-lg mb-2 font-bold">
                    {t.phone}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-gray-400 px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-message" className="block text-black text-lg mb-2 font-bold">
                    {t.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    className="w-full rounded-lg border border-gray-400 px-3 py-2"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
                >
                  {sending ? '...' : t.send}
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

      <footer className="text-white border-t-4 border-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">TTOM Innsbruck</h3>
              <p className="text-gray-300">🚐 {t.footer}</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.links}</h3>
              <ul className="text-gray-300 flex flex-wrap gap-4 font-semibold">
                <li><a href="#home">{t.nav.home}</a></li>
                <li><a href="#services">{t.nav.services}</a></li>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#gallery">{t.nav.gallery}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} TTOM Innsbruck – {t.rights}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
