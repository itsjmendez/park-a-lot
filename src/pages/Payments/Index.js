import React from "react";
import * as S from "./PaymentsStyles";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import { useState } from "react";
import img1 from "./Images/visa.png";
import img2 from "./Images/mastercard.png";
import img3 from "./Images/discover.png";
import img4 from "./Images/americanexpress.png";

const paymentTemplate = {
  card_number: "",
  expiration: "",
  cvv: "",
  country: "",
  zip: "",
};

export const Payments = ({ formInputs }) => {
  const [payment, setPayment] = useState(paymentTemplate);

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handlePayments = (e) => {
    e.preventDefault();
    if (
      payment.card_number &&
      payment.expiration &&
      payment.cvv &&
      payment.country &&
      payment.zip
    ) {
      setValid(true);
    }
    setSubmit(true);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPayment({ ...payment, [e.target.name]: value });
  };

  return (
    <S.Box>
      <S.ContainerOne>
        <S.Header>Payment Details</S.Header>
        <S.FormContainer>
          <S.Form>
            {submit &&
            (!payment.card_number ||
              !payment.expiration ||
              !payment.cvv ||
              !payment.country ||
              !payment.zip) ? (
              <S.Span>Please complete the required fields.</S.Span>
            ) : null}
            {formInputs.map((input, index) => (
              <FormItem
                key={index}
                name={input.name}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                onChangeInput={handleInputChange}
              />
            ))}
            <Button onClick={handlePayments}>Submit</Button>
            {submit && valid ? <S.Message>Payment Successful!</S.Message> : null}
          </S.Form>
        </S.FormContainer>
      </S.ContainerOne>
      <S.ContainerTwo>
        <S.Paragraph>Accepted</S.Paragraph>
        <S.Images src={img1} alt=""></S.Images>
        <S.Images src={img2} alt=""></S.Images>
        <S.Images src={img3} alt=""></S.Images>
        <S.Images src={img4} alt=""></S.Images>
      </S.ContainerTwo>
    </S.Box>
  );
};

Payments.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};

Payments.defaultProps = {
  formInputs: [
    {
      name: "card_number",
      label: "Card Number",
      type: "text",
      placeholder: "Card Number",
    },
    {
      name: "expiration",
      label: "Expiration",
      type: "text",
      placeholder: "Expiration (MM/YY)",
    },
    {
      name: "cvv",
      label: "CVV",
      type: "text",
      placeholder: "CVV",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      placeholder: "Country",
    },
    {
      name: "zip",
      label: "Zip",
      type: "text",
      placeholder: "Zip",
    },
  ],
};

export default Payments;

const FormItem = ({ name, label, type, placeholder, onChangeInput }) => (
  <S.FormItemContainer>
    <S.Input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    />
  </S.FormItemContainer>
);

FormItem.protoTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
};

FormItem.defaultProps = {
  name: "",
  label: "",
  type: "text",
  placeholder: "",
  onChangeInput: () => {},
};
