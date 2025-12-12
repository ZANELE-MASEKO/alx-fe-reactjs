import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const values= Yup.object({
    username:Yup.string().requird('username required'),
    email:Yup.string().email('inavalid email formt').required('email required'),
    password: Yup.string().min(6, 'six characters of more').required('password required')
})


export default function FormikForm() {

    return(
    <div className="formik-form-container">
      <h2>Create an Account (Formik Version)</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          resetForm();
        }}
      >
        {() => (
          <Form className="formik-form">
            {/* USERNAME */}
            <div className="form-group">
              <label>Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter username"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="error"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="error"
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="error"
              />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}