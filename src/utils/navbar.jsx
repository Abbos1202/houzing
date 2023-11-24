import React from "react";
import useId from "../hooks/useId";

import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";
import { HouseItemPage } from "../pages/HouseItem";
import { FavouritePage } from "../pages/Favourite";
import { RegisterPage } from "../pages/Register";
import { MyProfilePage } from "../pages/MyProfile";
import { AddNewHousePage } from "../pages/AddNewHouse";

// const HomePage = React.lazy(() => import("../pages/Home"));
// const Properties = React.lazy(() => import("../pages/Properties"));

// export const navbar = [
//   {
//     id: useId,
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <HomePage />
//       </React.Suspense>
//     ),
//     title: "Home",
//     path: "/home",
//     private: false,
//     hidden: false,
//   },
//   {
//     id: useId,
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <Properties />
//       </React.Suspense>
//     ),
//     title: "Properties",
//     path: "/properties",
//     private: false,
//     hidden: false,
//   },
//   {
//     id: useId,
//     element: <h1>Generic Sign In</h1>,
//     title: "Sign In",
//     path: "/signin",
//     private: false,
//     hidden: true,
//   },
//   {
//     id: useId,
//     element: <h1>Generic Sign Up</h1>,
//     title: "Sign Up",
//     path: "/signup",
//     private: false,
//     hidden: true,
//   },
// ];

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <HouseItemPage />,
    title: "Single Item",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <RegisterPage />,
    title: "Register",
    path: "/register",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <FavouritePage />,
    title: "Favourite",
    path: "/favourite",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfilePage />,
    title: "My Profile",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHousePage />,
    title: "Add New House",
    path: "/myprofile/newhouse",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHousePage />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
