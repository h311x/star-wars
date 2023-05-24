import { createBrowserRouter } from "react-router-dom"
import { IndexPage } from "./routes/Index"
import { PeoplePage } from "./routes/People"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/:id",
    element: <PeoplePage />,
  },
])
