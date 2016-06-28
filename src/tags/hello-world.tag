<hello-world>
    <h3>{this.opts.store.getState().title}</h3>
    <form onsubmit={changeTitle}>
        <input type="text" name="newTitle"/>
        <input type="submit" value="change"/>
    </form>

    <script>
    changeTitle() {
        this.opts.store.dispatch({type:'CHANGE_TITLE', data: this.newTitle.value})
    }
    </script>
</hello-world>
