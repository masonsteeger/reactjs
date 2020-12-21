import React, {Component} from 'react';

class Validation extends Component{
    render(){
        if(this.props.check >= 5){
            return(<p style={{color: 'green'}}>Text long enough</p>)
        }else{
            return(<p style={{color: 'red'}}>Text not long enough</p>)
        }
    }
}

export default Validation