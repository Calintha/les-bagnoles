<style>
.carousel {
  position: relative;
  height: 60vh;
  width: 100vw;
  margin: 0rem;
  overflow: hidden;
  margin-bottom: 2rem;
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
  background-color: #222934;
  overflow: hidden;
}

#image-track > .image-container {
  position: relative;
  width: 70vmin;
  height: 56vmin;
}
#image-track > .image-container .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% center;
  transform: scale(1);
  transition: transform 0.5s;
}
#image-track > .image-container:hover .image {
  transform: scale(1.1);
}

#image-track > .image-container .heading-3 {
  position: absolute;
  bottom: -2px;
  left: -8px;
  white-space: nowrap;
  color: white;
  font-size: 3.5rem;
  margin: 0;
  font-weight: 700;
}
#image-track > .image-container .btn {
  position: absolute;
  bottom: 4rem;
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
    {#each elements as element, index}
      <div class="image-container">
        {#if index == 0}
          <img class="image" src={element.image} alt={element.name} draggable="false"/>
        {:else}
          <img class="image" src={element.image} alt={element.name} draggable="false" loading="lazy"/>
        {/if}
        <p class="heading-3">{element.name}</p>
        {#if element.slug}
          <a href={`/product/${element.slug}`} class="btn btn-primary">Discover</a>
        {/if}
      </div>
    {/each}
  </div>
</div>