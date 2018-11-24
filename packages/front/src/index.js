import * as singleSpa from 'single-spa';

const entradaAppName = 'entrada';
const entradaLoadingFunction = () => import('./app/ongs');
const entradaActivityFunction = location => location.pathname === '/' || location.pathname.indexOf('/ongs') === 0;
singleSpa.registerApplication(entradaAppName, entradaLoadingFunction, entradaActivityFunction);
