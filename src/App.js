
import './styles/App.css';

import {Switch, Route} from "react-router-dom";

import Mobile from "./pages/Mobile";
import Simple from "./pages/Simple";
import Slides from './pages/Slides';

function App() {
  return (
  
      <Switch>
        <Route exact path = "/simple">
         <Simple />
        </Route>
        <Route exact path = "/mobile">
         <Mobile />
        </Route>
        <Route exact path = "/">
          <Slides />
        </Route>
      </Switch>
    
  );
}

export default App;