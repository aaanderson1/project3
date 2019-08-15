
import "./IndexCard.css";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Card, CardTitle, Row, Col, } from "react-materialize";



function cardRender() {
	return (

    <Row >
      <Col m={4} s={4}>
    </Col>
    <Col m={4} s={4}>
    <Card className="cardBackground" horizontal header={<CardTitle />} actions={[<a />]}><h2>ABOUT THIS APP</h2>
    <Row> <img class="cardBackground" src="https://cdn.pixabay.com/photo/2016/02/19/10/55/light-bulb-1209491_960_720.jpg" width="400" height="200"></img></Row>
Here is the standard card with a horizontal image.
</Card>
    </Col>
    <Col m={4} s={4}>
    </Col>

    </Row>

	)
  }

export default cardRender;