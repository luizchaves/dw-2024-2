import { $ } from '../lib/dom.js';
import Hosts from '../lib/hosts.js';
import HostForm from './HostForm.js';
import * as LineChart from './LineChart.js';
import API from '../services/api.js';

export function create(host) {
  const row = `
  <tr id="host-${host.id}">
    <td class="host-name">
      ${host.name}
    </td>
    <td class="host-address">
      ${host.address}
    </td>
    <td class="host-events">
      <span
        class="icon-pencil"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="bx--edit fs-6"></span>
      </span>
      <span class="icon-trash" data-bs-toggle="modal" data-bs-target="#modal">
        <span class="bx--trash fs-6"></span>
      </span>
      <span class="icon-stopwatch">
        <span class="bx--stopwatch fs-4"></span>
      </span>
      <span class="icon-loading invisible">
        <span class="line-md--loading-alt-loop fs-5"></span>
      </span>
    </td>
  </tr>
  `;

  $('.table-hosts tbody').insertAdjacentHTML('beforeend', row);

  $(`#host-${host.id} .icon-pencil`).onclick = () => {
    HostForm.setTitleForm('Atualizar Host');

    HostForm.setValues(host);

    HostForm.handleSubmit((host) => Hosts.update(host));
  };

  $(`#host-${host.id} .icon-trash`).onclick = () => {
    $(`.modal .host-name`).innerText = host.name;

    $(`.modal .remove-host-btn`).onclick = () => Hosts.remove(host);
  };

  $(`#host-${host.id} .icon-stopwatch`).onclick = async () => {
    $(`#host-${host.id} .icon-loading`).classList.remove('invisible');

    const pings = await API.read(`hosts/${host.id}/pings?_embed=icmps`);

    const times = pings[0].icmps.map((icmp) => icmp.time);

    LineChart.update(times);

    $(`#host-${host.id} .icon-loading`).classList.add('invisible');
  };
}

export function update({ id, name, address }) {
  $(`#host-${id} .host-name`).innerText = name;

  $(`#host-${id} .host-address`).innerText = address;
}

export function remove(id) {
  $(`#host-${id}`).remove();
}
