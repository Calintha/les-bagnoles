<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/product/cars">Products</a></li>
        <li><a href="/profile">Profile</a></li>
    </ul>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: #f8f9fac0;
        padding: 0.5rem 1rem;
        backdrop-filter: blur(5px);
    }
    nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        align-items: center;
    }
    nav ul li {
        list-style: none;
    }
    nav ul li a {
        color: #000;
        text-decoration: none;
    }
</style>