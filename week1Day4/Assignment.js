class Clock {
    print() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;
        console.log(`${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.print();
        this.timer = setInterval(() => this.print(), 5000);
    }
}
let timer = new Clock();
timer.start();
setTimeout(() => {
    timer.stop();
}, 30000);