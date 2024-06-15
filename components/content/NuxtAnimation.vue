<template>
  <div>
    <div class="w-full h-full flex items-center justify-center pt-10">
      <svg class="h-32 w-auto" viewBox="0 0 355 233" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="line" d="M348.7 195.9L261.61 50.01C259.53 46.54 256.57 43.67 253.03 41.7C249.44 39.71 245.4 38.66 241.3 38.66C237.2 38.66 233.13 39.71 229.56 41.7C226.02 43.67 223.06 46.54 220.98 50.01L198.71 87.34L155.17 14.34C153.09 10.87 150.13 8.01 146.58 6.04C143 4.04 138.96 3 134.85 3C130.74 3 126.68 4.05 123.12 6.04C119.57 8.01 116.61 10.87 114.53 14.34L6.15 195.9C4.09 199.33 3.01 203.25 3 207.24C3 211.23 4.08 215.14 6.14 218.59C8.22 222.06 11.18 224.93 14.73 226.9C18.32 228.9 22.35 229.94 26.46 229.94H107.87C140.12 229.94 163.9 216.24 180.27 189.51L220.01 122.96L241.29 87.34L305.17 194.32H220.01L198.71 229.94H328.39C332.51 229.94 336.56 228.89 340.13 226.9C343.67 224.93 346.63 222.06 348.71 218.59C350.77 215.16 351.85 211.24 351.85 207.24C351.85 203.24 350.76 199.35 348.7 195.9ZM148.93 170.62C138.06 187.97 125.71 194.29 106.54 194.29L49.73 194.27L134.89 51.64L177.38 122.96L148.93 170.62Z" fill-opacity="0" fill="#00DC82" stroke="#00DC82" stroke-width="5" stroke-miterlimit="10" />
        <path id="nuxt" d="M45 159.995H62.9537V120.019C62.9537 108.579 61.7562 97.1402 61.7562 97.1402L62.8145 99.4856C64.4841 103.116 67.9635 110.406 72.0497 117.379L96.5847 159.993H115.855V72H97.7823L97.784 112.728C97.834 123.916 98.9789 134.979 98.9789 134.979L98.0741 132.94C96.4767 129.4 92.9304 121.804 88.8058 114.614L64.1495 72H45V159.995ZM172.793 96.6384V131.333C172.793 139.378 167.646 145.412 160.345 145.412C153.524 145.412 148.735 139.881 148.735 132.213V96.6384H132.099V136.109C132.099 150.566 140.956 161 154.48 161C162.739 161 169.441 157.228 172.792 151.195V159.994H189.549V96.6384H172.793ZM238.275 127.059L258.505 96.6384H240.189L229.18 113.357L218.166 96.6384H199.974L220.204 126.934L198.42 159.994H216.255L229.298 140.51L242.223 159.994H259.939L238.275 127.059ZM277.207 96.6384H265.596V111.22H277.207V136.989C277.207 151.698 286.183 159.994 300.068 159.994H310V145.287H302.342C296.956 145.287 293.842 142.395 293.842 136.235V111.22H310V96.6376H293.842V77.9083H277.208L277.207 96.6384Z" fill="#00DC82" />
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
    })
    .add({
      targets: '#line',
      fillOpacity: [0, 1],
    }) // Relative offset
    .add({
      targets: '#line',
      scale: [1, 0],
      fillOpacity: [0],
      transformOrigin: 'center center',
    })
    .add({
      targets: '#nuxt',
      duration: 1000,
      scale: [0, 1],
      transformOrigin: 'center center',
    }, '+=500') // Relative offset to wait for previous animation to end
    .add({
      targets: '#nuxt',
      scale: 1,
      duration: 1500, // Hold scale at 1
      easing: 'linear', // No easing to hold the scale
    });
});
</script>

<style scoped>
#nuxt,
#line {
  transform-origin: center center;
}
</style>
