import React from "react";
import { Banner_1, Banner_2 } from "../widgets";
import { Row, Col, Container } from "react-bootstrap";
export function Demo2Dashboard() {
    return <>

        <Row>
            <Col xs={12} md={8}>
                <Banner_1 />
            </Col>
            <Col xs={6} md={4}>
                <Banner_2 />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                
            </Col>
            <Col xs={6} md={4}>
               
            </Col>
        </Row>


    </>;
}
