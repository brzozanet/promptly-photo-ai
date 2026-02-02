import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [{ element: <HomePage />, index: true }],
  },
]);

//TODO:
// errorElement: <NotFound />;

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
