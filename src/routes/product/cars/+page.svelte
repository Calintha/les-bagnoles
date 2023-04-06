<script>
import CarRepository from '../../../repository/products/car_repository.js';

const cars = CarRepository.findAll();
</script>
<h1>Shop</h1>

{#each cars as car}
    <h2>{car.name}</h2>
    <p>{car.description}</p>
    <p>{car.price} €</p>
{/each}

