import "./App.css";
import LandingPage from "./Components/Landing_Page/LandingPageLeft";
// import Navbar from "./Componentss/Navbar/Navbar";
import React, { createContext, useReducer } from "react";
import Signup from "./Components/Login_Signup/Signup";
import Login from "./Components/Login_Signup/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home_Page/Home";
import Navbar from "./Components/Home_Page/Navbar";
import { Profile } from "./Components/Home_Page/Profile";
import Logout from "./Components/Login_Signup/Logout";
import { initialState, reducer } from "./Reducer/reducer";
export const userContext = createContext();

const Routing = () => {
  return (
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
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <>
        <userContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routing />
          {/* <LandingPage /> */}
        </userContext.Provider>
      </>
    </BrowserRouter>
  );
}

export default App;
