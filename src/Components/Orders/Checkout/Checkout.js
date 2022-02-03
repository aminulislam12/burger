import React, { Component } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import { Button, Modal, ModalBody } from "reactstrap";
import { resetIngredient } from "../../redux/actionCreators";
import { Formik } from "formik";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
const baseURL =
  "https://burgerbuilder-f94ae-default-rtdb.firebaseio.com/order.json?auth=";

const mapStateToprops = (state) => {
  return {
    ingredient: state.inGredient,
    totalPrice: state.totalPrice,
    purchesable: state.purchesable,
    token: state.token,
    userId: state.userId,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    resetIngredient: () => dispatch(resetIngredient()),
  };
};
class Checkout2 extends Component {
  state = {
    modalOpen: false,
    modalMess: "",
    isLoading: false,
  };
  goBack = () => {
    this.props.history.goBack("/");
  };
  render() {
    let form = (
      <div className="container">
        <div className="checkout my-2">
          <div className="paymentInfo shadow-sm">
            <h4>Payment Total : {this.props.totalPrice} BDT</h4>
          </div>
          <Formik
            initialValues={{
              customerName: "",
              customerEmail: "",
              customerPhone: "",
              customerdeliveryAdd: "",
              payment: "Cash On Delivery",
            }}
            onSubmit={(value) => {
              this.setState({
                isLoading: true,
              });
              const orders = {
                custometinfo: value,
                ingredient: this.props.ingredient,
                totalPrice: this.props.totalPrice,
                date: new Date().toString(),
                userId: this.props.userId,
              };
              console.log(orders);
              axios
                .post(baseURL + this.props.token, orders)
                .then((response) => {
                  if (response.status === 200) {
                    this.setState({
                      isLoading: false,
                      modalOpen: true,
                      modalMess: "Order Successfully Placed!",
                    });
                    this.props.resetIngredient();
                  } else {
                    this.setState({
                      isLoading: false,
                      modalOpen: true,
                      modalMess: "Sorry Something Want to Wrong!",
                    });
                  }
                })
                .catch((error) => {
                  this.setState({
                    isLoading: false,
                    modalOpen: true,
                    modalMess: `${error.message} Reconnecting Your Wifi!`,
                  });
                });
            }}
            validate={(value) => {
              const error = {};
              if (!value.customerName) {
                error.customerName = "Required!";
              }
              if (!value.customerEmail) {
                error.customerEmail = "Required";
              } else if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  value.customerEmail
                )
              ) {
                error.customerEmail = "Invalid Email";
              }
              if (!value.customerPhone) {
                error.customerPhone = "Required!";
              } else if (
                /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(
                  value.customerPhone
                )
              ) {
                error.customerPhone = "Invalid Phone Number";
              }
              return error;
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <div className="checkoutForm mt-3 shadow-sm">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-1">Name:</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="customerName"
                      className="form-control"
                      value={values.customerName}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.customerName}</span>
                  </div>
                  <div>
                    <label>Email-Address</label>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      name="customerEmail"
                      className="form-control"
                      value={values.customerEmail}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.customerEmail}</span>
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="number"
                      placeholder="+880"
                      name="customerPhone"
                      className="form-control"
                      value={values.customerPhone}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.customerPhone}</span>
                  </div>
                  <div>
                    <label>Delivery Address</label>
                    <textarea
                      placeholder="Delivery Address"
                      name="customerdeliveryAdd"
                      className="form-control"
                      value={values.customerdeliveryAdd}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <label>Payment Type</label>
                    <select
                      className="form-control"
                      name="payment"
                      type="select"
                      value={values.payment}
                      onChange={handleChange}
                    >
                      <option value="Cash On Delivery">Cash On Delivery</option>
                      <option value="bank">Bank</option>
                      <option value="bkash">Bkash</option>
                    </select>
                  </div>
                  <div className="my-3 d-grid d-md-flex gap-5 d-block justify-content-center">
                    <Button
                      className="btn btn-success px-5"
                      type="submit"
                      disabled={!this.props.purchesable}
                    >
                      Place Order
                    </Button>
                    <span
                      href="#"
                      className="btn btn-danger px-5"
                      onClick={this.goBack}
                    >
                      Cancle Order
                    </span>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    );
    return (
      <>
        {this.state.isLoading ? <Spinner /> : form}
        <Modal isOpen={this.state.modalOpen}>
          <ModalBody onClick={this.goBack}>
            <span>{this.state.modalMess}</span>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToprops, mapDispatchtoProps)(Checkout2);
