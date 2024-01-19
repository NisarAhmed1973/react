import React from "react";
//import { Greet } from "./Greet";

const Hello = () =>{

    // return(
    //     <div className="dummyClass">
    //         <Greet />
    //     </div>
    // )

    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Hello World***')
    );
}

export default Hello;