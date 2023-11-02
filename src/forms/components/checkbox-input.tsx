import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  [key: string]: any
}

export const CheckboxInput = (props: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {props.label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
