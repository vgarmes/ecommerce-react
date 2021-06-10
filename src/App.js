import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
