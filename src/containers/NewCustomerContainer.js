import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { insertCustomer } from "../actions/InsertCustomer";

class NewCustomerContainer extends Component {
  static propTypes = {
    insertCustomer: PropTypes.func.isRequired,
  };

  handleSubmit = (values) => {
    return this.props.insertCustomer(values);
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  handleOnBack = () => {
    this.props.history.goBack();
  };

  renderBody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
      />
    );
  };

  render() {
    return (
      <div>
        <AppFrame
          header={"Creación de cliente"}
          body={this.renderBody()}
        ></AppFrame>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { insertCustomer })(NewCustomerContainer)
);
