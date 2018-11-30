import './index';
import sinon from 'sinon'
import { expect } from 'chai';


describe('<x-ongs-list>', () => {

  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  it('should render ongsList', (done) => {
    const el = document.createElement('x-ongs-list');
    document.body.appendChild(el);
    setTimeout(() => {
      const xOngsList = document.body.querySelector('x-ongs-list');
      const xOngsListShadowRoot = xOngsList.shadowRoot;
      const titleEl = xOngsListShadowRoot.querySelector('h1');
      const titleValue = titleEl.innerText;
      expect(titleValue).to.equal('Help My.ONG');
      done();
    }, 10);
  });

  it('should render ong title and ong task on first <li>', (done) => {
    const body = [
      {
        name: 'Ong name',
        taskTitle: 'Hello World',
      },
    ];
    const res = new window.Response(JSON.stringify(body), {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });
    window.fetch.returns(Promise.resolve(res));
    const el = document.createElement('x-ongs-list');
    document.body.appendChild(el);
    setTimeout(() => {
      const liEls = el.shadowRoot.querySelector('ul li div');
      const ongNameWithTaskTitle = liEls.innerText;
      expect(ongNameWithTaskTitle).to.equal('Ong name - Hello World');
      done();
    }, 10);
  });

  afterEach(() => {
    window.fetch.restore();
  });
});
