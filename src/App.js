import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";

class App extends Component {
  renderHome = () => <HomeContainer />;

  renderCostumerContainer = () => <h1>Customer Container </h1>;

  renderCustomerListContainer = () => <CustomersContainer />;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route
            exact
            path="/customers"
            component={this.renderCustomerListContainer}
          />
          <Switch>
            <Route
              path="/customers/new"
              component={this.renderCustomerNewContainer}
            />
            <Route
              path="/customers/:dni"
              component={this.renderCostumerContainer}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
