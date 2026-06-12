const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

const registeredHomes = [];// array of objects

module.exports = class Home {
  constructor(houseName,price,location,rating,photourl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
  }
  
  save() {
    registeredHomes.push(this);
    const homeFilePath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), error => {
      if (error) {
        console.log('Error while writing data', error);
      }
    })
  }

 static fetchAll() {
    return registeredHomes;
  }
}

