import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    Increment(){
        // this.setState(
        //     {
        //         count:this.state.count + 1
        //     }, ()=>{console.log(this.state.count)}
        // ) 

        this.setState(preState => (
        {
            count: preState.count+1
        }), ()=>{console.log(this.state.count)}
        )
        
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()        
    }
    render() {
        
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>{this.IncrementFive()}}>Increment</button>
        
      </div>
    )
  }
}

export default Counter