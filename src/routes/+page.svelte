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

<h1>Katchaaaaaaaaaaaaaaaaaaaaaaw !</h1>
<div class="header">
    <img src="" alt="mcqueen" class="header-image">
    <div class="header-text">
        <h1>Find your soulmate</h1>
        <p>Explore our wide selection of quality cars and find one that fits your needs. We offer flexible financing options and free delivery nationwide.</p>
        <a href="/product/cars" class="btn btn-primary">Shop now</a>
    </div>
</div>
<div class="cards">
    {#each cards as card}
        <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
        />
    {/each}
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        background-color: #f8f9fa;
        width: 100%;
    }
    .header-image {
        width: 50%;
        margin-right: 2rem;
    }
    .header-text {
        width: 50%;
        text-align: left;
    }
    .header-text h1 {
        font-size: 3rem;
    }
    .btn {
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 600;
        color: #fff;
        background-color: #007bff;
        border-radius: 0.25rem;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
    }
    .btn:hover {
        background-color: #0069d9;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>