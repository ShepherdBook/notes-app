import React from 'react';
import { connect } from "react-redux"
import { signInWithEmailAndPassword } from "./redux/actions/user";

function SignIn(props) {
    const { signInWithEmailAndPassword } = props
    signInWithEmailAndPassword('zachjohnston26+notes@pm.me', 'fr33range')

    return (
        <div>
            <h1>Login</h1>
                <input type='text' />
                <input type='text' />
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

export default connect(
    mapStateToProps,
    dispatch => ({
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password))
    })
)(SignIn)