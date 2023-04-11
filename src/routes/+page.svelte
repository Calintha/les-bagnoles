<script>
    import Card from '../components/Card.svelte';

    let cards = [
        {
            title: 'Verify seller',
            description: 'For a safe purchase, identify the validated and certified sellers by The Bagnols',
            icon: `<svg width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6l1.45 2.4ZM12 12Zm-1.05 3.55L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z"/></svg>`
        },
        {
            title: 'History details',
            description: 'Trace with confidence the history of each vehicle',
            icon: `<svg width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11.11V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.63-2-4.89M12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 19V5h2v2h10V5h2v4.68c-.91-.43-1.92-.68-3-.68H7v2h4.1c-.6.57-1.06 1.25-1.42 2H7v2h2.08c-.05.33-.08.66-.08 1c0 1.08.25 2.09.68 3H5m11 2c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5v4.25Z"/></svg>`
        },
        {
            title: 'Delivery',
            description: 'Your new vehicle delivered to your door thanks to our delivery service',
            icon: `<svg width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm11 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6ZM14 8h5l4 5v5h-3"/></svg>`
        },
        {
            title: 'Assurance',
            description: 'Protect your future vehicle by simulating your insurance for free',
            icon: `<svg width="40" height="40" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M6 9.256L24.009 4L42 9.256v10.778A26.316 26.316 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029V9.256Z"/><path stroke-linecap="round" d="m15 23l7 7l12-12"/></g></svg>`
        }
    ]
</script>

<svelte:head>
    <title>The Bagnoles - Home</title> 
</svelte:head>

<div class="header">
    <div class=header-image-container>
        <img src="/products/cars/mcqueen/mcqueen.webp" alt="mcqueen" class="header-image">
    </div>
    <div class="header-text">
        <h1>Katchaaaaaaaw !</h1>
        <h2>Find your soulmate</h2>
        <p>Explore our wide selection of quality cars and find one that fits your needs. We offer flexible financing options and free delivery nationwide.</p>
        <a href="/product/cars" class="btn btn-primary">Shop now</a>
    </div>
</div>
<section>
    <h2>Why buy from us ?</h2>
    <div class="cards">
        {#each cards as card}
            <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
            />
        {/each}
    </div>
</section>
<div class="repair">
    <img src="/home/repair.webp" alt="guedo" loading="lazy">
    <div class="repair-text">
        <h2>Repair</h2>
        <p>Our team of experts will take care of your vehicle and make it look like new.</p>
    </div>
</div>
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }

    .repair {
        position: relative;
        overflow: hidden;
    }

    .repair img {
        width: 100%;
    }

    .repair-text {
        position: absolute;
        top: 50%;
        right: 0;
        color: #fff;
        margin: 0;
        padding: 10px;
        font-weight: bold;
        transform: translateY(-50%);
        font-size: 1.5em;
        text-align: right;
        margin-right: 15px;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        right: 0;
    }

    @media only screen and (max-width: 768px) {
    .repair-text {
        font-size: 1.2em;
        padding: 5px;
        margin-right: 10px;
    }
    }
    
    @media only screen and (max-width: 576px) {
    .repair-text {
        font-size: 1em;
        padding: 5px;
        margin-right: 5px;
    }
}
</style>