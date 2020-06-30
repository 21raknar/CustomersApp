import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomersByDni } from "../selectors/customers";

class CustomerContainer extends Component {
  static propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={<p>Datos del cliente {this.props.customer.name}</p>}
        ></AppFrame>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
