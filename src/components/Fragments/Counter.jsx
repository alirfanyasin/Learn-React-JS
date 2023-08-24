import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center">
        <span className="mr-2">{this.state.count}</span>
        <button
          className="px-2 py-1 font-bold text-white bg-black"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
export default Counter;
