import React from 'react';
import { Container, Row, Col } from '../Elements/Grid';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../styles/header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Container fluid>
                <Row alignItems="center">
                    <Col>
                        <Logo />
                    </Col>
                    <Col auto>
                        <Navbar />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;