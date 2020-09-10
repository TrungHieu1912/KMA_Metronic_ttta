/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHtmlClassService } from "../../../layout";
import { ListGroup } from "react-bootstrap";
export function Banner_2() {
    const uiService = useHtmlClassService();

    return (
        <>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    <h2>Liên Kết Nhanh</h2>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Lịch khai giảng các lớp Khóa 12
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Lịch khai giảng các lớp Khóa 13
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Lịch khai giảng các lớp Khóa 14
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Lịch khai giảng các lớp Khóa 15
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


