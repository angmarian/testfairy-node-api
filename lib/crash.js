
export class Crash {
  constructor(client) {
    this.client = client;
  }
  list(params, f) {
    this.client.get(`/projects/${params.project_id}/builds/${params.build_id}/crashes/`, {}, f);
  }
}
