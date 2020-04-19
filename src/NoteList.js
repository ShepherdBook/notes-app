import React from 'react';
import { connect } from 'react-redux';

function NoteList(props) {

    const {notes} = props
    
    return (
        <div>
            <h1>Note List</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    notes: state.notes
  })

export default connect(
    mapStateToProps,
    null,
)(NoteList)
