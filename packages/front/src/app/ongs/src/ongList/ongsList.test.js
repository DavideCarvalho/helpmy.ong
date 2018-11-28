import './ongsList';
import { expect } from 'chai';

describe('OngsList', () => {
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
});
