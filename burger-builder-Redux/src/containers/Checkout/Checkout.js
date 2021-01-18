import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

import './Checkout.css'


class Checkout extends Component {


    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }


    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    onCancelled={this.checkoutCancelled}
                    onContinue={this.checkoutContinued} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout); 