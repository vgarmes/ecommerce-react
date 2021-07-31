import React from "react";
import {
  Typography,
  Box,
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";

const Confirmation = () => {
  const { order_details } = useCartContext();

  return (
    <Box mb={2}>
      <Typography variant="h4" gutterBottom>
        Thank you for your purchase!
      </Typography>
      <Typography variant="h5">
        Your order number is{" "}
        {Math.floor(Math.random() * (150000 - 100000) + 100000)}
      </Typography>
      <Typography variant="h6">Order summary:</Typography>

      <TableContainer>
        <Table aria-label="cart">
          <Hidden xsDown>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
          </Hidden>
          <TableBody>
            {order_details.products.map((product) => {
              const { id, brand, model, image, color, size, amount, price } =
                product;
              return (
                <TableRow key={id}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <ImageContainer>
                        <img src={image} alt={model} />
                      </ImageContainer>
                      <Box ml={2}>
                        <Typography variant="subtitle2">{`${brand} ${model}`}</Typography>
                        <Hidden smUp>
                          <Typography
                            variant="body2"
                            style={{ textTransform: "uppercase" }}
                          >
                            {color}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ textTransform: "uppercase" }}
                          >
                            Size: {size}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ textTransform: "uppercase" }}
                          >
                            Amount: {amount}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "bold" }}
                          >
                            {formatPrice(price * amount)}
                          </Typography>
                        </Hidden>
                      </Box>
                    </Box>
                  </TableCell>
                  <Hidden xsDown>
                    <TableCell>{amount}</TableCell>
                    <TableCell>{size}</TableCell>
                    <TableCell>{color}</TableCell>
                    <TableCell>{formatPrice(price * amount)}</TableCell>
                  </Hidden>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const ImageContainer = withTheme(styled.div`
  img {
    width: 100px;
    height: 100px;
    display: block;
    object-fit: cover;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.values.sm}px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`);

export default Confirmation;
