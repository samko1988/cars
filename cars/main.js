var cars = [
  {
    make: "Honda",
    model: "Civic",
    category: "economy",
    price: "$20,000",
    image: "honda.jpg"
  },
  {
    make: "BMW",
    model: "M5",
    category: "Sport",
    price: "$100,000",
    image: "BMW.jpg"
  },
  {
    make: "Mercedes",
    model: "E-Class",
    category: "Luxury",
    price: "$50,000",
    image: "mercedes.jpg"
  },
  {
    make: "Toyota",
    model: "Rav4",
    category: "SUV",
    price: "$30,000",
    image: "toyota.jpg"
  },
  {
    make: "Audi",
    model: "A7",
    category: "Luxury",
    price: "$80,000",
    image: "audi.jpg"
  },
  {
    make: "Cadillac",
    model: "CT-6",
    category: "Luxury",
    price: "$60,000",
    image: "cadillac.jpg"
  }
];

// var cars = [];
// var carJSON = localStorage.getItem("theCars")

// if (carJSON != null) {
//   cars = JSON.parse(carJSON)
// }

var toAppend = "";
var mainDiv = document.getElementById("main");
createHTML();

function createHTML() {
  toAppend = "";
  cars.forEach(createCar);
  mainDiv.innerHTML = toAppend;
}

function createCar(car, i) {
  toAppend += ` <div id="car${i}">
  <button class="btn" onclick="deleteCar(${i})">x</button>
       <!-- <h1>` + car.category + ` </h1>-->
            <h1>${car.category}</h1>
            <h2>${car.make}</h2>
            <h3>${car.model}</h3>
            <h4>${car.price}</h4>
            <img src="assets/images/${car.image}" alt="" width="400px">
        </div>
        `;
}

function deleteCar(car) {
cars.splice(car, 1);
createHTML();
updateLocal();
}

var form = document.getElementById("formDiv");
var btn = document.getElementById("btn");

function showForm() {
  if (form.style.display == "none") {
    form.style.display = "block";
    btn.innerHTML = "Hide Form"
  } else {
    form.style.display = "none";
    btn.innerHTML = "Show Form";
  }
}

function addCar() {
  var category = document.querySelector("#category");
  var make = document.querySelector("#make");
  var model = document.querySelector("#model");
  var price = document.querySelector("#price");
  var image = document.querySelector("#image");

  var img = image.value.split("\\").pop();

  var newCar = {
    make: make.value,
    model: model.value,
    category: category.value,
    price: price.value,
    image: img
  };
  cars.push(newCar);
  updateLocal();
  createHTML();
}

function updateLocal() {
  var carJSON = JSON.stringify(cars)
  localStorage.setItem("theCars",carJSON)
}
