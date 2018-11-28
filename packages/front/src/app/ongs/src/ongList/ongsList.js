import { html, define } from 'hybrids';
import { getOngs } from '../services/ongsService';
import materializeStyle from '../styles';

const ongsProperty = ({
  get: (host, lastValue) => lastValue || [],
  set: (host, newValue) => newValue,
  connect: async (host) => {
    host.ongs = await getOngs();
    return () => {};
  },
});

const ongsListRender = ({ ongs }) => html`
  ${materializeStyle}
  <h1>Help My.ONG</h1>
  <ul class="collapsible">
    ${ongs.map(ong => html`
      <li>
        <div class="collapsible-header">First</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    `)}
  </ul>
`;


const ongsList = {
  ongs: ongsProperty,
  render: ongsListRender,
};

define('x-ongs-list', ongsList);
