var riot = require('riot');
var redux = require('redux');

require('./tags/hello-world.tag');
require('./tags/title-form.tag');

var reducer = function(state = {title: "Hakuna Matata"}, action) {
    switch(action.type) {
        case 'CHANGE_TITLE':
            return Object.assign({}, state, {title: action.data});
        default:
            return state;
    }
};

var reduxStore = redux.createStore(reducer);

document.addEventListener('DOMContentLoaded', function() {
    riot.mount('*', {store: reduxStore});
});
