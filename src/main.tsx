import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";
import { SectionPage } from "./pages/SectionPage";
import { Configuration } from "./pages/Configuration";
import { Quiz } from "./pages/Quiz";
import { Lesson } from "./pages/Lesson";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col gap-6 w-full items-center h-dvh justify-center bg-backgroundMedium-adm">
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/startPage"
        >
          Start Page
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/signin"
        >
          Sign In
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/sectionPage"
        >
          Section Page
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/configuration"
        >
          Configuration
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/quiz"
        >
          Quiz
        </Link>
        <Link
          className="bg-button-adm text-white font-poppins font-black px-8 py-4 rounded-2xl shadow-md"
          to="/lesson"
        >
          Lesson
        </Link>
      </div>
    ),
  },
  {
    path: "/startPage",
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
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/lesson",
    element: <Lesson />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
