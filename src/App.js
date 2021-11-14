import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Success from "./components/ServiceDetail/Success";
import Login from "./components/Shared/Login/Login";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/success/:id">
            <Success></Success>
          </Route>
          <PrivateRoute path="/bookVehicle/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
