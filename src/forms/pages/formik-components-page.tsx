import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as y from 'yup'

export const FormikComponentsPage = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    terms: false,
    job_type: '',
  }

  const validationSchema = y.object({
    firstname: y
      .string()
      .max(15, 'Firstname must be 15 characters or less')
      .required('Firstname is required'),
    lastname: y
      .string()
      .max(15, 'Lastname must be 15 characters or less')
      .required('Lastname is required'),
    email: y
      .string()
      .email('You must specify a valid Email')
      .required('You must specify an Email'),
    terms: y.boolean().oneOf([true], 'You must accepts our terms'),
    job_type: y
      .string()
      .required('you must specify a Job type')
      .notOneOf(['it-junior'], 'This option is not available'),
  })

  function onSubmit(values: typeof initialValues) {
    console.log(
      'file: formik-components-page.tsx:38 | onSubmit | values:',
      values,
    )
  }

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <label htmlFor="firstname">First Name</label>
            <Field name="firstname" type="text" />
            <ErrorMessage component="span" name="firstname" />

            <label htmlFor="lastname">Last Name</label>
            <Field type="text" name="lastname" />
            <ErrorMessage component="span" name="lastname" />

            <label htmlFor="email">Email Address</label>
            <Field type="text" name="email" />
            <ErrorMessage component="span" name="email" />

            <label htmlFor="job_type">Job type</label>
            <Field as="select" name="job_type">
              <option value="">Pick a Job</option>
              <option value="dev">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage component="span" name="job_type" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and conditions
            </label>
            <ErrorMessage component="span" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
