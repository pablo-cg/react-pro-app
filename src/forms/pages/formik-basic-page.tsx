import { FormikErrors, useFormik } from 'formik'
import { useForm } from '../hooks/use-form'

interface FormValues {
  firstname: string
  lastname: string
  email: string
}

export const FormikBasicPage = () => {
  const { isValidEmail } = useForm()

  function validate(values: FormValues) {
    const errors: FormikErrors<FormValues> = {}

    if (!values.firstname.trim()) {
      errors.firstname = 'Firstname is required'
    } else if (values.firstname.length > 15) {
      errors.firstname = 'Firstname must be at 15 or less characters'
    }

    if (!values.lastname.trim()) {
      errors.lastname = 'Lastname is required'
    } else if (values.lastname.length > 15) {
      errors.lastname = 'Lastname must be at 15 or less characters'
    }

    if (!values.email.trim()) {
      errors.email = 'You must specify an Email'
    } else if (!isValidEmail(values.email.trim())) {
      errors.email = 'You must specify a valid Email'
    }

    return errors
  }

  const {
    handleChange,
    values: formData,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit(values) {
      console.log('file: formik-basic-page.tsx:8 | onSubmit | values:', values)
    },
  })

  return (
    <div>
      <h1>Formik Basic</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          value={formData.firstname}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          name="firstname"
        />
        {touched.firstname && errors.firstname && (
          <span>{errors.firstname}</span>
        )}

        <label htmlFor="lastname">Last Name</label>
        <input
          value={formData.lastname}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          name="lastname"
        />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          value={formData.email}
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          name="email"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
