<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  createAnimation('css-transforms', {
    targets: '.css-transforms-demo .el',
    translateX: 250,
    scale: 2,
    rotate: '1turn',
    duration: 2000,
    easing: 'easeInOutQuad'
  })
})
</script>

<template>
  <UCard>
    <h1>CSS Transforms Animation</h1>
    <div class="css-transforms-demo">
      <div class="el">Animate Me</div>
    </div>
    <UButton @click="playAnimation('css-transforms')">Play</UButton>
    <UButton @click="pauseAnimation('css-transforms')">Pause</UButton>
    <UButton @click="restartAnimation('css-transforms')">Restart</UButton>
    <UButton @click="reverseAnimation('css-transforms')">Reverse</UButton>
  </UCard>
</template>

<style scoped>
.css-transforms-demo .el {
  position: relative;
  background-color: #e74c3c;
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.5s;
}
</style>
