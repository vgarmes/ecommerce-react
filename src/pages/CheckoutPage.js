import React, { useState } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Box,
  Button,
} from "@material-ui/core";
import { PageBreadcrumbs, CartEmpty } from "../components";
import StripeCheckout from "../components/StripeCheckout";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AdressForm from "../components/Checkout/AdressForm";
import { useCartContext } from "../context/cart_context";

const steps = ["Shipping address", "Payment details", "Confirmation"];

const CheckoutPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { cart } = useCartContext();
  const [activeStep, setActiveStep] = useState(0);
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => {
    if (activeStep === 0) {
      return (
        <>
          <AdressForm />
          <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
            <Button
              form="address-form"
              type="submit"
              variant="contained"
              color="primary"
              onClick={nextStep}
            >
              Next
            </Button>
          </Box>
        </>
      );
    } else if (activeStep === 1) {
      return <StripeCheckout />;
    } else {
      return <Confirmation />;
    }
  };

  const Confirmation = () => {
    return <div>Confirmation</div>;
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
              <StepLabel>{smallScreen ? "" : step}</StepLabel>
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
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 10, 5),
    },
  },
}));
export default CheckoutPage;
