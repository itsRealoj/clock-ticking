import React, { Component } from 'react';


class TickingClock extends Component {
    render() {
        return(
            <div>
                <h1>{Date()}</h1>
            </div>
        )
    }
}

export default TickingClock;