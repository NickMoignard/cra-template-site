import  React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import  About  from "./pages/About"
import Landing from "./pages/Landing"
import  Home  from "./pages/Home"

import Header from "./components/Header"



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from "./components/Footer"
import Container from "react-bootstrap/esm/Container"

const App = () => {
  return (
    <Router>
      <Header/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        
        <Container className="main" fluid="lg">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/landing">
              <Landing />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
