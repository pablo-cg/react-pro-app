import { Form, Formik } from 'formik'
import * as y from 'yup'
import { TextInput } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  }

  const validationSchema = y.object({
    name: y
      .string()
      .required('Name is required')
      .min(2, 'Name must have at least 2 characters')
      .max(15, 'Name must have 15 characters or less'),
    email: y
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: y
      .string()
      .required('You must provide a password')
      .min(6, 'Password must be at least 6 characters long'),
    confirm_password: y
      .string()
      .required('Confirm your password')
      .oneOf([y.ref('password')], 'Passwords must match'),
  })

  function onSubmit(values: typeof initialValues) {
    console.log(
      'file: register-formik-page.tsx:17 | onSubmit | values:',
      values,
    )
  }

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleReset, values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>

            <TextInput
              name="name"
              label="Name"
              type="text"
              placeholder="John Doe"
            />
            <TextInput
              name="email"
              label="Email"
              type="email"
              placeholder="john@doe.com"
            />
            <TextInput name="password" label="Password" type="password" />
            <TextInput
              name="confirm_password"
              label="Confirm Password"
              type="password"
            />
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
