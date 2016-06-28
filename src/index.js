var riot = require('riot');
var redux = require('redux');

require('./tags/hello-world.tag');

var reducer = function(state = {title: "Hakuna Matata"}, action) {
    return state;
};

var reduxStore = redux.createStore(reducer);

document.addEventListener('DOMContentLoaded', function() {
    riot.mount('hello-world', {store: reduxStore});
});
