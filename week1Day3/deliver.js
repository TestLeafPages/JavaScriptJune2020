class DeliverFood {
    /* constructor 
        1 method 
        2 variable
     */
    constructor(name) {
        console.log("Delivered through " + name);
    }

    deliveryAddress = "velachery";
    isDelivered = true;
    getDeliveryAddress() {
        return this.deliveryAddress;
    }

}
let delivery = new DeliverFood("Prabhu");
console.log(delivery.isDelivered);
