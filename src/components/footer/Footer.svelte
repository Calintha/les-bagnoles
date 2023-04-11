<style>
    .footer {
        padding:40px 0;
        background-color: #f8f9fa;
        color: #3B4044;
    }

    .footer ul {
        list-style: none;
        padding: 0;
        text-align: center;
        font-size: 2em;
        line-height: 1.6;
        margin-bottom: 0;
    }

    .footer li {
        padding: 0 10px;
        display: inline-block;
    }

    .footer ul li {
        padding: 0 10px;
    }

    .footer ul li a {
        color: inherit;
        text-decoration: none;
        opacity: 0.8;
    }

    .footer ul li a:hover {
        opacity: 1;
    }

    .footer .copyright {
        margin-top: 15px;
        text-align: center;
        font-size: 0.8em;
        margin-bottom: 0;
        color: #3B4044;
    }
</style>
<script>
    const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Products",
            href: "/product/cars"
        },
        {
            title: "Contact",
            href: "/"
        }
    ];
</script>
<footer>
    <div class="footer">
        <ul class="list">
            {#each links as link}
                <li class="list-item"><a href="{link.href}">{link.title}</a></li>
            {/each}
        </ul>
        <p class="copyright">&copy; 2023 - The Bagnoles !</p>
    </div>
</footer>