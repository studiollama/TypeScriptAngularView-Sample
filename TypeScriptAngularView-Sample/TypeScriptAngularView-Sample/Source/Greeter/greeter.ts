//create your class like normal

class Greeter {
    timerToken: number;
    time: string;
    $scope: ng.IScope;

    constructor($scope: ng.IScope) {
        this.$scope = $scope;
        this.time = new Date().toUTCString();

        this.timerToken = setInterval(this.timer.bind(this), 500);
    }

    timer() {
        this.time = new Date().toUTCString();
        this.$scope.$apply();
    }

    stop() {
        clearTimeout(this.timerToken);
    }
//but export it like this so you can say var greeter = new Greeter() later on instead of new Greeter.Greeter()
} export = Greeter;
