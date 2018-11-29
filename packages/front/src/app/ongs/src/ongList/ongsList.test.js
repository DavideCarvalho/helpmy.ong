import './ongsList';
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
    }, 200);
  });

  it('should render ong title and ong task on first <li>', (done) => {
    const el = document.createElement('x-ongs-list');
    document.body.appendChild(el);
    setTimeout(() => {
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
      console.log(document.body.querySelectorAll('x-ongs-list'));
      const xOngsList = document.body.querySelector('x-ongs-list');
      const xOngsListShadowRoot = xOngsList.shadowRoot;
      const liEls = xOngsListShadowRoot.querySelectorAll('li');
      console.log(liEls);
      console.log(liEls[0]);
      const ongName = liEls[0].innerText;
      const taskName = liEls[1].innerText;
      expect(ongName).to.equal('Ong name');
      expect(taskName).to.equal('Hello World');
      done();
    }, 500);
  });

  afterEach(() => {
    const xOngsList = document.body.querySelector('x-ongs-list');
    xOngsList.parentElement.removeChild(xOngsList);
    window.fetch.restore();
  });
});
