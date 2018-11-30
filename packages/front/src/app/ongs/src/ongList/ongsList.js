import { html } from 'hybrids';
import { getOngs } from '../services/ongsService';
import router from '../routes';
import materializeStyle from '../styles';

const navigate = (ongId) => {
  router.navigate(`/ongs/${ongId}`);
};

const resolveOngsPromise = ongsPromise => html.resolve(
  ongsPromise.then(ongs => html`
    ${ongs.map(ong => html`
      <li>
        <div class="collapsible-header"><a onclick="${() => navigate(ong.ong.id)}" >${ong.ong.name}</a> - ${ong.task.title}</div>
        <div class="collapsible-body"><span>${ong.task.message}</span></div>
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
