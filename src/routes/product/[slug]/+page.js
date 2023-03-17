import CarRepository from '../../../repository/products/car_repository.js';

export const load = ({ params }) => {
    const car = CarRepository.findOneBy([
        { 'slug': params.slug }
    ]);

    return {
        slug: params.slug,
        car: car
    }
}