import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./mock";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from "./store";
import { Provider } from "react-redux";

// tailwind css
import "./theme/index.css";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ConfigProvider
    theme={{
      token: {
        algorithm: theme.darkAlgorithm,
      },
    }}
  >
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
