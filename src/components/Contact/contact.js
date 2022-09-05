import { t } from "i18next";
import "../../Assets/css/_contact.scss";
import React from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import Input from "./Input";
import Joi from "joi-browser";
import TextAreaField from "./TextAreaField";

const employeesRanges = [
  {
    label: "1-10",
    value: "1-10",
  },
  {
    label: "11-50",
    value: "11-50",
  },
  {
    label: "51-200",
    value: "51-200",
  },
];
class Contact extends React.Component {
  state = {
    isVerified: false,
    inputs: {
      firstName: "",
      lastName: "",
      companyName: "",
      address: "",
      contactName: "",
      contactPosition: "",
      website: "",
      industry: "",
      description: "",
    },
    errors: {},
    options: [
      {
        label: "Business goals to IT goals",
        value: "Business goals to IT goals",
      },
      {
        label: "Business Analyses",
        value: "Business Analyses",
      },
      {
        label: "IT Implementation",
        value: "IT Implementation",
      },
      {
        label: "IT Setup",
        value: "It Setup",
      },
      {
        label: "Data & Cyber Security",
        value: "Data & Cyber Security",
      },
      {
        label: "Data Management",
        value: "Data Management",
      },
      {
        label: "IT Support",
        value: "IT Support",
      },
      {
        label: "All",
        value: "All",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
  };

  schema = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    companyName: Joi.string().required().label("Company Name"),
    address: Joi.string().required().label("Address"),
    contactName: Joi.string().required().label("Contact Name"),
    contactPosition: Joi.string().required().label("Contact Positon"),
    website: Joi.string().required().label("Website"),
    industry: Joi.required().label("Industry"),
    description: Joi.string().required().label("Description"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.inputs, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleOnChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const inputs = { ...this.state.inputs };
    inputs[input.name] = input.value;
    // this.setState({})
    this.setState({ inputs, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    console.log("Submitted");
  };
  handleChange = () => {
    this.setState({ isVerified: true });
  };
  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vp98umh",
        "template_cikwo4c",
        e.target,
        "noTujS5CU4tTos-kb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  render() {
    const { inputs, errors } = this.state;

    return (
      <div className="Contact-page" id="contact">
        <div className="container">
          <div className="col-lg-8 col-md-12">
            <form onSubmit={this.handleSubmit && this.sendEmail}>
              <div className="row">
                <h1 data-aos="fade-up" data-aos-duration="1800">
                  {t("contact")}
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
                      <Input
                        name="firstName"
                        value={inputs.firstName}
                        onChange={this.handleOnChange}
                        error={errors.firstName}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form2")}</label>
                      <Input
                        name="lastName"
                        value={inputs.lastName}
                        onChange={this.handleOnChange}
                        error={errors.lastName}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form3")}</label>
                      <Input
                        name="companyName"
                        value={inputs.companyName}
                        onChange={this.handleOnChange}
                        error={errors.companyName}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form4")}</label>
                      <Input
                        name="address"
                        value={inputs.address}
                        className="form-control shadow-none"
                        onChange={this.handleOnChange}
                        error={errors.address}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form5")}</label>
                      <select
                        name="industry"
                        value={inputs.industry}
                        onChange={this.handleOnChange}
                        className="form-control shadow-none"
                        required="required"
                        error={errors.industry}
                      >
                        <option value=""></option>
                        <option value="Computer and technology">
                          Computer and technology
                        </option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Finance">Finance</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.industry && (
                        <div className="alert alert-danger">
                          {errors.industry}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form6")}</label>
                      <select className="form-control" name="employee">
                        <option selected></option>
                        {employeesRanges.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form7")}</label>
                      <Input
                        name="contactName"
                        value={inputs.contactName}
                        onChange={this.handleOnChange}
                        error={errors.contactName}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form8")}</label>
                      {/* <input
                        type="text"
                        className="form-control"
                        name="contactposition"
                      ></input> */}
                      <Input
                        name="contactPosition"
                        value={inputs.contactPosition}
                        onChange={this.handleOnChange}
                        error={errors.contactPosition}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form9")}</label>
                      <Input
                        name="website"
                        value={inputs.website}
                        onChange={this.handleOnChange}
                        error={errors.website}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="col-form-label">{t("form10")}</label>
                      <Select
                        options={this.state.options}
                        isMulti
                        name="services"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label className="col-form-label">{t("form11")}</label>
                      <TextAreaField
                        name="description"
                        value={inputs.description}
                        onChange={this.handleOnChange}
                        error={errors.description}
                      />
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LeZahAhAAAAAM6Le7zzKpazWUqzeCKcaxFCBrBi"
                    onChange={this.handleChange}
                    className="margintopp"
                  />
                  <button
                    disabled={!this.state.isVerified || this.validate()}
                    className="btn_submit"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {t("form12")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
