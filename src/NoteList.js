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
                <p>Hi { currentUser.email }!</p>
                <h1>Note List</h1>
                <ul>
                    {notes.map(note => (
                        <li key={note.id}>
                            <h4>{note.title} ({note.createdAt})</h4>
                            <p>{note.body}</p>
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
