import CARS_DATA from '../../domain/products/cars.json' assert { type: 'json' };
import { Car } from '../../entity/car.js';

const CARS = CARS_DATA.map((car) => new Car(car));

class CarRepository {
    find = (id) => {
        return CARS.find((car) => car.id === id);
    }

    findBy = (options = []) => {
        return CARS.filter((car) => {
            let result = true;

            options.forEach((option) => {
                const key = Object.keys(option)[0];
                const value = option[key];

                if (car[key] !== value) {
                    result = false;
                }
            });

            return result;
        });
    }

    findOneBy = (options = []) => {
        const result = this.findBy(options);
        return result.length ? result[0] : null;
    }

    findAll = () => {
        return CARS;
    }
}

export default new CarRepository();