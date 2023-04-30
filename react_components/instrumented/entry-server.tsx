import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App/App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

const store = setupStore();

export function render(url, context) {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return { html };
}
