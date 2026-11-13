import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Form from './form';
import Busca from './busca';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Form,
  },
  {
    path: "/busca",
    Component: Busca,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);