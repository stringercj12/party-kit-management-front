import './App.css';
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Inbox } from './pages/Inbox';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/inbox',
        element: <Inbox />
      },
      {
        path: '/calendar',
        element: <Inbox />
      },
      {
        path: '/search',
        element: <Inbox />
      },
      {
        path: '/settings',
        element: <Inbox />
      },
    ]
  },

])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}