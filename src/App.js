
import './styles/App.css';

import {Switch, Route} from "react-router-dom";

import FirstDemo from "./pages/FirstDemo";
import Simple from "./pages/Simple";
import Slides from './pages/Slides';

function App() {
  return (
  
      <Switch>
        <Route exact path = "/simple">
         <Simple />
        </Route>
        <Route exact path = "/first-demo">
         <FirstDemo />
        </Route>
        <Route exact path = "/">
          <Slides />
        </Route>
      </Switch>
    
  );
}

export default App;