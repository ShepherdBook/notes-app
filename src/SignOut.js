import React from "react";
import { connect } from "react-redux";
import { signOut } from "./redux/actions/user";

const SignOut = (props) => {
    const { signOut } = props
    signOut()

    return (
        <span>You have been signed out</span>
    )
}

export default connect(
    null,
    dispatch => ({
        signOut: () => dispatch(signOut())
    }),
)(SignOut)