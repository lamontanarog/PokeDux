import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import {  applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import {logger} from './middlewares/index.js'

// const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ 
//   && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reversed))

const ComposedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware( logger))

const store = createStore(pokemonsReducer, ComposedEnhacers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
