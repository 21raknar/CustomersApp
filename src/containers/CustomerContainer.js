import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomersByDni } from "../selectors/customers";
import { Route } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

class CustomerContainer extends Component {
  static propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
  };

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;

        return <CustomerControl {...this.props.customer} />;
      }}
    />
  );

  render() {
    return (
      //<p>Datos del cliente {this.props.customer.name}</p>
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
        ></AppFrame>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
