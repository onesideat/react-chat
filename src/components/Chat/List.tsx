import React from 'react';
import { Chat as ChatType } from '../../common/types';
import { leadingZero } from '../../utils/utils';
import { Row, Col } from '../Elements/Grid';
import { ReactComponent as MaleAvatar } from '../../static/svg/avatar-male.svg';
import { ReactComponent as FemaleAvatar } from '../../static/svg/avatar-female.svg';

const ChatContainer: React.FC<{chats: Array<ChatType>}> = ({chats}) => {
    return (<div className="chat-list">
        <ul>
            {chats.map((chat: ChatType) => {
                let d = new Date(chat.timestamp);
                
                return (
                    <li key={chat.timestamp} className={chat.error ? 'is-error' : ''}>
                        <Row>
                            <Col auto>
                                {chat.gender === 'female' ? <FemaleAvatar /> : <MaleAvatar />}
                            </Col>
                            <Col>
                                <div className="message">
                                    <div className="bubble">
                                        <h5>{chat.username}</h5>
                                        <p>{chat.message}</p>
                                    </div>
                                    <span>{leadingZero(d.getHours()) + ':' + leadingZero(d.getMinutes())}</span>
                                </div>
                            </Col>
                        </Row>
                    </li>
                )
            })}    
        </ul>    
    </div>);
};

export default ChatContainer;
