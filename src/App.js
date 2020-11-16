import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './App.css.js';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer'

import Home from './pages/Home.jsx'
import Articles from './pages/Blog.jsx'
import SignIn from './pages/SignIn.jsx'
import Add from './pages/Add.jsx'

import { theme } from './Theme/theme.js'
import { ThemeProvider } from 'styled-components'

import { StoreProvider, StoreContext} from './store/StoreProvider.jsx'

const App = () => {
  return (
    <StoreProvider>
    <Router>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle/>
              <Navigation></Navigation>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/blogs">
                  <Articles />
                </Route>
                <Route path="/singIn">
                  <SignIn />
                </Route>
                 {<StoreContext.Consumer>
                    { ({isLoggedIn}) => isLoggedIn ? (
                      <Route path="/add">
                        <Add />
                      </Route>
                    ): null }
                  </StoreContext.Consumer>}
              </Switch>
              <Footer></Footer>
            </>
          </ThemeProvider>
      </Router>
    </StoreProvider>
     
  );
}

// {<StoreContext.Consumer>
//   { ({isLoggedIn}) => isLoggedIn ? (
//     <Route path="/add">
//       <Add />
//     </Route>
//   ): null }
// </StoreContext.Consumer>}

export default App;
