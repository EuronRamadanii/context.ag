import React from "react";
import "../../../Assets/css/_footer.scss";
import { contactLinks } from "./contactLinks";
// import logoheader from '../../../Assets/Images/digit_logo.svg';
import twitter from "../../../Assets/Images/social-media/twitter.svg";
import facebook from "../../../Assets/Images/social-media/facebook.svg";
import instagram from "../../../Assets/Images/social-media/instagram.svg";
import linkedin from "../../../Assets/Images/social-media/linkedin.svg";
import { t } from "i18next";
// import Flag from 'react-world-flags';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* <div className='col-lg-3 col-md-6 col-sm-6'>
            <Link to="/"><img src={logoheader} className='navbar-brand' alt="Logo Footer"/></Link>
          </div> */}
          <div className="col-lg-6 col-md-4 col-sm-6">
            <p className="s-p pdd-30">{t("footer")}</p>
            <ul>
              <li>
                <a href="/#about">{t("list1")}</a>
              </li>
              <li>
                <a href="/#services">{t("list2")}</a>
              </li>
              <li>
                <a href="/career">{t("list3")}</a>
              </li>
              <li>
                <a href="/products">{t("list4")}</a>
              </li>
              {/* <li>
                <a href="/testimonials">{t("list5")}</a>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-6">
            <p className="s-p pdd-30">Contact</p>
            {/* <Flag code='ch' height={16} className='float-left'/> */}
            <ul>
              {contactLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      className={item.cName}
                      target={item.target}
                    >
                      {item.icon}
                      {item.contact}
                    </a>
                    <a
                      href={item.link2}
                      className="contacts"
                      target={item.target2}
                    >
                      {item.icon2}
                      {item.contact2}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row bottom-footer">
          <div className="divide-border"></div>
          <div className="col-lg-9 col-md-6 col-sm-12">
            <p className="bottom-s-p">&copy;DigIT {new Date().getFullYear()}</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 social-media">
            <p className="bottom-s-p">{t("follow")}</p>
            <a href="https://twitter.com/DigIT2122" className="sm-link">
              <img src={twitter} className="social-media-icon" alt="SM icon" />
            </a>
            <a
              href="https://www.facebook.com/Digit-Consulting-111273974974253/"
              className="sm-link"
            >
              <img src={facebook} className="social-media-icon" alt="SM icon" />
            </a>
            <a
              href="https://www.instagram.com/digit.consulting/"
              className="sm-link"
            >
              <img
                src={instagram}
                className="social-media-icon"
                alt="SM icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/digit-digitalization-it/"
              className="sm-link"
            >
              <img src={linkedin} className="social-media-icon" alt="SM icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
