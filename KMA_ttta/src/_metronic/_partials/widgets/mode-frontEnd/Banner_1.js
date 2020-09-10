/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo } from "react";
import SVG from "react-inlinesvg";
import { Dropdown, Carousel } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { toAbsoluteUrl } from "../../../_helpers";
import { DropdownCustomToggler, DropdownMenu4 } from "../../dropdowns";
import { useHtmlClassService } from "../../../layout";
export function Banner_1() {
  const uiService = useHtmlClassService();

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/media/bg/bg-9.jpg"
            alt="First slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/media/bg/bg-9.jpg"
            alt="Third slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/media/bg/bg-9.jpg"
            alt="Third slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  );
}


