export const checkIfExistCar = (plateNumber, cars) => {
  const existingCars = cars.map((car) => car.registrationNumber.toLowerCase());

  return existingCars.includes(plateNumber.toLowerCase());
};
