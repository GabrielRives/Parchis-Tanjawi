// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store";
import App from './App.jsx'
import './index.css'
import Gradient from "./Components/AnimatedBackground/Gradient.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    
  </Provider>
);
