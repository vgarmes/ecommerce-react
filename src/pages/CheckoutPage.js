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
import { PageBreadcrumbs, CartEmpty } from "../components";
import StripeCheckout from "../components/StripeCheckout";
import { makeStyles } from "@material-ui/core/styles";
import AdressForm from "../components/Checkout/AdressForm";
import PaymentForm from "../components/Checkout/PaymentForm";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const steps = ["Shipping address", "Payment details"];

const CheckoutPage = () => {
  const classes = useStyles();
  const { cart } = useCartContext();
  const [activeStep, setActiveStep] = useState(1);
  const [shippingData, setShippingData] = useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => {
    if (activeStep === 0) {
      return <AdressForm submitShippingData={submitShippingData} />;
    } else if (activeStep === 1) {
      return <StripeCheckout />;
    } else {
      return <Confirmation />;
    }
  };

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  const submitShippingData = (data) => {
    console.log(data);
    setShippingData(data);
    nextStep();
  };

  if (cart.length < 1) {
    return <CartEmpty title="Checkout" />;
  }

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
        <Form />
      </Paper>
    </Container>
  );
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
