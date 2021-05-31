import React from 'react'
import Context from "./context"
import "../index.css";

export default function Teacher() {
    return (
        <Context.Consumer>
      {context =>(
          
        context.data1.map((details)=>{
            return(
                <table class="table container left-txt">
                
                    <tbody>
                    <tr >
                      <td className="left-txt">{details.name}</td>
                      <td className="left-txt">{details.address}</td>
                      {/* <td>Otto</td> */}
                      {/* <td>@mdo</td> */}
                    </tr>
                    </tbody>
                    </table>
            //     <ul key={details.name} class="list-group list-group-flush">    
            // {/* <div key={details.name}> */}
            // <li class="list-group-item">{details.name}</li>
            // <li class="list-group-item">{details.address}</li>
            // {/* <h1>Name:{details.name}</h1> */}
            // {/* <h1>Address:{details.address}</h1> */}
            // {/* <h1>Harish</h1> */}
            // {/* </div> */}
            // </ul>
        
            
            )
        } )
        
//         <ul class="list-group list-group-flush">
//   <li class="list-group-item">First item</li>
//   <li class="list-group-item">Second item</li>
//   <li class="list-group-item">Third item</li>
//   <li class="list-group-item">Fourth item</li>
// </ul>
        // <h1>Harish{console.log(context.data1)}</h1>
        )}
        </Context.Consumer>
    )
}
