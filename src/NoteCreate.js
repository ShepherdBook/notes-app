import React, { useState } from 'react';

function NoteCreate() {

    const [ value, setValue ] = useState('')

    return(
        <div>
            <h1>New Note</h1>
            <div>
                <input type='text' 
                       value={value}
                       onChange={e => setValue(e.target.value)}/>
            </div>
            <div>
                <h3>Preview</h3>
                <span>{value}</span>
            </div>
        </div>
    )
}

export default NoteCreate