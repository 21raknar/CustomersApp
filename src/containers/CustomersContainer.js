import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import { fetchCustomers } from "../actions/fetchCustomers";

const customers = [
  { dni: "27000000", name: "Juan Perez", age: 37 },
  { dni: "30000000", name: "Otro", age: 35 },
  { dni: "33000000", name: "Luis Martinez", age: 32 },
];

class CustomersContainer extends Component {
  static propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };

  renderBody = (customers) => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={"customers/"}
      ></CustomersList>
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de Clientes"}
          body={this.renderBody(customers)}
        ></AppFrame>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(CustomersContainer)
);
