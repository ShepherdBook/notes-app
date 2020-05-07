import React, { useState } from 'react';
import { connect } from "react-redux"
import { signInWithEmailAndPassword } from "./redux/actions/user";

function SignIn(props) {
    const { signInWithEmailAndPassword, currentUser } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = (e) => {
        e.preventDefault()
        if (!currentUser) {
            signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        }
    }

    if (currentUser) {
        return (
            <span>Hi { currentUser.email }, you are already logged in.</span>
        )
    } else {
        return (
            <form onSubmit={SignIn}>
                <h1>Login</h1>
                <input type='email' 
                    autoComplete='none' 
                    autoCapitalize='false'
                    autoFocus={true}
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <input type='password' 
                    autoComplete='password' 
                    autoCapitalize='false'
                    security='true'
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
                <input type='submit' value='Sign In'/>
            </form>
        )
    }
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