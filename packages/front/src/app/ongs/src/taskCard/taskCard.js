import { html } from 'hybrids';
import router from '../routes';
import materializeStyle from '../styles';

const renderTaskTitle = (ongName, ongId, taskTitle) => console.log(ongName, ongId, taskTitle) || (ongName && ongId
  ? html`<div class="collapsible-header"> <a onClick=${() => router.navigate(`/ongs/${ongId}`)} >${ongName}</a> - ${taskTitle}</div>`
  : html`<div class="collapsible-header">${taskTitle}</div>`
);

const taskCard = {
  taskTitle: '',
  taskBody: '',
  taskOngName: '',
  taskOngId: '',
  render: ({
    taskTitle,
    taskBody,
    taskOngName,
    taskOngId,
  }) => html`
    ${materializeStyle}
    <li>
      ${renderTaskTitle(taskOngName, taskOngId, taskTitle)}
      <div class="collapsible-body"><span>${taskBody}</span></div>
    </li>
  `,
};

const taskCardFn = ({
  taskTitle = '',
  taskBody = '',
  taskOngName = '',
  taskOngId = '',
}) => html`
  <li>
    ${renderTaskTitle(taskOngName, taskOngId, taskTitle)}
    <div class="collapsible-body"><span>${taskBody}</span></div>
  </li>
`;
export { taskCardFn };
export default taskCard;
