// Defining classes - Constructor, property, methods, static, private, inheritance
// Host (name, address)
class Host {
  static count = 0;

  constructor(name, address) {
    this.id = ++Host.count;
    this.name = name;
    this.address = address;
  }

  getHost() {
    return `${this.name} - ${this.address}`;
  }
}

let ifpb = new Host('IFPB', 'www.ifpb.edu.br');
console.log(ifpb);
console.log(ifpb.getHost());

class IFPBHost extends Host {
  constructor(name, address, campus) {
    super(name, address);
    this.campus = campus;
  }

  getHost() {
    return `${super.getHost()} - ${this.campus}`;
  }
}

const ifpbHost = new IFPBHost('IFPB', 'www.ifpb.edu.br', 'João Pessoa');
console.log(ifpbHost);

class HostSet {
  #hosts = [];

  add(host) {
    this.#hosts.push(host);
  }

  getHosts() {
    return this.#hosts;
  }
}

const hostSet = new HostSet();
hostSet.add(ifpb);
hostSet.add(ifpbHost);
console.log(hostSet.hosts);
console.log(hostSet.getHosts().map((host) => host.getHost()));

// JSON - JavaScript Object Notation
const host = {
  id: 1,
  name: 'IFPB',
  address: 'www.ifpb.edu.br',
};

console.log(host);

// Property Shorthand
const name = 'IFPB';
const address = 'www.ifpb.edu.br';
const newHost = { name, address };

// const newHost = {
//   name: name,
//   address: address
// };

// Spread properties, Reference vs value
ifpb = { name: 'IFPB', address: 'www.ifpb.edu.br' };

let ifrn = ifpb;
ifrn.name = 'IFRN';

console.log(ifrn); // { name: 'IFRN', address: 'www.ifpb.edu.br' }
console.log(ifpb); // { name: 'IFRN', address: 'www.ifpb.edu.br' }

ifrn = { ...ifpb };
ifrn.name = 'IFRN';
ifrn.address = 'www.ifrn.edu.br';

console.log(ifpb); // {name: 'IFPB', address: 'www.ifpb.edu.br'}

// Dynamic property
ifpb = { name: 'IFPB', address: 'www.ifpb.edu.br' };

const property = 'campus';
const campus = 'João Pessoa';

ifpb[property] = campus;

console.log(ifpb);

console.log({
  ...ifpb,
  // property: campus,
  [property]: campus,
});

// JSON - JSON.stringify, JSON.parse
ifpb = { name: 'IFPB', address: 'www.ifpb.edu.br' };

JSON.stringify(ifpb); // '{"name":"IFPB","address":"www.ifpb.edu.br"}'

ifpb = '{"name":"IFPB","address":"www.ifpb.edu.br"}';
JSON.parse(ifpb); // { name: 'IFPB', address: 'www.ifpb.edu.br' }

// Object - Object.keys, Object.values, Object.entries
ifpb = { name: 'IFPB', address: 'www.ifpb.edu.br' };

for (const key in ifpb) {
  console.log(key, ifpb[key]);
}

for (const value of Object.values(ifpb)) {
  console.log(value);
}

for (const [key, value] of Object.entries(ifpb)) {
  console.log(key, value);
}
