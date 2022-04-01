import React, {Fragment} from 'react';
import { Container,Row,Col} from "react-bootstrap";

const Footer = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <div className="text-center py-3 bg-light">Copyrights &copy; 2022. All Rights Reserved</div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Footer;