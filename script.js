document.addEventListener("DOMContentLoaded", function () {
  // State management
  const state = {
    isMobileMenuOpen: false,
    currentSlide: 0,
    language: "de",
    showScrollButton: false,
    activeSection: "hero",
    translations: {
      de: {
        home: "Home",
        motorcycles: "Motorräder",
        events: "Veranstaltungen",
        workshop: "Werkstatt",
        about: "Über uns",
        heroWelcome: "Dein Team von",
        heroIntro:
          "Welcome to the House of Motorcycles – wo dein Bike mehr ist als nur ein Fortbewegungsmittel.",
        heroBikes:
          "Ob Harley, Chopper oder Cruiser – wir helfen dir, genau das richtige Gefährt zu finden, sei es aus Europa oder direkt als US-Import.",
        heroPassion:
          "Bei uns bekommst du nicht nur Bikes, sondern echte Leidenschaft auf zwei Rädern.",
        heroCustom:
          "Vom klassischen Auspuff- oder Lenkerumbau bis hin zu komplett individuellen Custom-Projekten: Wir machen's möglich.",
        heroIdea: "Du hast die Idee – wir setzen sie um.",
        heroOutro:
          "House of Motorcycles steht für ehrliche Beratung, saubere Arbeit und Bikes, die Blicke auf sich ziehen. Schau vorbei, frag uns aus – wir sind ready, wenn du es bist.",
        findUs: "Standort",
        welcome: "Willkommen bei House of Motorcycles",
        salesRoom: "Zum Shop",
        featuredBikes: "Ausgewählte Bikes",
        onlinePurchase: "Motorrad Verkauf",
        delivery: "Motorrad Vermietung",
        tradeIn: "Fahrzeug Vermittlung",
        customization: "Custom Umbauten",
        purchaseDesc:
          "Schaue dich in unserem Verkaufsraum um und lass uns wissen ob dir ein Bike gefällt, oder aber welches Du suchst! ",
        deliveryDesc:
          "Du kannst ausgewählte Bikes bei uns auch mieten! Frag einfach ein Datum an und wir erstellen dir ein passendes Angebot. ",
        tradeInDesc:
          "Du hast keine Lust dein Motorrad selber zu inserieren? Kein problem! Wir übernehmen das für dich!",
        customDesc: "Schau dir unsere Galerie an, lass dich inspirieren und lass uns wissen ob auch Du einen Umbau haben möchtest. Unsere Werkstatt wartet auf dich!",
        contactUs: "Kontakt",
        quickLinks: "Schnellzugriff",
        rights: "© 2025 House of Motorcycles. Alle Rechte vorbehalten.",
        privacyPolicy: `
              <br><br />
                <strong>1. Datenschutz auf einen Blick</strong><br>
                <em>Allgemeine Hinweise</em><br>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.<br><br>

                <strong>Datenerfassung auf dieser Website</strong><br>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.<br><br>

                <strong>Wie erfassen wir Ihre Daten?</strong><br>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br><br>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.<br><br>

                <strong>Wofür nutzen wir Ihre Daten?</strong><br>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.<br><br>

                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br><br>

                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.<br><br>

                <strong>Auftragsverarbeitung</strong><br>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.<br><br>


                <strong>2. Allgemeine Hinweise und Pflichtinformationen Datenschutz</strong><br>

                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>

                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                <strong>Hinweis zur verantwortlichen Stelle</strong><br>

                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

                <p>Nielsen&Arens GbR<br>
                Kevin Arens<br>
                Heideland-Ost 34<br>
                24976 Handewitt<br>
                Tel.: 0151/15901791<br>
                E-Mail: houseofmotorcycles@proton.me</p>

                <p>Empfänger von personenbezogenen Daten</p>

                <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>

                <p>Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>

                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                <p>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</p>

                <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>

                <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>

                <p>Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>

                <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                <p>Recht auf Datenübertragbarkeit</p>

                <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                <p>Auskunft, Berichtigung und Löschung</p>

                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

                <p>Recht auf Einschränkung der Verarbeitung</p>

                <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>

                <ul>
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>

                <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>


                <br> <br>
                <strong>3. Datenerfassung auf dieser Website Anfrage per E-Mail, Telefon oder Telefax</strong><br />
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br /><br />

                Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (<strong>Art. 6 Abs. 1 lit. f DSGVO</strong>) oder auf Ihrer Einwilligung (<strong>Art. 6 Abs. 1 lit. a DSGVO</strong>), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.<br /><br />

                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.<br /><br />

                <strong>4. Soziale Medien Instagram</strong><br />
                Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.<br /><br />

                Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.<br /><br />

                Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.<br /><br />

                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.<br /><br />

                Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank">https://www.facebook.com/legal/controller_addendum</a>.<br /><br />

                Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.<br /><br />

                Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:<br />
                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, 
                <a href="https://privacycenter.instagram.com/policy/" target="_blank">https://privacycenter.instagram.com/policy/</a> und 
                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank">https://de-de.facebook.com/help/566994660333381</a>.<br /><br />

                Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: 
                <a href="https://privacycenter.instagram.com/policy/" target="_blank">https://privacycenter.instagram.com/policy/</a>.<br /><br />

                Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: 
                <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a>.<br /><br />

                Quelle: <a href="https://www.e-recht24.de" target="_blank">https://www.e-recht24.de</a>

      `,
      },
      en: {
        home: "Home",
        motorcycles: "Motorcycles",
        events: "Location",
        workshop: "Workshop",
        about: "About",
        heroWelcome: "Your Team from",
        heroIntro:
          "Welcome to the House of Motorcycles – where your bike is more than just a means of transportation.",
        heroBikes:
          "Whether Harley, Chopper or Cruiser – we help you find exactly the right vehicle, be it from Europe or directly as a US import.",
        heroPassion:
          "With us you get not just bikes, but real passion on two wheels.",
        heroCustom:
          "From classic exhaust or handlebar modifications to completely individual custom projects: We make it possible.",
        heroIdea: "You have the idea – we implement it.",
        heroOutro:
          "House of Motorcycles stands for honest advice, clean work and bikes that turn heads. Stop by, ask us questions – we're ready when you are.",
        findUs: "Location",
        welcome: "Welcome to House of Motorcycles",
        salesRoom: "To the shop",
        featuredBikes: "Featured Bikes",
        onlinePurchase: "Motorcycle Sales",
        delivery: "Motorcycle Rental",
        tradeIn: "Vehicle Brokerage",
        customization: "Custom Builds",
        purchaseDesc:
          "Take a look around our showroom and let us know if you see a bike you like — or tell us what you're looking for!",
        deliveryDesc:
          "You can also rent selected bikes from us! Just request a date and we’ll create a tailored offer for you.",
        tradeInDesc:
          "Don’t feel like listing your motorcycle yourself? No problem — we’ll take care of it for you!",
        customDesc: "Check out our gallery, get inspired, and let us know if you’d like a custom build too. Our workshop is ready for you!",
        contactUs: "Contact Us",
        quickLinks: "Quick Links",
        rights: "© 2025 House of Motorcycles. All rights reserved.",
        privacyPolicy: `
              <br><br />
                <strong>1. Privacy at a Glance</strong><br>
                <em>General Information</em><br>
                The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.<br><br>

                <strong>Data Collection on this Website</strong><br>
                <strong>Who is responsible for data collection on this website?</strong><br>
                The data processing on this website is carried out by the website operator. Their contact details can be found in the section "Notice on the Responsible Party" in this privacy policy.<br><br>

                <strong>How do we collect your data?</strong><br>
                Your data is collected on the one hand by you providing it to us. This can be, for example, data that you enter in a contact form.<br><br>
                Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g., internet browser, operating system, or time of page access). The collection of this data occurs automatically as soon as you enter this website.<br><br>

                <strong>What do we use your data for?</strong><br>
                Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.<br><br>

                <strong>What rights do you have regarding your data?</strong><br>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.<br><br>

                For this and other questions on the subject of data protection, you can contact us at any time.<br><br>

                <strong>Data Processing Agreement</strong><br>
                We have concluded a data processing agreement (DPA) for the use of the aforementioned service. This is a data protection contract required by law, which ensures that this service processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.<br><br>


                <strong>2. General Information and Mandatory Information on Data Protection</strong><br>

                <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>

                <p>When you use this website, various personal data are collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>

                <p>We point out that data transmission on the Internet (e.g., when communicating by email) can have security gaps. A complete protection of data against access by third parties is not possible.</p>

                <strong>Notice on the Responsible Party</strong><br>

                <p>The responsible party for data processing on this website is:</p>

                <p>Nielsen&Arens GbR<br>
                Kevin Arens<br>
                Heideland-Ost 34<br>
                24976 Handewitt<br>
                Tel.: 0151/15901791<br>
                Email: houseofmotorcycles@proton.me</p>

                <p>Recipients of Personal Data</p>

                <p>In the course of our business activities, we work with various external parties. In some cases, it is also necessary to transfer personal data to these external parties. We only pass on personal data to external parties if this is necessary for the fulfillment of a contract, if we are legally obliged to do so (e.g., transfer of data to tax authorities), if we have a legitimate interest under Art. 6 para. 1 lit. f GDPR in the transfer, or if another legal basis permits the data transfer. When using data processors, we only transfer personal data of our customers on the basis of a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.</p>

                <p>Revocation of Your Consent to Data Processing</p>

                <p>Many data processing operations are only possible with your express consent. You can revoke an already given consent at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>

                <p>Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)</p>

                <p>IF DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR THE PROCESSING IS FOR THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION UNDER ART. 21 PARA. 1 GDPR).</p>

                <p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT ADVERTISING PURPOSES, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH ADVERTISING AT ANY TIME; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL THEN NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION UNDER ART. 21 PARA. 2 GDPR).</p>

                <p>Right to Lodge a Complaint with the Competent Supervisory Authority</p>

                <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.</p>

                <p>Right to Data Portability</p>

                <p>You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent technically feasible.</p>

                <p>Access, Rectification, and Deletion</p>

                <p>Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient, and the purpose of the data processing and, if applicable, a right to rectification or deletion of this data. For this and other questions on the subject of personal data, you can contact us at any time.</p>

                <p>Right to Restriction of Processing</p>

                <p>You have the right to request the restriction of the processing of your personal data. For this, you can contact us at any time. The right to restriction of processing exists in the following cases:</p>

                <ul>
                  <li>If you dispute the accuracy of your personal data stored with us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.</li>
                  <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
                  <li>If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</li>
                  <li>If you have lodged an objection under Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
                </ul>

                <p>If you have restricted the processing of your personal data, this data may – apart from being stored – only be processed with your consent or for the assertion, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.</p>


                <br> <br>
                <strong>3. Data Collection on this Website Inquiry by Email, Phone, or Fax</strong><br />
                If you contact us by email, phone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.<br /><br />

                The processing of this data is based on <strong>Art. 6 para. 1 lit. b GDPR</strong>, provided your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (<strong>Art. 6 para. 1 lit. f GDPR</strong>) or on your consent (<strong>Art. 6 para. 1 lit. a GDPR</strong>), if this has been requested; consent can be revoked at any time.<br /><br />

                The data you send to us via contact inquiries remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.<br /><br />

                <strong>4. Social Media Instagram</strong><br />
                Functions of the Instagram service are integrated on this website. These functions are offered by Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.<br /><br />

                If the social media element is active, a direct connection between your device and the Instagram server is established. Instagram thereby receives information about your visit to this website.<br /><br />

                If you are logged into your Instagram account, you can link the content of this website to your Instagram profile by clicking the Instagram button. This allows Instagram to associate your visit to this website with your user account. We point out that we, as the provider of the pages, have no knowledge of the content of the transmitted data or its use by Instagram.<br /><br />

                The use of this service is based on your consent under Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG. Consent can be revoked at any time.<br /><br />

                Insofar as personal data is collected on our website with the help of the tool described here and forwarded to Facebook or Instagram, we and Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland, are jointly responsible for this data processing (Art. 26 GDPR). Joint responsibility is limited exclusively to the collection of the data and its transfer to Facebook or Instagram. The processing that takes place after the transfer is not part of the joint responsibility. The obligations incumbent on us jointly have been set out in an agreement on joint processing. The wording of the agreement can be found at: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank">https://www.facebook.com/legal/controller_addendum</a>.<br /><br />

                According to this agreement, we are responsible for providing the privacy information when using the Facebook or Instagram tool and for the privacy-compliant implementation of the tool on our website. For the data security of Facebook or Instagram products, Facebook is responsible. Data subject rights (e.g., requests for information) regarding the data processed by Facebook or Instagram can be asserted directly with Facebook. If you assert the data subject rights with us, we are obliged to forward them to Facebook.<br /><br />

                Data transfer to the USA is based on the EU Commission's standard contractual clauses. Details can be found here:<br />
                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, 
                <a href="https://privacycenter.instagram.com/policy/" target="_blank">https://privacycenter.instagram.com/policy/</a>, and 
                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank">https://de-de.facebook.com/help/566994660333381</a>.<br /><br />

                Further information can be found in Instagram's privacy policy: 
                <a href="https://privacycenter.instagram.com/policy/" target="_blank">https://privacycenter.instagram.com/policy/</a>.<br /><br />

                The company is certified under the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that aims to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information can be obtained from the provider at the following link: 
                <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a>.<br /><br />

                Source: <a href="https://www.e-recht24.de" target="_blank">https://www.e-recht24.de</a>
`,
      },
    },
  };

  // DOM Elements
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuIcon = mobileMenuToggle.querySelector("i");
  const mainNav = document.querySelector(".main-nav");
  const scrollToTopBtn = document.querySelector(".scroll-to-top");
  const carouselTrack = document.querySelector(".carousel-track");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  const langBtns = document.querySelectorAll(".lang-btn");
  const footerLangBtns = document.querySelectorAll(".footer-lang-btn");
  const navItems = document.querySelectorAll(".nav-item");
  const footerLinks = document.querySelectorAll(".footer-link");
  const website = document.querySelector(".website");

  // Functions
  function toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    updateUI();
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    updateUI();
  }

  function updateUI() {
    // Update mobile menu
    if (state.isMobileMenuOpen) {
      mainNav.classList.add("open");
      mobileMenuIcon.className = "ti ti-x";
    } else {
      mainNav.classList.remove("open");
      mobileMenuIcon.className = "ti ti-menu-2";
    }

    // Update scroll to top button visibility
    scrollToTopBtn.style.display = state.showScrollButton ? "flex" : "none";

    // Update active section highlighting
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (href && href.substring(1) === state.activeSection) {
        item.style.color = "#FA6600";
      } else if (!item.classList.contains("nav-home")) {
        item.style.color = "#121212";
      }
    });

    // Update carousel
    carouselTrack.style.transform = `translateX(-${state.currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      if (index === state.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update language buttons
    langBtns.forEach((btn) => {
      if (btn.classList.contains("lang-de")) {
        btn.style.background =
          state.language === "de" ? "#FA6600" : "transparent";
        btn.style.color = state.language === "de" ? "white" : "#000";
      } else if (btn.classList.contains("lang-en")) {
        btn.style.background =
          state.language === "en" ? "#FA6600" : "transparent";
        btn.style.color = state.language === "en" ? "white" : "#000";
      }
    });

    footerLangBtns.forEach((btn) => {
      if (btn.classList.contains("footer-lang-de")) {
        btn.style.background = state.language === "de" ? "#fff" : "transparent";
        btn.style.color = state.language === "de" ? "#000" : "#fff";
      } else if (btn.classList.contains("footer-lang-en")) {
        btn.style.background = state.language === "en" ? "#fff" : "transparent";
        btn.style.color = state.language === "en" ? "#000" : "#fff";
      }
    });

    // Update text content based on language
    updateLanguageContent();
  }

  function updateLanguageContent() {
    const currentLang = state.translations[state.language];

  // Update privacy policy content
  const privacyPolicyContainer = document.querySelector(".privacy-text");
  if (privacyPolicyContainer) {
    privacyPolicyContainer.innerHTML = currentLang.privacyPolicy;
  }



    // Update navigation items
    document.querySelector(".nav-home").textContent = currentLang.home;
    document.querySelector(".nav-about .nav-text").textContent =
      currentLang.about;
    document.querySelector(".nav-motorcycles .nav-text").textContent =
      currentLang.motorcycles;
    document.querySelectorAll(".nav-item")[3].textContent = currentLang.events;

    // Update hero section
    document.querySelector(".hero-welcome").textContent =
      currentLang.heroWelcome;

    // Update hero description paragraphs
    const heroDescriptionParagraphs = document
      .querySelector(".hero-description")
      .querySelectorAll("p");
    heroDescriptionParagraphs[0].textContent = currentLang.heroIntro;
    heroDescriptionParagraphs[1].textContent = currentLang.heroBikes;
    heroDescriptionParagraphs[2].textContent = currentLang.heroPassion;
    // Skip paragraph 3 (it's a <br>)
    // Skip paragraph 4 (it has fixed German text)
    heroDescriptionParagraphs[5].textContent = currentLang.heroIdea;
    // Skip paragraph 6 (it's a <br>)
    heroDescriptionParagraphs[7].textContent = currentLang.heroOutro;

    // Update CTA button
    document.querySelector(".cta-button").textContent = currentLang.salesRoom;

    // Update features section
    const serviceTitles = document.querySelectorAll(".service-title");
    serviceTitles[0].textContent = currentLang.onlinePurchase;
    serviceTitles[1].textContent = currentLang.delivery;
    serviceTitles[2].textContent = currentLang.tradeIn;
    serviceTitles[3].textContent = currentLang.customization;

    const serviceDescriptions = document.querySelectorAll(
      ".service-description",
    );
    serviceDescriptions[0].textContent = currentLang.purchaseDesc;
    serviceDescriptions[1].textContent = currentLang.deliveryDesc;
    serviceDescriptions[2].textContent = currentLang.tradeInDesc;
    serviceDescriptions[3].textContent = currentLang.customDesc;

    // Update gallery section
    document.querySelector(".gallery .section-title").textContent =
      currentLang.featuredBikes;

    // Update location section
    document.querySelector(".location .section-title").textContent =
      currentLang.findUs;

    // Update footer
    document.querySelector(".contact-info .footer-heading").textContent =
      currentLang.contactUs;
    document.querySelector(".quick-links .footer-heading").textContent =
      currentLang.quickLinks;
    document.querySelectorAll(".footer-link")[0].textContent =
      currentLang.about;
    document.querySelectorAll(".footer-link")[1].textContent =
      currentLang.motorcycles;
    document.querySelector(".copyright").textContent = currentLang.rights;
  }

  function nextSlide() {
    state.currentSlide = (state.currentSlide + 1) % carouselSlides.length;
    updateUI();
  }

  function prevSlide() {
    state.currentSlide =
      (state.currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    updateUI();
  }

  function goToSlide(index) {
    state.currentSlide = index;
    updateUI();
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  }

  function setLanguage(lang) {
    state.language = lang;
    updateUI();
  }

  function handleScroll() {
    // Show/hide scroll to top button
    state.showScrollButton = window.scrollY > 300;

    // Determine active section
    const sections = ["hero", "features", "gallery", "location"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          state.activeSection = section;
        }
      }
    });

    updateUI();
  }

  // Event Listeners
  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMobileMenu();
  });

  website.addEventListener("click", function () {
    closeMobileMenu();
  });

  mainNav.addEventListener("mouseleave", function () {
    closeMobileMenu();
  });

  scrollToTopBtn.addEventListener("click", scrollToTop);

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href) {
        scrollToSection(href.substring(1));
      }
    });
  });

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href) {
        scrollToSection(href.substring(1));
      }
    });
  });

  langBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("lang-de")) {
        setLanguage("de");
      } else if (this.classList.contains("lang-en")) {
        setLanguage("en");
      }
    });
  });

  footerLangBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("footer-lang-de")) {
        setLanguage("de");
      } else if (this.classList.contains("footer-lang-en")) {
        setLanguage("en");
      }
    });
  });

  window.addEventListener("scroll", handleScroll);

  // Auto-advance carousel
  setInterval(nextSlide, 5000);

  // Initial UI update
  updateUI();
});
