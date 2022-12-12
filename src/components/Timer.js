import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
      step: props.step,
      autostart: props.autostart,
    };
  }

  componentDidMount() {
    if (!this.state.autostart) {
      clearInterval(this.timerId);
    } else {
      this.timerInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getReturnValues(count) {
    const seconds = Math.floor((count % (1000 * 60)) / 1000);
    const minutes = Math.floor((seconds % (1000 * 60 * 60)) / (1000 * 60));
    return `${minutes}:${seconds}`;
  }

  onTick() {
    this.setState((state) => ({
      time: state.time - state.step,
    }));
    if (this.state.time < 1) {
      this.setState({ time: this.state.time - 0 });
    }
  }

  timerInterval() {
    clearInterval(this.timerId);

    this.timerId = setInterval(() => this.onTick(), this.state.step);
  }

  render() {
    console.log(this.state.time);
    return (
      <div>
        <h2>Time left: {this.getReturnValues(this.state.time)}</h2>
        <button
          className="timer-btn"
          onClick={() => this.setState(this.timerInterval())}
        >
          START
        </button>
        <button
          className="timer-btn"
          onClick={() => clearInterval(this.timerId)}
        >
          PAUSE
        </button>
        <div
          className="timer-block"
          style={{
            width: `${this.state.time * (10 / this.state.step)}%`,
          }}
        ></div>
      </div>
    );
  }
}

export default Timer;
