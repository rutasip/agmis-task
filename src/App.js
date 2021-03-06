import React from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDescription from "./components/ProductDescription";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="grid-container">
            <main>
              <div className="content">
                <div className="main">
                  <Switch>
                    <Route
                      path="/product-description/:id"
                      component={ProductDescription}
                    ></Route>
                    <Route path="/">
                      <Filter />
                      <Products />
                    </Route>
                  </Switch>
                </div>
              </div>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
