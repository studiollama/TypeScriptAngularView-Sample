//Now you can import new .ts files like this
import Greeter = require("Source/Greeter/greeter");

//If you export like this, you have to say new main.Main unlike the greeter where we say new Greeter()
export class Main {
    greeter: Greeter;

    constructor() {
        //When you look at how the greeter class is exported you see why we can just say new Greeter()
        this.greeter = new Greeter();
        this.greeter.start();
    }
}
