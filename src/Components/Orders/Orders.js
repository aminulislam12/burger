import React, { Component } from "react";
import { featchOrder } from "../redux/actionCreators";
import { connect } from "react-redux";
import SingleOrderShow from "./SingleOrder/SingleorderShow";
import { UncontrolledAlert } from "reactstrap";
import Spinner from "./Spinner/Spinner";

//Redux Store Function
const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    featchOrder: () => dispatch(featchOrder()),
  };
};

class Orders extends Component {
  componentDidMount() {
    this.props.featchOrder();
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    let order = null;
    if (this.props.orderError) {
      order = (
        <UncontrolledAlert color="danger">
          Sorry! Something Want to Wrong!
        </UncontrolledAlert>
      );
    } else {
      if (this.props.orders.length === 0) {
        order = (
          <UncontrolledAlert color="info">
            Sorry You Have No Order!
          </UncontrolledAlert>
        );
      } else {
        order = this.props.orders.map((order) => {
          return <SingleOrderShow order={order} key={order.id} />;
        });
      }
    }

    return (
      <>
        <div className="container">
          <div className="showOrder row my-2">
            {this.props.orderLoading ? <Spinner /> : order}
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Orders);
