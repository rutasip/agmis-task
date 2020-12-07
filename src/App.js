import React from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      search: "",
      filterPrice: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
