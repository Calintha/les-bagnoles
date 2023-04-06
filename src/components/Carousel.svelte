<style>
.carousel {
  position: relative;
  height: 60vh;
  width: 100vw;
  margin: 0rem;
  overflow: hidden;
}

#image-track {
  display: flex;
  gap: 4vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0%, -50%); 
  user-select: none; /* -- Prevent image highlighting -- */
}

#image-track > .image-container {
  position: relative;
  width: 60vmin;
  background: linear-gradient(0deg, #677891 0%, #a9b7cc 100%);
  overflow: hidden;
}

#image-track > .image-container {
  position: relative;
  width: 80vmin;
  height: 56vmin;
}
#image-track .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% center;

}

#image-track > .image-container h3 {
  position: absolute;
  bottom: -20px;
  left: -8px;
  white-space: nowrap;
  color: white;
  font-size: 5rem;
  margin: 0;
}
#image-track > .image-container .btn {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}
</style>

<script>
  import { onMount } from 'svelte';
  export let elements = [];
  let mouseDownAt = 0;
  let prevPercentage = 0;
  onMount(() => {
    const track = document.getElementById('image-track');
    const image_containers = track.getElementsByClassName('image-container');
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
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
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

<div class="carousel">
  <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
    {#each elements as element}
      <div class="image-container">
        <img class="image" src={element.image} draggable="false" loading="lazy"/>
        {#if element.name}
          <h3>{element.name}</h3>
        {/if}
        {#if element.slug}
          <a href={`/product/${element.slug}`} class="btn btn-primary">Discover</a>
        {/if}
      </div>
    {/each}
  </div>
</div>