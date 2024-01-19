import React, {Component} from "react";

class Message extends Component {
    render(){
    return (
        <h1>Class Component {this.props.name} aka {this.props.hero}
        </h1>
    )    
    }
}

export default Message;