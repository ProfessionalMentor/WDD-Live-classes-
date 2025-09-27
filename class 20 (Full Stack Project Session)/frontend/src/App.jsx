import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Career from "./components/Career";
import Investor from "./components/Investor";
import Media from "./components/Media";
import OurCompany from "./components/OurCompany";
import OurScience from "./components/OurScience";
import Partnering from "./components/Partnering";
import YourHealth from "./components/YourHealth";
import Navbar from "./components/Navbar";
import OurStories from "./components/OurStories";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
         <Navbar/>
        <Home/>
      </>
    ),
  },

  {
    path: "/career",
    element: (
      <>
      <Navbar/>
        <Career />
      </>
    ),
  },

  {
    path: "/investor",
    element: (
      <>
      <Navbar/>
        <Investor />
      </>
    ),
  },

  {
    path: "/media",
    element: (
      <>
      <Navbar/>
        <Media />
      </>
    ),
  },

  {
    path: "/ourcompany",
    element: (
      <>
      <Navbar/>
        <OurCompany />
      </>
    ),
  },

  {
    path: "/ourscience",
    element: (
      <>
      <Navbar/>
        <OurScience />
      </>
    ),
  },

  {
    path: "/partnering",
    element: (
      <>
      <Navbar/>
        <Partnering />
      </>
    ),
  },

  {
    path: "/yourhealth",
    element: (
      <>
      <Navbar/>
        <YourHealth />
      </>
    ),
  },

  {
    path: "/ourstories",
    element: (
      <>
      <Navbar/>
        <OurStories />
      </>
    ),
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
