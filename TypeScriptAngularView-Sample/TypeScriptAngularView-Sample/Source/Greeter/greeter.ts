//create your class like normal

class Greeter {
    element: JQuery;
    span: HTMLElement;
    timerToken: number;

    constructor() {
        this.element = $('#content');
        this.element.append("The time is: ");
        this.span = document.createElement('span');
        this.element.append(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => { 
            this.span.innerHTML = new Date().toUTCString(), 500
            });
    }

    stop() {
        clearTimeout(this.timerToken);
    }
//but export it like this so you can say var greeter = new Greeter() later on instead of new Greeter.Greeter()
} export = Greeter;
