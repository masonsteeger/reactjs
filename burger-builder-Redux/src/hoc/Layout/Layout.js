import React, {Component} from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        sideDrawerShow:false
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
                <Toolbar 
                    open={this.sideDrawerOpen}
                    isAuth={this.props.isAuthenticated} />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.sideDrawerShow} 
                    closed={this.sideDrawerClose} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);