export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#071b16] text-white px-5 py-16">
      <div className="max-w-4xl mx-auto">

        <a
          href="/"
          className="text-green-400 hover:text-green-300 transition"
        >
          ← Zurück zur Startseite
        </a>

        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">
          Datenschutzerklärung
        </h1>

        <div className="w-24 h-1 bg-green-500 rounded-full mb-10" />

        <div className="space-y-10 text-gray-200 leading-7">

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten
              auf dieser Website ist:
            </p>
            <p className="mt-3">
              <strong>TTOM Innsbruck</strong><br />
              Inhaber: Zaharia Cristian-Tom<br />
              Dörferstraße 20, Tür 1<br />
              6063 Rum, Österreich<br />
              Telefon: +43 660 5056709<br />
              E-Mail: ttransport.austria@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              2. Allgemeine Hinweise
            </h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig.
              Wir verarbeiten Ihre personenbezogenen Daten ausschließlich
              im Rahmen der geltenden Datenschutzbestimmungen,
              insbesondere der Datenschutz-Grundverordnung (DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie unser Kontaktformular verwenden, werden die von Ihnen
              eingegebenen Daten verarbeitet. Dazu gehören insbesondere:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Name</li>
              <li>Telefonnummer</li>
              <li>E-Mail-Adresse</li>
              <li>Gewünschte Dienstleistung</li>
              <li>Abholadresse und Zieladresse</li>
              <li>Gewünschter Termin</li>
              <li>Ihre Nachricht</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden zur Bearbeitung Ihrer Anfrage und zur
              Kontaktaufnahme verwendet.
            </p>
            <p className="mt-3">
              Die Übermittlung erfolgt über unsere Website an unseren
              E-Mail-Dienst Gmail von Google. Die Anfrage wird an unsere
              geschäftliche E-Mail-Adresse weitergeleitet.
              Eine Speicherung der Formularanfragen in einer eigenen
              Website-Datenbank erfolgt nach der derzeitigen technischen
              Umsetzung nicht.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) sowie gegebenenfalls
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Bearbeitung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              4. E-Mail-Dienst Gmail
            </h2>
            <p>
              Für den Empfang und die Bearbeitung von Kontaktanfragen
              verwenden wir Gmail, einen Dienst von Google.
              Dabei können die übermittelten Nachrichten und darin
              enthaltenen personenbezogenen Daten durch Google verarbeitet
              werden.
            </p>
            <p className="mt-3">
              Weitere Informationen finden Sie in der
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline ml-1"
              >
                Datenschutzerklärung von Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              5. Google Maps
            </h2>
            <p>
              Auf unserer Website ist Google Maps eingebunden, um unseren
              Standort auf einer interaktiven Karte darzustellen.
              Anbieter ist Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Beim Aufruf der Seite mit der eingebundenen Karte wird
              eine Verbindung zu Google hergestellt. Dabei können
              insbesondere Ihre IP-Adresse und technische Informationen
              über Ihren Browser an Google übermittelt werden.
            </p>
            <p className="mt-3">
              Weitere Informationen finden Sie in der
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline ml-1"
              >
                Datenschutzerklärung von Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              6. Vercel Analytics
            </h2>
            <p>
              Wir verwenden Vercel Web Analytics, um anonymisierte
              Informationen über die Nutzung unserer Website zu erhalten.
              Dies hilft uns, die Website zu verbessern.
            </p>
            <p className="mt-3">
              Laut Anbieter verwendet Vercel Web Analytics keine Cookies
              und speichert anonymisierte Nutzungsdaten, beispielsweise
              aufgerufene Seiten, Browser- und Geräteinformationen.
            </p>
            <p className="mt-3">
              Weitere Informationen:
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline ml-1"
              >
                Vercel Analytics – Privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              7. Vercel Speed Insights
            </h2>
            <p>
              Wir verwenden Vercel Speed Insights zur Messung und
              Verbesserung der technischen Leistung unserer Website.
              Dabei werden technische Leistungsdaten wie Ladezeiten,
              Browsertyp, Gerätetyp und Betriebssystem verarbeitet.
            </p>
            <p className="mt-3">
              Laut Anbieter dienen diese Daten der anonymisierten
              Auswertung der Website-Performance.
            </p>
            <p className="mt-3">
              Weitere Informationen:
              <a
                href="https://vercel.com/docs/speed-insights/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline ml-1"
              >
                Vercel Speed Insights – Privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              8. Hosting
            </h2>
            <p>
              Unsere Website wird über die Plattform Vercel bereitgestellt.
              Beim Besuch der Website können technisch notwendige Daten
              verarbeitet werden, beispielsweise IP-Adresse,
              Zugriffszeitpunkt, Browserinformationen und Server-Logdaten.
            </p>
            <p className="mt-3">
              Diese Verarbeitung dient der sicheren und zuverlässigen
              Bereitstellung der Website.
            </p>
            <p className="mt-3">
              Weitere Informationen finden Sie in der
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline ml-1"
              >
                Datenschutzerklärung von Vercel
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              9. Cookies
            </h2>
            <p>
              Unsere Website verwendet nach der derzeitigen technischen
              Konfiguration keine eigenen Marketing- oder Werbe-Cookies.
              Technisch notwendige Funktionen und externe Dienste können
              jedoch technische Informationen im Browser verarbeiten.
            </p>
            <p className="mt-3">
              Bei der Nutzung eingebundener Drittanbieter-Inhalte,
              insbesondere Google Maps, können Daten an den jeweiligen
              Anbieter übertragen werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              10. Ihre Rechte
            </h2>
            <p>
              Im Rahmen der gesetzlichen Voraussetzungen haben Sie
              insbesondere folgende Rechte:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte können Sie uns jederzeit
              unter folgender E-Mail-Adresse kontaktieren:
            </p>
            <p className="mt-2 text-green-400">
              ttransport.austria@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              11. Beschwerderecht
            </h2>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen Datenschutzrecht verstößt,
              haben Sie das Recht, Beschwerde bei der österreichischen
              Datenschutzbehörde einzulegen.
            </p>
            <p className="mt-3">
              Österreichische Datenschutzbehörde<br />
              Barichgasse 40–42<br />
              1030 Wien, Österreich<br />
              <a
                href="https://www.dsb.gv.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                www.dsb.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              12. Aktualität
            </h2>
            <p>
              Diese Datenschutzerklärung kann bei Änderungen unserer
              Website oder der eingesetzten Dienste angepasst werden.
            </p>
          </section>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} TTOM Innsbruck
        </div>

      </div>
    </main>
  );
}