import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.startTime = Date.now();

        this.minutes=0;
        this.hours=0;

        this.state = {
            time: 0
        }
    }
    
    tick = () => {
        const delta = Date.now() - this.startTime;
        const timerValue = this.formatTime(delta)
        this.setState({
            time: timerValue
        })
    }

    componentDidUpdate() {
        if(this.props.stopTimer) {
            clearInterval(this.interval)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    padZero = (input) => {
        return input.toString().padStart(2, 0);
    }

    formatTime = (timeInMilliseconds) => {
        let seconds = Math.floor(timeInMilliseconds/1000);

        if(seconds === 60) {
            this.minutes++;
            seconds = 0;
            this.startTime = Date.now();
        } 
        if(this.minutes === 59) {
            this.hours++;
            this.minutes = 0;
        }
        
        return `${this.padZero(this.hours)}:${this.padZero(this.minutes)}:${this.padZero(seconds)}`
    }

    render(){
        return <div>{this.state.time}</div>
    }
}

export default Timer