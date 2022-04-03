import ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

import 'assets/index.css';
import App from 'components/App';

ReactDOMClient
  .createRoot(document.getElementById('root') as Element)
  .render(<App />);

serviceWorker.register();
