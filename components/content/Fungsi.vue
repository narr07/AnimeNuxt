<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  createAnimation('function-based-params', {
    targets: '.function-based-params-demo .el',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    delay: (el, i) => i * 100,
    endDelay: (el, i, l) => (l - i) * 100,
    easing: 'easeInOutQuad',
    duration: 2000,
  })
})
</script>

<template>
  <UCard>
    <h1>Function-Based Parameters Animation</h1>
    <div class="function-based-params-demo">
      <div class="el">
        1
      </div>
      <div class="el">
        2
      </div>
      <div class="el">
        3
      </div>
      <div class="el">
        4
      </div>
      <div class="el">
        5
      </div>
    </div>
    <UButton @click="playAnimation('function-based-params')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('function-based-params')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('function-based-params')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('function-based-params')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.function-based-params-demo {
  display: flex;
  gap: 10px;
}
.function-based-params-demo .el {
  width: 50px;
  height: 50px;
  background-color: #8e44ad;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
}
</style>
