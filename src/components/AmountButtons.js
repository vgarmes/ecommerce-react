import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={decrease}>
        <RemoveIcon />
      </button>
      <Typography variant="h4">{amount}</Typography>
      <button type="button" className="amount-btn" onClick={increase}>
        <AddIcon />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default AmountButtons;
