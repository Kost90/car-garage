import api from '../dvla/axiosInstance';
import { carsImagesApi } from '../../../constants/dvlaApiUrls';

export class DvlaApi {
  static async getCars(initialVehicles) {
    try {
      const results = await Promise.allSettled(
        initialVehicles.map((car) => api.post('/vehicles', { registrationNumber: car.registrationNumber })),
      );

      const successfulWithoutImage = [];
      const failed = [];

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          successfulWithoutImage.push(result.value.data);
        } else {
          failed.push({
            registrationNumber: initialVehicles[index].registrationNumber,
            error: result.reason.response?.status || result.reason.message,
          });
        }
      });

      const successful = await Promise.all(
        successfulWithoutImage.map(async (car) => {
          const image = await this.getCarImage(car.make, car.yearOfManufacture);

          return {
            ...car,
            image,
          };
        }),
      );

      return { successful, failed };
    } catch (error) {
      throw new Error('Failed to load vehicles. Please try again later.');
    }
  }

  static async getCar(plateNumber) {
    try {
      const car = await this.fetchAndAttachImage(plateNumber);

      return car;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(message);
    }
  }

  static async addCar(plateNumber) {
    try {
      const car = await this.fetchAndAttachImage(plateNumber);

      return car;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(message);
    }
  }

  static async getCarImage(make, year) {
    try {
      const query = `${make} ${year}`;
      const url = `${carsImagesApi}${encodeURIComponent(query)}&gsrlimit=1&gsrnamespace=6&iiprop=url`;

      const res = await fetch(url);
      const data = await res.json();

      const pages = data.query?.pages;

      if (pages) {
        const first = Object.values(pages)[0];

        return first.imageinfo?.[0]?.url || null;
      }

      return null;
    } catch (err) {
      console.error('Error fetching car image:', err);

      return null;
    }
  }

  static async fetchAndAttachImage(registrationNumber) {
    const response = await api.post('/vehicles', { registrationNumber });
    const car = response.data;
    const image = await this.getCarImage(car.make, car.yearOfManufacture);

    return { ...car, image };
  }
}
