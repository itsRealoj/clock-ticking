import React, { Component } from 'react';


class TickingClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000)
    }
    componentWillMount() {
        clearInterval(this.intervalID);
    }

    tick(){
        this.setState({
            date: new Date().toLocaleString()
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.date}</h1>
            </div>
        );
    }
}

export default TickingClock;