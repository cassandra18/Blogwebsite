import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from "./pages/loginPage";
import About from "./pages/about";
import Contact from "./pages/contact";
import HomePage from "./pages/homePage";
import BlogPage from './pages/blogs.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/blogs',
        element: <BlogPage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
