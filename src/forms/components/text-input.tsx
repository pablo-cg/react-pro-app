import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [key: string]: any
}

export const TextInput = (props: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
