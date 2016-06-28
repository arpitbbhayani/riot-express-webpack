var riot = require('riot');
require('./tags/hello-world.tag');

document.addEventListener('DOMContentLoaded', function() {
    riot.mount('hello-world');
});
