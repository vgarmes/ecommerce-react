import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";

const shippingCategories = [
  { name: "express", price: 300 },
  { name: "standard", price: 0 },
];

const AdressForm = ({ submitShippingData }) => {
  const methods = useForm();

  const [shippingOption, setShippingOption] = useState({});

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            submitShippingData({ ...data })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Postal code" />
          </Grid>
          <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default AdressForm;
