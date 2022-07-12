// Import stylesheets
import './style.css';
import 'grapesjs';

const macroses = (editor, opts) => undefined;

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
grapesjs.init({
  container: '#gjs',
  height: '500px',
  plugins: ['gjs-preset-newsletter', macroses],
  storageManager: {
    autosave: false,
  } as grapesjs.StorageManagerConfig,
});
