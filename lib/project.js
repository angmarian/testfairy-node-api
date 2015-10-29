
export class Project {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    this.client.get('/projects', {}, f);
  }
}
