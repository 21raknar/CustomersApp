import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";

class CustomerContainer extends Component {
  static propTypes = {
    dni: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={<p>Datos del cliente</p>}
        ></AppFrame>
      </div>
    );
  }
}

export default connect()(CustomerContainer);
