import Navigo from 'navigo';
import M from 'materialize-css';
import ongsRoute from './ongs-route';
import ongDetailRoute from './ong-detail-route';

const router = new Navigo();

router
  .on('/', ongsRoute)
  .on('/ongs', ongsRoute)
  .on('/ongs/:id', ongDetailRoute)
  .notFound(() => {
    console.log('não achei');
  })
  .resolve();

export default router;
