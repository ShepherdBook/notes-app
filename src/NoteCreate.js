import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNote } from './redux/actions/notes';

function NoteCreate(props) {

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    const { createNote, currentUser } = props

    const onTitleChanged = (newTitle) => {
        setTitle(newTitle)
    }

    const onBodyChanged = (newBody) => {
        setBody(newBody)
    }

    const Create = (e) => {
        e.preventDefault()
        createNote(title, body, currentUser.uid)
        setTitle('')
        setBody('')
    }

    if (!currentUser) {
        return (
            <span>Sign in to create notes</span>
        )
    } else {
        return(
            <div>
                <h1>New Note</h1>
                <form onSubmit={Create}>
                    <input type='text' 
                           value={title}
                           required={true}
                           onChange={e => onTitleChanged(e.target.value)}/>
                    <input type='text' 
                           value={body}
                           required={true}
                           onChange={e => onBodyChanged(e.target.value)}/>
                    <input type='submit' value='Save' />
                </form>
                <div>
                    <h2>Preview</h2>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </div>
        )
    }    
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
  })

export default connect(
    mapStateToProps,
    dispatch => ({
        createNote: (title, body, userId) => dispatch(createNote(title, body, userId))
    }),
)(NoteCreate)