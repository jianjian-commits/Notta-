import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import router from "./router";

const App = () => {
  
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback="">
          { renderRoutes(router)}
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
