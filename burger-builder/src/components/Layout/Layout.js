import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        sideDrawerShow:true
    }

    sideDrawerClose = () => {
        this.setState({sideDrawerShow:false})
    }

    sideDrawerOpen = () => {
        this.setState({sideDrawerShow:true})
    }


    render () {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpen} />
                <SideDrawer 
                    open={this.state.sideDrawerShow} 
                    closed={this.sideDrawerClose} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;