import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";
import { SectionPage } from "./pages/SectionPage.tsx";
import { Configuration } from "./pages/Configuration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/sectionpage",
        element: <SectionPage />,
    },
    {
        path: "/configuration",
        element: <Configuration />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
