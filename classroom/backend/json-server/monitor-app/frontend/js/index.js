import * as API from './api.js';

function createHostRow(host) {
  const row = `<tr>
    <td>${host.name}</td>
    <td>${host.address}</td>
    <td>
      <span class="bx--stopwatch fs-5"></span>
    </td>
  </tr>`;

  table.insertAdjacentHTML('beforeend', row);
}

const hosts = await API.read('hosts');

const table = document.querySelector('table tbody');

for (const host of hosts) {
  createHostRow(host);
}

// API.read('hosts');
// API.create('hosts', { name: 'Host 3', address: '1.1.1.1'});
// API.update('hosts/1', { name: 'Host 3', address: '1.1.1.1'});
// API.remove('hosts/1');
