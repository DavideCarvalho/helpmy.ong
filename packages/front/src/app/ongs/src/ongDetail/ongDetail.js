import { html, define } from 'hybrids';
import materializeCss from '../materialize.min.css';
import { getOng } from '../services/ongsService';

const contactTitles = {
  celphone: 'celular',
  telephone: 'telefone',
};

const getOngId = () => {
  const id = 1;
  return getOng(id);
};

const renderContactConditionally = (contact, contactTitle) => (contact
  ? html`
    <h4>${contactTitle}</h4>
    <p>${contact}</p>
  `
  : '');

const renderOngContacts = (contacts = []) => html`
  ${Object.keys(contacts).map((contactName) => {
    const contactTitle = contactTitles[contactName];
    return html`${renderContactConditionally(contacts[contactName], contactTitle)}`;
  })}
`;

const ongDetailResolver = ongPromise => html.resolve(
  ongPromise.then((ong) => {
    const { contacts, tasks } = ong;
    return html`
      <h1>${ong.name}</h1>
      ${renderOngContacts(contacts)}
      <h4>Tarefas a serem feitas</h4>
      <ul>
        ${tasks.map(task => html`
          <task-card task-title=${task.title} task-body=${task.message}></task-card>
        `)}
      </ul>
    `;
  }),
);

const ongDetail = {
  ong: () => getOngId(),
  render: ({ ong }) => html`
    <style>
      ${materializeCss}
    </style>
    ${ongDetailResolver(ong())}
  `,
};

define('x-ong-detail', ongDetail);
