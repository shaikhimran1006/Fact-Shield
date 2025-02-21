import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import React from "react";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Videos from "./components/Videos/Videos";
import i18n from "./components/i18next/i18n"; // Import i18n
import { I18nextProvider } from "react-i18next"; // Import Provider
import Transcript from "./components/Transcript/Transcript";
import Socialmedia from "./components/Socialmedia/Socialmedia"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="news" element={<News />} />
      <Route path="photos" element={<Photos />} />
      <Route path="videos" element={<Videos />} />
      <Route path="transcript" element={<Transcript/>}/>
      <Route path="socialmedia" element={<Socialmedia/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);
