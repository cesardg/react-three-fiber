
import './styles/App.css';

import {Switch, Route} from "react-router-dom";

import Mobile from "./pages/Mobile";
import Simple from "./pages/Simple";
import Slides from './pages/Slides';
import { ROUTES } from "./consts";

function App() {
  return (
  
      <Switch>
        <Route exact path={ROUTES.SIMPLE}>
         <Simple />
        </Route>
        <Route exact path={ROUTES.MOBILE}>
         <Mobile />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Slides />
        </Route>
      </Switch>
    
  );
}

export default App;