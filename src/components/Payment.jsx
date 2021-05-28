import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Payment = ({ submit, setFormValues, prevValues }) => {
  return (
    <Formik
      initialValues={prevValues}
      validationSchema={Yup.object({
        CardName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        CardNumber: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        submit(2);
        setFormValues({ ...values, ...prevValues });
      }}
    >
      <Form>
        <label htmlFor="CardName">CardName</label>
        <Field name="CardName" type="text" />
        <ErrorMessage name="CardName" />
        <br />
        <label htmlFor="CardNumber">CardNumber</label>
        <Field name="CardNumber" type="number" />
        <ErrorMessage name="CardNumber" />
        <br />
        <button onClick={() => submit(0)}> Back</button>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};
