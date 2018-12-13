import Navigo from 'navigo';
import ongsRoute from './ongs-route';
import ongDetailRoute from './ong-detail-route';

const router = new Navigo();

const cleanUpBody = () => {
  const appDiv = document.body.querySelector('#app');
  while (appDiv.firstChild) {
    appDiv.removeChild(appDiv.firstChild);
  }
};


router
  .on('/', ongsRoute, { leave: cleanUpBody })
  .on('/ongs', ongsRoute, { leave: cleanUpBody })
  .on('/ongs/:id', ongDetailRoute, { leave: cleanUpBody })
  .notFound(() => {
    console.log('não achei');
  })
  .resolve();

export default router;
