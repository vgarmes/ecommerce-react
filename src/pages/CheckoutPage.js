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
import Confirmation from "../components/Checkout/Confirmation";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const steps = ["Shipping address", "Payment details", "Confirmation"];

const CheckoutPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { cart } = useCartContext();
  const [activeStep, setActiveStep] = useState(0);
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => {
    if (activeStep === 0) {
      return (
        <>
          <AdressForm onSuccessAction={nextStep} />
          <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
            <Button
              form="address-form"
              type="submit"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Box>
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <StripeCheckout onSuccessAction={nextStep} />
          <Box display="flex" justifyContent="space-between" mt={4} mb={2}>
            <Button variant="contained" color="secondary" onClick={backStep}>
              Previous
            </Button>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Confirmation />
          <Box display="flex" justifyContent="center">
            <Button component={Link} to="/" variant="contained" color="primary">
              Main menu
            </Button>
          </Box>
        </>
      );
    }
  };

  if (cart.length < 1 && activeStep === 0) {
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
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 6),
    },
    width: "100%",
    maxWidth: "900px",
    margin: "auto",
  },
  stepper: {
    padding: theme.spacing(1, 0, 5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 10, 5),
    },
  },
}));
export default CheckoutPage;
