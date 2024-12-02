let hosts = [
  {
    host: 'PC 1',
    address: '192.168.0.1',
    mask: '255.255.255.0',
  },
  {
    host: 'Server 1',
    address: '172.16.0.1',
    mask: '255.255.0.0',
  },
  {
    host: 'Server 2',
    address: '10.0.0.1',
    mask: '255.0.0.0',
  },
];

console.log(hosts[1].address);

class Host {
  constructor(host, address, mask) {
    this.host = host;
    this.address = address;
    this.mask = mask;
  }

  toString() {
    return `${this.host} (${this.address}/${this.mask})`;
  }
}

hosts = [];

hosts.push(new Host('PC 1', '192.168.0.1', '255.255.255.0'));
hosts.push(new Host('Server 1', '172.16.0.1', '255.255.0.0'));
hosts.push(new Host('Server 2', '10.0.0.1', '255.0.0.0'));

console.log(hosts[1].address);
