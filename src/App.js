import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Deals from './Components/Deals/Deals';
import NotFound from './Components/NotFound/NotFound';
import AddSharee from './Components/AddSharee/AddSharee';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Manage from './Components/Manage/Manage';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext();
export const BuyContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [buy, setBuy] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
    <BuyContext.Provider value= {[buy, setBuy]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <AddSharee></AddSharee>
        </PrivateRoute>
        <Route path="/deals">
          <Deals></Deals>
        </Route>
        <Route path="/manage">
          <Manage></Manage>
        </Route>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
  </Router>
  </BuyContext.Provider>
  </UserContext.Provider>
  );
}

export default App;
