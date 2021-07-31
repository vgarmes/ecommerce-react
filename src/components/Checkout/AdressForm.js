import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { useCartContext } from "../../context/cart_context";

/*const shippingCategories = [
  { name: "express", price: 300 },
  { name: "standard", price: 0 },
];*/

const AdressForm = ({ onSuccessAction }) => {
  const methods = useForm();
  const { updateOrderDetails } = useCartContext();

  //const [shippingOption, setShippingOption] = useState({});

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          id="address-form"
          onSubmit={methods.handleSubmit((data) => {
            updateOrderDetails(data);
            onSuccessAction();
          })}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Postal code" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AdressForm;
