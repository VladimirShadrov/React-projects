//import { Key, useState } from 'react';
import React from 'react';

// export default function Counter() {
//   const [score, setScore] = useState(0);

//   function increase() {
//     if (score >= 5) {
//       return;
//     }

//     setScore(score + 1);
//   }

//   function decrease() {
//     if (score <= 0) {
//       return;
//     }

//     setScore(score - 1);
//   }

//   return (
//     <div>
//       <h1>Hello, your count: {score} </h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// }

type CounterState = {
  count: number;
};

export default class Counter extends React.Component {
  state: CounterState;

  constructor(props: CounterState) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Hello, your count: {this.state.count} </h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
}
