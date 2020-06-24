import React from 'react';
import {Provider} from "react-redux";
import store from "./store";


import Paragraph from './components/Paragraph/Paragraph'

function App() {

  return (

    <Provider store={store}>
      <Paragraph/>
    </Provider>
  );
}

export default App;
