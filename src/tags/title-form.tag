<title-form>
    <form onsubmit={changeTitle}>
        <input type="text" name="newTitle"/>
        <input type="submit" value="change"/>
    </form>

    <script>
    var actions = require('../actions.js');
    changeTitle() {
        this.opts.store.dispatch(actions.changeTitle(this.newTitle.value));
    }
    </script>
</title-form>
