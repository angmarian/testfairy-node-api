import assert from 'assert';
import {Client} from '../lib';

describe('clients', function () {
  it('should be constructed', function () {
    let client = new Client('gil@megidish.net', '9dc08e8d93efd8622178f0c61faeaf112fbafcb4');
    assert.equal('gil@megidish.net', client.appEmail);
    assert.equal('9dc08e8d93efd8622178f0c61faeaf112fbafcb4', client.appApiKey);
  });
});
