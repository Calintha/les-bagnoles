<style>
.card {
    min-width: 20%;
    max-width: 300px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.card-body {
    padding: 1rem;
    text-align: center;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.card-text {
    font-size: 1rem;
    line-height: 1.5;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    font-size: 2rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 50%;
    margin: 2rem auto;
}
</style>

<script>
    export let title;
    export let description;
    export let icon;
</script>

<div class="card">
    <div class="card-body">
        <div class="d-flex">
            <div class="icon">{icon}</div>
            <div class="content">
                <h2 class="card-title">{title}</h2>
                <p class="card-text">{description}</p>
            </div>
        </div>
    </div>
</div>