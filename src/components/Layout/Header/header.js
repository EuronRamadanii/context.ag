import React, { Component } from "react";
import "../../../Assets/css/_header.scss";
import { Link } from "react-router-dom";
import logoheader from "../../../Assets/Images/logoo.png";
import i18next, { t } from "i18next";
import globe from "../../../Assets/Images/language/globe.png";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
  // {
  //   code:'fr',
  //   name:'Français',
  //   country_code:'fr'
  // },
  {
    code: "de",
    name: "Deutsch",
    country_code: "de",
  },
];
class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems container">
        <Link to="/">
          <img
            src={logoheader}
            className="navbar-logo"
            height={34}
            alt="Logo Header"
          />
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <div
            className={this.state.clicked ? "closeHamburger" : "hamburber"}
          />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/#about">{t("list1")}</a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {t("list2")}
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                <Link to="/services/service-1">Business goals to IT goals</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-2">Business Analyses</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-3">IT Implementation</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-4">IT Setup</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-5">Data & Cyber Security</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-6">Data Management</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/service-7">IT Support</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/products">{t("list4")}</Link>
          </li>
          {/* <li>
          <Link to='/testimonials'>{t("list5")}</Link>
        </li> */}
          <li>
            <Link to="/career"> {t("list3")}</Link>
          </li>
          <li>
            <a href="/#contact"> Contact</a>
          </li>
        </ul>
        <li>
          <a
            className="lang dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={globe} height={25} width={25} />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </li>
      </nav>
    );
  }
}

export default Header;
