import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import { fetchCustomers } from "../actions/fetchCustomers";
import { getCustomers } from "../selectors/customers";

class CustomersContainer extends Component {
  static propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
  };
  componentDidMount() {
    if (this.props.customers.length === 0) {
      this.props.fetchCustomers();
    }
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
          body={this.renderBody(this.props.customers)}
        ></AppFrame>
      </div>
    );
  }
}

CustomersContainer.defaultProps = {
  customers: [],
};

const mapStateToProps = (state) => ({
  customers: getCustomers(state),
});

export default withRouter(
  connect(mapStateToProps, { fetchCustomers })(CustomersContainer)
);
