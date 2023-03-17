<style>

  #image-track {
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    user-select: none; /* -- Prevent image highlighting -- */
    overflow-x: auto;
  }

  .image {
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 100% center;
  }
</style>

<script>
  import { onMount } from 'svelte';
  export let images = [];

  let mouseDownAt = 0;
  let prevPercentage = 0;

  onMount(() => {
    const track = document.getElementById('image-track');
    const images = track.getElementsByClassName('image');

    const handleOnDown = (e) => mouseDownAt = e.clientX;

    const handleOnUp = () => {
      mouseDownAt = 0;
      prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (mouseDownAt === 0) return;

      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -70;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -300);

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: 'forwards' });

      for (const image of images) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: 'forwards' });
      }
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
  });
</script>


<div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
  {#each images as image}
  <a href="{image.link}">
    <img class="image" src={image.src} draggable="false" />
  </a>
  {/each}
</div>