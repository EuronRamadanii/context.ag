import React from "react";
import { t } from "i18next";
import AOS from "aos";
import { Link, useParams } from "react-router-dom";

function OrderProduct() {
  const { name } = useParams();
  AOS.init({ once: true });
  return (
    <div className="Contact-page" id="contact">
      <div className="container">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <h1 data-aos="fade-up" data-aos-duration="1800">
              Order {name}
            </h1>
            <p className="s-p" data-aos="fade-up" data-aos-duration="2000">
              {t("contact2")}
            </p>
          </div>
          <div
            className="row contact-form"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form1")}</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form2")}</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form3")}</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form4")}</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-lg-6">
                  <label className="col-form-label">{t("form5")}</label>
                  <select className="form-control">
                    <option selected></option>
                    {industrys.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div> */}
                {/* <div className="col-lg-6">
                  <label className="col-form-label">{t("form6")}</label>
                  <select className="form-control">
                    <option selected></option>
                    {employeesRanges.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form7")}</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form8")}</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label className="col-form-label">{t("form9")}</label>
                  <input type="text" className="form-control"></input>
                </div>
                {/* <div className="col-lg-6">
                  <label className="col-form-label">{t("form10")}</label>
                  <select className="form-control">
                    <option selected></option>
                    {interestedServices.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label className="col-form-label">{t("form11")}</label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <button
                className="btn_submit"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {t("form12")}
              </button>
              <Link
                to="/products"
                className="back"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                &larr;Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
