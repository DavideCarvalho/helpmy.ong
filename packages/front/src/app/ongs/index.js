
import './src';

let element;
let fatherElement;
let styleElement;

export function bootstrap() {
  return Promise
    .resolve()
    .then(() => {
    });
}

export function mount() {
  return Promise
    .resolve()
    .then(() => {
      fatherElement = document.getElementById('app');
      element = document.createElement('app-caixa');
      fatherElement.appendChild(element);
    });
}

export function unmount() {
  return Promise
    .resolve()
    .then(() => {
      fatherElement.removeChild(element);
      document.head.removeChild(styleElement);
    });
}
