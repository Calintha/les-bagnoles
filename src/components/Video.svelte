<style>
    .video-container {
        position: relative;
        overflow: hidden;
    }

    .video-container video {
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: cover;
    }

    .video-overlay {
        position: absolute;
        top: 50%;
        right: 0;
        color: #fff;
        margin: 0;
        padding: 1rem 2rem;
        font-weight: bold;
        transform: translateY(-50%);
        font-size: 2em;
        text-align: right;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }
</style>

<div class="video-container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls poster="home/poster.webp" preload="none">
        <source src="home/video.mp4" type="video/mp4">
    </video>
    <div class="video-overlay">Preview</div>
</div>