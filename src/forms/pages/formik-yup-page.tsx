import { useFormik } from 'formik'
import * as y from 'yup'

export const FormikYupPage = () => {
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
  })

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    onSubmit(values) {
      console.log('file: formik-basic-page.tsx:8 | onSubmit | values:', values)
    },
    validationSchema,
  })

  return (
    <div>
      <h1>Formik Yup Validation</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input type="text" {...getFieldProps('firstname')} />
        {touched.firstname && errors.firstname && (
          <span>{errors.firstname}</span>
        )}

        <label htmlFor="lastname">Last Name</label>
        <input type="text" {...getFieldProps('lastname')} />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="text" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
