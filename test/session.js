import assert from 'assert';
import {Client} from '../lib';

describe('sessions', function () {
  this.timeout(15000);
  it('should list', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.sessions.list({project_id: '1545945-bitcodedemo', build_id: '2051011'}, function (r) {
      assert.equal('ok', r.status);
      done();
    });
  });
  it('find session by id', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.sessions.find({ project_id: '1545945-bitcodedemo', build_id: '2051011', session_id: 3 }, function (r) {
      assert.equal('ok', r.status);
      done();
    });
  });
  it('search for sessions', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.sessions.search({
      loaded: 'home',
      notLoaded: 'away',
      page: 2,
      perPage: 3
    }, function (r) {
      assert.equal('ok', r.status);
      assert.equal(3, r.sessions.length);
      done();
    });
  });
});
