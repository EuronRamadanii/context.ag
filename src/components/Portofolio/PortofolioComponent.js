import React from "react";
import "../../Assets/css/_portofolio.scss";
import { HiLightBulb } from "react-icons/hi";
import { FaHorseHead } from "react-icons/fa";
// import "../App.css";
// import { Button } from "./Button";
// import "./HeroSection.css";

export default function PortofolioComponent() {
  return (
    <div>
      <section className="main-home-portofolio">
        <div className="container">
          <div className="main-home-content">
            <h1
              className="heading-w aos-item"
              data-aos="zoom-in"
              data-aos-duration="1700"
            >
              UNSER PORTFOLIO
              <br />
              LEISTUNG FÜR IHREN ERFOLG
            </h1>
            {/* <h1
              className="heading-m"
              data-aos="zoom-in"
              data-aos-duration="1700"
            >
              test
            </h1> */}
            {/* <button
              className="btn_getStarted"
              onClick={() => window.location.replace("/#contact")}
              data-aos="zoom-in"
              data-aos-duration="2300"
            >
              test
            </button> */}
          </div>
        </div>
      </section>
      <section className="boxess">
        <div className="content firstBox">
          <HiLightBulb
            size={100}
            style={{ paddingBottom: "", textAlign: "center", color: "white" }}
          />
          <h2 style={{ paddingTop: "30px", color: "white" }}>Beratung</h2>
          <p style={{ color: "white" }}>
            Methodische Beratung zu den Themen Qualitäts-, Prozess-, &
            Risikomanagement sowie Unterstützung bei Abstimmungen mit Kunden und
            Zulieferern.
          </p>
          <ul>
            <li className="list">
              Methodische Beratung zum Thema Qualitätsmanagement sowie
            </li>
            <li className="list">
              Unterstützung bei Abstimmungen mit Kunden und Zulieferern z.B.
              Umgang mit Besonderen Merkmalen und Traceability
            </li>
            <li className="list">
              Beratung bei der Erstellung und Aktualisierung von
              Verfahrensanweisungen zur Erfüllung der ISO 26262
            </li>
            <li className="list">
              Beratung bei der Umsetzung der Funktionalen Sicherheit nach ISO
              26262 in Ihrem Unternehmen.
            </li>
          </ul>
        </div>
        <div className="content secondBox">
          <FaHorseHead size={100} style={{ color: "white" }} />
          <h2 style={{ paddingTop: "30px", color: "white" }}>Entwicklung</h2>
          <p style={{ color: "white" }}>
            Moderation von Risikoanalysen im Rahmen der Projektarbeit.
            Unterstützung zum Thema Funktionale Sicherheit.
          </p>
          <ul>
            <li className="list">
              Moderationen von Risikoanalysen im Rahmen der Projektarbeit FMEA,
              FTA, FMEDA, DRBFM, Quality Gates, Gefährdungs- und Risikoanalyse
              nach ISO 26262-3
            </li>
            <li className="list">
              Unterstützung rund um das Thema Funktionale Sicherheit nach ISO
              26262 sowie Einsatz als Project Safety Manager
            </li>
            <li className="list">
              Prüfung und Vervollständigung von Dokumenten zur Erfüllung der ISO
              26262
            </li>
            <li className="list">
              Erstellung und Durchführung von Management- und
              Kundenpräsentationen
            </li>
            <li className="list">
              Organisatorische Unterstützung der Projektleiter (z.B. Verfolgung
              offener Punkte und Maßnahmen).
            </li>
          </ul>
        </div>
        <div className="content thirdBox">
          <FaHorseHead size={100} style={{ color: "white" }} />
          <h2 style={{ paddingTop: "30px", color: "white" }}>Schulung</h2>
          <p style={{ color: "white" }}>
            Durchführung von qualitativen Methoden-Schulungen & Fortbildungen.
          </p>
          <ul>
            <p style={{ color: "white" }}>Unser Schulungsangebot:</p>
            <li className="list">Methodikschulung FMEA</li>
            <li className="list">Methodikschulung FTA</li>
            <li className="list">Toolschulung IQ-RM</li>
            <li className="list">Schulungen zur ISO 26262</li>
            <li className="list">Training »on the job«</li>
          </ul>
        </div>
      </section>
      <div className="test">
        <h1>UNSERE KERNKOMPETENZEN</h1>
      </div>
      <section className="section2">
        <div className="content firstBox">
          <HiLightBulb
            size={100}
            style={{ paddingBottom: "", textAlign: "center", color: "white" }}
          />
          <h2 style={{ paddingTop: "30px", color: "white" }}>FMEA</h2>
          <p style={{ color: "white" }}>
            Die FMEA ist eine der bekanntesten und gebräuchlichsten
            Risikoanalysen in der Automobil- und Automobilzulieferindustrie. Sie
            ist eine effektive Methode, um technische Produkte oder Prozesse
            hinsichtlich ihrer Wirkzusammenhänge zu analysieren sowie die
            technischen Risiken dieser Produkte oder Prozesse zu entdecken und
            zu bewerten.
          </p>
          <p style={{ color: "white" }}>Dies führt zu:</p>
          <ul>
            <li className="list">
              Produkten mit niedrigerem Risiko und höherer Zuverlässigkeit
            </li>
            <li className="list">Geringeren G&K-Kosten</li>
            <li className="list">Steigerung der Effizienz in der Produktion</li>
            <li className="list">
              Dokumentation des Fachwissens in Ihrem Unternehmen
            </li>
          </ul>
          <p style={{ color: "white" }}>Unsere Leistungen:</p>
          <ul>
            <li className="list">
              Moderation der FMEA (methodische Kompetenz)
            </li>
            <li className="list">
              Projektmanagement-Unterstützung, z.B. bei der Maßnahmenverfolgung
              und Dokumentation der Ergebnisse
            </li>
            <li className="list">
              Allgemeine methodische Beratung sowie Unterstützung bei der
              Abstimmung mit Ihren Kunden/Zulieferern (z.B. Umgang mit
              Besonderen Merkmalen)
            </li>
            <li className="list">
              Unterstützung bei Management- und Kundenpräsentationen
            </li>
            <li className="list">
              Implementierung neuer Qualitätsstandards inkl. Prozessberatung
              (z.B. Erstellung/Aktualisierung von Verfahrensanweisungen)
            </li>
            <li className="list">
              Beratung bei der Implementierung des FMEA-Prozesses im Unternehmen
            </li>
            <li className="list">
              Methodik- und Softwareschulungen (z.B. über das CONTEXT
              Schulungs-Abo)
            </li>
          </ul>
        </div>
        <div className="content secondBox">
          <FaHorseHead size={100} style={{ color: "white" }} />
          <h2 style={{ paddingTop: "30px", color: "white" }}>FTA</h2>
          <p style={{ color: "white" }}>
            Moderation von Risikoanalysen im Rahmen der Projektarbeit.
            Unterstützung zum Thema Funktionale Sicherheit.
          </p>
          <p style={{ color: "white" }}>
            Aufgrund normativer Vorgaben wie der ISO 26262, in denen sowohl
            qualitative als auch quantitative Aussagen zur
            Eintritts-wahrscheinlichkeit von Fehlerzuständen gefordert werden,
            gewinnt die FTA zunehmend an Bedeutung.
          </p>
          <p style={{ color: "white" }}>Unsere Leistungen:</p>
          <ul>
            <li className="list">
              Moderation von qualitativen und quantitativen FTA (methodische
              Kompetenz)
            </li>
            <li className="list">
              Zuordnung von Ausfallraten und Ausfallwahrscheinlichkeitsmodellen
              im Boole’schen Graphen
            </li>
            <li className="list">
              Qualitative und quantitative Analysen (Ausfallwahrscheinlichkeit
              des Top Events, Common Cause Failures, Minimal Cut Sets, Single
              Point of Failures, Sensitivitätsanalysen, Importanzkenngrößen)
            </li>
            <li className="list">Erstellung von Systemreports</li>
            <li className="list">
              Unterstützung bei Management- und Kundenpräsentationen
            </li>
            <li className="list">
              Beratung bei der Implementierung der FTA in Ihrem Unternehmen
            </li>
            <li className="list">Methodik- und Softwareschulungen</li>
          </ul>
          <p style={{ color: "white" }}>
            Für die Erstellung von FTA verwenden wir die Software FaultTree+.
          </p>
          <p style={{ color: "white" }}>
            Nicht nur der korrekte Umgang mit Common Cause Failures, sondern
            z.B. auch die Darstellung von Systemreaktionen oder verschiedenen
            Systemzuständen erfordern ein mathematisches Verständnis für
            Stochastik und die Fähigkeit, die Boolesche Algebra logisch
            anzuwenden. Unsere FTA-Moderatoren beraten Sie dahingehend auch für
            komplizierteste technische Systeme gewinnbringend.
          </p>
        </div>
        <div className="content thirdBox">
          <FaHorseHead size={100} style={{ color: "white" }} />
          <h2 style={{ paddingTop: "30px", color: "white" }}>FuSi</h2>
          <p style={{ color: "white" }}>
            Definition nach ISO 26262-1 3.67: »das Nichtvorhandensein von
            unzumutbaren Risiken aufgrund von Gefährdungen, die durch
            fehlerhaftes Verhalten von E/E-Systemen verursacht werden«.
          </p>
          <p style={{ color: "white" }}>Unsere Leistungen:</p>
          <ul>
            <p style={{ color: "white" }}>
              Generell – Systematische Projektunterstützung
            </p>
            <li className="list">
              Analyse und Bewertung sämtlicher vorhandener bzw. geplanter
              Prozesse und Methoden (Aktivitäten) in Bezug auf die allgemeinen
              und ASIL-spezifischen Anforderungen der ISO 26262 mit Hilfe eines
              dezidierten Anforderungskataloges
            </li>
            <li className="list">
              Erstellung eines detaillierten Status- und Maßnahmenberichtes:
              <ul>
                <li className="list">
                  Status in Bezug auf Normkonformität der bereits umgesetzten
                  Aktivitäten
                </li>
                <li className="list">
                  notwendige Maßnahmen (allgemein und ASIL-spezifisch) zur
                  Erlangung der Normkonformität nach ISO 26262
                </li>
              </ul>
            </li>
            {/* <li className="list">Toolschulung IQ-RM</li>
            <li className="list">Schulungen zur ISO 26262</li>
            <li className="list">Training »on the job«</li> */}
          </ul>
          <p style={{ color: "white" }}>
            Planung und Management der Funktionalen Sicherheit – ISO 26262-2
          </p>
          <ul>
            <li className="list">
              Planung und Koordination sämtlicher Aktivitäten zum Erreichen der
              Funktionalen Sicherheit (Übernahme der Rolle des »Safety Managers«
              gemäß ISO 26262-2 6.4.6)
            </li>
            <li className="list">
              Erstellung bzw. Unterstützung bei der Erstellung des Safety Plans
              gemäß ISO 26262-2 6.4.6.4, dies beinhaltet unter Anderem:
              <ul>
                <li className="list">
                  Planung der Gefährdungs- und Risikoanalyse
                </li>
                <li className="list">
                  Planung der Entwicklungstätigkeiten auf System-, HW- und
                  SW-Ebene
                </li>
                <li className="list">
                  Planung bei der Entwicklung und Implementierung des
                  funktionalen Sicherheitskonzeptes etc.
                </li>
              </ul>
            </li>
          </ul>
          <p style={{ color: "white" }}>Konzeptphase – ISO 26262-3</p>
          <ul>
            <li className="list">
              Erstellung bzw. Unterstützung bei der Erstellung von Confirmation
              Reviews/Verification Reviews gemäß ISO 26262-2 6.4.9.1/Table 1)
            </li>
            <li className="list">
              Leitung und Moderation der Gefährdungs- und Risikoanalyse auf
              Basis von Templates, die sämtliche normative Anforderungen
              berücksichtigen
            </li>
          </ul>
          <p style={{ color: "white" }}>
            Produktentwicklung auf Systemebene – ISO 26262-4
          </p>
          <ul>
            <li className="list">
              Ausarbeitung des Technischen Sicherheitskonzeptes in
              Zusammenarbeit mit dem Projektteam
            </li>
            <li className="list">
              Verifikation der Technischen Sicherheitsanforderungen mit den
              Sicherheitsanforderungen des Funktionalen Sicherheitskonzeptes in
              Bezug auf Durchgängigkeit und Plausibilität
            </li>
            <li className="list">
              Abbildung von Sicherheitsanforderungen in der FMEA mit dem Ziel,
              diese hinsichtlich Vollständigkeit zu plausibilisieren
            </li>
          </ul>
          <p style={{ color: "white" }}>
            Produktentwicklung auf Hardwareebene – ISO 26262-5
          </p>
          <ul>
            <li className="list">
              Ableitung der spezifischen Hardware-Sicherheitsanforderungen aus
              dem Technischen Sicherheitskonzept
            </li>
            <li className="list">
              Verifikation der Hardware-Sicherheitsanforderungen mit den
              Sicherheitsanforderungen des Technischen Sicherheitskonzeptes in
              Bezug auf Durchgängigkeit und Plausibilität (z.B. bzgl.
              Fehlertoleranzzeiten für die Sicherheitsmechanismen)
            </li>
            <li className="list">
              Evaluierung der Hardware-Metriken und Evaluierung der
              Sicherheitszielverletzung aufgrund von zufälligen Hardwarefehlern
              mittels automatisierten FMEDA-Template
            </li>
          </ul>
          <p style={{ color: "white" }}>
            Produktentwicklung auf Softwareebene – ISO 26262-6
          </p>
          <ul>
            <li className="list">
              Ableitung der spezifischen Software-Sicherheitsanforderungen aus
              dem Technischen Sicherheitskonzept
            </li>
            <li className="list">
              Verifikation der Software-Sicherheitsanforderungen mit den
              Sicherheitsanforderungen des Technischen Sicherheitskonzeptes in
              Bezug auf Durchgängigkeit und Plausibilität (z.B. bzgl.
              Fehlertoleranzzeiten für die Sicherheitsmechanismen)
            </li>
            <li className="list">
              Sicherheitsanalysen auf Softwarestrukturebene (z.B. FMEA)
            </li>
            <li className="list">
              Ausarbeitung von Verifikationsplänen als Nachweis, dass die
              Sicherheitsanforderung auf Softwareebene erfüllt wurden und die
              ausgewählten Sicherheitsmechanismen geeignet sind
            </li>
          </ul>
          <p style={{ color: "white" }}>
            ASIL-bezogene und sicherheitsbezogene Analysen – ISO 26262-9
          </p>
          <ul>
            <li className="list">
              Durchführung der ASIL-Dekomposition gemäß den normativen
              Anforderungen der ISO 26262
            </li>
            <li className="list">
              Durchführung von Common-Cause-Analysen als Nachweis der Freedom
              from Interference oder der im Rahmen der ASIL-Dekomposition
              geforderten Unabhängigkeit
            </li>
            <li className="list">
              qualitative (FMEA, FTA) und quantitative (FTA, FMEDA)
              Sicherheitsanalysen
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
