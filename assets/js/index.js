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
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let speedIncrease = kmh + this.speed;

    return this.speed = speedIncrease > this.maxSpeed ? this.maxSpeed : speedIncrease;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let speedReduction = this.speed - kmh;

    return this.speed = speedReduction > 0 ? speedReduction : 0;
  },

  stop: function() {
    this.speed = 0;
  },
}


const carPrototypeMethods = {
  accelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let speedIncrease = kmh + this.speed;

    return this.speed = speedIncrease > this.maxSpeed ? this.maxSpeed : speedIncrease;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let speedReduction = this.speed - kmh;

    return this.speed = speedReduction > 0 ? speedReduction : 0;
  },

  stop: function() {
    return this.speed = 0;
  }
}

function Car(color, model, brand, capacity, maxQuantityPassengers, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.capacity = capacity;
  this.maxQuantityPassengers = maxQuantityPassengers;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
}

Car.prototype = carPrototypeMethods;

const toyota = new Car('Green', 'Toyota Supra', 'Toyota', 6, 4, 60, 240);