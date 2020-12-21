import React, {Component} from 'react';

class CharComponent extends Component{
    render(){
        let style={
            display: 'inline-block', 
            padding: '16px', 
            textAlign: 'center', 
            margin: '16px', 
            border: '1px solid black'
        }
        return(
            <div style={style} onClick = {this.props.click}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default CharComponent;