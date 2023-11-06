import formJson from '../data/custom-form.json'
import { SelectInput, TextInput } from '../components'
import { Formik, Form } from 'formik'
import * as y from 'yup'

const TEXT_TYPES = ['input', 'email', 'password']

const initialValues: Record<string, any> = {}
const requiredFields: Record<string, any> = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations?.length) continue

  let schema = y.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(`${input.label} is required`)
    }

    if (rule.type === 'min') {
      const min = (rule as any).value || 1

      schema = schema.min(
        min,
        `${input.label} must have at least ${min} characters`,
      )
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = y.object({ ...requiredFields })

export const DynamicFormPage = () => {
  function onSubmit(values: typeof initialValues) {
    console.log('file: dynamic-form-page.tsx:9 | onSubmit | values:', values)
  }

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            {formJson.map(field => {
              if (TEXT_TYPES.includes(field.type)) {
                return (
                  <TextInput
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                )
              } else if (field.type === 'select') {
                return (
                  <SelectInput
                    label={field.label}
                    name={field.name}
                    key={field.name}
                  >
                    <option value="">Choose your favorite Game</option>
                    {field.options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </SelectInput>
                )
              }

              return (
                <span key={field.name}>
                  {field.type} | {field.name}
                </span>
              )
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
