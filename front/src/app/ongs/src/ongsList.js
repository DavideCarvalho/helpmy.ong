import { html, define } from 'hybrids';
import { getOngs } from './services/ongs.service';
import materializeCss from './materialize.min.css';

const ongsProperty = ({
  get: (host, lastValue) => lastValue || [],
  set: (host, newValue, lastValue) => newValue,
  connect: async (host, key, invalidate) => {
    host.ongs = await getOngs();
    return () => {};
  },
});

const ongsListRender = () => html`
<style>
  ${materializeCss}
</style>
<h1>Help My.ONG</h1>
<ul class="collapsible">
  <li>
    <div class="collapsible-header">First</div>
    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>
  <li>
    <div class="collapsible-header">Second</div>
    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>
  <li>
    <div class="collapsible-header">Third</div>
    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>
</ul>
`;


const ongsList = {
  ongs: ongsProperty,
  render: ongsListRender,
};

define('x-ongs-list', ongsList);
