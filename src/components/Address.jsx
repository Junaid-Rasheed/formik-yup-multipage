import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Address = ({ submit, setFormValues, prevValues }) => {
  return (
    <Formik
      initialValues={ prevValues }
      validationSchema={Yup.object({
        Area: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        City: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values) => {
        submit(1);
        setFormValues({ ...values });
      }}
    >
      <Form>
        <label htmlFor="Area">Area</label>
        <Field name="Area" type="text" />
        <ErrorMessage name="Area" />
        <br />
        <label htmlFor="City">City</label>
        <Field name="City" type="text" />
        <ErrorMessage name="City" />
        <br />
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};
