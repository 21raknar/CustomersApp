import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomersByDni } from "../selectors/customers";
import { Route, withRouter } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { fetchCustomers } from "../actions/fetchCustomers";
import { updateCustomer } from "../actions/updateCustomer";
import { deleteCustomer } from "../actions/deleteCustomer";

class CustomerContainer extends Component {
  static propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    const { id } = values;
    return this.props.updateCustomer(id, values);
  };

  handleOnBack = () => {
    this.props.history.goBack();
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  handleOnDelete = () => {
    this.props.deleteCustomer("fjfpvoP");
  };

  renderCustomerControl = (isEdit, isDelete) => {
    if (this.props.customer) {
      const CustomerControl = isEdit ? CustomerEdit : CustomerData;

      return (
        <CustomerControl
          {...this.props.customer}
          onSubmit={this.handleSubmit}
          onBack={this.handleOnBack}
          onSubmitSuccess={this.handleOnSubmitSuccess}
          isDeleteAllow={!!isDelete}
          onDelete={this.handleOnDelete}
        />
      );
    }

    return null;
  };

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match: isEdit }) => (
        <Route
          path="/customers/:dni/del"
          children={({ match: isDelete }) =>
            this.renderCustomerControl(isEdit, isDelete)
          }
        />
      )}
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

export default withRouter(
  connect(mapStateToProps, { fetchCustomers, updateCustomer, deleteCustomer })(
    CustomerContainer
  )
);
