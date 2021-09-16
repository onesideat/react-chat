import React, { useState, useEffect } from 'react';
import { useHistory, } from 'react-router-dom'
import Pusher from 'pusher-js';
import env from '../constants/env';
import { Chat as ChatType } from '../common/types';
import { useAppContext } from '../context';
import { Ajax } from '../utils/utils';
import List from '../components/Chat/List';
import Form from '../components/Chat/Form';
import '../styles/chat.scss';

const Chat: React.FC = () => {
    const context = useAppContext();
    const history = useHistory();
    const [text, setText] = useState('');
    const [chats, setChats] = useState<Array<ChatType>>([]);

    useEffect(() => {
        if (!context.connected)
            return history.push('/');

        const pusher = new Pusher(env.PusherAppKey, {cluster: env.PusherCluster});

        const channel = pusher.subscribe(env.PusherChannel);
        channel.bind('message', (data: ChatType) => {
            setChats((chats) => {
                if (data.username === context.username && chats.filter((a) => a.timestamp === data.timestamp).length)
                    return chats;
                    
                return [...chats, data]
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onTextEvent = (e: any) => {
        if (e.keyCode === 13) {
            let payload: ChatType = {
                username: context.username,
                gender: context.gender,
                timestamp: Date.now(),
                message: text
            };

            setChats((chats) => [...chats, payload]);
            setText('');

            Ajax.post('/message', payload).catch(() => {
                setChats((chats) => chats.filter((a) => {
                    if (a.timestamp === payload.timestamp)
                        a.error = true;
                    
                        return a;
                }));
            });
        } else {
            setText(e.target.value);
        }
    };

    return (
        <div className="page page-chat">
            <div className="chat">
                <h2>Chat Now</h2>
                <List chats={chats} />
                <Form text={text} onTextEvent={onTextEvent} />
            </div>
        </div>
    )
}

export default Chat;