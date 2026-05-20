'use client';

import { useEffect, useState } from 'react';

const translations = {
  ro: {
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      about: 'Despre noi',
      gallery: 'Galerie',
      contact: 'Contact'
    },
    home: {
      mainTitle: 'Transport, Mutări și Electrocasnice Second-Hand',
      subtitle: 'Servicii rapide și serioase de transport marfă, mutări și cărat obiecte casnice. Comercializăm și electrocasnice second-hand verificate și funcționale.',
      callNow: 'Sună acum',
      requestQuote: 'Cere ofertă',
      seeServices: 'Vezi servicii',
      aboutSection: 'Despre noi',
      aboutText: 'Suntem o echipă serioasă și punctuală, specializată în transport de marfă, mutări și manipularea obiectelor grele sau voluminoase.Debarasare și relocare rapidă și ușoară:Curățenie și mutări profesionale în Austria.. De asemenea, vindem electrocasnice second-hand în stare bună, testate și pregătite pentru utilizare.' 

,
      servicesSection: 'Serviciile noastre',
      whyChooseUs: 'De ce să ne alegi',
      affordablePrices: 'Prețuri accesibile',
      seriousness: 'Seriozitate și punctualitate',
      fastSafe: 'Transport rapid și sigur',
      experience: 'Experiență în mutări și manipulare',
      flexibility: 'Program flexibil',
      gallery: 'Galerie',
      reviews: 'Recenzii ★★★★★',
      reviewText1: 'Foarte serioși și rapizi. Recomand cu încredere! ★★★★★',
      reviewText2: 'Mutarea a fost făcută fără probleme și la un preț bun.★★★★★',
      reviewText3: 'Recomand cu incredere.★★★★★',
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      gallery: 'Galerie',
      contact: 'Kontakt'
    },
    home: {
      mainTitle: 'Transport, Umzüge & Gebrauchte Elektrogeräte',
      subtitle: 'Schnelle und professionelle Frachttransporte, Umzüge und Haushaltsgegenstände. Wir verkaufen überprüfte und funktionsfähige Gebrauchtelektrogeräte.',
      callNow: 'Jetzt anrufen',
      requestQuote: 'Angebot anfordern',
      seeServices: 'Services ansehen',
      aboutSection: 'Über uns',
      aboutText: 'Wir sind ein ernsthafter und pünktliches Team, das sich auf Frachttransport, Umzüge und den Umgang mit schweren oder sperrigen Gegenständen spezialisiert hat.Ratz Fatz Räumung & Umzug:Professionelle Entrümpelungen und Übersiedlungen in Österreich.. Wir verkaufen auch Gebrauchtelektrogeräte in gutem Zustand, getestet und einsatzbereit. ',
      servicesSection: 'Unsere Dienstleistungen',
      whyChooseUs: 'Warum uns wählen',
      affordablePrices: 'Erschwingliche Preise',
      seriousness: 'Ernsthaftigkeit & Pünktlichkeit',
      fastSafe: 'Schneller & sicherer Transport',
      experience: 'Erfahrung in Umzügen & Handhabung',
      flexibility: 'Flexibles Programm',
      gallery: 'Galerie',
      reviews: 'Bewertungen★★★★★',
      reviewText1: 'Sehr professionell und schnell. Ich empfehle mit Vertrauen!★★★★★',
      reviewText2: 'Der Umzug war problemlos und zu einem guten Preis.★★★★★',
       reviewText3: 'Ich empfehle es uneingeschränkt..★★★★★',
    }
  }
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'de' | 'ro'>('de');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryImages = ['/poza1.webp', '/poza2.webp', '/poza3.webp', '/poza7.webp'];
  const t = translations[currentLang];

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
  
    <main className="min-h-screen text-black">
      {/* Header */}
 <meta name="viewport" content="width=device-width, initial-scale=1" />
      <header className=" shadow-lg border-b-3 border-color-green">
        <div className="max-w-8xl mx-auto px-3 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
           <h1 className="text-2xl sm:text-3xl font-bold text-white font-serif flex items-center gap-1 text-center">
   <span className="text-green-500">T</span>TRANSPORT.at</h1>

            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Navigation */}
            <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-lg font-semibold text-white font-serif text-center">
                <a href="#home" className="hover:text-gray-600">
                  {t.nav.home}
                </a>
                <a href="#services" className="hover:text-gray-600">
                  {t.nav.services}
                </a>
                <a href="#about" className="hover:text-gray-600">
                  {t.nav.about}
                </a>
                <a href="#gallery" className="hover:text-gray-600">
                  {t.nav.gallery}
                </a>
                <a href="#contact" className="hover:text-gray-600">
                  {t.nav.contact}
                </a>
              </nav>

              {/* Language Selector */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentLang('ro')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    currentLang === 'ro' ? 'bg-green text-white' : 'bg-green-500'
                  }`}
                >
                  RO
                </button>
                <button
                  onClick={() => setCurrentLang('de')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    currentLang === 'de' ? 'bg-green text-white' : 'bg-green-500'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
  

 <section
 
  id="home" className="pt-20 pb-16 px-6 bg-picture bg-center" style={{backgroundImage: 'url(/poza01.jpg)'}}>
        <div className="max-w-4xl mx-auto text-center">
          
          <h2
className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-center px-4 leading-tight"
  style={{
    fontFamily: " 'Poppins',sans-serif",
    color: "white",
    WebkitTextStroke: "3px #144d2a",
    textShadow: `
      0 0 10px #238649,
      0 0 30px #135c2f,
      0 10px 10px rgba(0,0,0,0.8)
    `
  }}
>
  {t.home.mainTitle}
</h2>
        <p
  className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-8 font-extrabold px-3 text-center"
  style={{
    WebkitTextStroke:  "3px #000000",
    color: "white",
    textShadow: "0 1px 3px #144d2a",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  {t.home.subtitle}
</p>
 {/* Action Buttons */}
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">

  {/* CALL BUTTON */}
  <a
    href="tel:+436764199392"
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-sm md:text-lg transition-all"
  >
    ☎ {t.home.callNow}
  </a>

  {/* SERVICES BUTTON */}
  <a
    href="#services"
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-sm md:text-lg transition-all"
  >
    ➜ {t.home.seeServices}
  </a>

</div>

</div>
       
      </section>

      {/* About Section */}
     <div className="max-w-6xl mx-auto">
       <h3 className="text-4xl font-bold mb-3 py-9 text-white text-center">
        {t.home.aboutSection}
       </h3>
      <p
className="text-lg sm:text-xl md:text-3xl font-bold leading-relaxed text-center px-4"
          style={{
        
        color: "white",
        
        fontFamily: "'Poppins', sans-serif",
         }}
          >
         {t.home.aboutText}
         </p>
      <div className="flex flex-col md:flex-row items-center gap-10">
       </div>
       </div>

      {/* Services Section */}
     <section id="services" className="py-20 px-6"> 
       <div className="max-w-7xl mx-auto">   
         <h3 className="text-4xl font-bold mb-16 text-center text-white drop-shadow-lg">
          {t.home.servicesSection}   
           </h3>   
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">     
        {/* CARD 1 */}      
               <div className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center">       
                <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center min-h-[120px] flex items-center">         
                   {currentLang === 'ro' ? 'Transport & Mutări' : 'Transport & Umzüge'}       
                   </h4>        
                   <img          
                   src="/duba.webp"  alt="Transport" className=" h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-2xl shadow-2xl mb-6"       
                    />        
                    <ul className="text-white t font-bold space-y-4 w-full">          
   
 <li>
  ✓ {currentLang === 'ro'
    ? 'Mutări apartamente'
    : 'Wohnungsumzüge'}
</li>
         
                  <li>
  ✓ {currentLang === 'ro'
    ? 'Mutări case'
    : 'Hausumzüge'}
</li>

                   <li>
  ✓ {currentLang === 'ro'
    ? 'Transport mobilier'
    : 'Möbeltransport'}
</li>         
                   <li>
  ✓ {currentLang === 'ro'
    ? 'Transport electrocasnice'
    : 'Transport von Elektrogeräten'}
</li>       
                    <li>
  ✓ {currentLang === 'ro'
    ? 'Transport marfă'
    : 'Warentransport'}
</li>         
                   <li>
  ✓ {currentLang === 'ro'
    ? 'Cărat obiecte casnice'
    : 'Transport von Haushaltsgegenständen'}
</li>      
                     </ul>      
                     </div>      
        {/* CARD 2 */}      
                     <div className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center">        
                     <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center min-h-[120px] flex items-center">        
                      {currentLang === 'ro' ? 'Cărat Obiecte Grele' : 'Transport schwerer Gegenstände'}    
                       </h4>        
                       <img          
                       src="/poza04.jpeg"  alt="Mutări"         
                      className="h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-2xl shadow-2xl mb-6"      
                         />       
                          <ul className="text-white  font-bold space-y-4 w-full">         
                                                               <li>
  ✓ {currentLang === 'ro'
    ? 'Frigidere'
    : 'Kühlschränke'}
</li>          
                           <li>
  ✓ {currentLang === 'ro'
    ? 'Mașini de spălat'
    : 'Waschmaschinen'}
</li>         
                            <li>
  ✓ {currentLang === 'ro'
    ? 'Canapele'
    : 'Couches'}
</li>          
                            <li>
  ✓ {currentLang === 'ro'
    ? 'Dulapuri'
    : 'Schränke'}
</li>         
                             <li>
  ✓ {currentLang === 'ro'
    ? 'Mobilier greu'
    : 'Schweres Möbel'}
</li>       
                              </ul>      
                              </div>      
      {/* CARD 3 */}      
                              <div className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center">        
                              <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center min-h-[120px] flex items-center">         
                                 {currentLang === 'ro' ? 'Electrocasnice Second-Hand' : 'Gebrauchte Elektrogeräte'}    
                                 </h4>        
                                 <img  src="/masina de spalat.png"  alt="Electrocasnice"  className=" h-[320px] object-cover rounded-2xl shadow-2xl mb-6 bg-white"       
                                  />       
                                   <ul className="text-white  font-bold space-y-4 w-full">         
                                     <li>
  ✓ {currentLang === 'ro'
    ? 'Frigidere'
    : 'Kühlschränke'}
</li>        
                                      
<li>
  ✓ {currentLang === 'ro'
    ? 'Aragaze'
    : 'Herde'}
</li>        
                                      <li>
  ✓ {currentLang === 'ro'
    ? 'Mașini de spălat'
    : 'Waschmaschinen'}
</li>        
                                       <li>
  ✓ {currentLang === 'ro'
    ? 'Cuptoare'
    : 'Öfen'}
</li>          
                                       <li>
  ✓ {currentLang === 'ro'
    ? 'Alte aparate'
    : 'Andere Geräte'}
</li>        
                                       </ul>      
                                       </div>      
      {/* CARD 4 */}      
                                       <div className="bg-black/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center">        
                                       <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center min-h-[120px] flex items-center">          
                                        {t.home.whyChooseUs}        
                                        </h4>        
                                        <img src="/poza9.png" alt="Why choose us"  className=" h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-2xl shadow-2xl mb-6"      
                                         />        
                                         <ul className="text-white  font-bold space-y-4 w-full">         
                                           <li>✓ {t.home.affordablePrices}</li>         
                                            <li>✓ {t.home.seriousness}</li>         
                                             <li>✓ {t.home.fastSafe}</li>          
                                             <li>✓ {t.home.experience}</li>          
                                             <li>✓ {t.home.flexibility}</li>       
      </ul>     
      </div>   
      </div> 
      </div></section>

      {/* Gallery Section */}
      <section id="gallery" className=" bg-opacity-95 py-16 px-9">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">{t.home.gallery}</h3>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div className="h-96 md:h-[520px]">
              <img
                src={galleryImages[galleryIndex]}
                alt={`Galerie ${galleryIndex + 1}`}
                className="h-full w-full object-cover transition-all duration-700 ease-out"
              />
            </div>

            <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    galleryIndex === index ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-white">
            <p className="text-lg">{currentLang === 'ro' ? 'Imaginea curentă' : 'Aktuelles Bild'} {galleryIndex === 0 ? '1' : galleryIndex === 1 ? '2' : galleryIndex === 2 ? '3' : '7'}</p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
               {currentLang === 'ro' ? '◀ Anterior' : '◀ Zurück'}
              </button>
              <button
                onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
                className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
               {currentLang === 'ro' ? 'Următor ▶' : 'Weiter ▶'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className=" bg-opacity-95 py-10 px-9">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-yellow-400">
  {t.home.reviews}
</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-700 italic text-lg">"{t.home.reviewText1}"</p>
              <p className="text-gray-600 mt-4 font-semibold">- Jhon</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-700 italic text-lg">"{t.home.reviewText2}"</p>
              <p className="text-gray-600 mt-4 font-semibold">- Ella</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-700 italic text-lg">"{t.home.reviewText3}"</p>
              <p className="text-gray-600 mt-4 font-semibold">- Dan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
 <section id="contact" className="bg-cover bg-center py-10 px-9" style={{backgroundImage: 'url(/poza8.png)'}}>
  <div className="max-w-3xl mx-auto">
    <h3 className="text-3xl font-bold mb-12 text-center text-black">
      {currentLang === 'ro' ? 'Contactează-ne' : 'Kontaktieren Sie uns'} </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"> 
        <div className="space-y-8 mb-10"> 
    <h3 className="text-4xl font-bold mb-8">  </h3> 
        <div> 
          <h4 className="text-2xl font-bold mb-2">📞Telefon:</h4>
            <p className="text-black  font-bold text-lg md:text-2xl">00436764199392</p>
         </div>
        <div> 
          <h4 className="text-2xl font-bold mb-2">📍{currentLang === 'ro' ? 'Adresa:' : 'Adresse:'}</h4>
            <p className="text-black  font-bold text-lg md:text-2xl">Egerdachstraße 34, 6020 Innsbruck</p> 
         </div>
         <div>
          <h4 className="text-2xl font-bold mb-2">⏰{currentLang === 'ro' ? 'Program:' : 'Öffnungszeiten:'}</h4>
             <p className="text-black  font-bold text-lg md:text-2xl"> {currentLang === 'ro' ? 'Luni' : 'Montag'} – {currentLang === 'ro' ? 'Sâmbătă' : 'Samstag'}: 08:00 – 17:00</p>
           </div> 
          </div> 
           <div className="bg-black-100 p-8 rounded-lg shadow-lg">
      
<form
   onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
     const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };
   const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(formData),
     });
    if (res.ok) {
      alert("Nachricht gesendet!");
    } else {
      alert("Eroare!");
    }
  }}
>
  <h3 className="text-3xl font-bold mb-4">  {currentLang === 'ro' ? 'Trimite un mesaj' : 'Nachricht senden'}</h3> 
 <div className="mb-4">
  <label className="block text-black text-2xl mb-2 font-bold">{currentLang === 'ro' ? 'Nume' : 'Name'}</label>
 <input
  name="name"
  type="text"
  className="w-full rounded-lg border border-black-300 px-3 py-2"
/> 
  </div> 
  <div className="mb-4">
 <label className="block text-black text-2xl mb-2 font-bold">{currentLang === 'ro' ? 'Telefon' : 'Phone'}</label>
<input
  name="phone"
  type="text"
  className="w-full rounded-lg border border-black-300 px-3 py-2"
 /> 
 </div> 
  <div className="mb-4">
  <label className="block text-black text-2xl mb-2 font-bold">{currentLang === 'ro' ? 'Mesaj' : 'Nachricht'}</label>
 <textarea
  name="message"
  className="w-full rounded-lg border border-black-300 px-3 py-2"
  rows={5}
></textarea>
                                        </div> <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"> {currentLang === 'ro' ? 'Trimite mesaj' : 'Nachricht senden'} </button> 
                                        </form> 
                                        </div> 
                                        </div> 
                                        </div>
                                         </section>
<a 
  href{/* WhatsApp Floating Button */}
<a 
  href="https://wa.me/436764199392?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20more%20information." 
  target="_blank" 
  rel="noopener noreferrer"
  className="whatsapp-float"
  aria-label="Contact via WhatsApp"
>
  💬
</a>



      {/* Footer */}
      <footer className=" text-white border-t-4 border-white py-5 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">TTRANSPORT</h4>
              
              <p className="text-gray-400">🚐{currentLang === 'ro' ? 'Transport rapid și sigur. Mutări fără stres.' : ' Schneller und sicherer Transport. Umzüge ohne Stress.'}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Link-uri</h4>
             <ul className="text-gray-400 flex flex-wrap justify-center md:justify-start gap-4 font-semibold">
                <li><a href="#home" className="hover:text-white">{t.nav.home}</a></li>
                <li><a href="#services" className="hover:text-white">{t.nav.services}</a></li>
                <li><a href="#about" className="hover:text-white">{t.nav.about}</a></li>
                <li><a href="#gallery" className="hover:text-white">{t.nav.gallery}</a></li>
                <li><a href="#contact" className="hover:text-white">{t.nav.contact}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 TTRANSPORT -{currentLang === 'ro' ? 'Toate drepturile rezervate.' : ' Alle Rechte vorbehalten.'}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
