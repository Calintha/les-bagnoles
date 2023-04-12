<style>
    .video-container {
        position: relative;
        overflow: hidden;
        height: fit-content;
        max-height: 74.4px;
        transition: max-height 0.5s ease-in-out;
    }
    .video-container:hover {
        max-height: 100vh;
    }
    @media screen and (max-width: 768px) {
        .video-container {
            max-height: 100vh;
        }
    }

    .video-container video {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .video-overlay {
        position: absolute;
        width: 100%;
        max-width: 100%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #fff;
        margin: 0;
        padding: 1rem 2rem;
        font-weight: bold;
        font-size: 2em;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        transition: max-width 0.5s ease-in-out;
    }
    .video-container:hover .video-overlay {
        max-width: 200px;
    }
</style>
<div class="video-container">
    <video controls>
        <source src="home/video.webp" type="video/webp">
        <source src="home/video.mp4" type="video/mp4">
    </video>
    <div class="video-overlay">Preview</div>
</div>