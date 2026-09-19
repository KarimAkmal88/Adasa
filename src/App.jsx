import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import BlogDetails from "./pages/BlogDetails";
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { path: '', element: <Home /> },
        { path: 'blog', element: <Blog /> },
        { path: "blog/:slug", element: <BlogDetails /> },
        { path: 'about', element: <About /> },
        { path: 'privacy', element: <Privacy /> },
        { path: 'terms', element: <Terms /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

