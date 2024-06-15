<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  createAnimation('svg-attributes', {
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo',
    duration: 3000,
  })
})
</script>

<template>
  <UCard>
    <h1>SVG Attributes Animation</h1>
    <div class="svg-attributes-demo">
      <svg width="200" height="200" viewBox="0 0 128 128">
        <polygon points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100" fill="#3498db" />
      </svg>
    </div>
    <UButton @click="playAnimation('svg-attributes')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('svg-attributes')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('svg-attributes')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('svg-attributes')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.svg-attributes-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>
