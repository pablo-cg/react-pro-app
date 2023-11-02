import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialState?: T) => {
  const [formData, setFormData] = useState(initialState)

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event

    setFormData(data => {
      return {
        ...data!,
        [target.name]: target.value,
      }
    })
  }

  function resetForm() {
    setFormData({ ...initialState! })
  }

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  return {
    ...formData,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  }
}
