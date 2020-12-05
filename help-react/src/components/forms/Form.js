import React, { Fragment } from "react";
import BulletTerm from "./BulletTerm";
import LoanSummary from "./LoanSummary";
import Pricing from "./Pricing";
import TermFinancing from "./TermFinancing";
import style from "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm,handleSubmit } from "react-hook-form";
const Form = ({ methods }) => {
   
    const onSubmit = (data) => console.log(data);
  
    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
         
         
            <TermFinancing/>
                <Row>
                   
                    <Col>
                        <LoanSummary />
                    </Col>
                    <Col>
                        <BulletTerm />
                    </Col>
                    <Col>
                        <Pricing />
                    </Col>
                </Row>
                </form>
            
       
    )
};

export default Form;