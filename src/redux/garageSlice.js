import { createSlice } from '@reduxjs/toolkit';
import { initialVehicles } from '../data/initialVehicles';

const initialState = {
  cars: initialVehicles,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    addCar: (state, action) => {
      const newCar = action.payload;
      const exists = state.cars.some((car) => car.registrationNumber === newCar.registrationNumber);
      if (!exists) {
        state.cars.push(newCar);
      }
    },
    removeCar: (state, action) => {
      const registrationNumber = action.payload;
      state.cars = state.cars.filter((car) => car.registrationNumber !== registrationNumber);
    },
  },
});

export const { addCar, removeCar } = garageSlice.actions;

export const selectAllCars = (state) => state.garage.cars;
export const selectCarByRegNumber = (state, regNumber) =>
  state.garage.cars.find((car) => car.registrationNumber === regNumber);

export default garageSlice.reducer;
