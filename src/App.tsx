import "./App.css";
import { useRef, useState, useEffect } from "react";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 727);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };
  return (
    <>
      <header>
        <div className="navlist">
          Lust auf neuen Glanz? Rufen Sie an und lassen Sie uns gemeinsam Ihr
          Fahrzeug perfektionieren!* {""}
          <span>
            <a href="">
              Jetzt anrufen
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.95312 2.40625L7.04688 5.5L3.95312 8.59375"
                  stroke="#0071E3"
                  stroke-width="1.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </span>
        </div>
      </header>
      <main>
        <section id="home">
          <div className="heading">
            <h3>
              “Professionelle Instandsetzung <br />
              und Aufbereitung von <br />
              Fahrzeugen jeder Art.”
            </h3>
          </div>
          <div className="content">
            <div className="content-grid">
              <div className="fcocon">
                <h6>
                  Autokosmetik-System
                  <br />
                  Durmaz
                </h6>
                <h3>
                  Professionelle <br />
                  Instandsetzung <br />
                  und Aufbereitung
                </h3>

                <h4>Autopflege & Aufbereitung</h4>
                <div className="buttons-container">
                  <button className="btn1 reserve">
                    <a href="mailto:info@alprosecco.de?subject=Termin%20buchen">
                      <p>Termin buchen</p>
                    </a>
                  </button>
                  <button
                    className="btn1 menu"
                    onClick={() =>
                      "window.open('speisekartegusto.pdf', '_blank')"
                    }
                  >
                    <p>E-Mail</p>
                  </button>
                </div>
              </div>
              <div className="scocon">
                <div className="pp-container">
                  {isMobile ? (
                    <p className="pp">
                      Wellness für dein Fahrzeug. Unser erfahrenes Team steht
                      Ihnen für jede unserer Dienstleistungen als zuverlässiger
                      Part...
                    </p>
                  ) : (
                    <p className="pp">
                      <span>Wellness für dein Fahrzeug.</span> Unser erfahrenes
                      Team steht Ihnen für jede unserer Dienstleistungen als
                      zuverlässiger Partner zur Seite und behandelt Ihr
                      Fahrzeug, als wäre es unser eigenes. Für beste Ergebnisse
                      setzen wir ausschließlich hochwertige Materialien und
                      Werkzeuge ein, die den höchsten Marktstandards
                      entsprechen. Unser Full-Service-Ansatz bietet Ihnen
                      maximale Qualität.
                    </p>
                  )}
                </div>
                <h5 className="categories">
                  Besichtigung · Begutachtung · Fahrzeugübergabe · Aufbereitung
                  · Abholung
                </h5>
              </div>
            </div>
          </div>
        </section>
        <h5 className="aboutSectionTitle">Unsere Dienstleistungen</h5>
        <section id="aboutSection">
          <div className="aboutScrollSection">
            <button
              onClick={scrollLeft}
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <svg
                width="10"
                height="42"
                viewBox="0 0 10 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L1.45572 19.3892C1.16319 20.1022 1.1563 20.9005 1.43649 21.6185L9 41"
                  stroke="#272728"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="boxContainer" ref={scrollContainerRef}>
              <div className="aboutBox">
                <h5>Fahrzeugaufbereitung aller Art</h5>
                <h6>Service</h6>
                <p>
                  Ob PKW, Neuwagen, Oldtimer oder LKW - wir bieten
                  spezialisierte Aufbereitungsservices für jedes Fahrzeug und
                  bringen es in Bestform.
                </p>
              </div>
              <div className="aboutBox">
                <h5>Komplettreinigung</h5>
                <h6>Service</h6>
                <p>
                  Wir reinigen Ihr Fahrzeug gründlich von innen und außen, damit
                  es in neuem Glanz erstrahlt und ein frisches Fahrerlebnis
                  bietet.
                </p>
              </div>
              <div className="aboutBox">
                <h5>Smart Repair</h5>
                <h6>Service</h6>
                <p>
                  Kleine Dellen, Beulen oder Kratzer entfernen wir mühelos, um
                  die makellose Optik Ihres Fahrzeugs wiederherzustellen.
                </p>
              </div>
              <div className="aboutBox withMargin">
                <h5>Keramikversiegelung</h5>
                <h6>Service</h6>
                <p>
                  Die Keramikversiegelung schützt Ihr Fahrzeug langfristig vor
                  Wasserflecken, Kratzern und anderen Verschmutzungen und
                  verleiht ihm eine robuste, glatte O...
                </p>
              </div>
            </div>
            <button
              onClick={scrollRight}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <svg
                width="10"
                height="42"
                viewBox="0 0 10 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 41L8.54429 22.6108C8.83682 21.8978 8.8437 21.0995 8.56351 20.3815L1 1"
                  stroke="#272728"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <section id="footer">
          <div className="footerCc">
            <hr />
            <div className="footer-container">
              <div className="kontakt">
                <h5>Kontakt</h5>
                <div className="mobisdo tb">
                  <p className="black">Öffnungszeiten</p>
                  <p className="text">
                    Mo-Fr 8:00 bis 18:00 Uhr
                    <br />
                    Sa 9:00 bis 15:00 Uhr
                    <br />
                    Sonntag Geschlossen
                  </p>
                </div>

                <div className="contactinfo">
                  <p className="black">Autokosmetik-System Durmaz</p>
                  <p className="linkblue">
                    <a>Im Königsesch 13A, 46395 Bocholt</a>
                    <br />
                    <a href="tel:+4928711877963">tel. 02871 18 77 963</a>
                    <br />
                    <a href="mailto:info@alprosecco.de">m-durmaz@hotmail.de</a>
                    <br />
                    <a href="https://www.alprosecco.de" target="_blank">
                      www.autopflege-bocholt.de
                    </a>
                  </p>
                </div>
              </div>
              <div className="about">
                <h5>Über Autokosmetik-System Durmaz</h5>
                <div className="local tb">
                  <p className="black blacktwo">Das sind wir</p>
                  <p className="text">
                    Mit Leidenschaft und Präzision bringen wir jedes Fahrzeug
                    wieder zum Strahlen. Lernen Sie uns kennen und erfahren Sie,
                    wie wir durch unsere Liebe zum Detail beeindruckende
                    Ergebnisse erzielen – für ein Fahrzeug, das wie neu wirkt.
                  </p>
                </div>
              </div>
              <div className="information">
                <h5 className="ih">Informationen</h5>
                <p className="text ihtext">
                  Impressum • Datenschutz • Cookies & Nutzung
                </p>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2811 2.93738C13.1506 2.93998 13.9838 3.28654 14.5986 3.90138C15.2135 4.51621 15.56 5.34936 15.5626 6.21887V12.7811C15.56 13.6506 15.2135 14.4838 14.5986 15.0986C13.9838 15.7135 13.1506 16.06 12.2811 16.0626H5.71887C4.84936 16.06 4.01621 15.7135 3.40138 15.0986C2.78654 14.4838 2.43998 13.6506 2.43738 12.7811V6.21887C2.43998 5.34936 2.78654 4.51621 3.40138 3.90138C4.01621 3.28654 4.84936 2.93998 5.71887 2.93738H12.2811ZM12.2811 1.625H5.71887C3.19219 1.625 1.125 3.69219 1.125 6.21887V12.7811C1.125 15.3078 3.19219 17.375 5.71887 17.375H12.2811C14.8078 17.375 16.875 15.3078 16.875 12.7811V6.21887C16.875 3.69219 14.8078 1.625 12.2811 1.625Z"
                    fill="black"
                  />
                  <path
                    d="M13.2655 6.21991C13.0708 6.21991 12.8805 6.16218 12.7186 6.05401C12.5567 5.94585 12.4306 5.79211 12.3561 5.61224C12.2816 5.43237 12.2621 5.23444 12.3 5.04349C12.338 4.85254 12.4318 4.67714 12.5695 4.53948C12.7071 4.40181 12.8825 4.30806 13.0735 4.27007C13.2644 4.23209 13.4623 4.25159 13.6422 4.32609C13.8221 4.4006 13.9758 4.52677 14.084 4.68865C14.1922 4.85053 14.2499 5.04084 14.2499 5.23553C14.2502 5.36488 14.2249 5.49301 14.1755 5.61257C14.1261 5.73212 14.0537 5.84075 13.9622 5.93221C13.8707 6.02368 13.7621 6.09617 13.6425 6.14555C13.523 6.19492 13.3949 6.22019 13.2655 6.21991ZM9 6.87593C9.5192 6.87593 10.0267 7.02989 10.4584 7.31834C10.8901 7.60679 11.2266 8.01678 11.4253 8.49645C11.624 8.97613 11.676 9.50395 11.5747 10.0132C11.4734 10.5224 11.2234 10.9902 10.8562 11.3573C10.4891 11.7244 10.0214 11.9744 9.51214 12.0757C9.00291 12.177 8.47509 12.125 7.99541 11.9263C7.51574 11.7276 7.10575 11.3912 6.8173 10.9595C6.52885 10.5278 6.37488 10.0202 6.37488 9.50104C6.37563 8.80505 6.65244 8.13777 7.14459 7.64563C7.63673 7.15348 8.30401 6.87667 9 6.87593ZM9 5.56354C8.22124 5.56354 7.45996 5.79447 6.81244 6.22713C6.16493 6.65979 5.66025 7.27474 5.36223 7.99423C5.06421 8.71371 4.98623 9.50541 5.13816 10.2692C5.29009 11.033 5.6651 11.7346 6.21577 12.2853C6.76644 12.8359 7.46803 13.211 8.23183 13.3629C8.99563 13.5148 9.78733 13.4368 10.5068 13.1388C11.2263 12.8408 11.8413 12.3361 12.2739 11.6886C12.7066 11.0411 12.9375 10.2798 12.9375 9.50104C12.9375 8.45675 12.5227 7.45523 11.7842 6.71681C11.0458 5.97839 10.0443 5.56354 9 5.56354Z"
                    fill="black"
                  />
                </svg>{" "}
                {""}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.875 8.04688C16.875 3.69805 13.3488 0.171875 9 0.171875C4.65117 0.171875 1.125 3.69805 1.125 8.04688C1.125 11.9773 4.0043 15.2353 7.76953 15.8266V10.3239H5.76949V8.04688H7.76953V6.31191C7.76953 4.33859 8.94551 3.2477 10.7441 3.2477C11.6058 3.2477 12.5072 3.40168 12.5072 3.40168V5.33984H11.5137C10.536 5.33984 10.2301 5.94664 10.2301 6.57031V8.04688H12.414L12.0653 10.3239H10.2305V15.8273C13.9957 15.2363 16.875 11.9784 16.875 8.04688Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
