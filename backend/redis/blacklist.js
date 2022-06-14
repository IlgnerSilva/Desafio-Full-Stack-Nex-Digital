const redis = require('redis');
module.exports = redis.createClient({predfix: 'blacklist', port: 6379 });