import M from 'materialize-css';

const appDiv = document.querySelector('#app');

const ongsRoute = () => {
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
};

export default ongsRoute;
