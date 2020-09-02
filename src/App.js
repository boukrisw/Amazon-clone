import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  //console.log(user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          {/* Default ROUTE */}
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
