import './homework-11.js'
import './homework-10.js'
import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import './array.js'
import './comments.js'
import './main2.js'
import { Modal } from './Modal.js';
import { Form } from './Form.js';


class Phone {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}


class Apple extends Phone {
    constructor(brand, model, price, iosVersion) {
        super(brand, model, price);
        this.iosVersion = iosVersion;
    }
}

class Samsung extends Phone {
    constructor(brand, model, price, androidVersion) {
        super(brand, model, price);
        this.androidVersion = androidVersion;
    }
}

