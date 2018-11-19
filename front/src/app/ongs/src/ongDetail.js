import { html, define } from 'hybrids';
import materializeCss from './materialize.min.css';

const ongDetail = {
  render: () => html`
    <style>
      ${materializeCss}
    </style>
    <p>Ong detail</p>
  `,
};

define('x-ong-detail', ongDetail);
