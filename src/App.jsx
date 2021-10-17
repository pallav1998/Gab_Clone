import "./App.css";
import LandingPage from "./Components/Landing_Page/LandingPageLeft";
import Navbar from "./Components/Navbar/Navbar";
import React, { createContext, useReducer } from "react";
import Signup from "./Components/Login_Signup/Signup";
import Login from "./Components/Login_Signup/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home_Page/Home";
import { Profile } from "./Components/DashBoard/Profile";
import Logout from "./Components/Login_Signup/Logout";
import { initialState, reducer } from "./Reducer/reducer";
import { Footer } from "./Components/Footer/Footer";
export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>

        <Footer />
      </userContext.Provider>
    </>
  );
}

export default App;
