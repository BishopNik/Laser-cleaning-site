/** @format */

(() => {
	const rows = [
		['Wybór języka', 'Language selection', 'Sprachauswahl'],
		['Główna nawigacja', 'Main navigation', 'Hauptnavigation'],
		['Strona główna', 'Home', 'Startseite'],
		['Usługi', 'Services', 'Leistungen'],
		['Jak to działa?', 'How does it work?', 'Wie funktioniert es?'],
		['Zastosowania', 'Applications', 'Anwendungen'],
		['Realizacje', 'Projects', 'Projekte'],
		['Kontakt', 'Contact', 'Kontakt'],
		['Darmowa wycena', 'Free quote', 'Kostenlose Bewertung'],
		['Zamów wycenę', 'Request a quote', 'Angebot anfordern'],
		['Otwórz menu', 'Open menu', 'Menü öffnen'],
		['Laserowe czyszczenie', 'Laser cleaning', 'Laserreinigung'],
		['Precyzja, która przywraca', 'Precision that restores', 'Präzision, die perfekte'],
		['idealną czystość', 'perfect cleanliness', 'Sauberkeit zurückbringt'],
		[
			'Usuwamy rdzę, farbę, olej, smar i inne zanieczyszczenia bez uszkodzenia powierzchni. Szybko, skutecznie i ekologicznie.',
			'We remove rust, paint, oil, grease and other contaminants without damaging the surface. Fast, effective and environmentally friendly.',
			'Wir entfernen Rost, Farbe, Öl, Fett und andere Verunreinigungen, ohne die Oberfläche zu beschädigen. Schnell, wirksam und umweltfreundlich.',
		],
		['Bez chemii i środków ściernych', 'No chemicals or abrasives', 'Ohne Chemie und Strahlmittel'],
		['Bezpieczne dla powierzchni', 'Safe for surfaces', 'Schonend für Oberflächen'],
		['Ekologiczne i bezodpadowe', 'Eco-friendly and waste-free', 'Umweltfreundlich und abfallarm'],
		['Precyzyjne i skuteczne', 'Precise and effective', 'Präzise und wirksam'],
		['Oblicz koszt w 30 sekund', 'Calculate the cost in 30 seconds', 'Kosten in 30 Sekunden berechnen'],
		['Zobacz realizacje', 'View projects', 'Projekte ansehen'],
		['10% zniżki', '10% discount', '10 % Rabatt'],
		['na pierwsze zlecenie', 'on your first order', 'auf den ersten Auftrag'],
		['Dni', 'Days', 'Tage'],
		['Godz.', 'Hrs.', 'Std.'],
		['Sek', 'Sec.', 'Sek.'],
		['Usuwanie rdzy i korozji', 'Rust and corrosion removal', 'Rost- und Korrosionsentfernung'],
		['Powierzchnie metalowe', 'Metal surfaces', 'Metalloberflächen'],
		['Cegła, klinkier i elewacje', 'Brick, clinker and facades', 'Ziegel, Klinker und Fassaden'],
		['Tarcze i detale samochodowe', 'Brake discs and automotive parts', 'Bremsscheiben und Fahrzeugteile'],
		['Felgi i elementy aluminiowe', 'Rims and aluminium parts', 'Felgen und Aluminiumteile'],
		['Drewno, meble i stare lakiery', 'Wood, furniture and old coatings', 'Holz, Möbel und alte Lacke'],
		['Co to jest laser i jak działa?', 'What is a laser and how does it work?', 'Was ist ein Laser und wie funktioniert er?'],
		[
			'Laser to skoncentrowana wiązka światła o wysokiej energii, która po skierowaniu na powierzchnię usuwa zanieczyszczenia bez naruszania materiału bazowego.',
			'A laser is a concentrated high-energy beam of light that removes contaminants without affecting the base material.',
			'Ein Laser ist ein konzentrierter, energiereicher Lichtstrahl, der Verunreinigungen entfernt, ohne das Grundmaterial anzugreifen.',
		],
		[
			'Proces jest bezdotykowy, precyzyjny i całkowicie bezpieczny dla czyszczonej powierzchni oraz środowiska.',
			'The process is contactless, precise and safe for both the cleaned surface and the environment.',
			'Das Verfahren ist berührungslos, präzise und sicher für Oberfläche und Umwelt.',
		],
		['Nie wymaga chemikaliów ani środków ściernych', 'No chemicals or abrasive media required', 'Keine Chemikalien oder Strahlmittel erforderlich'],
		['Idealny do delikatnych i trudno dostępnych miejsc', 'Ideal for delicate and hard-to-reach areas', 'Ideal für empfindliche und schwer zugängliche Stellen'],
		['Szybkie efekty bez przygotowania powierzchni', 'Fast results without surface preparation', 'Schnelle Ergebnisse ohne Oberflächenvorbereitung'],
		['Minimalne odpady i ekologiczne rozwiązanie', 'Minimal waste and an eco-friendly solution', 'Minimale Abfälle und umweltfreundliche Lösung'],
		['Zasada działania lasera', 'How laser cleaning works', 'Funktionsweise der Laserreinigung'],
		['Wiązka lasera', 'Laser beam', 'Laserstrahl'],
		['Warstwa zanieczyszczeń', 'Contaminant layer', 'Verunreinigungsschicht'],
		['Materiał bazowy', 'Base material', 'Grundmaterial'],
		['Odparowane zabrudzenia', 'Vaporised contaminants', 'Verdampfte Verunreinigungen'],
		['Efekt czyszczenia', 'Cleaning result', 'Reinigungsergebnis'],
		['Przed', 'Before', 'Vorher'],
		['Po', 'After', 'Nachher'],
		['Jak pracujemy?', 'How we work', 'So arbeiten wir'],
		['Skontaktuj się z nami telefonicznie lub przez formularz.', 'Contact us by phone or through the form.', 'Kontaktieren Sie uns telefonisch oder über das Formular.'],
		['Wycena', 'Quote', 'Bewertung'],
		['Przygotujemy darmową wycenę w ciągu 24h.', 'We prepare a free quote within 24 hours.', 'Wir erstellen innerhalb von 24 Stunden eine kostenlose Bewertung.'],
		['Dojazd', 'On-site service', 'Vor-Ort-Service'],
		['Przyjeżdżamy na miejsce i zabezpieczamy obszar pracy.', 'We arrive on site and secure the work area.', 'Wir kommen zu Ihnen und sichern den Arbeitsbereich.'],
		['Czyszczenie laserem', 'Laser cleaning', 'Laserreinigung'],
		['Usuwamy zanieczyszczenia szybko i bezpiecznie.', 'We remove contaminants quickly and safely.', 'Wir entfernen Verunreinigungen schnell und sicher.'],
		['Efekt', 'Result', 'Ergebnis'],
		['Czysta powierzchnia jest gotowa do dalszego użycia.', 'The clean surface is ready for further use.', 'Die gereinigte Oberfläche ist zur weiteren Nutzung bereit.'],
		['Otrzymaj darmową wycenę', 'Get a free quote', 'Kostenlose Bewertung erhalten'],
		['w 30 sekund', 'in 30 seconds', 'in 30 Sekunden'],
		['Szybko i bez zobowiązań', 'Fast and without obligation', 'Schnell und unverbindlich'],
		['Odpowiadamy w ciągu 24h', 'We reply within 24 hours', 'Antwort innerhalb von 24 Stunden'],
		['Najlepsza cena na rynku', 'Competitive market pricing', 'Faire marktgerechte Preise'],
		['Imię i nazwisko', 'Full name', 'Vor- und Nachname'],
		['Telefon', 'Phone', 'Telefon'],
		['E-mail', 'Email', 'E-Mail'],
		['Opisz powierzchnię do czyszczenia', 'Describe the surface to be cleaned', 'Zu reinigende Oberfläche beschreiben'],
		['Wyślij zapytanie', 'Send enquiry', 'Anfrage senden'],
		[
			'Klikając „Wyślij zapytanie” zgadzasz się na przetwarzanie danych osobowych.',
			'By clicking “Send enquiry”, you consent to the processing of your personal data.',
			'Mit „Anfrage senden“ stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten zu.',
		],
		['Dlaczego warto nas wybrać?', 'Why choose us?', 'Warum wir?'],
		['Nowoczesna technologia', 'Modern technology', 'Moderne Technologie'],
		['Laser światłowodowy o wysokiej mocy.', 'High-power fibre laser technology.', 'Leistungsstarke Faserlasertechnologie.'],
		['Doświadczeni specjaliści', 'Experienced specialists', 'Erfahrene Spezialisten'],
		['Setki realizowanych projektów w Polsce i za granicą.', 'Hundreds of completed projects in Poland and abroad.', 'Hunderte abgeschlossene Projekte in Polen und im Ausland.'],
		['Dojazd na terenie całej Polski', 'On-site service throughout Poland', 'Vor-Ort-Service in ganz Polen'],
		['Przyjeżdżamy do klienta w dogodnym terminie.', 'We visit the customer at a convenient time.', 'Wir kommen zum gewünschten Termin zu Ihnen.'],
		['Gwarancja jakości', 'Quality guarantee', 'Qualitätsgarantie'],
		['Gwarantujemy bezpieczeństwo i skuteczność czyszczenia.', 'We guarantee safe and effective cleaning.', 'Wir garantieren eine sichere und wirksame Reinigung.'],
		['Ekologiczne rozwiązanie', 'Eco-friendly solution', 'Umweltfreundliche Lösung'],
		['Bez chemii, bez wody i bez odpadów wtórnych.', 'No chemicals, no water and no secondary waste.', 'Ohne Chemie, Wasser und Sekundärabfälle.'],
		['Zobacz więcej realizacji', 'View all projects', 'Alle Projekte ansehen'],
		['Poprzednie realizacje', 'Previous projects', 'Vorherige Projekte'],
		['Następne realizacje', 'Next projects', 'Nächste Projekte'],
		['Realizacje przed i po', 'Before and after projects', 'Vorher-Nachher-Projekte'],
		['Wybierz realizację, a następnie kliknij duże zdjęcie, aby je powiększyć.', 'Select a project, then click the large image to zoom in.', 'Wählen Sie ein Projekt und klicken Sie zum Vergrößern auf das große Bild.'],
		['Zamknij galerię', 'Close gallery', 'Galerie schließen'],
		['Powiększ zdjęcie', 'Zoom image', 'Bild vergrößern'],
		['Zmniejsz zdjęcie', 'Zoom out', 'Bild verkleinern'],
		['Zrealizowanych projektów', 'Completed projects', 'Abgeschlossene Projekte'],
		['Zadowolonych klientów', 'Satisfied customers', 'Zufriedene Kunden'],
		['Doświadczenia w czyszczeniu laserem', 'Laser-cleaning experience', 'Erfahrung in der Laserreinigung'],
		['Ekologiczne i bezpieczne', 'Eco-friendly and safe', 'Umweltfreundlich und sicher'],
		['Cała Polska', 'All of Poland', 'Ganz Polen'],
		['Dojazd do klienta w 24/48h', 'On-site service within 24/48 hours', 'Vor-Ort-Service innerhalb von 24/48 Stunden'],
		['Opinie klientów', 'Customer reviews', 'Kundenstimmen'],
		['Laser Clean to profesjonalizm i skuteczność. Rdza zniknęła bez uszkodzeń.', 'Laser Clean means professionalism and effectiveness. The rust disappeared without damage.', 'Laser Clean steht für Professionalität und Wirksamkeit. Der Rost verschwand ohne Schäden.'],
		['Szybko, czysto i bez uszkodzeń. Najlepsza firma w branży.', 'Fast, clean and damage-free. An excellent company in the industry.', 'Schnell, sauber und ohne Schäden. Ein ausgezeichnetes Unternehmen.'],
		['Polecam, świetny kontakt, terminowość i perfekcyjny efekt końcowy.', 'Highly recommended: excellent communication, punctuality and a perfect final result.', 'Sehr empfehlenswert: gute Kommunikation, termingerecht und ein perfektes Ergebnis.'],
		['Konstrukcje stalowe', 'Steel structures', 'Stahlkonstruktionen'],
		['Przemysł motoryzacyjny', 'Automotive industry', 'Automobilindustrie'],
		['Firma produkcyjna', 'Manufacturing company', 'Produktionsunternehmen'],
		['Najczęściej zadawane pytania', 'Frequently asked questions', 'Häufig gestellte Fragen'],
		['Czym jest czyszczenie laserowe?', 'What is laser cleaning?', 'Was ist Laserreinigung?'],
		[
			'Czyszczenie laserowe to bezkontaktowa metoda usuwania brudu, rdzy i farby za pomocą skoncentrowanej wiązki światła. Laser silnie nagrzewa i odparowuje zanieczyszczenia, nie uszkadzając materiału pod spodem.',
			'Laser cleaning is a contactless method for removing dirt, rust and paint with a concentrated beam of light. The laser vaporises contaminants without damaging the material underneath.',
			'Laserreinigung entfernt Schmutz, Rost und Farbe berührungslos mit einem konzentrierten Lichtstrahl, ohne das Material darunter zu beschädigen.',
		],
		['Czy laserowe czyszczenie jest bezpieczne dla powierzchni?', 'Is laser cleaning safe for surfaces?', 'Ist Laserreinigung sicher für Oberflächen?'],
		[
			'Tak, czyszczenie laserowe jest w pełni bezpieczne dla czyszczonej powierzchni. Jest to metoda bezkontaktowa, która nie powoduje uszkodzeń mechanicznych.',
			'Yes. Laser cleaning is safe for the treated surface and causes no mechanical damage.',
			'Ja. Laserreinigung ist sicher für die behandelte Oberfläche und verursacht keine mechanischen Schäden.',
		],
		['Dlaczego jest bezpieczne?', 'Why is it safe?', 'Warum ist das Verfahren sicher?'],
		['Brak ścierania: nie rysuje metalu jak piaskowanie.', 'No abrasion: it does not scratch metal like sandblasting.', 'Kein Abrieb: Metall wird nicht wie beim Sandstrahlen zerkratzt.'],
		['Selektywność: laser reaguje tylko z brudem i rdzą.', 'Selective action: the laser reacts only with dirt and rust.', 'Selektivität: Der Laser reagiert nur mit Schmutz und Rost.'],
		['Odbicie światła: czyste podłoże odbija promień lasera.', 'Light reflection: the clean substrate reflects the laser beam.', 'Lichtreflexion: Der saubere Untergrund reflektiert den Laserstrahl.'],
		['Brak chemii: nie powoduje korozji chemicznej materiału.', 'No chemicals: it does not cause chemical corrosion.', 'Keine Chemie: Es entsteht keine chemische Korrosion.'],
		['Kontrola termiczna: krótkie impulsy nie przegrzewają detali.', 'Thermal control: short pulses do not overheat components.', 'Temperaturkontrolle: Kurze Impulse überhitzen die Bauteile nicht.'],
		['Jakie materiały można czyścić laserem?', 'Which materials can be laser-cleaned?', 'Welche Materialien können mit dem Laser gereinigt werden?'],
		['Laserem można bezpiecznie czyścić większość twardych i odpornych na temperaturę materiałów.', 'Most hard, heat-resistant materials can be safely laser-cleaned.', 'Die meisten harten und temperaturbeständigen Materialien können sicher gereinigt werden.'],
		['Stal i żeliwo: rdza, zendra i stare powłoki malarskie.', 'Steel and cast iron: rust, scale and old paint coatings.', 'Stahl und Gusseisen: Rost, Zunder und alte Lackschichten.'],
		['Metale kolorowe: aluminium, miedź i mosiądz.', 'Non-ferrous metals: aluminium, copper and brass.', 'Buntmetalle: Aluminium, Kupfer und Messing.'],
		['Kamień naturalny: granit, marmur i piaskowiec.', 'Natural stone: granite, marble and sandstone.', 'Naturstein: Granit, Marmor und Sandstein.'],
		['Cegła i klinkier: osady, sadza oraz graffiti.', 'Brick and clinker: deposits, soot and graffiti.', 'Ziegel und Klinker: Ablagerungen, Ruß und Graffiti.'],
		['Kompozyty, Kevlar, drewno, szkło i ceramika.', 'Composites, Kevlar, wood, glass and ceramics.', 'Verbundwerkstoffe, Kevlar, Holz, Glas und Keramik.'],
		['Czy proces jest ekologiczny?', 'Is the process environmentally friendly?', 'Ist das Verfahren umweltfreundlich?'],
		[
			'Tak, czyszczenie laserowe to jedna z najbardziej ekologicznych metod czyszczenia przemysłowego. Nie generuje szkodliwych odpadów i nie zatruwa środowiska.',
			'Laser cleaning is one of the most environmentally friendly industrial cleaning methods and produces no harmful waste.',
			'Laserreinigung ist eines der umweltfreundlichsten industriellen Reinigungsverfahren und erzeugt keine schädlichen Abfälle.',
		],
		['Dlaczego proces jest ekologiczny?', 'Why is the process eco-friendly?', 'Warum ist das Verfahren umweltfreundlich?'],
		['Zero chemii: bez toksycznych rozpuszczalników i kwasów.', 'Zero chemicals: no toxic solvents or acids.', 'Keine Chemie: keine giftigen Lösungsmittel oder Säuren.'],
		['Brak odpadów wtórnych: bez ton brudnego piasku i zużytej wody.', 'No secondary waste: no dirty sand or used water.', 'Keine Sekundärabfälle: kein verschmutzter Sand und kein Abwasser.'],
		['Niskie zużycie zasobów: proces wymaga tylko prądu.', 'Low resource use: the process requires only electricity.', 'Geringer Ressourcenverbrauch: Das Verfahren benötigt nur Strom.'],
		['Łatwa filtracja: odparowany brud trafia do filtrów odciągowych.', 'Easy filtration: vaporised contaminants are captured by extraction filters.', 'Einfache Filterung: Verdampfte Partikel werden abgesaugt und gefiltert.'],
		['Długa żywotność: urządzenia nie zużywają materiałów eksploatacyjnych.', 'Long service life: no consumable cleaning media are required.', 'Lange Lebensdauer: Es werden keine Reinigungsmedien verbraucht.'],
		['Gotowy na czysty efekt?', 'Ready for a clean result?', 'Bereit für ein sauberes Ergebnis?'],
		['Skontaktuj się z nami i przekonaj się, jak działa laserowe czyszczenie.', 'Contact us and see how laser cleaning works.', 'Kontaktieren Sie uns und erleben Sie die Wirkung der Laserreinigung.'],
		['Informacje', 'Information', 'Informationen'],
		['O nas', 'About us', 'Über uns'],
		['Dlaczego my', 'Why us', 'Warum wir'],
		['Usuwanie rdzy', 'Rust removal', 'Rostentfernung'],
		['Usuwanie farb i lakierów', 'Paint and coating removal', 'Farb- und Lackentfernung'],
		['Czyszczenie spawów', 'Weld cleaning', 'Schweißnahtreinigung'],
		['Czyszczenie form', 'Mould cleaning', 'Formenreinigung'],
		['Czyszczenie detali', 'Component cleaning', 'Bauteilreinigung'],
		['Profesjonalne czyszczenie laserowe rdzy, farb, olejów i innych zanieczyszczeń. Działamy na terenie całej Polski.', 'Professional laser cleaning of rust, paint, oils and other contaminants throughout Poland.', 'Professionelle Laserreinigung von Rost, Farbe, Öl und anderen Verunreinigungen in ganz Polen.'],
		['Dojazd z Dąbrowy Tarnowskiej', 'On-site service from Dąbrowa Tarnowska', 'Vor-Ort-Service ab Dąbrowa Tarnowska'],
		['◷ Pon - Pt: 8:00 - 18:00', '◷ Mon - Fri: 8:00 - 18:00', '◷ Mo - Fr: 8:00 - 18:00'],
		['© 2026 Laser Clean. Wszelkie prawa zastrzeżone.', '© 2026 Laser Clean. All rights reserved.', '© 2026 Laser Clean. Alle Rechte vorbehalten.'],
		['Laserowe czyszczenie powierzchni metalowej', 'Laser cleaning of a metal surface', 'Laserreinigung einer Metalloberfläche'],
		['Usuwanie rdzy z metalowego detalu', 'Rust removal from a metal component', 'Rostentfernung an einem Metallbauteil'],
		['Tarcze hamulcowe przed i po czyszczeniu', 'Brake discs before and after cleaning', 'Bremsscheiben vor und nach der Reinigung'],
		['Felga przed i po czyszczeniu', 'Rim before and after cleaning', 'Felge vor und nach der Reinigung'],
		['Drewniany element przed i po usunięciu starej powłoki', 'Wooden component before and after coating removal', 'Holzbauteil vor und nach der Beschichtungsentfernung'],
		['Metalowa powierzchnia przed i po czyszczeniu', 'Metal surface before and after cleaning', 'Metalloberfläche vor und nach der Reinigung'],
		['Koło zębate przed i po czyszczeniu laserowym', 'Gear before and after laser cleaning', 'Zahnrad vor und nach der Laserreinigung'],
		['Imadło przed i po czyszczeniu laserowym', 'Vise before and after laser cleaning', 'Schraubstock vor und nach der Laserreinigung'],
	];

	const dictionaries = {
		en: Object.fromEntries(rows.map(([pl, en]) => [pl, en])),
		de: Object.fromEntries(rows.map(([pl, , de]) => [pl, de])),
	};
	const ui = {
		pl: {
			title: 'Laser Clean | Czyszczenie Laserowe',
			description: 'Profesjonalne czyszczenie laserowe na terenie całej Polski.',
			invalid: 'Uzupełnij wymagane pola, a przygotujemy wycenę.',
			sending: 'Wysyłanie zapytania…',
			success: 'Dziękujemy. Zapytanie zostało wysłane.',
			error: 'Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń.',
			zoomIn: 'Powiększ zdjęcie',
			zoomOut: 'Zmniejsz zdjęcie',
		},
		en: {
			title: 'Laser Clean | Professional Laser Cleaning',
			description: 'Professional laser-cleaning services throughout Poland.',
			invalid: 'Complete the required fields and we will prepare a quote.',
			sending: 'Sending your enquiry…',
			success: 'Thank you. Your enquiry has been sent.',
			error: 'The enquiry could not be sent. Please try again or call us.',
			zoomIn: 'Zoom image',
			zoomOut: 'Zoom out',
		},
		de: {
			title: 'Laser Clean | Professionelle Laserreinigung',
			description: 'Professionelle Laserreinigung in ganz Polen.',
			invalid: 'Bitte füllen Sie die Pflichtfelder aus.',
			sending: 'Anfrage wird gesendet…',
			success: 'Vielen Dank. Ihre Anfrage wurde gesendet.',
			error: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
			zoomIn: 'Bild vergrößern',
			zoomOut: 'Bild verkleinern',
		},
	};

	const textTargets = [];
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
	let node = walker.nextNode();

	while (node) {
		const original = node.nodeValue.replace(/\s+/g, ' ').trim();
		if (original) {
			textTargets.push({ node, original });
		}
		node = walker.nextNode();
	}

	const attributeTargets = [];
	const attributeNames = ['aria-label', 'alt', 'placeholder', 'data-alt'];
	document.querySelectorAll('*').forEach(element => {
		attributeNames.forEach(attribute => {
			if (element.hasAttribute(attribute)) {
				attributeTargets.push({
					element,
					attribute,
					original: element.getAttribute(attribute),
				});
			}
		});
	});

	function translate(original, language) {
		return language === 'pl' ? original : dictionaries[language]?.[original] || original;
	}

	function applyLanguage(language) {
		const selected = ['pl', 'en', 'de'].includes(language) ? language : 'pl';

		textTargets.forEach(target => {
			const current = target.node.nodeValue;
			const leading = current.match(/^\s*/)?.[0] || '';
			const trailing = current.match(/\s*$/)?.[0] || '';
			target.node.nodeValue =
				leading + translate(target.original, selected) + trailing;
		});

		attributeTargets.forEach(target => {
			target.element.setAttribute(
				target.attribute,
				translate(target.original, selected),
			);
		});

		document.documentElement.lang = selected;
		document.title = ui[selected].title;
		document
			.querySelector('meta[name="description"]')
			?.setAttribute('content', ui[selected].description);
		document.querySelectorAll('[data-language]').forEach(button => {
			button.setAttribute(
				'aria-pressed',
				String(button.dataset.language === selected),
			);
		});
		document.querySelectorAll('.faq-item.active .faq-answer').forEach(answer => {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		});

		const activeThumb = document.querySelector('.gallery-thumb.active');
		const galleryMain = document.querySelector('.gallery-main');
		const galleryCaption = document.querySelector('.gallery-caption');
		if (activeThumb && galleryMain && galleryCaption) {
			const translatedAlt = activeThumb.getAttribute('data-alt');
			galleryMain.alt = translatedAlt;
			galleryCaption.textContent = translatedAlt;
		}

		localStorage.setItem('laser-clean-language', selected);
	}

	const initialLanguage = localStorage.getItem('laser-clean-language') || 'pl';
	document.querySelectorAll('[data-language]').forEach(button => {
		button.addEventListener('click', () => applyLanguage(button.dataset.language));
	});

	window.siteI18n = {
		get language() {
			return document.documentElement.lang || 'pl';
		},
		message(key) {
			return ui[this.language]?.[key] || ui.pl[key];
		},
		applyLanguage,
	};

	applyLanguage(initialLanguage);
})();
