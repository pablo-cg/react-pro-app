import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  [key: string]: any
}

export const SelectInput = (props: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
