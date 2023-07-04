import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Axios from "./API/Axios";
import Fatch from "./API/Fatch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CRUDform from "./Form/CRUDform";
import FormBase from "./Form/FormBase";
import LoginPage from "./log-in/LoginPage";
import RegistrationPage from "./log-in/RegistrationPage";
import Auth from "./log-in/Auth";
import Homepage from "./log-in/Homepage";
import ShowData from "./CRUD/ShowData";
import INDC from "./Redux/INDC";
import StoreTool from "./ReduxToolkit/Store";
import INDCtool from "./ReduxToolkit/INDCtool";

function App() {
  return (
    <>
      {/* ===========================[API]====================================================== */}
      {/* <Axios /> */}
      {/* <Fatch /> */}
      {/* ===========================[Form]====================================================== */}
      {/* <FormBase /> */}
      {/* <CRUDform /> */}
      {/* ===========================[Login/registration]========================================= */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route
            path="/home"
            element={
              <Auth>
                <Homepage />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter> */}
      {/* ===========================[API CRUD]============================================== */}
      {/* <ShowData /> */}
      {/* ===========================[Redux]============================================== */}
      {/* <Provider store={store}>
        <INDC />
      </Provider> */}
      {/* ===========================[Redux Toolkit]============================================== */}

      <Provider store={StoreTool}>
        <INDCtool />
      </Provider>
    </>
  );
}

export default App;
