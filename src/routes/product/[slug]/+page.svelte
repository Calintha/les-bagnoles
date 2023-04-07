<script>
import { onMount } from "svelte";
import Marquee from "../../../components/Marquee.svelte";
export let data;

const car = data.car;
console.log(car);

let Carousel;
onMount(async () => {
    const module = await import("../../../components/Carousel.svelte");
    Carousel = module.default;
});
</script>

<svelte:head>
    <title>The Bagnoles - {car.name}</title> 
</svelte:head>

{#if car}
    <div class="header">
        <div class=header-image-container>
            <img src="{car.image}" alt="{car.name}" class="header-image" loading="lazy">
        </div>
        <div class="header-text">
            <h1>{car.name}</h1>
            <h2>{car.price} $</h2>
            <p>{car.description}</p>
        </div>
    </div>
    {#if car.categories.length}
        <Marquee content={car.categories.join(' - ')}/>
    {/if}
    {#if car.image_galery.length}

        <h2 style="text-align: center; padding: 4rem 0;">Image galery</h2>
        <svelte:component this={Carousel} elements={car.image_galery}/>
    {/if}
{:else}
    <h1>Car not found</h1>
    <p>Sorry, we couldn't find the car you were looking for.</p>
    <a href="/product/cars">Back to cars</a>
{/if}


<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
        align-items: center;
        background-color: #f8f9fa;
        padding: 8rem 4rem;
    }

    @media screen and (max-width: 768px) {
        .header {
            padding: 2rem;
        }
    }

    .header-image-container {
        flex: 1;
        min-width: 300px;
    }
    .header-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: slide-in 1s forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
    .header-text {
        flex: 1;
        text-align: left;
        min-width: 300px;
    }
    .header-text h1 {
        font-size: 3rem;
    }
</style>