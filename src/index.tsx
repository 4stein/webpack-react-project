import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
  <Router>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
