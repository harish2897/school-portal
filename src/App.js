import React from 'react';
import './App.css';
import Login from "./components/login"
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Teacher1 from './components/teacher1';
import Provider from "./components/provider"


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" ><Provider><Login/></Provider></Route>
        <Route exact path="/teach"><Provider><Teacher1/></Provider></Route>
        <Redirect from="/" to="/teach" />
        </Switch>
      </BrowserRouter>
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
