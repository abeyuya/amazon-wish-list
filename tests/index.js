var test = require('tape');
var AmazonWishList = require('../');

var testData = {
  listID: 'NDDVVVWMJ6AN',
  cid: '',
  email: ''
}

test('Get wish list by "wish list id"', function (t) {
  t.plan(1);

  var awl = new AmazonWishList('de');
  awl.getListById(testData.listID).then( function(result) {
    console.log(result);
    t.equal(result.title, 'testing', 'List title matches');
  });
});