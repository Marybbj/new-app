import React, { useState } from 'react';
function FunctionComp() {
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value);
    };

    return (
        <div className='func-comp'>
            <input type="text" placeholder='type...' onChange={handleChange} value={text} />
            <p>Text: {text}</p>
        </div>
    );
}

export default FunctionComp;
