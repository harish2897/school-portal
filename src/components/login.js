import React,{useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import Teacher from "./teacher"
import "../index.css";
import {useHistory} from 'react-router-dom'
import Provider from "./provider"
import Context from "./context"
// import context from "./context";



const Login = () => {

    const [loginD,setLogin]=useState("");
    const [passD,setPass]=useState("");
    const history = useHistory();

    const hadleClick=(e)=>{
        // setLogin([e.target.name]=e.target.value);/
        let flag = true;
        e.map((data)=>{
          if(loginD===data.email && passD===data.password){
            flag=false;
            history.push("/teach");
          }
        })

        if(flag){alert("Enter the right details","Email:",loginD,"Pass:",passD)}
    }

  return (
    <Context.Consumer>
      {context =>(
     <React.Fragment> 
      <Header />
      <div className="back" > 
      <div className="container-fluid box">
      <form className="box-1">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setLogin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => {setPass(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick=  {()=>hadleClick(context.data)}>
          Submit
        </button>
      </form>
      </div>
      </div>
      <Footer />
    </React.Fragment> 
    )}
    </Context.Consumer>
  );
};

export default Login;
