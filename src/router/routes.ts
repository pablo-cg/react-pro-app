import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyPage1 = lazy(() => import('../01-lazyload/pages/lazy-page-1'));
const LazyPage2 = lazy(() => import('../01-lazyload/pages/lazy-page-2'));
const LazyPage3 = lazy(() => import('../01-lazyload/pages/lazy-page-3'));

export const routes: Route[] = [
  { to: '/lazy1', path: 'lazy1', Component: LazyPage1, name: 'Lazy 1' },
  { to: '/lazy2', path: 'lazy2', Component: LazyPage2, name: 'Lazy 2' },
  { to: '/lazy3', path: 'lazy3', Component: LazyPage3, name: 'Lazy 3' },
];
