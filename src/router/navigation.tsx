import { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import { routes } from './routes';
import viteLogo from '/vite.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <section>
              <img src={reactLogo} alt="Vite Logo" height={80} />
              <span>+</span>
              <img src={viteLogo} alt="Vite Logo" height={80} />
            </section>

            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
