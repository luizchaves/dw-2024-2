import * as HostTableRow from '../components/HostTableRow.js';
import API from '../services/api.js';

async function load() {
  const hosts = await API.read('hosts');

  hosts.forEach(HostTableRow.create);
}

async function create(host) {
  delete host.id;

  const createdHost = await API.create('hosts', host);

  HostTableRow.create(createdHost);
}

async function update(host) {
  const { id } = host;

  const updatedUpdated = await API.update(`hosts/${id}`, host);

  HostTableRow.update(updatedUpdated);
}

async function remove(host) {
  const { id } = host;

  await API.remove(`hosts/${id}`);

  HostTableRow.remove(id);
}

export default { load, create, update, remove };
