import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Container } from "../components/Layout";
import { DetailPage, DetailPageLoader } from "../pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <Container />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
        loader: DetailPageLoader,
      },
    ],
  },
]);

export default router;
