var unirest = require('unirest');
import {Project} from './project';
import {Build} from './build';
import {Session} from './session';
import {Crash} from './crash';
import {Tester} from './tester';
import {BuildTester} from './buildtester';

export class Client {
  constructor(...args) {
    if (args.length === 2) {
      this.appEmail = args[0];
      this.appApiKey = args[1];
    }
    if (!this.appEmail || !this.appApiKey) {
      throw new Error('Could not construct a client with those parameters');
    }
    this.projects = new Project(this);
    this.builds = new Build(this);
    this.sessions = new Session(this);
    this.crashes = new Crash(this);
    this.testers = new Tester(this);
    this.buildTesters = new BuildTester(this);
  }
  put(endpoint, data, f) {
    unirest.put(`https://app.testfairy.com/api/1${endpoint}`)
    .auth(this.appEmail, this.appApiKey)
    .send(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'testfairy-node-client/1.0.0')
    .end(r => this.callback(f, r));
  }
  post(endpoint, data, f) {
    unirest.post(`https://app.testfairy.com/api/1${endpoint}`)
    .auth(this.appEmail, this.appApiKey)
    .send(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'testfairy-node-client/1.0.0')
    .end(r => this.callback(f, r.body));
  }
  get(endpoint, data, f) {
    unirest.get(`https://app.testfairy.com/api/1${endpoint}`)
    .auth(this.appEmail, this.appApiKey)
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'testfairy-node-client/1.0.0')
    .end(r => this.callback(f, r.body));
  }
  delete(endpoint, data, f) {
    unirest.delete(`https://app.testfairy.com/api/1${endpoint}`)
    .auth(this.appEmail, this.appApiKey)
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'testfairy-node-client/1.0.0')
    .end(r => this.callback(f, r));
  }
  callback(f, data) {
    if (!f) {
      return;
    }
    if (f.length >= 2) {
      let hasErrors = data.body && data.body.type === 'error.list';
      if (hasErrors) {
        f(data, null);
      } else {
        f(null, data);
      }
    } else {
      f(data);
    }
  }
}
