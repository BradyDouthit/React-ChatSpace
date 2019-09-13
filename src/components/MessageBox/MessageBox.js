import React from 'react';

import './MessageBox.css'

const MessageBox = props => (
    <div className='message-box-div'>
        <input type='text' placeholder='Enter a message in x channel'></input>
    </div>
)

export default MessageBox;