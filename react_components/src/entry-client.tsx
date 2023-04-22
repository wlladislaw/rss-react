import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
// import './styles/index.scss';
// import { Provider } from 'react-redux';
// import { setupStore } from './redux/store';
// const store = setupStore();

// ReactDOM.hydrateRoot(
//   document.getElementById('root') as HTMLElement,
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
