define(["require", "exports", "Source/Greeter/greeter"], function(require, exports, Greeter) {
    //If you export like this, you have to say new main.Main unlike the greeter where we say new Greeter()
    var Main = (function () {
        function Main() {
            //When you look at how the greeter class is exported you see why we can just say new Greeter()
            this.greeter = new Greeter();
            this.greeter.start();
        }
        return Main;
    })();
    exports.Main = Main;
});
//# sourceMappingURL=main.js.map
