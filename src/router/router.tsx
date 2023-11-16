import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import MainPage from "../pages/MainPage"
import DocumentPage from "../pages/DocumentPage"
import BasketPage from "../pages/BasketPage"
export const RouterWeb = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:name",
        element: <DocumentPage />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
    ],
  },
])