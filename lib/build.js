
export class Build {
  constructor(client) {
    this.client = client;
  }
  list(params, f) {
    this.client.get(`/projects/${params.project_id}/builds`, {}, f);
  }
}
