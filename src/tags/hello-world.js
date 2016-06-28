riot.tag2('hello-world', '<h3>{this.opts.store.getState().title}</h3>', '', '', function(opts) {
        this.opts.store.subscribe(function() {
            this.update();
        }.bind(this));
});
