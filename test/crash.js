import assert from 'assert';
import {Client} from '../lib';

describe('crashes', function () {
  this.timeout(15000);
  it('should list', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.crashes.list({project_id: '1545945-bitcodedemo', build_id: '2051011'}, function (r) {
      assert.equal('ok', r.status);
      done();
    });
  });
});
