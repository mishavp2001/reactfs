import React from "react"
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'


const Payments = (props) => {

    return (
        <StripeCheckout
            name="Argumes membership"
            description="Product: AI analyses unlimited"
            amount={500}
            token={token => props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">
                Buy Membership
            </button>
        </StripeCheckout>

    )
}


export default connect(null, actions)(Payments);