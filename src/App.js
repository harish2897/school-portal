import React from 'react';
import './App.css';
import Login from "./components/login"
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Teacher from './components/teacher';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" ><Login/></Route>
        <Route exact path="/teach"><Teacher/></Route>
        <Redirect from="/" to="/teach" />
        </Switch>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
