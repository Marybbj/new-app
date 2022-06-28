import React from 'react';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return <div className='class-comp'>
            <button className='minus' onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
            <p>{this.state.count}</p>
            <button className='plus' onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        </div>
    }
}

export default ClassComp;