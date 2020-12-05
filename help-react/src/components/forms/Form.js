import React, { Fragment } from "react";
import BulletTerm from "./BulletTerm";
import LoanSummary from "./LoanSummary";
import Pricing from "./Pricing";
import TermFinancing from "./TermFinancing";
import style from "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm,handleSubmit } from "react-hook-form";
const Form = ({ methods }) => {
    // const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
  
    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
         
            <TermFinancing/>
            
                <Row>
                    <Col>
                        <BulletTerm />
                    </Col>
                    <Col>
                        <LoanSummary />
                    </Col>
                    <Col>
                        <Pricing />
                    </Col>
                </Row>
            
            <button className="btn btn-primary">Create New Account</button>
            </form>
       
    )
};

export default Form;