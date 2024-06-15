<script setup lang="ts">
import { onMounted } from 'vue'
import { useNuxtApp } from '#app'

const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.function-based-values-demo .el',
    translateX: el => el.getAttribute('data-x'),
    translateY: (el, i) => 50 + (-50 * i),
    scale: (el, i, l) => (l - i) + 0.25,
    rotate: () => $anime.random(-360, 360),
    borderRadius: () => ['50%', `${$anime.random(10, 35)}%`],
    duration: () => $anime.random(1200, 1800),
    delay: () => $anime.random(0, 400),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
  })
})
</script>

<template>
  <UCard>
    <h1>Function-Based Property Values Animation</h1>
    <div class="function-based-values-demo">
      <div class="el" data-x="100">
        1
      </div>
      <div class="el" data-x="200">
        2
      </div>
      <div class="el" data-x="300">
        3
      </div>
      <div class="el" data-x="400">
        4
      </div>
      <div class="el" data-x="500">
        5
      </div>
    </div>
    <UButton @click="$anime({ targets: '.function-based-values-demo .el', translateX: 250 })">
      Play
    </UButton>
    <UButton @click="$anime({ targets: '.function-based-values-demo .el', translateX: 0 })">
      Pause
    </UButton>
    <UButton @click="$anime({ targets: '.function-based-values-demo .el', translateX: 250 })">
      Restart
    </UButton>
    <UButton @click="$anime({ targets: '.function-based-values-demo .el', translateX: 0 })">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.function-based-values-demo {
  display: flex;
  gap: 10px;
}
.function-based-values-demo .el {
  width: 50px;
  height: 50px;
  background-color: #1abc9c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
}
</style>
