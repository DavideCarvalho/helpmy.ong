import { html } from 'hybrids';
import { getOngs } from '../services/ongsService';
import { taskCardFn } from '../taskCard';
import materializeStyle from '../styles';

const resolveOngsPromise = ongsPromise => html.resolve(
  ongsPromise.then(ongs => html`
    ${ongs.map((ong) => {
    const { id, name, latestTask } = ong;
    return taskCardFn({
      taskTitle: latestTask.title,
      taskBody: latestTask.message,
      taskOngName: name,
      taskOngId: id,
    });
  })}
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
