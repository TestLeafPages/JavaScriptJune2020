class Delivery {
    /* 
    two variables
    one method
    override method in subclass
    access the subclass confirm the method is
    overridden
    */
    ratingForDelivery = 4;
    deliveryCharge = 30;
    getDeliveryCharge() {
        return this.deliveryCharge;
    }

}

class Delivery_Chennai extends Delivery {
    getDeliveryCharge() {
        return this.deliveryCharge + 30;
    }
}
let access = new Delivery_Chennai();
console.log(access.getDeliveryCharge());