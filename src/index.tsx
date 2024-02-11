import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { StateProvider } from './store/State';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <StateProvider>
      <App />
    </StateProvider>,
  );