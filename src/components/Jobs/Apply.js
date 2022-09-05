import React from "react";
import "../../Assets/css/_job.scss";
import Header from "../Layout/Header/header";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

class Apply extends React.Component {
  state = {
    isVerified: false,
  };
  handleOnChange = (value) => {
    this.setState({ isVerified: true });
  };
  render() {
    return (
      <>
        <Header />
        <div className="partt1">
          <div class="parallax" style={{ marginTop: "40px" }}></div>
        </div>
        <hr
          style={{
            width: "55%",
            textAlign: "left",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        ></hr>
        <div className="tt">
          <div className="apply">
            <div className="personal">
              <h4>Personal Information</h4>
              <p style={{ color: "gray" }}>Tell us about yourself</p>
            </div>
            <div className="mt-5 test">
              <form className="form">
                <div class="form-group">
                  <label for="exampleInputEmail1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Email"
                  />
                </div>
              </form>
            </div>
          </div>
          <hr
            style={{
              width: "55%",
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          ></hr>

          <div className="tt">
            <div>
              <div className="mt-5 apply" style={{ top: "-45px" }}>
                <div className="personal">
                  <h4> CV / Resume</h4>
                  <p style={{ color: "gray" }}>Upload your CV or resume file</p>
                </div>
                <div>
                  <div className="button test1">
                    <button> Add File</button>
                    <p style={{ color: "gray" }}>
                      We accept PDF, DOC, DOCX, JPG and PNG files
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              width: "55%",
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          ></hr>

          <div className="tt">
            <div>
              <div className="mt-5 apply" style={{ top: "-45px" }}>
                <div className="personal">
                  <h4>Questions</h4>
                  <p style={{ color: "gray" }}>
                    Please fill in additional questions
                  </p>
                </div>
                {/* style={{borderLeft: "1px solid rgba(225,225,222,1);", height: "1550px"}} */}
                <div className="borderr">
                  <div className="mt-4 ml-5">
                    <p>
                      <br /> Which region are you based in?
                    </p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Prishtinë
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Ferizaj
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option3"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Gjakovë
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option4"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Mitrovicë
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option5"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Prizren
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option6"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Pejë
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option7"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Gjilan
                      </label>
                    </div>
                    <input type="test" placeholder="others" rounded />
                  </div>
                  <div className="personal ml-5">
                    <p>Are you legally eligible to work?</p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div className="personal ml-5">
                    <p>What are your current responsibilities?</p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div className="personal ml-5">
                    <p>What is your experience in UI UX?</p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div className="personal ml-5">
                    <p>
                      Walk us through some of the best practices, methods,
                      <br /> or frameworks you use on a daily basis to do your
                      work, and why?
                    </p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div className="personal ml-5">
                    <p>What is your experience with doing research?</p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div className="personal ml-5">
                    <p>Where did you hear about this position? </p>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px", width: "500px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2"></label> */}
                    </div>
                  </div>
                  <div class="form-check mt-3 ml-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      DigIT can use the information I've given in order to
                      consider me for this position.
                    </label>
                  </div>
                  <ReCAPTCHA
                    style={{ marginLeft: "50px", marginTop: "20px" }}
                    sitekey="6LeZahAhAAAAAM6Le7zzKpazWUqzeCKcaxFCBrBi"
                    onChange={this.handleOnChange}
                    className="margintopp"
                  />
                  <div style={{ display: "flex", marginTop: "50px" }}>
                    <button
                      className="ml-5 btn_submit"
                      disabled={!this.state.isVerified}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <b>Apply Now</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Apply;
