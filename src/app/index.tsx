import { createRoot } from 'react-dom/client';

import { App } from './src/App';

import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/cinzel/700.css';

// eslint-disable-next-line no-extend-native, func-names
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
