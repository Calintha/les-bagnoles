<script>
import { onMount } from "svelte";
import Marquee from "../../../components/Marquee.svelte";
export let data;

const car = data.car;

let Carousel;
onMount(async () => {
    const module = await import("../../../components/Carousel.svelte");
    Carousel = module.default;
});

const openDialog = () => {
    let dialog = document.getElementById('buy_dialog');
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
    }
}

const closeDialog = () => {
    let dialog = document.getElementById('buy_dialog');
    if (typeof dialog.close === "function") {
        dialog.close();
    } else {
        console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
    }
}

const checkClick = (event) => {
    let dialog = document.getElementById('buy_dialog');
    if (event.target === dialog) {
        dialog.close();
    }
}

const submitBuy = async (event) => {
    event.preventDefault();

    let dialog = document.getElementById('buy_dialog');
    dialog.innerHTML = '<h2 style="text-align: center; padding: 4rem 0;">Processing...</h2>';

    setTimeout(() => {
        dialog.innerHTML = '<h2 style="text-align: center; padding: 4rem 0;">Thank you for your purchase!</h2>';
    }, 3000);
};

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
            <h2>{car.price} USD</h2>
            <p>{car.description}</p>
            <div class="characteristic">
                <h2>1 523 kg</h2>
                <h2>4,5g/km Émissions CO2</h2>
                <h2>9,6s Accélération (0-100 km/h)</h2>
            </div>
            <button class="btn" on:click={openDialog}>Buy this car</button>
        </div>
    </div>
    {#if car.categories.length}
        <Marquee content={car.categories.join(' - ')}/>
    {/if}
    {#if car.image_galery.length}
        <h2 style="text-align: center; padding: 4rem 0;">Image galery</h2>
        <svelte:component this={Carousel} elements={car.image_galery}/>
    {/if}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <dialog id="buy_dialog" on:click={checkClick}>
        <form method="buy_form" on:submit={submitBuy}>
            <div class="dialog_title">
                <h2>Pay invoice</h2>
                <button on:click={closeDialog} class=btn_no_style>
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </button>
            </div>

            <div class="form_row">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required>
            </div>

            <div class="form_row">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" placeholder="242 Rue du Faubourg Saint-Antoine, Paris" required>
            </div>

            <div class="form_row">
                <label for="card">Credit card number</label>
                <input type="text" id="card" name="card" placeholder="1111-2222-3333-4444" required>
            </div>

            <div class="form_row">
                <label for="exp">Expiration date</label>
                <input type="text" id="exp" name="exp" placeholder="MM/YY" required>
            </div>
            
            <div class="form_row">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="123" required>
            </div>
            
            <menu>
                <button id="confirmBtn" value="default" class="btn">{car.price} USD</button>
            </menu>
        </form>
    </dialog>
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
            transform: translateX(-100%) scale(0.6);
        }
        to {
            transform: translateX(0) scale(1.3);
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

    dialog {
        width: 100%;
        max-width: 400px;
        padding: 2rem;
        border: none;
        background-color: #f8f9fa;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        box-sizing: border-box;
    }
    dialog::backdrop {
        backdrop-filter: blur(5px);
    }

    .dialog_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    dialog form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    form .form_double_row {
        display: flex;
        flex: 1;
        gap: 1rem;
    }
    form .form_row {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.5rem;
    }
    form label {
        font-size: 1rem;
        font-weight: 600;
    }
    form input {
        padding: 0.5rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        font-size: 1rem;
    }

    dialog menu {
        padding: 0;
    }
    dialog menu button {
        width: 100%;
    }
    .btn_no_style {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .characteristic {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        .characteristic {
            flex-direction: column;
            align-items: flex-start;
        }

        .characteristic h2 {
            margin-bottom: 10px;
        }
    }
</style>