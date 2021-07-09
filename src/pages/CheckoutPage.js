import React, { useState } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { PageBreadcrumbs } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import AdressForm from "../components/Checkout/AdressForm";
import PaymentForm from "../components/Checkout/PaymentForm";

const steps = ["Shipping address", "Payment details"];

const CheckoutPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container component="main">
      <PageBreadcrumbs title="Checkout" />
      <Paper className={classes.paper}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          <Form activeStep={activeStep} />
        )}
      </Paper>
    </Container>
  );
};

const Form = ({ activeStep }) => {
  if (activeStep === 0) {
    return <AdressForm />;
  } else {
    return <PaymentForm />;
  }
};

const Confirmation = () => {
  return <div>Confirmation</div>;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: "900px",
    margin: "auto",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 10, 5),
    },
  },
}));
export default CheckoutPage;
