<template>
  <div>
    <div>
      <svg width="355" height="233" viewBox="0 0 355 233" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="line" d="M348.7 195.9L261.61 50.01C259.53 46.54 256.57 43.67 253.03 41.7C249.44 39.71 245.4 38.66 241.3 38.66C237.2 38.66 233.13 39.71 229.56 41.7C226.02 43.67 223.06 46.54 220.98 50.01L198.71 87.34L155.17 14.34C153.09 10.87 150.13 8.01 146.58 6.04C143 4.04 138.96 3 134.85 3C130.74 3 126.68 4.05 123.12 6.04C119.57 8.01 116.61 10.87 114.53 14.34L6.15 195.9C4.09 199.33 3.01 203.25 3 207.24C3 211.23 4.08 215.14 6.14 218.59C8.22 222.06 11.18 224.93 14.73 226.9C18.32 228.9 22.35 229.94 26.46 229.94H107.87C140.12 229.94 163.9 216.24 180.27 189.51L220.01 122.96L241.29 87.34L305.17 194.32H220.01L198.71 229.94H328.39C332.51 229.94 336.56 228.89 340.13 226.9C343.67 224.93 346.63 222.06 348.71 218.59C350.77 215.16 351.85 211.24 351.85 207.24C351.85 203.24 350.76 199.35 348.7 195.9ZM148.93 170.62C138.06 187.97 125.71 194.29 106.54 194.29L49.73 194.27L134.89 51.64L177.38 122.96L148.93 170.62Z" fill="#00DC82" fill-opacity="0" stroke="#00DC82" stroke-width="5" stroke-miterlimit="10" />

        <circle cx="190" cy="137" r="20" fill="#D9D9D9" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $anime } = useNuxtApp();

onMounted(() => {
  const tl = $anime.timeline({
    easing: 'easeOutExpo',
    duration: 800,
    loop: true,
    direction: 'alternate',
  });
  tl
    .add({
      targets: '#line',
      strokeDasharray: [$anime.setDashoffset, $anime.setDashoffset],
      strokeDashoffset: [$anime.setDashoffset, 0],
      easing: 'easeInOutSine',
    }).add({
      delay: 200,
      targets: '#line',
      fillOpacity: 1,
    });
});
</script>
