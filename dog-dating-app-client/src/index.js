import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from "./components/App";
import { rootReducer } from './reducers/rootReducer'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root")
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
