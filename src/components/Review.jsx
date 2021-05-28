import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Review = ({ value,submit }) => {
  return (
    <div>
      <p>Area : {value.Area}</p>
      <p>City:{value.City}</p>
      <p>CardName : {value.cardName}</p>
      <p>CardNumber: {value.cardNumber}</p>
      <p>Email: {value.email}</p>
      <button onClick={()=>submit(1)}> Back</button>
    </div>
  );
};
