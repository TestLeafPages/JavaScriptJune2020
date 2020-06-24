class OrderFood {
    //private variable
    #orderId = 1002;
    //object literal
    orderItems = {
        1: "idly",
        2: "puri",
        3: "dosai"
    }
    getOrderId() {
        return this.#orderId;
    }
    setOrderId(order) {
        this.#orderId = order;
    }
}

let details = new OrderFood();
details.setOrderId(1004);
console.log(details.getOrderId());
