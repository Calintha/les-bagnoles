<script>
export let data;

const car = data.car;
</script>

{#if car}
    <h1>{car.name}</h1>
    <p>{car.description}</p>
    <p>{car.price} €</p>
{:else}
    <h1>Car not found</h1>
    <p>Sorry, we couldn't find the car you were looking for.</p>
    <a href="/product/cars">Back to cars</a>
{/if}