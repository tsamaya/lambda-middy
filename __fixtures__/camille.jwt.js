const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNhbWlsbGUiLCJpYXQiOjE2Mzk1MjAwMDB9.S6VwKf5Jro4J_zIy6bSQp9BzYXRIk3uf83EW3PHswkw';

const decoded = {
  sub: '1234567890',
  name: 'camille',
  iat: 1639520000,
};

module.exports.token = jwt;
module.exports.decoded = decoded;
