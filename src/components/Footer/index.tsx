import React, { Component } from 'react';
import { Container, Row, Col } from '../Elements/Grid';
import '../../styles/footer.scss';

class Footer extends Component {
    render() {
        let d = new Date();

        return <div className="footer">
            <Container fluid>
                <Row>
                    <Col>&copy; {d.getFullYear()} Copyright - Oneside. All rights reserved.</Col>
                </Row>
            </Container>
        </div>
    }
}

export default Footer;