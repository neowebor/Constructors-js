'use strict';

const car = {
  color: 'Black',
  model: 'Bugatti Chiron Super Sport',
  brand: 'Bugatti',
  capacity: 8,
  maxQuantityPassengers: 2,
  speed: 0,
  maxSpeed: 350,

  accelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      return null;
    }

    if (kmh < 0) {
      return this.deaccelerate(-kmh) + ' (Так як ви записали негативне число, то напевно хотіли зупинитись, а не розігнатись. Спрацював інший метод.)'
    }

    let speedIncrease = kmh + this.speed;

    return this.speed = speedIncrease > this.maxSpeed ? this.maxSpeed : speedIncrease;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      return null;
    }

    if (kmh < 0) {
      return this.accelerate(-kmh) + ' (Так як ви записали негативне число, то напевно хотіли розігнатись, а не зупинитись. Спрацював інший метод.)'
    }

    let speedReduction = this.speed - kmh;

    return this.speed = speedReduction > 0 ? speedReduction : 0;
  },

  stop: function() {
    this.speed = 0;
  },
}

// console.log(car.accelerate(100));
// console.log(car.accelerate(-50));
// console.log(car.accelerate(150)); 


// console.log(car.deaccelerate(-50));
// console.log(car.deaccelerate(20)); 
// console.log(car.deaccelerate(30));  

const carPrototypeMethods = {
  accelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      return null;
    }

    if (kmh < 0) {
      return this.deaccelerate(-kmh) + ' (Так як ви записали негативне число, то напевно хотіли зупинитись, а не розігнатись. Спрацював інший метод.)'
    }

    let speedIncrease = kmh + this.speed;

    return this.speed = speedIncrease > this.maxSpeed ? this.maxSpeed : speedIncrease;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      return null;
    }

    if (kmh < 0) {
      return this.accelerate(-kmh) + ' (Так як ви записали негативне число, то напевно хотіли розігнатись, а не зупинитись. Спрацював інший метод.)'
    }

    let speedReduction = this.speed - kmh;

    return this.speed = speedReduction > 0 ? speedReduction : 0;
  },

  stop: function() {
    return this.speed = 0;
  }
}

function CarConstructor(color, model, brand, capacity, maxQuantityPassengers, speed, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.capacity = capacity;
  this.maxQuantityPassengers = maxQuantityPassengers;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
}

CarConstructor.prototype = carPrototypeMethods;

const toyota = new CarConstructor('Green', 'Toyota Supra', 'Toyota', 6, 4, 60, 240);