import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// Components
import InnerDropdown1 from "../innerDropdown1/innerDropdown";
import InnerDropdown2 from "../innerDropdown2/innerDropdown";
import InnerDropdown3 from "../innerDropdown3/innerDropdown";

// Images
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import Blazon from "../../assets/images/blazon.png";
import Arrow from "../../assets/images/downarrow.png";
import Open from "../../assets/images/open.png";
import Close from "../../assets/images/close.png";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import telegram from "../../assets/images/telegram.svg";
import ScrollTop from "../../assets/images/ScrollTop.svg";

const Layout = ({ children }) => {
  const langValue = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector(state => state);

  const { header, footer } = Content[lang];

  const dropdwn1 = useRef(null);
  const dropdwn2 = useRef(null);
  const dropdwn3 = useRef(null);

  const dwnImg1 = useRef(null);
  const dwnImg2 = useRef(null);
  const dwnImg3 = useRef(null);

  const [activeClass1, setActiveClass1] = useState(false);
  const [activeClass2, setActiveClass2] = useState(false);
  const [activeClass3, setActiveClass3] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const [hamOpen, setHamOpen] = useState(false);

  function getLang() {
    dispatch({ type: window.localStorage.getItem("lang") || "ru" });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header__top">
            <button
              className="hamburger"
              onClick={() => {
                setHamOpen(!hamOpen);
              }}
            >
              {!hamOpen ? (
                <Image className="open" src={Open} width="60" height="43" alt="" />
              ) : (
                <Image className="close" src={Close} width="60" height="43" alt="" />
              )}
            </button>

            <div
              className={!hamOpen ? "lang-wrapper" : "lang-wrapper lang-wrapper--active"}
            >
              <ul className="lang-mobile">
                <li
                  className={
                    lang === "ru"
                      ? "lang-mobile-item lang-mobile-item--active"
                      : "lang-mobile-item"
                  }
                  onClick={() => {
                    dispatch({ type: "ru" });
                  }}
                >
                  РУ
                </li>
                <li
                  className={
                    lang === "uz"
                      ? "lang-mobile-item lang-mobile-item--active"
                      : "lang-mobile-item"
                  }
                  onClick={() => {
                    dispatch({ type: "uz" });
                  }}
                >
                  Uz
                </li>
                <li
                  className={
                    lang === "en"
                      ? "lang-mobile-item lang-mobile-item--active"
                      : "lang-mobile-item"
                  }
                  onClick={() => {
                    dispatch({ type: "en" });
                  }}
                >
                  EN
                </li>
              </ul>
            </div>

            <Link href="/">
              <a className="header__logo">
                <Image
                  className="logo"
                  src={Logo}
                  alt="Hydroengo logo"
                  width="295"
                  height="120"
                />
              </a>
            </Link>

            <ul className="header__contact-list">
              <li className="header__contact-item">
                <p>
                  100041 Узбекистан, Ташкент <br />
                  ул. Олимлар -64
                </p>
              </li>
              <li className="header__contact-item">
                <p>
                  hydrouz@hydroengeo.uz <br /> hydrouz@exat.uz
                </p>
              </li>
              <li className="header__contact-item">
                <p>Tel: 998(71)265-03-78</p>
              </li>
            </ul>

            <ul className="lang">
              <li
                className={lang === "ru" ? "lang__item--active" : "lang__item"}
                onClick={() => {
                  dispatch({ type: "ru" });
                }}
              >
                <span>РУ</span>
              </li>
              <li
                className={lang === "uz" ? "lang__item--active" : "lang__item"}
                onClick={() => {
                  dispatch({ type: "uz" });
                }}
              >
                <span>УЗ</span>
              </li>
              <li
                className={lang === "en" ? "lang__item--active" : "lang__item"}
                onClick={() => {
                  dispatch({ type: "en" });
                }}
              >
                <span>EN</span>
              </li>
            </ul>

            <div
              className={`search-wrapper ${searchActive ? "search--active" : ""}`}
              onClick={e => {
                if (!e.target.classList.contains("search-input")) {
                  setSearchActive(!searchActive);
                }
              }}
            >
              <form className="search-form">
                <input className="search-input" type="text" placeholder="Поиск" />
              </form>

              <span className="search">
                <Image
                  className="header__search"
                  src={Search}
                  alt="search icon"
                  width="40"
                  height="40"
                />
              </span>
            </div>
            <span className="header__blazon-wrapper">
              <Image
                className="header__blazon"
                src={Blazon}
                alt="Blazon of Uzbekistan"
                width="120"
                height="120"
              />
            </span>
          </div>

          <div
            className={
              !hamOpen ? "header__bottom" : "header__bottom header__bottom--mobile"
            }
          >
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link href="/">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/" ? "navbar__item-link--active" : ""
                      }`}
                    >
                      {header.home}
                    </a>
                  </Link>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg1}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn1.current.classList.contains("dropdown--active")) {
                        dropdwn1.current.classList.add("dropdown--active");
                        dropdwn2.current.classList.remove("dropdown--active");
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn1.current.classList.remove("dropdown--active");
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span
                      className={
                        router.pathname.includes("/about")
                          ? "navbar__item-link--active"
                          : ""
                      }
                    >
                      {header.about}
                    </span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn1} className="navbar-item__dropdown">
                    <li className="navbar__dropdown-item">
                      <Link href="/about">
                        <a className="navbar__dropdown-link">{header.about}</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/structura">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.structure}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/governance">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.management}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/history">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.history_institute}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/politics">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.policy}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/cooperation">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.cooperation}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/about/management">
                        <a className="navbar__dropdown-link">
                          {header.about_drop_down.history_leadership}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg2}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn2.current.classList.contains("dropdown--active")) {
                        dropdwn2.current.classList.add("dropdown--active");
                        dropdwn1.current.classList.remove("dropdown--active");
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn2.current.classList.remove("dropdown--active");
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span
                      className={
                        router.pathname.includes("/activity")
                          ? "navbar__item-link--active"
                          : ""
                      }
                    >
                      {header.activity}
                    </span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn2} className="navbar-item__dropdown">
                    <li className="navbar__dropdown-item">
                      <Link href="/activity">
                        <a className="navbar__dropdown-link">{header.activity}</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/activity/scientific">
                        <a className="navbar__dropdown-link">
                          {header.activity_drop_down.scientific}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/activity/production">
                        <a className="navbar__dropdown-link">
                          {header.activity_drop_down.production}
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/activity/education">
                        <a className="navbar__dropdown-link">
                          {header.activity_drop_down.education}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg3}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn3.current.classList.contains("dropdown--active")) {
                        dropdwn3.current.classList.add("dropdown--active");
                        dropdwn2.current.classList.remove("dropdown--active");
                        dropdwn1.current.classList.remove("dropdown--active");
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span
                      className={
                        router.pathname.includes("/laboratories")
                          ? "navbar__item-link--active"
                          : ""
                      }
                    >
                      {header.centers_laboratories}
                    </span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn3} className="navbar-item__dropdown  dropdown3--active">
                    <li className="navbar__dropdown-item">
                      <Link href="/laboratories/functions">
                        <a className="navbar__dropdown-link">
                          {header.laboratories_drop_down.functions}
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`navbar__dropdown-item ${
                        activeClass1 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link"
                        onClick={() => {
                          setActiveClass1(!activeClass1);
                        }}
                      >
                        <span>{header.laboratories_drop_down.research}</span>
                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>
                      <InnerDropdown1 />
                    </li>

                    <li
                      className={`navbar__dropdown-item ${
                        activeClass2 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link "
                        onClick={() => {
                          setActiveClass2(!activeClass2);
                        }}
                      >
                        <span>{header.laboratories_drop_down.groundwater}</span>
                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>

                      <InnerDropdown2 />
                    </li>

                    <li
                      className={`navbar__dropdown-item ${
                        activeClass3 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link"
                        onClick={() => {
                          setActiveClass3(!activeClass3);
                        }}
                      >
                        <span>
                          {header.laboratories_drop_down.international_research}
                        </span>

                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>
                      <InnerDropdown3 />
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/laboratories/overture">
                        <a className="navbar__dropdown-link">
                          {
                            header.laboratories_drop_down.international_research_drop_down
                              .engineering
                          }
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/laboratories/hydrogeophysics">
                        <a className="navbar__dropdown-link">
                          {
                            header.laboratories_drop_down.international_research_drop_down
                              .hydrogeophysics
                          }
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/laboratories/engineering">
                        <a className="navbar__dropdown-link">
                          {
                            header.laboratories_drop_down.international_research_drop_down
                              .deposits
                          }
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/laboratories/hydrogeology">
                        <a className="navbar__dropdown-link">
                          {
                            header.laboratories_drop_down.international_research_drop_down
                              .engineering_geology
                          }
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <Link href="/normatives">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/normatives"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {header.normative}
                    </a>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link href="/contacts">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/contacts" ? "navbar__item-link--active" : ""
                      }`}
                    >
                      {header.contacts}
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>

      {/* //Footer */}
      <footer className="footer" id="footer">
        <div className="border-box"></div>
        <div className="container">
          <div className="footer__left-box">
            <ul className="left-box__list-top">
              <li className="left-box__item-top">
                <div className="logo-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="logo"
                        src={Logo}
                        alt="Hydroengo logo"
                        width="295"
                        height="120"
                      />
                    </a>
                  </Link>
                </div>

                <div className="app-box">
                  <ul className="app-box__list">
                    <li className="app-box__item">
                      <a
                        className="app-box__link"
                        href="https://m.facebook.com/login/?locale2=ru_RU"
                      >
                        <Image
                          src={facebook}
                          alt="facebook logo"
                          width="36"
                          height="36"
                        />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://twitter.com/login">
                        <Image src={twitter} alt="twitter logo" width="36" height="36" />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://www.instagram.com/">
                        <Image
                          src={instagram}
                          alt="instagram logo"
                          width="36"
                          height="36"
                        />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://www.youtube.com/?hl=ru">
                        <Image src={youtube} alt="youtube logo" width="36" height="36" />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://telegram.org/">
                        <Image
                          src={telegram}
                          alt="telegram logo"
                          width="36"
                          height="36"
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Disply-block 890px */}
                <ul className="left-box__list-bottom left-box__list-bottom--display-2">
                  <li className="left-box__item-bottom">
                    <a
                      className="left-box__item-bottom__link"
                      href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
                    >
                      100041 Узбекистан, Ташкент <br />
                      ул. Олимлар -64
                    </a>
                  </li>

                  <li className="left-box__item-bottom">
                    <a
                      className="left-box__item-bottom__link"
                      href="https://hydroengeo.uz/"
                    >
                      hydrouz@hydroengeo.uz <br />
                      hydrouz@exat.uz
                    </a>
                  </li>

                  <li className="left-box__item-bottom">
                    <a className="left-box__item-bottom__link" href="tel: +998712650378">
                      Tel: 998(71)265-03-78
                    </a>
                  </li>
                </ul>
              </li>
              <li className="left-box__item-top">
                <Link href="/about">
                  <a className="left-box__item-top__title">
                    <strong>{footer.about}</strong>
                  </a>
                </Link>

                <Link href="/about/structura">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.structure}</p>
                  </a>
                </Link>

                <Link href="/about/governance">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.management}</p>
                  </a>
                </Link>

                <Link href="/about/history">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.history_institute}</p>
                  </a>
                </Link>

                <Link href="/about/politics">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.policy}</p>
                  </a>
                </Link>

                <Link href="/about/cooperation">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.cooperation}</p>
                  </a>
                </Link>

                <Link href="/about/management">
                  <a className="left-box__item-top__info">
                    <p>{footer.about_drop_down.history_leadership}</p>
                  </a>
                </Link>
              </li>

              <li className="left-box__item-top">
                <Link href="/activity">
                  <a className="left-box__item-top__title">
                    <strong>{footer.activity}</strong>
                  </a>
                </Link>

                <Link href="/activity/scientific">
                  <a className="left-box__item-top__info">
                    <p>{footer.activity_drop_down.scientific}</p>
                  </a>
                </Link>

                <Link href="/activity/production">
                  <a className="left-box__item-top__info">
                    <p>{footer.activity_drop_down.production}</p>
                  </a>
                </Link>

                <Link href="/activity/education">
                  <a className="left-box__item-top__info">
                    <p>{footer.activity_drop_down.education}</p>
                  </a>
                </Link>

                <Link href="/normatives">
                  <a className="left-box__item-top__title">
                    <strong>{footer.normative}</strong>
                  </a>
                </Link>

                <Link href="/contacts">
                  <a className="left-box__item-top__info">
                    <p>{footer.contacts}</p>
                  </a>
                </Link>

                {/* <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>{footer.interactives}</p>
                  </a>
                </Link> */}
              </li>
            </ul>

            <ul className="left-box__list-bottom">
              <li className="left-box__item-bottom">
                <a
                  className="left-box__item-bottom__link"
                  href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
                >
                  100041 Узбекистан, Ташкент <br />
                  ул. Олимлар -64
                </a>
              </li>

              <li className="left-box__item-bottom">
                <a className="left-box__item-bottom__link" href="https://hydroengeo.uz/">
                  hydrouz@hydroengeo.uz <br />
                  hydrouz@exat.uz
                </a>
              </li>

              <li className="left-box__item-bottom">
                <a className="left-box__item-bottom__link" href="tel: +998712650378">
                  Tel: 998(71)265-03-78
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__right-box">
            <Link href="/">
              <a className="left-box__item-top__title">
                <strong>{footer.centers_laboratories}</strong>
              </a>
            </Link>

            <Link href="/laboratories/ameliorative">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.meliorative}</p>
              </a>
            </Link>

            <Link href="/laboratories/overture">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.remote_sensing}</p>
              </a>
            </Link>

            <Link href="/laboratories/hydrogeology">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.engineering_geology}</p>
              </a>
            </Link>

            <Link href="/laboratories/modeling">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.geoinformation}</p>
              </a>
            </Link>

            <Link href="/laboratories/geoecology">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.geoecology}</p>
              </a>
            </Link>

            <Link href="/laboratories/hydrogeophysics">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.hydrophysics}</p>
              </a>
            </Link>

            <Link href="/laboratories/groundwater">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.monitoring}</p>
              </a>
            </Link>

            <Link href="/laboratories/resources">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.resources}</p>
              </a>
            </Link>

            <Link href="/laboratories/uran">
              <a className="left-box__item-top__info">
                <p>{footer.laboratories_drop_down.uran}</p>
              </a>
            </Link>

            <Link href="/laboratories/engineering">
              <a>
                <p className="left-box__item-top__info">
                  {footer.laboratories_drop_down.deposits}
                </p>
              </a>
            </Link>
            <Link href="/laboratories/chemical">
              <a className="left-box__item-top__info">
                <p> {footer.laboratories_drop_down.chemical}</p>
              </a>
            </Link>
          </div>

          {/* Display-flex 1225*/}
          <ul className="left-box__list-bottom left-box__list-bottom--display">
            <li className="left-box__item-bottom">
              <a
                className="left-box__item-bottom__link"
                href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
              >
                100041 Узбекистан, Ташкент <br />
                ул. Олимлар -64
              </a>
            </li>

            <li className="left-box__item-bottom">
              <a className="left-box__item-bottom__link" href="https://hydroengeo.uz/">
                hydrouz@hydroengeo.uz <br />
                hydrouz@exat.uz
              </a>
            </li>

            <li className="left-box__item-bottom">
              <a className="left-box__item-bottom__link" href="tel: +998712650378">
                Tel: 998(71)265-03-78
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="scientific__btn">
        <Link href={"#header"}>
          <a className="scientific__btn__link">
            <Image src={ScrollTop} alt="ScrollTop" width="80" height="80" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Layout;
