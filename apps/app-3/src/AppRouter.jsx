import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

const appRoutes = [
  {
    element: <App />,
    path: "/",
  },
];

const router = createBrowserRouter(appRoutes, {
  basename: "/app-3",
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}
