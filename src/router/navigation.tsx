import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import {
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterPage,
} from '../forms/pages'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <section>
            <img src={reactLogo} alt="Vite Logo" height={80} />
            <span>+</span>
            <img src={viteLogo} alt="Vite Logo" height={80} />
          </section>

          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup Validation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstract Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponentsPage />} />
          <Route path="formik-abstract" element={<FormikAbstractPage />} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
