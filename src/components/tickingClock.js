import React, { Component } from 'react';


class TickingClock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: Date(),
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.date}</h1>
            </div>
        )
    }
}

export default TickingClock;