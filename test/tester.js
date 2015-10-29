import assert from 'assert';
import {Client} from '../lib';

describe('testers', function () {
  this.timeout(15000);
  it('should list', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.testers.list(function (r) {
      assert.equal('ok', r.status);
      done();
    });
  });
  var timestamp = new Date().getTime();
  var newEmail = 'api-test-' + timestamp + '@example.com';
  it('create tester', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    client.testers.create({ email: newEmail }, function (r) {
      assert.equal('ok', r.status);
      done();
    });
  });
  it('look for a new tester', function (done) {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    var testerMatched = false;
    client.testers.list(function (r) {
      r.testers.map(function (tester) {
        if (tester.email === newEmail) {
          testerMatched = true;
        }
      });
      assert.equal(true, testerMatched);
      done();
    });
  });
});
