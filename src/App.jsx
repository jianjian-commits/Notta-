import React from 'react';
import SingImage from './component/SingImage'
import Tab from './component/Tab'

import "antd/dist/antd.css"
import "./style/app.scss"

const App = () => {
  return (
    <div className="app">
      <SingImage></SingImage>
      <Tab></Tab>
    </div>
  );
}

export default App;
