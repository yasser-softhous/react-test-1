import React, { Component } from 'react'

export default class Test extends Component {

        state={
            name:'aly ahmed',
            balance:30
           }

    increaseBalance=()=>this.setState({balance:this.state.balance + 1})
    decreasBalance=()=>this.setState({balance:this.state.balance - 1})
    resetBalance=()=>this.setState({balance:0})
  render() {
    return (
      <>
        <h3>Name : {this.state.name} </h3>
        <h2>Balance : {this.state.balance} {this.props.currency}</h2>
         <br/>
      <button className='btn btn-danger m-1' type="button" onClick={this.increaseBalance}>Increase balance</button>
      <button className='btn btn-danger m-1' type="button" onClick={this.decreasBalance}>Decrise balance</button>
      <button className='btn btn-danger m-1' type="button" onClick={this.resetBalance}>Reset balance</button>
      </>
    )
  }
}


