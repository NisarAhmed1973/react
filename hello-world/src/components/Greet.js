import React from "react";

// function Greet() {
//     return <h1>Hello World!</h1>
// }
// export default Greet;

export const Greet = props => {
    console.log(props)
    return (        
        <div>
            <h1>
                Hello {props.name} 
                ... {props.role}
            </h1>
            {props.childern}
        </div>        
    );
}
