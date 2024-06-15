<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  createAnimation('css-properties', {
    targets: '.css-prop-demo .el',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    duration: 2000,
  })
})
</script>

<template>
  <UCard>
    <h1>CSS Properties Animation</h1>
    <div class="css-prop-demo">
      <div class="el">
        Animate Me
      </div>
    </div>
    <UButton @click="playAnimation('css-properties')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('css-properties')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('css-properties')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('css-properties')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.css-prop-demo .el {
  position: relative;
  background-color: #3498db;
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 0;
  transition: all 0.5s;
}
</style>
