
export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#071b18] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="text-green-400 hover:text-green-300 transition"
        >
          ← Zurück zur Startseite
        </a>

        <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-4">
          Impressum
        </h1>

        <div className="w-24 h-1 bg-green-500 rounded-full mb-10" />

        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Unternehmensangaben
            </h2>
            <p>TTOM Innsbruck</p>
            <p>Inhaber: Zaharia Cristian-Tom</p>
            <p>Dörferstraße 20, Tür 1</p>
            <p>6063 Rum, Österreich</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+436605056709" className="hover:text-green-400">
                +43 660 5056709
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:ttransport.austria@gmail.com"
                className="hover:text-green-400"
              >
                ttransport.austria@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Gewerbeangaben
            </h2>
            <p>GISA-Zahl: 40356525</p>
            <p>Gewerbestandort: 6063 Rum, Österreich</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Unternehmensgegenstand
            </h2>
            <p>
              Güterbeförderung mit Kraftfahrzeugen oder Kraftfahrzeugen
              mit Anhängern im Rahmen der eingetragenen Gewerbeberechtigung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Verantwortlich für den Inhalt
            </h2>
            <p>Zaharia Cristian-Tom</p>
            <p>Dörferstraße 20, Tür 1, 6063 Rum, Österreich</p>
          </div>
        </section>

        <p className="text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} TTOM Innsbruck. Alle Rechte vorbehalten.
        </p>
      </div>
    </main>
  );
}
