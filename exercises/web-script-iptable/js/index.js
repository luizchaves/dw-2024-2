import { hosts } from './data.js';

const tbody = document.querySelector('table tbody');

for (const host of hosts) {
  const tableRow = `<tr>
    <td>${host.address}</td>
    <td>${host.mask}</td>
    <td>${host.version}</td>
  </tr>`;

  // tbody.innerHTML += tableRow;
  tbody.insertAdjacentHTML('beforeend', tableRow);
}
