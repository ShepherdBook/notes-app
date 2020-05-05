import React from 'react';
import { connect } from 'react-redux';

function NoteList({ notes, currentUser }) {

    if (!currentUser) {
        return (
            <span>Sign in to see notes</span>
        )
    } else {
        return (
            <div>
                <h1>Note List</h1>
                <p>Hi { currentUser.email }!</p>
                <ul>
                    {notes.map(note => (
                        <li key={note.id}>
                            {note.value} ({note.createdAt})
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    currentUser: state.currentUser,
  })

export default connect(
    mapStateToProps,
    null,
)(NoteList)
