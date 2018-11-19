import Navigo from 'navigo';
import M from 'materialize-css';

const router = new Navigo();
const appDiv = document.querySelector('#app');
router
  .on('/ongs', () => {
    if (appDiv.firstChild) {
      while (appDiv.firstChild) {
        appDiv.removeChild(appDiv.firstChild);
      }
    }
    const el = document.createElement('x-ongs-list');
    appDiv.appendChild(el);
    const interval = setInterval(() => {
      const shadowRootElement = document.querySelector('x-ongs-list');
      if (shadowRootElement.shadowRoot) {
        const collapsibleElements = shadowRootElement.shadowRoot.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibleElements);
        clearInterval(interval);
      }
    }, 100);
  })
  .on('/ongs/:id', () => {
    if (appDiv.firstChild) {
      while (appDiv.firstChild) {
        appDiv.removeChild(appDiv.firstChild);
      }
    }
    const el = document.createElement('x-ong-detail');
    appDiv.appendChild(el);
  })
  .notFound(() => {
    console.log('não achei');
  })
  .resolve();

export default router;
