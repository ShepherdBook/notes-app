import React, { useState } from 'react';

function NoteCreate(props) {

    const [ preview, setPreview ] = useState('')
    const { dispatchCreateNote } = props

    const onPreviewChanged = (newPreview) => {
        setPreview(newPreview)
    }

    const Create = () => {
        dispatchCreateNote(preview)
        setPreview('')
    }

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

export default NoteCreate