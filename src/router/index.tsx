import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ManageLayout from "../Layout/ManageLayout";
import QuestionLayout from "../Layout/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/Edit/Index";
import Stat from "../pages/question/Stat/Index";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/manage",
        element: <ManageLayout></ManageLayout>,
        children: [
          {
            path: "list",
            element: <List></List>,
          },
          {
            path: "star",
            element: <Star></Star>,
          },
          {
            path: "trash",
            element: <Trash></Trash>,
          },
        ],
      },
      {
        path: "question",
        element: <QuestionLayout></QuestionLayout>,
        children: [
          {
            path: "edit/:id",
            element: <Edit></Edit>,
          },
          {
            path: "stat/:id",
            element: <Stat></Stat>,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default routerConfig;

export const LOGIN_PATH = "/login";
export const RESGISTER_PATH = "/register";
export const HOME_PATH = "/home";
export const MANAGE_INDEX_PATH = "/manage/list";
