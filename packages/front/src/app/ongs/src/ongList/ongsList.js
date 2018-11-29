import { html } from 'hybrids';
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
  ${ongs.map(ong => html`
    <li>
      <div class="collapsible-header">${ong.name}</div>
      <div class="collapsible-body"><span>${ong.taskTitle}</span></div>
    </li>
  `)}
`;


const ongsList = {
  ongs: ongsProperty,
  render: ongsListRender,
};

export default ongsList;
