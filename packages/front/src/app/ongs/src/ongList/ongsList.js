import { html } from 'hybrids';
import { getOngs } from '../services/ongsService';
import materializeStyle from '../styles';

const resolveOngsPromise = ongsPromise => html.resolve(
  ongsPromise.then(ongs => html`
    ${ongs.map(ong => html`
      <li>
        <div class="collapsible-header">${ong.name} - ${ong.taskTitle}</div>
        <div class="collapsible-body"><span>Lorem ipsum</span></div>
      </li>
    `)}
  `),
);


const ongsListRender = ({ ongs }) => html`
  ${materializeStyle}
  <h1>Help My.ONG</h1>
  <ul class="collapsible">
    ${resolveOngsPromise(ongs)}
  </ul>
`;


const ongsList = {
  ongs: () => getOngs(),
  render: ongsListRender,
};

export default ongsList;
