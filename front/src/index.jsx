import {StrictMode} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { TravelContextProvider } from "./Contexts/TravelContext";

ReactDOM.render(
  <StrictMode>
    <TravelContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </TravelContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
