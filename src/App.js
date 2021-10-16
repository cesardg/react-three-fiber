
import './App.css';
import FirstDemo from "./pages/FirstDemo";
import {Switch, Route} from "react-router-dom";
import Slides from './pages/Slides';

function App() {
  return (
  
      <Switch>
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