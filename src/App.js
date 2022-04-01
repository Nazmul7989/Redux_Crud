import React, {Fragment} from 'react';
import AppRoutes from "./router/AppRoutes";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <Fragment>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      </Fragment>
  );
};

export default App;
