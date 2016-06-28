riot.tag2('title-form', '<form onsubmit="{changeTitle}"> <input type="text" name="newTitle"> <input type="submit" value="change"> </form>', '', '', function(opts) {
    var actions = require('../actions.js');
    this.changeTitle = function() {
        this.opts.store.dispatch(actions.changeTitle(this.newTitle.value));
    }.bind(this)
});
