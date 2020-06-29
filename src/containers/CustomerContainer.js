import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";

class CustomerContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <AppFrame
          header={`Cliente `}
          body={<p>Datos del cliente</p>}
        ></AppFrame>
      </div>
    );
  }
}

export default connect()(CustomerContainer);
