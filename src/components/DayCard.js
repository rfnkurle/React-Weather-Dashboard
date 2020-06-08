import React from "react";
import {Col, Card, CardHeader, CardBody} from 'reactstrap'


const DayCard = props => {
    console.log(props)
    return(
        <Col>
        <Card>
        <CardHeader>{props.day}</CardHeader>
        <CardBody>
           <h3>{props.temp}°</h3> 
           <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description}/>
        <p><strong>High:</strong> {props.high}°</p>
        <p><strong>Low:</strong> {props.low}°</p>
        <p><strong>Precip:</strong> {props.precip}%</p>
        </CardBody>
        </Card>
        </Col>
    )
}


export default DayCard;