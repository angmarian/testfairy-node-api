
export class Tester {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    this.client.get(`/testers`, {}, f);
  }
  create(data, f) {
    this.client.post(`/testers`, data, f);
  }
}
