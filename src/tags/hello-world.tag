<hello-world>
    <h3>{this.opts.store.getState().title}</h3>
    <script>
        this.opts.store.subscribe(function() {
            this.update();
        }.bind(this)); 
    </script>
</hello-world>
