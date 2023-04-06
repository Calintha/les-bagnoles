<script>
import { onMount } from "svelte";

import CarRepository from '../../../repository/products/car_repository.js';
const cars = CarRepository.findAll();

let Carousel;
onMount(async () => {
const module = await import("../../../components/Carousel.svelte");
Carousel = module.default;
});
</script>

<h1>Discover our vehicules</h1>
<svelte:component this={Carousel} elements={cars}/>

<style>
    h1 {
        text-align: center;
    }
</style>