//creating object car , bank, house, laptop, animal, product

//for car
const car = {
  carName: "Toyota",
  model: "2022",
  manufacturer: "Toyota Motors",
  carinfo: function () {
    console.log(
      `The ${this.carName} is maufactured by ${this.manufacturer} in year ${this.model}`
    );
  },
};
car.carinfo();

//for bank
const bank = {
  bankName: "Nepal Bank Limited",
  type: "commercial",
  established: "1994 BS",
  bankInfo: function () {
    console.log(
      `${this.bankName} is the first ${this.type} bank, established on ${this.established}`
    );
  },
};
bank.bankInfo();

//for book
const book = {
  bookName: "The Alchemist",
  genres:
    "allegorical fiction, philosophical fiction, quest narrative, and spiritual fiction.",
  author: "Paulo Coelho",
  bookInfo: function () {
    console.log(
      `${this.bookName} is written by ${this.author} cassified as a novel with in the genres of ${this.genres}`
    );
  },
};
book.bookInfo();

//for laptop
const laptop = {
  laptopName: "Lenevo Legion",
  model: 2025,
  specs:
    "high-performance processors such as Intel Core i7/i9 or AMD Ryzen 5/7/9",
  laptopInfo: function () {
    console.log(
      `${this.laptopName} model ${this.model} varient includes ${this.specs}`
    );
  },
};
laptop.laptopInfo();

//for house
const house = {
  houseLocation: "Baneshwor",
  color: "blue",
  floor: "three floors with a balcony",
  houseInfo: function () {
    console.log(
      `The property is located at ${this.houseLocation} and has ${this.floor}, the front painted ${this.color}`
    );
  },
};
house.houseInfo();

//for animal
const animal = {
  animalName: "Dog",
  look: "cute",
  sound: "Bark",
  animalInfo: function () {
    console.log(`My ${this.animalName} has a ${this.look} ${this.sound}`);
  },
};
animal.animalInfo();

//for Product
const product = {
  productName: "Louis Vuitton",
  type: "luxury",
  originated: "French",
  productInfo: function () {
    console.log(
      `${this.productName} is a ${this.originated} ${this.type} brand.`
    );
  },
};
product.productInfo();
