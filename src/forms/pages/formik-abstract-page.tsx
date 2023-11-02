import { Form, Formik } from 'formik'
import * as y from 'yup'
import { CheckboxInput, SelectInput, TextInput } from '../components'

export const FormikAbstractPage = () => {
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
      <h1>Formik Abstract Components</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <TextInput
              name="firstname"
              label="First Name"
              type="text"
              placeholder="John"
            />

            <TextInput
              name="lastname"
              label="Last Name"
              type="text"
              placeholder="Doe"
            />

            <TextInput
              name="email"
              label="Email"
              type="text"
              placeholder="john@doe.com"
            />

            <SelectInput as="select" name="job_type" label="Job type">
              <option value="">Pick a Job</option>
              <option value="dev">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </SelectInput>

            <CheckboxInput name="terms" label="Terms and conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
