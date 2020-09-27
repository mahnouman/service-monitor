import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layouts/Header';
import Home from './views/Home';
// import AddConfigurations from './components/AddConfigurations';
import About from './views/About';
import UrlDetails from './views/UrlDetails';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
      
        <div className="p-3 mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={UrlDetails} />
          </Switch>
        </div>

          <Footer />

      </Router>
    </div>
  );
}

export default App;
