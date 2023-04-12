<style>
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
    }

    .video-container video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .video-overlay {
        position: absolute;
        top: 50%;
        right: 0;
        color: #fff;
        margin: 0;
        padding: 10px;
        font-weight: bold;
        transform: translateY(50%);
        font-size: 2em;
        text-align: right;
        margin-right: 15px;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }
</style>
<div class="video-container">
    <video controls>
        <source src="home/video.webp" type="video/webp">
        <source src="home/video.mp4" type="video/mp4">
    </video>
    <div class="video-overlay">Calvin</div>
</div>