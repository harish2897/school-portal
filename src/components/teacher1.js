import React from 'react';
import Header from './header'
import Footer from './footer'
import Teacher from './teacher'
import "../index.css";

const Teacher1 =()=>{
    return(
        <React.Fragment>
        <Header/>
        
        <table class="table container container1 ">
       <thead>
           <tr>
            <th className="left-txt" scope="col">Name</th>
               <th className="left-txt" scope="col">Address</th>
           </tr>
       </thead>
        </table>
        <Teacher/>
        <Footer/>  
        </React.Fragment> )
}

export default Teacher1;