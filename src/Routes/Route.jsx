import { createBrowserRouter } from 'react-router'
import Home from '../Page/Home'
import MainLayout from '../Layout/MainLayout'
import ErrorPage from '../Page/Errorpage'
import AllPage from '../Page/AllPage'
import ProductDetails from '../Page/ProductDetails'
import NotFoundProduct from '../Page/NotFoundProduct'
import Installation from '../Page/Installation'


// named export
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      { index: true, Component: Home, },
      { path: '/allProducts', Component: AllPage, },
      { path: '/product/:id', Component: ProductDetails,},
      { path: '/invalid-product', Component: NotFoundProduct,},
      { path: '/installation', Component: Installation,},

    ],
  },
    {path: '*',element: <ErrorPage />},
])

export default router