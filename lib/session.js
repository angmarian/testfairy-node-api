
export class Session {
  constructor(client) {
    this.client = client;
  }
  list(params, f) {
    this.client.get(`/projects/${params.project_id}/builds/${params.build_id}/sessions/`, {}, f);
  }
  find(params, f) {
    this.client.get(`/projects/${params.project_id}/builds/${params.build_id}/sessions/${params.session_id}`, {}, f);
  }
  search(params, f) {
    this.client.get(`/search`, params, f);
  }
}
