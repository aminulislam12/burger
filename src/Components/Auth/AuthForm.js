import { Formik } from "formik";
import React, { Component } from "react";
import "./AuthForm.css";
import { auth } from "../redux/Authactioncreaors";
import { connect } from "react-redux";

const mapDispatchProps = (dispatch) => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode)),
  };
};

class AuthForm extends Component {
  state = {
    mode: "SingUP",
  };
  swithModehandle = () => {
    this.setState({
      mode: this.state.mode === "SingUP" ? "Login" : "SingUP",
    });
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "", confrimpass: "" }}
          onSubmit={(value) =>
            this.props.auth(value.email, value.password, this.state.mode)
          }
          validate={(value) => {
            const Error = {};
            if (!value.email) {
              Error.email = "Required!";
            } else if (
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)
            ) {
              Error.email = "Invalid Email Address!";
            }
            if (!value.password) {
              Error.password = "Required!";
            } else if (value.password.length < 8) {
              Error.password = "YouHave Must 8 Character Password";
            }
            if (this.state.mode === "SingUP") {
              if (!value.confrimpass) {
                Error.confrimpass = "Required!";
              } else if (value.password !== value.confrimpass) {
                Error.confrimpass = "Password Did Not Match!";
              }
            }

            //console.log(Error);
            return Error;
          }}
        >
          {({ values, handleSubmit, handleChange, errors }) => (
            <div className="checkout my-3">
              <button className="mybtns" onClick={this.swithModehandle}>
                Swith to {this.state.mode === "SingUP" ? "Login" : "SingUP"}
              </button>
              <form onSubmit={handleSubmit}>
                <div className="checkoutForm">
                  <h4 className="text-center">
                    {this.state.mode === "SingUP"
                      ? "SingUP Form"
                      : "Login Form"}
                  </h4>
                  <div>
                    <label className="my-1 fw-bold">Enter Your Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Valid Email"
                      className="form-control"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <span className="text-danger fw-bold"> {errors.email}</span>
                  </div>
                  <div>
                    <label className="my-1 fw-bold">Enter Your password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <span className="text-danger fw-bold">
                      {errors.password}
                    </span>
                  </div>
                  {this.state.mode === "SingUP" ? (
                    <div>
                      <label className="my-1 fw-bold">Confrim password</label>
                      <input
                        type="password"
                        name="confrimpass"
                        placeholder="Confrim password"
                        className="form-control"
                        value={values.confrimpass}
                        onChange={handleChange}
                      />
                      <span className="text-danger fw-bold">
                        {errors.confrimpass}
                      </span>
                    </div>
                  ) : null}

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success my-2 myBtn fw-bold"
                    >
                      {this.state.mode === "SingUP" ? "SingUP" : "Login"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(null, mapDispatchProps)(AuthForm);
