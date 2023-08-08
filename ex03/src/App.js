import { Component } from "react";
import LifeCycleExample from "./components/LifeCycleExample";
import UseMemoEx1 from "./components/UseMemoEx1";
import UseMemoEx2 from "./components/UseMemoEx2";
import Average from "./components/Average";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import BoxSize from "./components/BoxSize";
import AverageCallback from "./components/AverageCallback";

class App extends Component {
  state = { color: "red" };

  handleClick = () => {
    this.setState({
      color: this.state.color === "red" ? "blue" : "red",
    });
  };
  render() {
    return (
      // <div>
      //   <button onClick={this.handleClick} style={{ color: this.state.color }}>
      //     {this.state.color}
      //   </button>
      // </div>
      <div>
        <LifeCycleExample color={this.state.color} />
      </div>
      // <div>
      //   <UseMemoEx1></UseMemoEx1>
      // </div>
      // <div>
      //   <UseMemoEx2 />
      // </div>
      // <div>
      //   <Average />
      // </div>
      // <div>
      //   <UseCallbackEx1 />
      // </div>
      // <div>
      //   <BoxSize />
      // </div>
      // <div>
      //   <AverageCallback />
      // </div>
    );
  }
}

export default App;
