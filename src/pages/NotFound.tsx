import React from 'react';
import { Container, Row, Col } from '../components/Elements/Grid';
import Button from '../components/Elements/Button';
import '../styles/notfound.scss';

const NotFound: React.FC = () => (
    <div className="page page-notfound">
        <Container>
            <Row>
                <Col>
                    <h1>404</h1>
                    <p>Looks like you're lost</p>
                    <Button href="/">Back Home</Button>
                </Col>
            </Row>
        </Container>
    </div>
);

export default NotFound;