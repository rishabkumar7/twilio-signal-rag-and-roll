const cars = [
  { make: "Toyota", model: "Corolla", size: "Economy" },
  { make: "Honda", model: "Civic", size: "Economy" },
  { make: "Tesla", model: "Model 3", size: "Sedan" },
  { make: "Toyota", model: "Camry", size: "Sedan" },
  { make: "Jeep", model: "Grand Cherokee", size: "SUV" },
  { make: "Tesla", model: "Model Y", size: "SUV" },
  { make: "BMW", model: "5 Series", size: "Luxury" },
  { make: "Mercedes", model: "C-Class", size: "Luxury" },
  { make: "Tesla", model: "Model S", size: "Electric Vehicle" },
  { make: "Nissan", model: "Leaf", size: "Electric Vehicle" },
  { make: "Chrysler", model: "Pacifica", size: "Minivan" },
  { make: "Honda", model: "Odyssey", size: "Minivan" },
];

//export a function that returns a random sample of cars, no duplicates
export function getAvailableCars() {
  const randomCars = [];
  const carSet = new Set();
  while (randomCars.length < 5) {
    const randomIndex = Math.floor(Math.random() * cars.length);
    const car = cars[randomIndex];
    if (!carSet.has(car)) {
      randomCars.push(car);
      carSet.add(car);
    }
  }
  return randomCars;
}
