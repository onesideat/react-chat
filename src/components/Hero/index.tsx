import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../../context';
import { Ajax, routeTo } from '../../utils/utils';
import { Container, Row, Col } from '../Elements/Grid';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import '../../styles/hero.scss';
import heroImage from '../../static/images/hero.png';
import { ReactComponent  as ArrowRight } from '../../static/svg/arrow-right.svg';

const Hero: React.FC<any> = ({setPageLoading}) => {
    const [usernameError, setUsernameError] = useState<null | string>(null);
    const history = useHistory();
    const context = useAppContext();

    let $username: HTMLInputElement;

    const joinChat = () => {
        let hasError = false;

        if (!$username)
            return;
        if ($username.value.length < 2) {
            hasError = true;
            setUsernameError(() => 'Please enter at least 2 characters');
        } else if ($username.value.match(/[^a-zA-Z0-9]+/)) {
            hasError = true;
            setUsernameError(() => 'Please enter only alphanumeric characters');
        } else if ($username.value.length > 10) {
            hasError = true;
            setUsernameError(() => 'Please don\'t enter more than 10 characters');
        }

        if (hasError) {
            $username.focus();
            $username.select();
            return;
        }

        context.username = $username.value;
        context.gender = 'male';

        setPageLoading(true);
        
        Ajax.post('/join', {
            username: context.username
        }).then(async (res) => {
            let data = await res.json();

            if (data === 'Joined') {
                let genderResponse = await fetch('https://api.genderize.io/?name=' + context.username);
    
                if (genderResponse.status === 200) {
                    let genderData = await genderResponse.json();
    
                    if (genderData.gender)
                        context.gender = genderData.gender;
                }
                
                context.connected = true;
                history.push(routeTo('chat'));
            } else {
                history.push(routeTo('404'));
            }
        }).catch(() => {
            history.push(routeTo('404'));
        });
    }

    const onInputKeyUp = (e: any) => {
        if (e.which === 13) {
            joinChat();
        }
    }

    return <div className="hero">
        <Container>
            <Row alignItems="center">
                <Col num="7">
                    <p>Connect, Share, Grow</p>
                    <h2>Chat using Sockets, built on React</h2>

                    <div className="form">
                        <Input type="text" placeholder="Enter a username" autoFocus autoComplete="off" error={usernameError} ref={(el) => $username = el} onKeyUp={(e:Event) => onInputKeyUp(e)}></Input>
                        <Button className="has-icon-right" onClick={joinChat}>Connect Now <ArrowRight></ArrowRight></Button>                        
                    </div>
                </Col>
                <Col num="5">
                    <img src={heroImage} alt="hero"></img>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Hero;