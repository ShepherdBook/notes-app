import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNote } from './redux/actions/notes';

function NoteCreate(props) {

    const [ preview, setPreview ] = useState('')
    const { createNote, currentUser } = props

    const onPreviewChanged = (newPreview) => {
        setPreview(newPreview)
    }

    const Create = () => {
        createNote(preview, currentUser.uid)
        setPreview('')
    }

    if (!currentUser) {
        return (
            <span>Sign in to create notes</span>
        )
    } else {
        return(
            <div>
                <h1>New Note</h1>
                <div>
                    <input type='text' 
                           value={preview}
                           onChange={e => onPreviewChanged(e.target.value)}/>
                </div>
                <div>
                    <h3>Preview</h3>
                    <span>{preview}</span>
                </div>
                <input type='button' value='Save' onClick={Create} />
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
        createNote: (newValue, userId) => dispatch(createNote(newValue, userId))
    }),
)(NoteCreate)