import { FormEvent } from 'react'
import { useForm } from '../hooks/use-form'
import '../styles/styles.css'

export const RegisterPage = () => {
  const { onChange, formData, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const { confirm_password, email, name, password } = formData

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    resetForm()
  }

  return (
    <div>
      <h1>Register</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          name="name"
          type="text"
          placeholder="Name"
          className="has-error"
        />
        <span>Name is required</span>
        <input
          onChange={onChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={onChange}
          value={password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={onChange}
          value={confirm_password}
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Register
        </button>
      </form>
    </div>
  )
}
