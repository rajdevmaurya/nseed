import React, { Fragment } from "react";
import BulletTerm from "./BulletTerm";
import LoanSummary from "./LoanSummary";
import Pricing from "./Pricing";
import Form from "./Form";
import TermFinancing from "./TermFinancing";
import style from "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, FormProvider } from 'react-hook-form'

const ResultsForm = () => {
    const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="container py-4">
        <Form methods={methods} />
      </div>
    </FormProvider>
  )
};

export default ResultsForm;


