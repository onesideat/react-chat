import React from 'react';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import { ReactComponent as SendIcon } from '../../static/svg/send-plane.svg';

const Form: React.FC<{text: string, onTextEvent: (e: any) => void}> = ({text, onTextEvent}) => {
    return (<div className="chat-form">
        <Input placeholder="Enter message here..." autoFocus value={text} onChange={onTextEvent} onKeyDown={onTextEvent}></Input>
        <Button onClick={(e: any) => {e.keyCode = 13; onTextEvent(e);}}><SendIcon /></Button>
    </div>);
};

export default Form;