<script>
    import Card from '../components/Card.svelte';

    let cards = [
        {
            title: 'Verify seller',
            description: 'For a safe purchase, identify the validated and certified sellers by The Bagnols',
            icon: 'none'
        },
        {
            title: 'History details',
            description: 'Trace with confidence the history of each vehicle',
            icon: 'none'
        },
        {
            title: 'Delivery',
            description: 'Your new vehicle delivered to your door thanks to our delivery service',
            icon: 'none'
        },
        {
            title: 'Assurance',
            description: 'Protect your future vehicle by simulating your insurance for free',
            icon: 'none'
        }
    ]
</script>

<svelte:head>
    <title>The Bagnoles - Home</title> 
</svelte:head>

<div class="header">
    <div class=header-image-container>
        <img src="/mcqueen.png" alt="mcqueen" class="header-image" loading="lazy">
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
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
</style>