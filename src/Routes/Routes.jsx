import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import GetAQuote from "../Pages/GetAQuote/GetAQuote";
import Testimonials from "../Pages/Testimonials/Testimonial";
import Careers from "../Pages/Careers/Careers";
import ContactUs from "../Pages/ContactUs/ContactUs";

import OfficeCleaning from "../Pages/Services/OfficeCleaning";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/services',
            element:<Services></Services>
        },
        {
            path: '/office-cleaning',
            element:<OfficeCleaning></OfficeCleaning>
        },
        {
            path: '/getaquote',
            element:<GetAQuote></GetAQuote>
        },
        {
            path: '/testimonials',
            element:<Testimonials></Testimonials>
        },
        {
            path: '/Careers',
            element:<Careers></Careers>
        },
       
        {
          path: '/aboutus',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contactus',
          element: <ContactUs></ContactUs>
        },
      ]
    },



  ]);

