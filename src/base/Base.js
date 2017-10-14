import React from 'react'

class BaseMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}this is base {this.props.name}
            </div>
        )
    }
}


export default BaseMessage


