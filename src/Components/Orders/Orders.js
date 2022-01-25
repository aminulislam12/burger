import React, { Component } from "react";
import { featchOrder } from "../redux/actionCreators";
import { connect } from "react-redux";
import SingleOrderShow from "./SingleOrder/SingleorderShow";

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
    console.log(this.props.orders);
    let order = this.props.orders.map((order) => {
      return <SingleOrderShow order={order} key={order.id} />;
    });
    return (
      <>
        <div className="container">
          <div className="showOrder row my-2">{order}</div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Orders);
