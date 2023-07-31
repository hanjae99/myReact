import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    // function Increase1(e) {
    //   e.target.setState({ number: number + 1 });
    //   console.log(number);
    // }
    const { number } = this.state;
    // return (
    //   <div>
    //     <h1>{number}</h1>
    //     <button onClick={Increase1}>+1</button>
    //     {/* <button onClick={Decrease1}>-1</button> */}
    //   </div>
    // );
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
