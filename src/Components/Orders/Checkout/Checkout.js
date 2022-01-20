import React, { Component } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { Modal, ModalBody } from "reactstrap";
const baseURL =
  "https://burgerbuilder-f94ae-default-rtdb.firebaseio.com/order.json";

const mapStateToprops = (state) => {
  return {
    ingredient: state.inGredient,
    totalPrice: state.totalPrice,
    purchesable: state.purchesable,
  };
};

class Checkout extends Component {
  state = {
    values: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      customerdeliveryAdd: "",
      payment: "Cash On Delivery",
    },
    isLoading: false,
    modalisOpen: false,
    modalMessage: "",
  };
  onChangeHandle = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };
  submitHandle = (event) => {
    this.setState({
      values: {
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerdeliveryAdd: "",
        payment: "Cash On Delivery",
      },
      isLoading: true,
    });
    //event.preventDefault();
    const order = {
      ingredient: this.props.ingredient,
      custometinfo: this.state.values,
      totalPrice: this.props.totalPrice,
      date: new Date().toString(),
    };

    axios
      .post(baseURL, order)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          this.setState({
            isLoading: false,
            modalisOpen: true,
            modalMessage: "SuccessFully Order Placed!",
          });
        } else {
          this.setState({
            isLoading: false,
            modalisOpen: true,
            modalMessage: "Something Want to Wrong!!",
          });
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          modalisOpen: true,
          modalMessage: `${error.message} Reconnecting Your Internet!`,
        });
      });
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
          <div className="checkoutForm mt-3 shadow-sm">
            <form>
              <div>
                <label className="mb-1">Name:</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="customerName"
                  className="form-control"
                  value={this.state.values.customerName}
                  onChange={(value) => this.onChangeHandle(value)}
                />
              </div>
              <div>
                <label>Email-Address</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="customerEmail"
                  className="form-control"
                  value={this.state.values.customerEmail}
                  onChange={(value) => this.onChangeHandle(value)}
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="+880"
                  name="customerPhone"
                  className="form-control"
                  value={this.state.values.customerPhone}
                  onChange={(value) => this.onChangeHandle(value)}
                />
              </div>
              <div>
                <label>Delivery Address</label>
                <textarea
                  placeholder="Delivery Address"
                  name="customerdeliveryAdd"
                  className="form-control"
                  value={this.state.values.customerdeliveryAdd}
                  onChange={(value) => this.onChangeHandle(value)}
                ></textarea>
              </div>
              <div>
                <label>Payment Type</label>
                <select
                  className="form-control"
                  name="payment"
                  value={this.state.values.payment}
                  onChange={(value) => this.onChangeHandle(value)}
                  type="select"
                >
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  <option value="bank">Bank</option>
                  <option value="bkash">Bkash</option>
                </select>
              </div>
              <div className="my-3 d-grid d-md-flex gap-5 d-block justify-content-center">
                <p className="btn btn-success px-5" onClick={this.submitHandle}>
                  Place Order
                </p>
                <p className="btn btn-danger px-5" onClick={this.goBack}>
                  Cancle Order
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    return (
      <>
        {this.state.isLoading ? <Spinner /> : form}
        <Modal isOpen={this.state.modalisOpen}>
          <ModalBody onClick={this.goBack}>{this.state.modalMessage}</ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToprops)(Checkout);
