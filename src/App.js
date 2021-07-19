import Topbar from './Components/Topbar'
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Details from './Components/Details'
import {BrowserRouter,Switch,Route,} from 'react-router-dom';
function App() {
  return (
      <>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/blogs/:id" component={Details} />
        </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
