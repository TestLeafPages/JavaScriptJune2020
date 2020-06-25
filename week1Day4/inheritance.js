class Anjappar {
    constructor(time) {
        this.time = time;
        console.log("Restaurant is open " + time);
    }
    briyani = ["chiken", "mutton", "egg", "kadai"];
    sundayDiscount = 10;

    getNonVegBriyaniVaieties() {
        return this.briyani;
    }
    static covidTips = 50;

    static getCovidTips() {
        return this.covidTips;
    }
    getParcel() {
        return true;
    }
}

class Anjappar_nanganallur extends Anjappar {
    constructor(time) {
        super(time)
    }
    getParcel() {
        return false;
    }

    static getCovidTips() {
        return super.covidTips + 10;
    }
}

class Anjappar_Velachery extends Anjappar {

}

let branch = new Anjappar_nanganallur("10:00");
// console.log(branch.getNonVegBriyaniVaieties());
// console.log(Anjappar_nanganallur.getCovidTips());
// console.log(branch.getParcel());

//instanceOf
console.log(branch instanceof Object);




/*
let driver = new ChromeDriver("");
*/