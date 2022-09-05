import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "./index.css";
import App from "./App";
import i18n from "./i18n";
// import 'flag-icons/css/flag-icon.min.css'
ReactDOM.render(
  <Suspense fallback={null}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
