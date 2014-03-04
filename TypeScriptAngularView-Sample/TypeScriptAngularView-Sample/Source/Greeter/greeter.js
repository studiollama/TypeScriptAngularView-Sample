//create your class like normal
define(["require", "exports"], function(require, exports) {
    var Greeter = (function () {
        function Greeter() {
            this.element = $('#content');
            this.element.append("The time is: ");
            this.span = document.createElement('span');
            this.element.append(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                _this.span.innerHTML = new Date().toUTCString(), 500;
            });
        };

        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    
    return Greeter;
});
//# sourceMappingURL=greeter.js.map
