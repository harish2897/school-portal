import React,{useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import Teacher from "./teacher"
import "../index.css";
import {useHistory} from 'react-router-dom'



const Login = () => {

    const [loginD,setLogin]=useState("");
    const [passD,setPass]=useState("");
    const history = useHistory();

    const hadleClick=()=>{
        // setLogin([e.target.name]=e.target.value);/
        if(loginD==="harish.alhate@gmail.com" && passD==="Harish123"){
            history.push("/teach");
        }
        else{
            alert("Enter the right details","Email:",loginD,"Pass:",passD);
        }
        
    }

  return (
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
            onChange={e => setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={hadleClick}>
          Submit
        </button>
      </form>
      </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
