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
<p>Hope you find your soulmate</p>

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
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>