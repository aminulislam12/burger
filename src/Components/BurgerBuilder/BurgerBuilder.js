import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  updatePurchesable,
} from "../redux/actionCreators";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Summary from "./Summary/Summary";

const mapStateToprops = (state) => {
  return {
    inGredient: state.inGredient,
    totalPrice: state.totalPrice,
    purchesable: state.purchesable,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    addIngredient: (ingtype) => dispatch(addIngredient(ingtype)),
    removeIngredient: (ingtype) => dispatch(removeIngredient(ingtype)),
    updatePurchesable: () => dispatch(updatePurchesable()),
  };
};
class BurgerBuilder extends Component {
  state = {
    ismodalOpen: false,
  };
  addIngredientHandler = (type) => {
    this.props.addIngredient(type);
    this.props.updatePurchesable();
  };
  removeIngredientHandler = (type) => {
    this.props.removeIngredient(type);
    this.props.updatePurchesable();
  };
  toggleModal = () => {
    this.setState({
      ismodalOpen: !this.state.ismodalOpen,
    });
  };
  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-sm-12">
            <Burger inGredient={this.props.inGredient} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Control
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}
              price={this.props.totalPrice}
              toggleModal={this.toggleModal}
              purchesable={this.props.purchesable}
            />
          </div>
        </div>
        <Modal isOpen={this.state.ismodalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <Summary
              inGredient={this.props.inGredient}
              price={this.props.totalPrice}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              Go to Checkout
            </Button>
            <Button color="danger" onClick={this.toggleModal}>
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToprops, mapDispatchtoprops)(BurgerBuilder);
