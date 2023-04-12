<nav>
    <a href="/" class="menu-title" aria-label="The Bagnoles">
        <svg width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6"/><path d="M11 9c2.489.108 4.489.108 6 0m0-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6 9l-3.5-1.5M11 13l2.5 3m-5 0l2.5-3m0 0l3.5-1.5M11 9v4"/></g></svg>
        <p>The Bagnoles</p>
    </a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/product/cars">Products</a></li>
    </ul>
</nav>

<style>
    .menu-title {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: x-large;
        text-decoration: none;
        color: black;
    }
    .menu-title p {
        margin: 0;
    }
    @media screen and (max-width: 450px) {
        .menu-title p {
            display: none;
        }
    }
    nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        z-index: 1;
        background-color: #f8f9fac0;
        padding: 0.5rem 2rem;
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