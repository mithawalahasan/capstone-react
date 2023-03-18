import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photo from "./pages/Photo";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photo />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
