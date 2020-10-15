import React from 'react';

class UsingClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Omid',
            lastName: 'Parsa',
            number : 0
        }
    }

    render() {

        return (
            <div className="">
                <h4>{this.state.name}</h4>
                <h4>{this.state.lastName}</h4>
                <button onClick = { () => this.setState({lastName: 'Smith'}) }>click me</button>

                <h1>{this.state.number}</h1> 
                <button onClick={() => this.setState((prevState, prevProps) => ({number: prevState.number+1}) )}>add number</button>
            </div>
        )
    }
}
export default UsingClasses;