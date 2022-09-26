import React from 'react';
import './App.css';
import Maincomponent from './components/Maincomponent';
import {BrowserRouter} from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';

function App() {
  // console.log("App.js: ", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Maincomponent/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
