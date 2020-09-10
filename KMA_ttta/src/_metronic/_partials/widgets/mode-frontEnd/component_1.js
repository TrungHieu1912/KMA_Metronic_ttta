import React from "react";

import { ListGroup } from "react-bootstrap";
export function component_1() {

    return (
        <>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    <h2 >Liên Kết Nhanh</h2>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Lịch khai giảng các lớp
                </ListGroup.Item>
                <ListGroup.Item as="li" >
                    Giáo trình tự học tiếng anh 450+
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Giáo trình tự học tiếng anh 650+
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Giáo trình tự học tiếng anh 850+
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}
